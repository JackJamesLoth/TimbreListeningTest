// configure the test here
var TestConfigStage1 = {
    "TestName": "Guitar Timbre Listening Study Stage 1",
    "LoopByDefault": false,
    "ShowFileIDs": false,
    "ShowResults": true,
    "EnableABLoop": true,
    "EnableOnlineSubmission": true,
    "RandomizeFileOrder": false,
    "RandomizeTestOrder": false,
    "BeaqleServiceURL": "web_service/beaqleJS_Service.php",
    "SupervisorContact": "j.j.loth@qmul.ac.uk",
    "AudioRoot": "audio/",
    "Testsets": [
        {
            "Name": "Test 1",
            "TestID": "test_CortEarth100NS",
            "Files": {
                "A_picking": "Cort Earth 100 NS/picking.mp3",
                "A_strumming": "Cort Earth 100 NS/strumming.mp3",
                "A_fingerstyle": "Cort Earth 100 NS/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Cort Earth 100 NS",
            }
        }
    ]
  }
  