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
    "UseTestOrder": true,
    "TestOrder": [0, 1, 9, 2, 8, 3, 7, 4, 6, 5],
    "BeaqleServiceURL": "web_service/beaqleJS_Service.php",
    "SupervisorContact": "j.j.loth@qmul.ac.uk",
    "AudioRoot": "audio/",
    "Testsets": [
        {
            "Name": "Test 1",
            "TestID": "test_EpiphoneJ-15ECDeluxeVS",
            "Files": {
                "A_picking": "Epiphone J-15 EC Deluxe VS/picking.mp3",
                "A_strumming": "Epiphone J-15 EC Deluxe VS/strumming.mp3",
                "A_fingerstyle": "Epiphone J-15 EC Deluxe VS/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Epiphone J-15 EC Deluxe VS",
            }
        },
        {
            "Name": "Test 2",
            "TestID": "test_LarryCarltonA3-DVS",
            "Files": {
                "A_picking": "Larry Carlton A3-D VS/picking.mp3",
                "A_strumming": "Larry Carlton A3-D VS/strumming.mp3",
                "A_fingerstyle": "Larry Carlton A3-D VS/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Larry Carlton A3-D VS",
            }
        }
    ]
  }
  