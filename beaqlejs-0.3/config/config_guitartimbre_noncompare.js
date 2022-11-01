// configure the test here
var TestConfigStage1 = {
    "TestName": "Timbre Assessment of Individual Guitars (Stage 1)",
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
            "TestID": "test_cort",
            "Files": {
                "A_picking": "cort_picking.wav",
                "A_strumming": "cort_strumming.wav",
                "A_fingerstyle": "cort_fingerstyle.wav",
            },
            "Guitars": {
                "A": "cort",
            }
        },
        {
            "Name": "Test 2",
            "TestID": "test_dangelico",
            "Files": {
                "A_picking": "dangelico_picking.wav",
                "A_strumming": "dangelico_strumming.wav",
                "A_fingerstyle": "dangelico_fingerstyle.wav",
            },
            "Guitars": {
                "A": "dangelico",
            }
        },
        {
            "Name": "Test 3",
            "TestID": "test_furch",
            "Files": {
                "A_picking": "furch_picking.wav",
                "A_strumming": "furch_strumming.wav",
                "A_fingerstyle": "furch_fingerstyle.wav",
            },
            "Guitars": {
                "A": "furch",
            }
        },
        {
            "Name": "Test 4",
            "TestID": "test_recordingking",
            "Files": {
                "A_picking": "recordingking_picking.wav",
                "A_strumming": "recordingking_strumming.wav",
                "A_fingerstyle": "recordingking_fingerstyle.wav",
            },
            "Guitars": {
                "A": "recordingking",
            }
        },
        {
            "Name": "Test 5",
            "TestID": "test_fender",
            "Files": {
                "A_picking": "fender_picking.wav",
                "A_strumming": "fender_strumming.wav",
                "A_fingerstyle": "fender_fingerstyle.wav",
            },
            "Guitars": {
                "A": "fender",
            }
        },
        {
            "Name": "Test 6",
            "TestID": "test_seagullS6",
            "Files": {
                "A_picking": "seagullS6_picking.wav",
                "A_strumming": "seagullS6_strumming.wav",
                "A_fingerstyle": "seagullS6_fingerstyle.wav",
            },
            "Guitars": {
                "A": "seagullS6",
            }
        },
        {
            "Name": "Test 7",
            "TestID": "test_takamine",
            "Files": {
                "A_picking": "takamine_picking.wav",
                "A_strumming": "takamine_strumming.wav",
                "A_fingerstyle": "takamine_fingerstyle.wav",
            },
            "Guitars": {
                "A": "takamine",
            }
        },
        {
            "Name": "Test 8",
            "TestID": "test_epiphone",
            "Files": {
                "A_picking": "epiphone_picking.wav",
                "A_strumming": "epiphone_strumming.wav",
                "A_fingerstyle": "epiphone_fingerstyle.wav",
            },
            "Guitars": {
                "A": "epiphone",
            }
        },
        {
            "Name": "Test 9",
            "TestID": "test_lag",
            "Files": {
                "A_picking": "lag_picking.wav",
                "A_strumming": "lag_strumming.wav",
                "A_fingerstyle": "lag_fingerstyle.wav",
            },
            "Guitars": {
                "A": "lag",
            }
        },
        {
            "Name": "Test 10",
            "TestID": "test_seagullartist",
            "Files": {
                "A_picking": "seagullartist_picking.wav",
                "A_strumming": "seagullartist_strumming.wav",
                "A_fingerstyle": "seagullartist_fingerstyle.wav",
            },
            "Guitars": {
                "A": "seagullartist",
            }
        },
    ]
  }
  