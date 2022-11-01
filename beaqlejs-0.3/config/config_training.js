// configure the test here
var TestConfigTraining = {
    "TestName": "TRAINING STAGE",
    "LoopByDefault": false,
    "ShowFileIDs": false,
    "ShowResults": true,
    "EnableABLoop": true,
    "EnableOnlineSubmission": true,
    "RandomizeFileOrder": false,
    "RandomizeTestOrder": false,
    "UseTestOrder": false,
    "BeaqleServiceURL": "web_service/beaqleJS_Service.php",
    "SupervisorContact": "j.j.loth@qmul.ac.uk",
    "AudioRoot": "audio/",
    "Testsets": [
        {
            "Name": "Test 1",
            "TestID": "test_CortGoldOC8Natural",
            "Files": {
                "A_picking": "TR_cort_picking.wav",
                "A_strumming": "TR_cort_strumming.wav",
                "A_fingerstyle": "TR_cort_fingerstyle.wav",
            },
            "Guitars": {
                "A": "Cort Gold OC8 Natural"
            }
        },
        {
            "Name": "Test 2",
            "TestID": "test_Fender_Epiphone",
            "Files": {
                "A_picking": "TR_fender_picking.wav",
                "B_picking": "TR_epiphone_picking.wav",
                "A_strumming": "TR_fender_strumming.wav",
                "B_strumming": "TR_epiphone_strumming.wav",
                "A_fingerstyle": "TR_fender_fingerstyle.wav",
                "B_fingerstyle": "TR_epiphone_fingerstyle.wav",
            },
            "Guitars": {
                "A": "Fender Newporter Player CAR",
                "B": "Epiphone J-45 EC AVS",
            }
        }
    ]
  }
  