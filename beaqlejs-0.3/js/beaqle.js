/*
    BeaqleJS - HTML5 and JavaScript framework for listening tests
    Copyright (C) 2011-2014  Sebastian Kraft

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>
*/

// Enable JavaScript strict mode
"use strict";

// some linter configs
/*jshint browser: true */
/*jshint devel: true */
/*globals $:false */

// ###################################################################
// Audio pool object. Creates and manages a set of <audio> tags.

    // constructor
    var AudioPool = function (PoolID) {
        this.NumPlayers = 0;
        this.NumUsed = 0;
        this.LoopAudio = 0;
        this.LoopFade = false;
        this.AutoReturn = true;
        this.ABPos = [0, 100];
        this.PoolID = PoolID;
        this.IDPlaying = -1;
        this.fadeInTime  = 0.03;
        this.fadeOutTime = 0.01;
        this.fadeDelay   = 0.01;
        this.lastAudioPosition = 0;
        this.positionUpdateInterval = 0.005;

        // web audio is only supported for same origin
        switch(window.location.protocol) {
           case 'http:':
           case 'https:':
            // check web audio support
             try {
               var genContextClass = (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext);
               this.waContext = new genContextClass();
               this.gainNodes = new Array();
             } catch(e) {
               // API not supported
               this.waContext = false;
             }
             break;
           case 'file:':
             this.waContext = false;
             break;
        }
        // IE does not support the WebAudioAPI
        if (clientIsIE() || clientIsSafari())
            this.waContext = false;

        // Firefox needs a longer delay before we start a fading curve,
        // otherwise the fading is not recognized
        if (clientIsFirefox())
            this.fadeDelay = 0.05;

        // set to false to manually disable WebAudioAPI support
        //this.waContext = false;

        // setup regular callback timer to check current playback position
        var _this = this;
        setInterval(this.loopCallback, this.positionUpdateInterval*1000, _this);

    }

    // insert audio pool into DOM
    AudioPool.prototype.register = function() {
        $('<div id="'+this.PoolID+'"></div>').appendTo('body');
    }

    // callback for timeUpdate event
    AudioPool.prototype.loopCallback = function(_this) {
        
        if (_this.IDPlaying!==-1) {
       
            var audiotag = $('#'+_this.PoolID+' > #audio'+_this.IDPlaying).get(0);
            
            // calculate progress including a look ahead for fade out or loop
            var progress = 0;
            progress = (audiotag.currentTime+_this.positionUpdateInterval+_this.fadeOutTime*2) / audiotag.duration * 100.0;

            // if end is reached ...
            if ((progress >= _this.ABPos[1]) && (!_this.LoopFade)) {
                if (_this.LoopAudio == true) {
                    _this.loopReturn();
                } else {
                    _this.pause();
                }
            }
        }
    }

    // ---------------------------------------------------------
    // overwrite these callbacks events after instantiation

    // callback for time update event
    AudioPool.prototype.onTimeUpdate = function(e) {}    
    
    // callback for error event
    AudioPool.prototype.onError = function(e) {}
    
    // callback for error event
    AudioPool.prototype.onDataLoaded = function(e) {}

    // Callback for audio paused
    AudioPool.prototype.onAudioPaused = function(e) {}   
    // ---------------------------------------------------------


    // clear all files
    AudioPool.prototype.clear = function(){
        if (this.waContext!==false) {
            this.gainNodes = new Array();
            // maybe we also have to remove the connections?!
        }

        if (clientIsChrome()) {
            //fixes bug in chromium. Otherwise old connections are not freed and maximum number of connections is reached soon
            //https://code.google.com/p/chromium/issues/detail?id=234779
            $('#'+this.PoolID+' >.audiotags').prop('src', false);
        }

        $('#'+this.PoolID+' >.audiotags').remove();
    }
    
    // add new file to pool
    AudioPool.prototype.addAudio = function(path, ID){

        
    
        var audiotag = document.createElement("audio");

        audiotag.setAttribute('src', path);
        audiotag.setAttribute('class', 'audiotags');
        audiotag.setAttribute('id', "audio"+ID)

        if (this.waContext!==false) {
            var gainNode = this.waContext.createGain();
            var source = this.waContext.createMediaElementSource(audiotag);
            source.connect(gainNode);
            gainNode.connect(this.waContext.destination);
            gainNode.gain.value = 0.0000001;  // fixes https://bugzilla.mozilla.org/show_bug.cgi?id=1213313
            gainNode.gain.setValueAtTime(0.0000001, this.waContext.currentTime);
            this.gainNodes[ID] = gainNode;
        }
        
        $(audiotag).off();
        
        // external event handlers
        $(audiotag).on("timeupdate", this.onTimeUpdate);
        $(audiotag).on("loadeddata", this.onDataLoaded);
        $(audiotag).on("error", this.onError);

        $('#'+this.PoolID).append(audiotag);

        if (!clientIsChrome()) {
            audiotag.setAttribute('preload', 'auto');
        } else {
            //preload=none fixes bug in chromium. Otherwise old connections are not freed and maximum number of connections is reached soon
            //https://code.google.com/p/chromium/issues/detail?id=234779
            audiotag.setAttribute('preload', 'none');
            audiotag.load();
        }
    }
    
    // play audio with specified ID
    AudioPool.prototype.play = function(ID){
        var audiotag = $('#'+this.PoolID+' > #audio'+ID).get(0);
        
        if ((this.AutoReturn===false) &&
            (this.lastAudioPosition + this.fadeDelay <= (this.ABPos[1] / 100 * audiotag.duration)) &&
            (this.lastAudioPosition >= (this.ABPos[0] / 100 * audiotag.duration)))
                audiotag.currentTime = this.lastAudioPosition;
        else
            audiotag.currentTime = 0.000001 + this.ABPos[0] / 100.0 * audiotag.duration;

        if (this.waContext!==false) {
            var loopLen = (this.ABPos[1] - this.ABPos[0]) / 100.0 * audiotag.duration;
            if (loopLen > this.fadeOutTime*2 + this.positionUpdateInterval*2) {
                this.gainNodes[ID].gain.cancelScheduledValues(this.waContext.currentTime);
                this.gainNodes[ID].gain.value = 0.0000001;  // fixes https://bugzilla.mozilla.org/show_bug.cgi?id=1213313
                this.gainNodes[ID].gain.setValueAtTime(0.0000001, this.waContext.currentTime);                
                this.gainNodes[ID].gain.setTargetAtTime(1.0, this.waContext.currentTime + this.fadeDelay, this.fadeInTime);
                this.LoopFade = false;
                audiotag.play();
            }
        } else {
            audiotag.play();
        }
        
        this.IDPlaying = ID;
    }

    // return to loop begin
    AudioPool.prototype.loopReturn = function() { 

        if (this.waContext!==false) {
            // fade out
            this.gainNodes[this.IDPlaying].gain.cancelScheduledValues(this.waContext.currentTime);
            this.gainNodes[this.IDPlaying].gain.setTargetAtTime(0.0, this.waContext.currentTime + this.fadeDelay, this.fadeOutTime);
            this.LoopFade = true;

            var audiotag = $('#'+this.PoolID+' > #audio'+this.IDPlaying).get(0);
            var currID = this.IDPlaying;
            var _this  = this;
            // wait till fade out is done
            setTimeout( function(){
                    _this.LoopFade = false;
                    audiotag.currentTime = 0.000001 + _this.ABPos[0] / 100.0 * audiotag.duration;
                    _this.gainNodes[_this.IDPlaying].gain.cancelScheduledValues(_this.waContext.currentTime);
                    _this.gainNodes[_this.IDPlaying].gain.setTargetAtTime(1.0, _this.waContext.currentTime + _this.fadeDelay, _this.fadeInTime);
                },
                (_this.fadeOutTime*2.0 + _this.fadeDelay)*1000.0 + 5.0
            );
        } else {
            // return to the start marker
            var audiotag = $('#'+this.PoolID+' > #audio'+this.IDPlaying).get(0);
            audiotag.currentTime = 0.000001 + this.ABPos[0] / 100.0 * audiotag.duration;
            audiotag.play();
        }
    }
    
    // pause currently playing audio
    AudioPool.prototype.pause = function() {   

        if (this.IDPlaying!==-1) {
 
            var audiotag = $('#'+this.PoolID+' > #audio'+this.IDPlaying).get(0);
            this.lastAudioPosition = audiotag.currentTime;
            this.onAudioPaused(this.IDPlaying, this.lastAudioPosition)
            if ((this.waContext!==false) && (!audiotag.paused)) {
                this.gainNodes[this.IDPlaying].gain.cancelScheduledValues(this.waContext.currentTime);
                this.gainNodes[this.IDPlaying].gain.setTargetAtTime(0.0, this.waContext.currentTime + this.fadeDelay, this.fadeOutTime );

                var _this  = this;
                var prevID = this.IDPlaying;
                setTimeout( function(){if (_this.IDPlaying!==prevID) audiotag.pause();}, (_this.fadeOutTime*2.0 + _this.fadeDelay)*1000.0 + 5.0);
            } else {
                audiotag.pause();
            }
            this.IDPlaying = -1;
        }
    }

    // set volume of <audio> tags
    AudioPool.prototype.setVolume = function(vol) {
        var vol = $('#VolumeSlider').slider('option', 'value') / 100;
        
        var audioTags = $('#'+this.PoolID+' > audio');    
        for (var i = 0; i<audioTags.length; i++) { 
            audioTags[i].volume = vol;
        }
    }
    
    // set loop mode
    AudioPool.prototype.setLooped = function(loop) {
            this.LoopAudio = loop;
    }
    
    // toggle loop mode
    AudioPool.prototype.toggleLooped = function() {
        this.LoopAudio = !this.LoopAudio;
    }

    // set auto return mode
    AudioPool.prototype.setAutoReturn = function(autoReturn) {
            this.AutoReturn = autoReturn;
    }

    // toggle auto return mode
    AudioPool.prototype.toggleAutoReturn = function() {
        this.AutoReturn = !this.AutoReturn;
    }


// ###################################################################
// some helper functions

// logarithm to base 10
function log10(val) {
    return Math.log(val) / Math.log(10);
}

// check for Internet Explorer version
function clientIsIE() {
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){ //test for MSIE x.x;
        var ieversion=new Number(RegExp.$1) // capture x.x portion and store as a number
        return ieversion;
    }
    return 0;
}

// check for Firefox
function clientIsFirefox() {
    return typeof InstallTrigger !== 'undefined';
}

// check for Google Chrome/Chromium
function clientIsChrome() {
    return !!window.chrome && !clientIsOpera();
}

// check for Apple Safari
function clientIsSafari() {
    return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
}

// check for Opera
function clientIsOpera() {
    return !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
}

// get date and time formatted as YYYMMDD-hhmmss
function getDateStamp() {
    var date = new Date();
    function pad(num) {
        num = num + '';
        return num.length < 2 ? '0' + num : num;
    }
    return date.getFullYear() + 
        pad(date.getMonth() + 1) +
        pad(date.getDate()) + '-' +
        pad(date.getHours()) + 
        pad(date.getMinutes()) +
        pad(date.getSeconds());
}

// provide a virtual download to text file with a specified file name
function saveTextAsFile(txt, fileName)
{
	var fileBlob = new Blob([txt], {type:'text/plain'});

	var downloadLink = document.createElement("a");
	downloadLink.download = fileName;
	downloadLink.innerHTML = "Download File";

    // safari does not download text files but tries to open them in the browser
    // so let's at least open a new window for that
    if (clientIsSafari())
        downloadLink.target = "_blank";

	downloadLink.href = window.URL.createObjectURL(fileBlob);
	downloadLink.onclick = function (event) {document.body.removeChild(event.target);};
	downloadLink.style.display = "none";

	// Firefox requires the link to be added to the DOM
	// before it can be clicked.
	document.body.appendChild(downloadLink);

	downloadLink.click();
}

// shuffle array entries using the Fisher-Yates algorithm
// implementation inspired by http://bost.ocks.org/mike/shuffle/
function shuffleArray(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}
function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            var c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

function saveTestState(testState) {
    var testStateJSON = JSON.stringify(testState);
    createCookie('testStateCookie', testStateJSON);
}

function loadTestState() {
    var loadedTestStateJSON = getCookie('testStateCookie');
    if (loadedTestStateJSON.length == 0) {
        return null
    }
    var loadedState = JSON.parse(loadedTestStateJSON)
    return(loadedState)

}

function deleteTestState() {
    eraseCookie('testStateCookie')
}

// jQuery UI based alert() dialog replacement
$.extend({ alert: function (message, title) {
  $("<div></div>").dialog( {
    buttons: { "Close": function () { $(this).dialog("close"); } },
    close: function (event, ui) { $(this).remove(); },
    resizable: false,
    title: title,
    modal: true
  }).text(message);
}
});

// ###################################################################
// Listening test main object


    // ###################################################################
    // constructor and initialization
    var ListeningTest = function (TestData) {

        if (arguments.length == 0) return;

        // check if config file is valid
        if (typeof(TestData) == 'undefined') {
            alert('Config file could not be loaded!');
        }

        // check for IE as it does not support the FileAPI-Blob constructor below version 9
        if ((clientIsIE() > 0) && (clientIsIE() < 9)) {
           $('#LoadOverlay').show();
           $('#LoadOverlay').append('<p class="error">Internet Explorer version 8 and below is unfortunately not supported by BeaqleJS. Please update to a recent release or choose another browser.</p>');
           return;
        }
        
        // Load and verify config
        this.TestConfig = TestData;
        this.setDefaults(this.TestConfig);

        // some state variables
        this.TestState = {
            "CurrentTest": -1, 		// the current test index
            "TestIsRunning": 0,		// is true if test is running, false when finished or not yet started
            "FileMappings": [],		// json array with random file mappings
            "AudioListenedLength": [],
            "Ratings": [],			// json array with ratings
            "EvalResults": [],      // json array to store the evaluated test results
            "AllAudioListened": [],
            "AllSlidersClicked": [],
            "AudiosInLoadQueue": -1,
            "AudioLoadError": false,
            "TestStage": 1
        }

        this.testIsOver = false;


        // create and configure audio pool
        this.audioPool = new AudioPool('AudioPool');
        this.audioPool.register();
        this.audioPool.onTimeUpdate = $.proxy(this.audioTimeCallback, this);
        this.audioPool.onError = $.proxy(this.audioErrorCallback, this);
        this.audioPool.onDataLoaded = $.proxy(this.audioLoadedCallback, this);
        this.audioPool.setLooped(this.TestConfig.LoopByDefault);
        this.audioPool.setAutoReturn(this.TestConfig.AutoReturnByDefault);
        this.audioPool.onAudioPaused = $.proxy(this.audioPausedCallback, this);

        this.checkBrowserFeatures();

        // show introduction div
        $('#TestTitle').html(this.TestConfig.TestName);
        this.showInstructions();
        
        // setup buttons and controls
        var handlerObject = this;
        $('#VolumeSlider').slider({
            min:0,
            max:100,
            value:100,
            slide: function( event, ui ) {
                var vol = log10($('#VolumeSlider').slider('option', 'value')) / 2;
                handlerObject.audioPool.setVolume(vol);
            }
        });
                
        if (this.TestConfig.EnableABLoop==true) {
            $('#ABRange').slider({
                range: true,
                values: [ 0, 100],
                min:0,
                max:100,
                slide: function( event, ui ) {
                        handlerObject.audioPool.ABPos = ui.values;
                }
            });
        } else {
            $('#ABRange').hide();
            $('#ProgressBar').css('margin-top', $('#ProgressBar').height() + 'px');
        }
        $('#PauseButton').button();

        if (this.TestConfig.LoopByDefault) {
            $('#ChkLoopAudio').prop("checked", true);
        } else {
            $('#ChkLoopAudio').prop("checked", false);
        }
        $('#ChkLoopAudio').on('change', $.proxy(handlerObject.toggleLooping, handlerObject));
        
        if (this.TestConfig.AutoReturnByDefault) {
            $('#ChkAutoReturn').prop("checked", true);
        } else {
            $('#ChkAutoReturn').prop("checked", false);
        }
        $('#ChkAutoReturn').on('change', $.proxy(handlerObject.toggleAutoReturn, handlerObject));

        $('#ProgressBar').progressbar();
        $('#BtnNextTest').button();
        $('#BtnNextTest').on('click', $.proxy(handlerObject.nextTest, handlerObject));
        $('#BtnPrevTest').button();
        $('#BtnPrevTest').on('click', $.proxy(handlerObject.prevTest, handlerObject));
        $('#BtnStartTest').button();
        $('#BtnSubmitData').button({ icons: { primary: 'ui-icon-signal-diag' }});     
        $('#BtnDownloadData').button({ icons: { primary: 'ui-icon-arrowthickstop-1-s' }});
                

        // install handler to warn user when test is running and he tries to leave the page
        var testHandle = this.TestState
        window.onbeforeunload = function (e) {
            if (testHandle.TestIsRunning==true) {
                return 'The listening test is not yet finished!';
            } else {
                return;
            }
        }
    }

    // ###################################################################
    ListeningTest.prototype.setDefaults = function(config) {
        var defaults = {
          "ShowFileIDs": false,
          "ShowResults": false,
          "LoopByDefault": true,
          "AutoReturnByDefault": true,
          "EnableABLoop": true,
          "EnableOnlineSubmission": false,
          "BeaqleServiceURL": "",
          "SupervisorContact": "",
          "RandomizeTestOrder": false,
          "UseTestOrder": false,
          "MaxTestsPerRun": -1,
          "AudioRoot": ""
        }
      
        for (var property in defaults) {
            if (config[property] === undefined)
                config[property] = defaults[property];
        }
    }

    // ###################################################################
    ListeningTest.prototype.setStage = function(stage) {
        this.TestState.TestStage = stage;
    }

    // ###################################################################
    ListeningTest.prototype.nextTest = function() {

        

        this.pauseAllAudios();

        if (!this.testIsOver) {

            var testIdx = this.TestState.TestSequence[this.TestState.CurrentTest]

            // save ratings from last test
            if (this.saveRatings(testIdx)==false)
                return;

            if (this.checkTestElements() == false){
                return;
            }

            // Save temporary version of test state

            // stop time measurement
            var stopTime = new Date().getTime();
            this.TestState.Runtime[this.TestState.TestSequence[this.TestState.CurrentTest]] += stopTime - this.TestState.startTime;

            // go to next test
            if (this.TestState.CurrentTest<this.TestState.TestSequence.length-1) {
                this.TestState.CurrentTest = this.TestState.CurrentTest+1;

                // Save test state as cookie
                saveTestState(this.TestState)

                this.runTest(this.TestState.TestSequence[this.TestState.CurrentTest]);
            } else {
                // if previous test was last one, ask before loading final page and then exit test
                if (this.finalTest()) {



                    // Delete cookies
                    deleteTestState()

                    this.formatResults()
                    this.endOfTest();

                    
                    $('#TableContainer').hide();
                    $('#PlayerControls').hide();
                    $('#TestControls').hide();
                }
                return;
            }
        }
        
        

        
    }

    // ###################################################################
    ListeningTest.prototype.prevTest = function() {

        if (!this.testIsOver) {
            this.pauseAllAudios();

            if (this.TestState.CurrentTest>0) {
                // save ratings from last test
                if (this.saveRatings(this.TestState.TestSequence[this.TestState.CurrentTest])==false)
                    return;
    
                // stop time measurement
                var stopTime = new Date().getTime();
                this.TestState.Runtime[this.TestState.TestSequence[this.TestState.CurrentTest]] += stopTime - this.TestState.startTime;
                // go to previous test
                this.TestState.CurrentTest = this.TestState.CurrentTest-1;
                this.runTest(this.TestState.TestSequence[this.TestState.CurrentTest]);
            }
        }
    }

    // ###################################################################
    ListeningTest.prototype.startTests = function() {

        // Resume audio context
        this.audioPool.waContext.resume();
        
        // init linear test sequence
        this.TestState.TestSequence = Array();
        for (var i = 0; i < this.TestConfig.Testsets.length; i++)
            this.TestState.TestSequence[i] = i;

        // shorten and/or shuffle the sequence
        if (this.TestConfig.UseTestOrder == true) {
            console.log(this.TestState)
            this.TestState.TestSequence = this.TestConfig.TestOrder
        }
        if ((this.TestConfig.MaxTestsPerRun > 0) && (this.TestConfig.MaxTestsPerRun < this.TestConfig.Testsets.length)) {
            this.TestConfig.RandomizeTestOrder = true;
            this.TestState.TestSequence = shuffleArray(this.TestState.TestSequence);
            this.TestState.TestSequence = this.TestState.TestSequence.slice(0, this.TestConfig.MaxTestsPerRun);
        } else if (this.TestConfig.RandomizeTestOrder == true) {
            this.TestState.TestSequence = shuffleArray(this.TestState.TestSequence);
        }

        this.TestState.Ratings = Array(this.TestConfig.Testsets.length);
        this.TestState.Runtime = new Uint32Array(this.TestConfig.Testsets.length);
//        this.TestState.Runtime.forEach(function(element, index, array){array[index] = 0});
        this.TestState.startTime = 0;

        // prepare audiolistened array
        this.TestState.AllAudioListened = Array(this.TestConfig.Testsets.length).fill(0);
        this.TestState.AllSlidersClicked = Array(this.TestConfig.Testsets.length).fill(0); 

        
        // Get previous test state if it exists
        var loadedTestState = loadTestState();
        if (loadedTestState != null && loadedTestState.TestStage == this.TestState.TestStage) {
            this.TestState = structuredClone(loadedTestState)
        } else {
            this.TestState.CurrentTest = 0;

            // Save test state to cookies
            saveTestState(this.TestState)
        }
        
       
        console.log(this.TestState)

        // run first test
    	this.runTest(this.TestState.TestSequence[this.TestState.CurrentTest]);
    
        
    }

    // ###################################################################    
    // prepares display to run test with number TestIdx
    ListeningTest.prototype.runTest = function(TestIdx) {

        if (!this.TestIsOver) {

            if (!this.TestState.AudioListenedLength[TestIdx]) {
                this.TestState.AudioListenedLength[TestIdx] = {"A_picking": 0, "B_picking": 0, "A_strumming": 0, "B_strumming": 0, "A_fingerstyle": 0, "B_fingerstlye": 0, "guitar_A": 0, "guitar_B": 0};
            }

            this.pauseAllAudios();

            if ((TestIdx<0) || (TestIdx>this.TestConfig.Testsets.length)) throw new RangeError("Test index out of range!");

            this.audioPool.clear();
            this.TestState.AudiosInLoadQueue = 0;
            this.TestState.AudioLoadError = false;

            this.createTestDOM(TestIdx);

            // set current test name
            $('#TestHeading').html(this.TestConfig.Testsets[TestIdx].Name + " (" + (this.TestState.CurrentTest+1) + " of " + this.TestState.TestSequence.length + ")");
            //$('#TestHeading').html(" Test " + (this.TestState.CurrentTest+1) + " of " + this.TestState.TestSequence.length);
            $('#TestHeading').show();

            // hide everything instead of load animation
            $('#TestIntroduction').hide();
            $('#TestControls').hide();
            $('#TableContainer').hide();
            $('#PlayerControls').hide();
            $('#LoadOverlay').show();
                    
            // set some state variables
            this.TestState.TestIsRunning = 1;

            var TestState = this.TestState

            var handlerObject = this;
            $('.stopButton').each( function() {
                $(this).button();
                $(this).on('click', $.proxy(handlerObject.pauseAllAudios, handlerObject));
            });
            
            $('.playButton').each( function() {
                

                $(this).button();
                var audioID = $(this).attr('rel');
                var thisButton = this;
                
                $(this).on('click', $.proxy(function(event) {
                    
                    var clicked = $(thisButton).attr('clicked') === 'true';
                    handlerObject.playAudio(audioID)
                    if (!clicked) {
                        thisButton.setAttribute('clicked', 'true')
                        
                        this.TestState.AllAudioListened[this.TestState.CurrentTest]++
                    }
                }, handlerObject));
            });

            $('.slider').each( function() {
                var thisSlider = this;
                
                // When slider is clicked
                $(this).on('click', $.proxy(function(event) {
                    var clicked = $(thisSlider).attr('clicked') === 'true';
                    if (!clicked) {
                        
                        thisSlider.setAttribute('clicked', 'true')
                        TestState.AllSlidersClicked[TestState.CurrentTest]++
                        
                    }
                }))
            });
                
            // load and apply already existing ratings
            if (typeof this.TestState.Ratings[TestIdx] !== 'undefined') this.readRatings(TestIdx);

            this.TestState.startTime = new Date().getTime();
        }
    }

    // ###################################################################
    // pause all audios
    ListeningTest.prototype.pauseAllAudios = function () {    
        this.audioPool.pause();
        $(".playButton").removeClass('playButton-active');
        $('.rateSlider').parent().css('background-color', 'transparent');    
    }

    // ###################################################################
    // read ratings from TestState object
    ListeningTest.prototype.readRatings = function (TestIdx) {
        // overwrite and implement in inherited class
        alert('Function readRatings() has not been implemented in your inherited class!');
    }

    // ###################################################################
    // save ratings to TestState object
    ListeningTest.prototype.saveRatings = function (TestIdx) {
        // overwrite and implement in inherited class
        alert('Function saveRatings() has not been implemented in your inherited class!');
    }

    // ###################################################################
    // evaluate test and format/print the results
    ListeningTest.prototype.formatResults = function () {
        // overwrite and implement in inherited class
        alert('Function formatResults() has not been implemented in your inherited class!');
    }

    // ###################################################################
    // Test specific checks before moving to the next test
    ListeningTest.prototype.checkTestElements = function () {
        // overwrite and implement in inherited class
        alert('Function checkTestElements() has not been implemented in your inherited class!');
    }

    // ###################################################################
    // Decides what to do at end of test
    ListeningTest.prototype.endOfTest = function () {
        // overwrite and implement in inherited class
        alert('Function endOfTest() has not been implemented in your inherited class!');
    }

    // ###################################################################
    // Decides what to do at final test
    ListeningTest.prototype.finalTest = function () {
        // overwrite and implement in inherited class
        alert('Function finalTest() has not been implemented in your inherited class!');
    }

    // ###################################################################
    // create DOM for test display
    ListeningTest.prototype.createTestDOM = function (TestIdx) {
        // overwrite and implement in inherited class
        alert('Function createTestDOM() has not been implemented in your inherited class!');
    }

    // ###################################################################
    // Show correct instructions for test
    ListeningTest.prototype.showInstructions = function () {
        // overwrite and implement in inherited class
        alert('Function showInstructions() has not been implemented in your inherited class!');
    }

    // ###################################################################
    // is called whenever an <audio> tag fires the onDataLoaded event
    ListeningTest.prototype.audioLoadedCallback = function () {
        this.TestState.AudiosInLoadQueue--;
        
        // show test if all files finished loading and no errors occured
        if ((this.TestState.AudiosInLoadQueue==0) && (this.TestState.AudioLoadError==false)) {
            $('#TestControls').show();
            $('#TableContainer').show();
            $('#PlayerControls').show();       
            $('#LoadOverlay').hide();
        }
    }

    // ###################################################################
    // audio loading error callback
    ListeningTest.prototype.audioErrorCallback = function(e) {

        this.TestState.AudioLoadError = true;

        var errorTxt = "<p>ERROR ";

        switch (e.target.error.code) {
         case e.target.error.MEDIA_ERR_NETWORK:
           errorTxt +=  "Network problem, ";
           break;
         case e.target.error.MEDIA_ERR_DECODE:
           errorTxt +=  "File corrupted or unsupported format, ";
           break;
         case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
           errorTxt +=  "Wrong URL or unsupported file format, ";
           break;
         default:
           errorTxt +=  "Unknown error, ";
           break;
        }
        errorTxt +=  e.target.src + "</p>";

        $('#LoadOverlay').append(errorTxt);
    }

    // ###################################################################
    // audio time update callback
    ListeningTest.prototype.audioTimeCallback = function(e) {

        var s = parseInt(e.target.currentTime % 60);
        var m = parseInt((e.target.currentTime / 60) % 60);
        
        if (m<10) m = "0"+m;
        if (s<10) s = "0"+s;            
        
        $('#duration > span').html( m + ':' + s );
        
        var progress = e.target.currentTime / e.target.duration * 100;
        
        $('#ProgressBar').progressbar( "option", "value", progress);
    }


    // Called when someone pauses the audio
    ListeningTest.prototype.audioPausedCallback = function(audioID, time) {

        if (this.TestState.AudioListenedLength[this.TestState.TestSequence[this.TestState.CurrentTest]][audioID] < time) {
            this.TestState.AudioListenedLength[this.TestState.TestSequence[this.TestState.CurrentTest]][audioID] = time
        }
    }

    // ###################################################################
    // enable/disable looping for all audios
    ListeningTest.prototype.toggleLooping = function () {    
        this.audioPool.toggleLooped();
    }
    
    // ###################################################################
    // enable/disable auto return for all audios
    ListeningTest.prototype.toggleAutoReturn = function () {    
        this.audioPool.toggleAutoReturn();
    }

    // ###################################################################
    //play audio with specified html ID
    ListeningTest.prototype.playAudio = function (id) {
        
        this.audioPool.pause();

        // reset all buttons and sliders
        $('.rateSlider').parent().css('background-color', 'transparent');
        $('.playButton').removeClass('playButton-active');
        
        // highlight active slider and button
        $(".rateSlider[rel="+id+"]").parent().css('background-color', '#D5E5F6');
        $(".playButton[rel="+id+"]").addClass('playButton-active');
        
        this.audioPool.play(id);
    }

    // ###################################################################
    // add and load audio file with specified ID
    ListeningTest.prototype.addAudio = function (TestIdx, fileID, relID) {
        this.TestState.AudiosInLoadQueue += 1;
        this.audioPool.addAudio(this.TestConfig.AudioRoot +
                                this.TestConfig.Testsets[TestIdx].Files[fileID],
                                relID)
    }

    // ###################################################################
    // submit test results to server
    ListeningTest.prototype.SubmitTestResults = function () {

        var UserObj = new Object();
        UserObj.UserID = $('#UserID').val();
        UserObj.UserComment = $('#UserComment').val();

        if (UserObj.UserID.length == 0) {
            alert("Plese enter your ID number (will be randomly generated by researcher in order to keep results anonymous)")
            return;
        }

        // Create JSON object for results
        var EvalResults = {};
        EvalResults.Stage1Results = this.TestState.EvalResults.Stage1Results
        EvalResults.Stage1Order = this.TestState.Stage1Order
        EvalResults.Stage2Results = this.TestState.EvalResults.Stage2Results
        EvalResults.Stage2Order = this.TestState.TestSequence
        EvalResults.UserObj = UserObj

        var testHandle = this;
        $.ajax({
                    type: "POST",
                    timeout: 5000,
                    url: testHandle.TestConfig.BeaqleServiceURL,
                    data: {'testresults':JSON.stringify(EvalResults), 'username':UserObj.UserName},
                    dataType: 'json'})
            .done( function (response){
                    if (response.error==false) {
                        $('#SubmitBox').html("Your submission was successful.<br/><br/>");
                        testHandle.TestState.TestIsRunning = 0;
                    } else {
                        $('#SubmitError').show();
                        $('#SubmitError > #ErrorCode').html(response.message);
                        $("#SubmitBox > .submitOnline").hide();
                        if (this.TestConfig.SupervisorContact) {
                            $("#SubmitBox > .submitEmail").show();
                            $(".supervisorEmail").html(this.TestConfig.SupervisorContact);
                        }
                        if (testHandle.browserFeatures.webAPIs['Blob']) {
                            $("#SubmitBox > .submitDownload").show();
                        } else {
                            $("#SubmitBox > .submitDownload").hide();
                            $("#ResultsBox").show();
                        }
                        $('#SubmitData').button('option',{ icons: { primary: 'ui-icon-alert' }});
                    }
                })
            .fail (function (xhr, ajaxOptions, thrownError){
                    $('#SubmitError').show();
                    $('#SubmitError > #ErrorCode').html(xhr.status);
                    $("#SubmitBox > .submitOnline").hide();
                    if (this.TestConfig.SupervisorContact) {
                        $("#SubmitBox > .submitEmail").show();
                        $(".supervisorEmail").html(this.TestConfig.SupervisorContact);
                    }
                    if (testHandle.browserFeatures.webAPIs['Blob']) {
                        $("#SubmitBox > .submitDownload").show();
                    } else {
                        $("#SubmitBox > .submitDownload").hide();
                        $("#ResultsBox").show();
                    }
                });
        $('#BtnSubmitData').button('option',{ icons: { primary: 'load-indicator' }});

    }

    // ###################################################################
    // submit test results to server
    ListeningTest.prototype.DownloadTestResults = function () {

        var UserObj = new Object();
        UserObj.UserName = $('#UserName').val();
        UserObj.UserEmail = $('#UserEMail').val();
        UserObj.UserComment = $('#UserComment').val();

        var EvalResults = this.TestState.EvalResults;        
        EvalResults.push(UserObj)

        saveTextAsFile(JSON.stringify(EvalResults), getDateStamp() + "_" + UserObj.UserName + ".txt");

        this.TestState.TestIsRunning = 0;
    }

    // ###################################################################
    // Check browser capabilities
    ListeningTest.prototype.checkBrowserFeatures = function () {

        var features = new Object();

        features.webAPIs = new Array();
        features.webAPIs['webAudio'] = this.audioPool.waContext!==false;
        features.webAPIs['Blob']     = !!window.Blob;

        features.audioFormats = new Array();
        var a = document.createElement('audio');
        features.audioFormats['WAV'] = !!(a.canPlayType && a.canPlayType('audio/wav; codecs="1"').replace(/no/, ''));
        features.audioFormats['FLAC'] = !!(a.canPlayType && a.canPlayType('audio/flac').replace(/no/, ''));
        features.audioFormats['OGG'] = !!(a.canPlayType && a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ''));
        features.audioFormats['MP3'] = !!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''));
        features.audioFormats['AAC'] = !!(a.canPlayType && a.canPlayType('audio/mp4; codecs="mp4a.40.2"').replace(/no/, ''));

        this.browserFeatures = features;
    }

    // ###################################################################
    // Get browser features formatted as a HTML string
    ListeningTest.prototype.browserFeatureString = function () {
        var featStr = "Available HTML5 browser features:";
        if (this.browserFeatures.webAPIs['webAudio'])
            featStr += " <span class='feature-available'>WebAudioAPI</span>, ";
        else
            featStr += " <span class='feature-not-available'>WebAudioAPI</span>, ";

        if (this.browserFeatures.webAPIs['Blob'])
            featStr += " <span class='feature-available'>BlobAPI</span>, ";
        else
            featStr += " <span class='feature-not-available'>BlobAPI</span>, ";

        if (this.browserFeatures.audioFormats['WAV'])
            featStr += " <span class='feature-available'>WAV</span>, ";
        else
            featStr += " <span class='feature-not-available'>WAV</span>, ";

        if (this.browserFeatures.audioFormats['FLAC'])
            featStr += " <span class='feature-available'>FLAC</span>, ";
        else
            featStr += " <span class='feature-not-available'>FLAC</span>, ";

        if (this.browserFeatures.audioFormats['OGG'])
            featStr += " <span class='feature-available'>Vorbis</span>, ";
        else
            featStr += " <span class='feature-not-available'>Vorbis</span>, ";

        if (this.browserFeatures.audioFormats['MP3'])
            featStr += " <span class='feature-available'>MP3</span>, ";
        else
            featStr += " <span class='feature-not-available'>MP3</span>, ";
        
        if (this.browserFeatures.audioFormats['AAC'])
            featStr += " <span class='feature-available'>AAC</span>";
        else
            featStr += " <span class='feature-not-available'>AAC</span>";

        return featStr;
    }


// ###################################################################
// Guitar Timbre test main object (modelled after Preference-Test)

// inherit from ListeningTest
function TimbreTest(TestData) {
    ListeningTest.apply(this, arguments);
}
TimbreTest.prototype = new ListeningTest();
TimbreTest.prototype.constructor = TimbreTest;

// Create a title label
function createLabel(document, labelText) {
    var div = document.createElement('div')
    div.setAttribute("class", "label")
    div.append(labelText)
    $('#testElementsContainer').append(div);
}

// Creates a slider in the document
function createSlider(document, id, mainLabel, labelA, labelB) {

    var div = document.createElement('div')
    div.setAttribute("class", "sliderLabel")
    div.append(mainLabel)
    $('#testElementsContainer').append(div);

    var slider = document.createElement('div')
    slider.setAttribute('class', 'slidecontainer')
    var sliderInput = document.createElement('input')
    sliderInput.setAttribute('type', 'range')
    sliderInput.setAttribute('min', '0')
    sliderInput.setAttribute('max', '100')
    sliderInput.setAttribute('value', '50')
    sliderInput.setAttribute('class', 'slider')
    sliderInput.setAttribute('list', 'tickmarks')
    sliderInput.setAttribute('id', id)

    // Create datalist (is there a better way to do this?)
    var datalist = document.createElement('datalist')
    datalist.setAttribute('id', 'tickmarks')
    var option1 = document.createElement('option')
    option1.setAttribute('value', '0')
    option1.setAttribute('label', labelA)
    var option2 = document.createElement('option')
    option2.setAttribute('value', '50')
    var option3 = document.createElement('option')
    option3.setAttribute('value', '100')
    option3.setAttribute('label', labelB)
    datalist.append(option1)
    datalist.append(option2)
    datalist.append(option3)

    slider.append(sliderInput)
    slider.append(datalist)

    $('#testElementsContainer').append(slider);
}

// Create the playback buttons
function createButtons(testInstance, fileA, fileB, testIdx) {

    var tab = document.createElement('table');
    tab.setAttribute('id','TestTable');
        
    var row = new Array();
    var cell = new Array();

    row  = tab.insertRow(-1);
    cell[0] = row.insertCell(-1);
    cell[0].innerHTML = '<button id="play_'+fileA+'_Btn" class="playButton" rel="'+fileA+'" clicked="false">Guitar A</button>';
    testInstance.addAudio(testIdx, fileA, fileA);

    console.log(fileA)

    cell[1] = row.insertCell(-1);
    cell[1].innerHTML = '<button id="play_'+fileB+'_Btn" class="playButton" rel="'+fileB+'">Guitar B</button>';
    testInstance.addAudio(testIdx, fileB, fileB);

    cell[2] = row.insertCell(-1);
    cell[2].innerHTML = "<button class='stopButton'>Stop</button>";

    row  = tab.insertRow(-1);
    cell[0] = row.insertCell(-1);
    cell[1] = row.insertCell(-1);
    
    cell[2] = row.insertCell(-1);
    cell[2].innerHTML = "Press buttons to start/stop playback."; 

    row[1]  = tab.insertRow(-1);
    cell[0] = row[1].insertCell(-1);
    cell[1] = row[1].insertCell(-1);
    cell[2] = row[1].insertCell(-1);
    
    // append the created table to the DOM
    $('#testElementsContainer').append(tab);
}

// Create the playback buttons
function createButtonsText(testInstance, fileA, fileB, text, testIdx) {

    var tab = document.createElement('table');
    tab.setAttribute('id','TestTable');
        
    var row = new Array();
    var cell = new Array();

    row  = tab.insertRow(-1);
    cell[0] = row.insertCell(-1);
    cell[0].innerHTML = '<button id="play_'+fileA+'_Btn" class="playButton" rel="'+fileA+'" clicked="false">Guitar A</button>';
    testInstance.addAudio(testIdx, fileA, fileA);

    cell[1] = row.insertCell(-1);
    cell[1].innerHTML = '<button id="play_'+fileB+'_Btn" class="playButton" rel="'+fileB+'">Guitar B</button>';
    testInstance.addAudio(testIdx, fileB, fileB);

    cell[2] = row.insertCell(-1);

    row  = tab.insertRow(-1);
    cell[0] = row.insertCell(-1);
    cell[1] = row.insertCell(-1);
    cell[2] = row.insertCell(-1);
    cell[2].innerHTML = text 

    row[1]  = tab.insertRow(-1);
    cell[0] = row[1].insertCell(-1);
    cell[1] = row[1].insertCell(-1);
    cell[2] = row[1].insertCell(-1);
    
    // append the created table to the DOM
    $('#testElementsContainer').append(tab);
}


// implement specific code
TimbreTest.prototype.createTestDOM = function (TestIdx) {

        // clear old test table
        if ($('#testElementsContainer')) {
            $('#testElementsContainer').remove();
        }

        // Create div to hold elements of test such as sliders and buttons
        var div = document.createElement('div')
        div.setAttribute("id", "testElementsContainer")
        $('#TableContainer').append(div);

        // Create test instructions
        var div = document.createElement('div')
        div.setAttribute('id', 'testInstructions')
        div.append("Listen and compare the recordings of the two guitars for each of the three styles and answer the questions. You can listen to the recordings as many times as you wish. Please listen to the entire audio for each guitar style. Do not change the sound level during the study except if strictly necessary. You are encouraged to use the full range of the scales. Avoid taking breaks in the middle of rating a pair.")
        $('#testElementsContainer').append(div);

        // create random file mapping if not yet done
        if (!this.TestState.FileMappings[TestIdx]) {
           this.TestState.FileMappings[TestIdx] = {"A_picking": "", "B_picking": "", "A_strumming": "", "B_strumming": "", "A_fingerstyle": "", "B_fingerstlye": "", "guitar_A": "", "guitar_B": ""};
           var RandFileNumber = Math.random();
           if (this.TestConfig.RandomizeFileOrder && RandFileNumber>0.5) {
               this.TestState.FileMappings[TestIdx].A_picking = "B_picking";
               this.TestState.FileMappings[TestIdx].B_picking = "A_picking";
               this.TestState.FileMappings[TestIdx].A_strumming = "B_strumming";
               this.TestState.FileMappings[TestIdx].B_strumming = "A_strumming";
               this.TestState.FileMappings[TestIdx].A_fingerstyle = "B_fingerstyle";
               this.TestState.FileMappings[TestIdx].B_fingerstyle = "A_fingerstyle";
               this.TestState.FileMappings[TestIdx].guitar_A = this.TestConfig.Testsets[TestIdx].Guitars.B;
               this.TestState.FileMappings[TestIdx].guitar_B = this.TestConfig.Testsets[TestIdx].Guitars.A;

           } else {
               this.TestState.FileMappings[TestIdx].A_picking = "A_picking";
               this.TestState.FileMappings[TestIdx].B_picking = "B_picking";
               this.TestState.FileMappings[TestIdx].A_strumming = "A_strumming";
               this.TestState.FileMappings[TestIdx].B_strumming = "B_strumming";
               this.TestState.FileMappings[TestIdx].A_fingerstyle = "A_fingerstyle";
               this.TestState.FileMappings[TestIdx].B_fingerstyle = "B_fingerstyle";
               this.TestState.FileMappings[TestIdx].guitar_A = this.TestConfig.Testsets[TestIdx].Guitars.A;
               this.TestState.FileMappings[TestIdx].guitar_B = this.TestConfig.Testsets[TestIdx].Guitars.B;
            }         
        }	

        // Picking 
        createLabel(document, "Style: Picking")
        createButtons(this, this.TestState.FileMappings[TestIdx].A_picking, this.TestState.FileMappings[TestIdx].B_picking, TestIdx)
        createSlider(document, "dissimilaritySliderPicking", "Please rate how dissimilar/similar the timbres of the two guitars are", "Strongly dissimilar", "Strongly similar")
        createSlider(document, "preferenceSliderPicking", "Please rate your preference between the timbres of guitar A and B", "Strongly prefer guitar A", "Strongly prefer guitar B")

        // Fingerstyle 
        createLabel(document, "Style: Fingerstyle")
        createButtons(this, this.TestState.FileMappings[TestIdx].A_fingerstyle, this.TestState.FileMappings[TestIdx].B_fingerstyle, TestIdx)
        createSlider(document, "dissimilaritySliderFingerstyle", "Please rate how dissimilar/similar the timbres of the two guitars are", "Strongly dissimilar", "Strongly similar")
        createSlider(document, "preferenceSliderFingerstyle", "Please rate your preference between the timbres of guitar A and B", "Strongly prefer guitar A", "Strongly prefer guitar B")

        // Strumming 
        createLabel(document, "Style: Strumming")
        createButtons(this, this.TestState.FileMappings[TestIdx].A_strumming, this.TestState.FileMappings[TestIdx].B_strumming, TestIdx)
        createSlider(document, "dissimilaritySliderStrumming", "Please rate how dissimilar/similar the timbres of the two guitars are", "Strongly dissimilar", "Strongly similar")
        createSlider(document, "preferenceSliderStrumming", "Please rate your preference between the timbres of guitar A and B", "Strongly prefer guitar A", "Strongly prefer guitar B")
}


TimbreTest.prototype.readRatings = function (TestIdx) {

    // Get results
    var results = this.TestState.Ratings[TestIdx]

    // Fill all input objects with results
    $("#dissimilaritySliderPicking").val(results.dissimilarityPickingValue)
    $("#preferenceSliderPicking").val(results.preferencePickingValue)
    $("#dissimilaritySliderStrumming").val(results.dissimilarityStrummingValue)
    $("#preferenceSliderStrumming").val(results.preferenceStrummingValue)
    $("#dissimilaritySliderFingerstyle").val(results.dissimilarityFingerstyleValue)
    $("#preferenceSliderFingerstyle").val(results.preferenceFingerstyleValue)
}

TimbreTest.prototype.saveRatings = function (TestIdx) {
    
    // Creat object to hold results
    var results = {
        dissimilarityPickingValue: $("#dissimilaritySliderPicking").val(),
        preferencePickingValue: $("#preferenceSliderPicking").val(),
        dissimilarityStrummingValue: $("#dissimilaritySliderStrumming").val(),
        preferenceStrummingValue: $("#preferenceSliderStrumming").val(),
        dissimilarityFingerstyleValue: $("#dissimilaritySliderFingerstyle").val(),
        preferenceFingerstyleValue: $("#preferenceSliderFingerstyle").val()
    }

    // Save results
    this.TestState.Ratings[TestIdx] = results;
}

TimbreTest.prototype.checkTestElements = function () {
    
    // Check if all audio has been listened to, all sliders clicked and text boxes filled
    if (this.TestState.AllAudioListened[this.TestState.CurrentTest] < 6) {
        alert("Please ensure you have listened to every sound example before continuing.")
        return(false)
    } else if (this.TestState.AllSlidersClicked[this.TestState.CurrentTest] < 6) {
        if (!confirm("You have not used all of the sliders. Are you sure you would like to continue with 1 or more sliders set to the default value?")) {
            return(false)
        } else {
            this.TestState.AllSlidersClicked[this.TestState.CurrentTest] = 3
        }
    }
    return(true)
}

TimbreTest.prototype.formatResults = function () {

    var resultstring = "";
    var tab = document.createElement('table');
    var head = tab.createTHead();
    var row = head.insertRow(-1);
    var cell = row.insertCell(-1); cell.innerHTML = "Test Name and ID";
    cell = row.insertCell(-1);     cell.innerHTML = "Guitar A";
    cell = row.insertCell(-1);     cell.innerHTML = "Guitar B";
    cell = row.insertCell(-1);     cell.innerHTML = "Dissimilarity rating";
    cell = row.insertCell(-1);     cell.innerHTML = "Guitar A rating";
    cell = row.insertCell(-1);     cell.innerHTML = "Guitar B rating";

    this.TestState.EvalResults.Stage2Results = [];

    // evaluate single tests
    for (var i = 0; i < this.TestConfig.Testsets.length; i++) {
        this.TestState.EvalResults.Stage2Results[i] = new Object();
        this.TestState.EvalResults.Stage2Results[i].TestID = this.TestConfig.Testsets[i].TestID;

        // Save all results
        this.TestState.EvalResults.Stage2Results[i].dissimilarityPickingValue = this.TestState.Ratings[i].dissimilarityPickingValue / 100;
        this.TestState.EvalResults.Stage2Results[i].preferencePickingValue = this.TestState.Ratings[i].preferencePickingValue / 100;
        this.TestState.EvalResults.Stage2Results[i].dissimilarityStrummingValue = this.TestState.Ratings[i].dissimilarityStrummingValue / 100;
        this.TestState.EvalResults.Stage2Results[i].preferenceStrummingValue = this.TestState.Ratings[i].preferenceStrummingValue / 100;
        this.TestState.EvalResults.Stage2Results[i].dissimilarityFingerstyleValue = this.TestState.Ratings[i].dissimilarityFingerstyleValue / 100;
        this.TestState.EvalResults.Stage2Results[i].preferenceFingerstyleValue = this.TestState.Ratings[i].preferenceFingerstyleValue / 100;
        this.TestState.EvalResults.Stage2Results[i].guitar_A = this.TestState.FileMappings[i].guitar_A;
        this.TestState.EvalResults.Stage2Results[i].guitar_B = this.TestState.FileMappings[i].guitar_B;

        // Audio listened length
        this.TestState.EvalResults.Stage2Results[i].pickingTimeA = this.TestState.AudioListenedLength[i].A_picking;
        this.TestState.EvalResults.Stage2Results[i].pickingTimeB = this.TestState.AudioListenedLength[i].B_picking;
        this.TestState.EvalResults.Stage2Results[i].strummingTimeA = this.TestState.AudioListenedLength[i].A_strumming;
        this.TestState.EvalResults.Stage2Results[i].strummingTimeB = this.TestState.AudioListenedLength[i].B_strumming;
        this.TestState.EvalResults.Stage2Results[i].fingerstyleTimeA = this.TestState.AudioListenedLength[i].A_fingerstyle;
        this.TestState.EvalResults.Stage2Results[i].fingerstyleTimeB = this.TestState.AudioListenedLength[i].B_fingerstyle;
    }

    // Save Stage 1 results
    this.TestState.EvalResults.Stage1Results = this.TestState.Stage1Results;

    resultstring += tab.outerHTML;
    return resultstring;
}

TimbreTest.prototype.endOfTest = function () {
    
    $('#TableContainer').hide();
    $('#PlayerControls').hide();
    $('#TestControls').hide();
    
    $('#TestEnd').show();

    $('#ResultsBox').html(this.formatResults());
    if (this.TestConfig.ShowResults)
        $("#ResultsBox").show();
    else
        $("#ResultsBox").hide();

    $("#SubmitBox").show();

    $("#SubmitBox > .submitEmail").hide();
    if (this.TestConfig.EnableOnlineSubmission) {
        $("#SubmitBox > .submitOnline").show();
        $("#SubmitBox > .submitDownload").hide();
    } else {
        $("#SubmitBox > .submitOnline").hide();
        if (this.TestConfig.SupervisorContact) {
            $("#SubmitBox > .submitEmail").show();
            $(".supervisorEmail").html(this.TestConfig.SupervisorContact);
        }
        if (this.browserFeatures.webAPIs['Blob']) {
            $("#SubmitBox > .submitDownload").show();
        } else {
            $("#SubmitBox > .submitDownload").hide();
            $("#ResultsBox").show();
        }
    }
    
}

TimbreTest.prototype.showInstructions = function () {
    $('#TestIntroduction').show();
    $('#TrainingInstructions').hide();
    $('#Stage1Instructions').hide();
    $('#Stage2Instructions').show();
}

TimbreTest.prototype.finalTest = function () {
    if (confirm("This was the last test in Stage 2. Do you want to finish?")) {
        return true;
    } else {
        return false;
    }
}



// ###################################################################
// Preference test main object (modelled after Preference-Test)

// inherit from ListeningTest
function TimbrePreferenceTest(TestData) {
    ListeningTest.apply(this, arguments);
}
TimbrePreferenceTest.prototype = new ListeningTest();
TimbrePreferenceTest.prototype.constructor = TimbrePreferenceTest;

// implement specific code
TimbrePreferenceTest.prototype.createTestDOM = function (TestIdx) {

    // clear old test table
    if ($('#testElementsContainer')) {
        $('#testElementsContainer').remove();
    }

    // Create div to hold elements of test such as sliders and buttons
    var div = document.createElement('div')
    div.setAttribute("id", "testElementsContainer")
    $('#TableContainer').append(div);

    // Create test instructions
    var div = document.createElement('div')
    div.setAttribute('id', 'testInstructions')
    div.append("Listen to the recordings of the same guitar for three different playing styles (picking, fingerstyle, and strumming) and describe the timbre of the guitar using your own words. Then, describe what you like and what you dislike about the timbre of the guitar in the two separate text boxes. You need to listen to the three guitar recordings entirely. You can listen to the recordings as many times as you wish. Do not change the sound level during the main test except if strictly necessary. Avoid taking breaks in the middle of completing a page.")
    $('#testElementsContainer').append(div);

    var tab = document.createElement('table');
    tab.setAttribute('id','TestTable');
        
    var row = new Array();
    var cell = new Array();

    row  = tab.insertRow(-1);
    cell[0] = row.insertCell(-1);
    var fileA = "A_picking"
    cell[0].innerHTML = '<button id="play_'+fileA+'_Btn" class="playButton" rel="'+fileA+'" clicked="false">Picking</button>';
    this.addAudio(TestIdx, fileA, fileA);

    cell[1] = row.insertCell(-1);
    cell[1].innerHTML = "<button class='stopButton'>Stop</button>";

    row  = tab.insertRow(-1);
    cell[0] = row.insertCell(-1);
    fileA = "A_fingerstyle"
    cell[0].innerHTML = '<button id="play_'+fileA+'_Btn" class="playButton" rel="'+fileA+'" clicked="false">Fingerstyle</button>';
    this.addAudio(TestIdx, fileA, fileA);
    
    cell[1] = row.insertCell(-1);
    cell[1].innerHTML = "Press buttons to start/stop playback."; 

    row  = tab.insertRow(-1);
    cell[0] = row.insertCell(-1);
    fileA = "A_strumming"
    cell[0].innerHTML = '<button id="play_'+fileA+'_Btn" class="playButton" rel="'+fileA+'" clicked="false">Strumming</button>';
    this.addAudio(TestIdx, fileA, fileA);

    row[1]  = tab.insertRow(-1);
    cell[0] = row[1].insertCell(-1);
    cell[1] = row[1].insertCell(-1);
    
    // append the created table to the DOM
    $('#testElementsContainer').append(tab);

    // Create text boxes
    createLabel(document, "Please describe the timbre of this guitar in your own words")
    var div = document.createElement('div')
    div.setAttribute("class", "textbox")
    var textbox = document.createElement('textarea')
    textbox.setAttribute("id", "timbreComment")
    div.append(textbox)
    $('#testElementsContainer').append(div);

    createLabel(document, "Please describe what you LIKE about the timbre of this guitar in your own words")
    var div = document.createElement('div')
    div.setAttribute("class", "textbox")
    var textbox = document.createElement('textarea')
    textbox.setAttribute("id", "timbreLikeComment")
    div.append(textbox)
    $('#testElementsContainer').append(div);

    createLabel(document, "Please describe what you DISLIKE about the timbre of this guitar in your own words")
    var div = document.createElement('div')
    div.setAttribute("class", "textbox")
    var textbox = document.createElement('textarea')
    textbox.setAttribute("id", "timbreDislikeComment")
    div.append(textbox)
    $('#testElementsContainer').append(div);

    console.log(this.TestState)
}


TimbrePreferenceTest.prototype.readRatings = function (TestIdx) {

    // Get results
    var results = this.TestState.Ratings[TestIdx]

    // Fill all input objects with results
    $("#timbreComment").val(results.timbreComment)
    $("#timbreLikeComment").val(results.timbreLikeComment)
    $("#timbreDislikeComment").val(results.timbreDislikeComment)
}

TimbrePreferenceTest.prototype.saveRatings = function (TestIdx) {
    
    // Create object to hold results
    var results = {
        timbreComment: $("#timbreComment").val(),
        timbreLikeComment: $("#timbreLikeComment").val(),
        timbreDislikeComment: $("#timbreDislikeComment").val()
    }

    // Save results
    this.TestState.Ratings[TestIdx] = results;
}

// Check if all audio has been listened to and text boxes filled
TimbrePreferenceTest.prototype.checkTestElements = function () {
    if (!this.testIsOver) {
        if (this.TestState.AllAudioListened[this.TestState.CurrentTest] < 3) {
            alert("Please ensure you have listened to every sound example before continuing.")
            return(false)
        } else if ( $("#timbreComment").val().length == 0 || $("#timbreLikeComment").val().length == 0 || $("#timbreDislikeComment").val().length == 0) {
            alert("Please ensure you have filled in the text boxes before continuing")
            return(false)
        }
        return(true)
    }
}


TimbrePreferenceTest.prototype.formatResults = function () {

    var resultstring = "";
    var tab = document.createElement('table');
    var head = tab.createTHead();
    var row = head.insertRow(-1);
    var cell = row.insertCell(-1); cell.innerHTML = "Test Name and ID";
    cell = row.insertCell(-1);     cell.innerHTML = "Guitar A";
    cell = row.insertCell(-1);     cell.innerHTML = "Guitar B";
    cell = row.insertCell(-1);     cell.innerHTML = "Dissimilarity rating";
    cell = row.insertCell(-1);     cell.innerHTML = "Guitar A rating";
    cell = row.insertCell(-1);     cell.innerHTML = "Guitar B rating";

    // evaluate single tests
    for (var i = 0; i < this.TestConfig.Testsets.length; i++) {
        this.TestState.EvalResults[i] = new Object();
        this.TestState.EvalResults[i].TestID = this.TestConfig.Testsets[i].TestID;

        // Save all results
        this.TestState.EvalResults[i].timbreComment = this.TestState.Ratings[i].timbreComment;
        this.TestState.EvalResults[i].timbreLikeComment = this.TestState.Ratings[i].timbreLikeComment;
        this.TestState.EvalResults[i].timbreDislikeComment = this.TestState.Ratings[i].timbreDislikeComment;
        this.TestState.EvalResults[i].guitar_A = this.TestConfig.Testsets[i].Guitars.A;


    }
    resultstring += tab.outerHTML;
    return resultstring;
}

TimbrePreferenceTest.prototype.endOfTest = function () {
    
    testHandle2 = new TimbreTest(TestConfigStage2);
    testHandle2.setStage(2)

    var stage1Results = [];
    // evaluate single tests
    for (var i = 0; i < this.TestConfig.Testsets.length; i++) {
        stage1Results[i] = new Object();
        stage1Results[i].TestID = this.TestConfig.Testsets[i].TestID;

        // Save all results
        stage1Results[i].timbreComment = this.TestState.Ratings[i].timbreComment;
        stage1Results[i].timbreLikeComment = this.TestState.Ratings[i].timbreLikeComment;
        stage1Results[i].timbreDislikeComment = this.TestState.Ratings[i].timbreDislikeComment;
        stage1Results[i].guitar = this.TestConfig.Testsets[i].Guitars.A;

        // Audio listened length
        stage1Results[i].pickingTime = this.TestState.AudioListenedLength[i].A_picking
        stage1Results[i].strummingTime = this.TestState.AudioListenedLength[i].A_strumming
        stage1Results[i].fingerstyleTime = this.TestState.AudioListenedLength[i].A_fingerstyle
    }

    // Add to test state of next test
    testHandle2.TestState.Stage1Results = stage1Results
    testHandle2.TestState.Stage1Order = this.TestState.TestSequence
    
    //$('#TestEnd').hide();
    $('#TestIntroduction').show();
    //$('#Footer').prepend(testHandle2.browserFeatureString() + '<br/>');

    // Update button to start the second set of tests
    $('#BtnStartTest').on('click', function() {
        testHandle.testIsOver = true;
        testHandle2.startTests();
    })
}

TimbrePreferenceTest.prototype.showInstructions = function () {
    $('#TestIntroduction').show();
    $('#TrainingInstructions').hide();
    $('#Stage1Instructions').show();
    $('#Stage2Instructions').hide();
}

TimbrePreferenceTest.prototype.finalTest = function () {
    if (confirm("This was the last test in Stage 1. Do you want to continue to the next stage?")) {
        return true;
    } else {
        return false;
    }
}


// ###################################################################
// Training

// inherit from ListeningTest
function TimbreTraining(TestData) {
    ListeningTest.apply(this, arguments);
}
TimbreTraining.prototype = new ListeningTest();
TimbreTraining.prototype.constructor = TimbreTraining;

// implement specific code
TimbreTraining.prototype.createTestDOM = function (TestIdx) {

    // clear old test table
    if ($('#testElementsContainer')) {
        $('#testElementsContainer').remove();
    }

    // Create div to hold elements of test such as sliders and buttons
    var div = document.createElement('div')
    div.setAttribute("id", "testElementsContainer")
    $('#TableContainer').append(div);

    if (TestIdx == 0) {

        // Create test instructions
        var div = document.createElement('div')
        div.setAttribute('id', 'testInstructions')
        div.append("In the first stage of the test, you need to listen to three recordings of a single guitar corresponding to different playing styles (picking, fingerstyle, and strumming) and describe the timbre of the guitar using your own words. You then need to describe what you like and what you dislike about the timbre of this guitar in two separate text boxes. Please listen to the three guitar recordings entirely. You can listen to the recordings as many times as you wish.")
        $('#testElementsContainer').append(div);

        var tab = document.createElement('table');
        tab.setAttribute('id','TestTable');
            
        var row = new Array();
        var cell = new Array();
    
        row  = tab.insertRow(-1);
        cell[0] = row.insertCell(-1);
        var fileA = "A_picking"
        cell[0].innerHTML = '<button id="play_'+fileA+'_Btn" class="playButton" rel="'+fileA+'" clicked="false">Picking</button>';
        this.addAudio(TestIdx, fileA, fileA);
    
        cell[1] = row.insertCell(-1);
        cell[1].innerHTML = "<button class='stopButton'>Stop</button>";
    
        row  = tab.insertRow(-1);
        cell[0] = row.insertCell(-1);
        fileA = "A_fingerstyle"
        cell[0].innerHTML = '<button id="play_'+fileA+'_Btn" class="playButton" rel="'+fileA+'" clicked="false">Fingerstyle</button>';
        this.addAudio(TestIdx, fileA, fileA);
        
        cell[1] = row.insertCell(-1);
        cell[1].innerHTML = "Press buttons to start/stop playback."; 
    
        row  = tab.insertRow(-1);
        cell[0] = row.insertCell(-1);
        fileA = "A_strumming"
        cell[0].innerHTML = '<button id="play_'+fileA+'_Btn" class="playButton" rel="'+fileA+'" clicked="false">Strumming</button>';
        this.addAudio(TestIdx, fileA, fileA);
    
        row[1]  = tab.insertRow(-1);
        cell[0] = row[1].insertCell(-1);
        cell[1] = row[1].insertCell(-1);
        
        // append the created table to the DOM
        $('#testElementsContainer').append(tab);
    
        // Create text boxes
        createLabel(document, "Please describe the timbre of this guitar in your own words")
        var div = document.createElement('div')
        div.setAttribute("class", "textbox")
        var textbox = document.createElement('textarea')
        textbox.setAttribute("id", "timbreComment")
        div.append(textbox)
        $('#testElementsContainer').append(div);
    
        createLabel(document, "Please describe what you LIKE about the timbre of this guitar in your own words")
        var div = document.createElement('div')
        div.setAttribute("class", "textbox")
        var textbox = document.createElement('textarea')
        textbox.setAttribute("id", "timbreLikeComment")
        div.append(textbox)
        $('#testElementsContainer').append(div);
    
        createLabel(document, "Please describe what you DISLIKE about the timbre of this guitar in your own words")
        var div = document.createElement('div')
        div.setAttribute("class", "textbox")
        var textbox = document.createElement('textarea')
        textbox.setAttribute("id", "timbreDislikeComment")
        div.append(textbox)
        $('#testElementsContainer').append(div);

        createLabel(document, "In the main test, you will need to complete this task for 10 different guitars.")
        
    } else {

        // Create test instructions
        var div = document.createElement('div')
        div.setAttribute('id', 'testInstructions')
        div.append("In the second stage of the test, you need to listen to recordings of two different guitars playing the same musical excerpt. Please listen to both recording entirely and use the slider to rate how dissimilar/similar you feel the timbres of the two guitars are. Next, use the second slider to rate your preference for the guitar timbres. You can listen to the recordings several times if you wish. This task needs to be completed for the three playing styles separately (picking, fingerstyle, and strumming).")
        $('#testElementsContainer').append(div);

        // Picking 
        createLabel(document, "Style: Picking")
        createButtons(this, "A_picking", "B_picking", TestIdx)
        createSlider(document, "dissimilaritySliderPicking", "Please rate how dissimilar/similar the timbres of the two guitars are", "Strongly dissimilar", "Strongly similar")
        createSlider(document, "preferenceSliderPicking", "Please rate your preference between the timbres of guitar A and B", "Strongly prefer guitar A", "Strongly prefer guitar B")

        // Fingerstyle 
        createLabel(document, "Style: Fingerstyle")
        createButtons(this, "A_fingerstyle", "B_fingerstyle", TestIdx)
        createSlider(document, "dissimilaritySliderFingerstyle", "Please rate how dissimilar/similar the timbres of the two guitars are", "Strongly dissimilar", "Strongly similar")
        createSlider(document, "preferenceSliderFingerstyle", "Please rate your preference between the timbres of guitar A and B", "Strongly prefer guitar A", "Strongly prefer guitar B")

        // Strumming 
        createLabel(document, "Style: Strumming")
        createButtons(this, "A_strumming", "B_strumming", TestIdx)
        createSlider(document, "dissimilaritySliderStrumming", "Please rate how dissimilar/similar the timbres of the two guitars are", "Strongly dissimilar", "Strongly similar")
        createSlider(document, "preferenceSliderStrumming", "Please rate your preference between the timbres of guitar A and B", "Strongly prefer guitar A", "Strongly prefer guitar B")

        createLabel(document, "In the main test, you will need to complete this task for 45 different guitar pairs.")
    }
}


TimbreTraining.prototype.readRatings = function (TestIdx) {

    if (this.testIsOver) {
        return;
    }

    // Get results
    var results = this.TestState.Ratings[TestIdx]

    // Fill all input objects with results
    $("#timbreComment").val(results.timbreComment)
    $("#dissimilaritySlider").val(results.differenceRating)
    $("#preferenceSlider").val(results.preferenceRating)
}

TimbreTraining.prototype.saveRatings = function (TestIdx) {

    if (this.testIsOver) {
        return;
    }
    
    // Create object to hold results
    var results = {
        timbreComment: $("#timbreComment").val(),
        differenceRating: $("#dissimilaritySlider").val(),
        preferenceRating: $("#preferenceSlider").val(),
    }

    // Save results
    this.TestState.Ratings[TestIdx] = results;
}

// Check if all audio has been listened to and text boxes filled
TimbreTraining.prototype.checkTestElements = function () {

    /*
    if (!this.testIsOver) {
        if (this.TestState.AllAudioListened[this.TestState.CurrentTest] < 3) {
            alert("Please ensure you have listened to every sound example before continuing.")
            return(false)
        } else if ( $("#timbreComment").val().length == 0) {
            alert("Please ensure you have filled in the text box before continuing")
            return(false)
        } else if (this.TestState.AllSlidersClicked[this.TestState.CurrentTest] < 2) {
            if (!confirm("You have not used all of the sliders. Are you sure you would like to continue with 1 or more sliders set to the default value?")) {
                return(false)
            }
        }
        return(true)
    }
    */
}


TimbreTraining.prototype.formatResults = function () {

    
}

TimbreTraining.prototype.endOfTest = function () {
    
    testHandle = new TimbrePreferenceTest(TestConfigStage1);
    testHandle.setStage(1)
    
    
    //$('#TestEnd').hide();
    $('#TestIntroduction').show();

    // Update button to start the second set of tests
    $('#BtnStartTest').on('click', function() {
        testHandleTraining.testIsOver = true;
        testHandle.startTests();
        console.log(testHandle.TestState)
    })
}

TimbreTraining.prototype.showInstructions = function () {
    $('#TestIntroduction').show();
    $('#TrainingInstructions').show();
    $('#Stage1Instructions').hide();
    $('#Stage2Instructions').hide();
}

TimbreTraining.prototype.finalTest = function () {
    if (confirm("This was the last training test. Do you want to finish?")) {
        return true;
    } else {
        return false;
    }
}

