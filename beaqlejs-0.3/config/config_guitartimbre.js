// configure the test here
var TestConfigStage2 = {
    "TestName": "Timbre Comparison of Paired Guitars (Stage 2)",
    "LoopByDefault": false,
    "ShowFileIDs": false,
    "ShowResults": true,
    "EnableABLoop": true,
    "EnableOnlineSubmission": true,
    "RandomizeFileOrder": true,
    "RandomizeTestOrder": true,
    "UseTestOrder": false,
    "TestOrder": [0,1,44,2,43,3,42,4,41,5,40,6,39,7,38,8,37,9,36,10,35,11,34,12,33,13,32,14,31,15,30,16,29,17,28,18,27,19,26,20,25,21,24,22,23],
    "BeaqleServiceURL": "web_service/beaqleJS_Service.php",
    "SupervisorContact": "j.j.loth@qmul.ac.uk",
    "AudioRoot": "audio/",
    "Testsets": [
        {
            "Name": "Test 1",
            "TestID": "test_cort_dangelico",
            "Files": {
                "A_picking": "cort_picking.wav",
                "B_picking": "dangelico_picking.wav",
                "A_strumming": "cort_strumming.wav",
                "B_strumming": "dangelico_strumming.wav",
                "A_fingerstyle": "cort_fingerstyle.wav",
                "B_fingerstyle": "dangelico_fingerstyle.wav",
            },
            "Guitars": {
                "A": "cort",
                "B": "dangelico",
            }
        },
        {
            "Name": "Test 2",
            "TestID": "test_cort_furch",
            "Files": {
                "A_picking": "cort_picking.wav",
                "B_picking": "furch_picking.wav",
                "A_strumming": "cort_strumming.wav",
                "B_strumming": "furch_strumming.wav",
                "A_fingerstyle": "cort_fingerstyle.wav",
                "B_fingerstyle": "furch_fingerstyle.wav",
            },
            "Guitars": {
                "A": "cort",
                "B": "furch",
            }
        },
        {
            "Name": "Test 3",
            "TestID": "test_cort_recordingking",
            "Files": {
                "A_picking": "cort_picking.wav",
                "B_picking": "recordingking_picking.wav",
                "A_strumming": "cort_strumming.wav",
                "B_strumming": "recordingking_strumming.wav",
                "A_fingerstyle": "cort_fingerstyle.wav",
                "B_fingerstyle": "recordingking_fingerstyle.wav",
            },
            "Guitars": {
                "A": "cort",
                "B": "recordingking",
            }
        },
        {
            "Name": "Test 4",
            "TestID": "test_cort_fender",
            "Files": {
                "A_picking": "cort_picking.wav",
                "B_picking": "fender_picking.wav",
                "A_strumming": "cort_strumming.wav",
                "B_strumming": "fender_strumming.wav",
                "A_fingerstyle": "cort_fingerstyle.wav",
                "B_fingerstyle": "fender_fingerstyle.wav",
            },
            "Guitars": {
                "A": "cort",
                "B": "fender",
            }
        },
        {
            "Name": "Test 5",
            "TestID": "test_cort_seagullS6",
            "Files": {
                "A_picking": "cort_picking.wav",
                "B_picking": "seagullS6_picking.wav",
                "A_strumming": "cort_strumming.wav",
                "B_strumming": "seagullS6_strumming.wav",
                "A_fingerstyle": "cort_fingerstyle.wav",
                "B_fingerstyle": "seagullS6_fingerstyle.wav",
            },
            "Guitars": {
                "A": "cort",
                "B": "seagullS6",
            }
        },
        {
            "Name": "Test 6",
            "TestID": "test_cort_takamine",
            "Files": {
                "A_picking": "cort_picking.wav",
                "B_picking": "takamine_picking.wav",
                "A_strumming": "cort_strumming.wav",
                "B_strumming": "takamine_strumming.wav",
                "A_fingerstyle": "cort_fingerstyle.wav",
                "B_fingerstyle": "takamine_fingerstyle.wav",
            },
            "Guitars": {
                "A": "cort",
                "B": "takamine",
            }
        },
        {
            "Name": "Test 7",
            "TestID": "test_cort_epiphone",
            "Files": {
                "A_picking": "cort_picking.wav",
                "B_picking": "epiphone_picking.wav",
                "A_strumming": "cort_strumming.wav",
                "B_strumming": "epiphone_strumming.wav",
                "A_fingerstyle": "cort_fingerstyle.wav",
                "B_fingerstyle": "epiphone_fingerstyle.wav",
            },
            "Guitars": {
                "A": "cort",
                "B": "epiphone",
            }
        },
        {
            "Name": "Test 8",
            "TestID": "test_cort_lag",
            "Files": {
                "A_picking": "cort_picking.wav",
                "B_picking": "lag_picking.wav",
                "A_strumming": "cort_strumming.wav",
                "B_strumming": "lag_strumming.wav",
                "A_fingerstyle": "cort_fingerstyle.wav",
                "B_fingerstyle": "lag_fingerstyle.wav",
            },
            "Guitars": {
                "A": "cort",
                "B": "lag",
            }
        },
        {
            "Name": "Test 9",
            "TestID": "test_cort_seagullartist",
            "Files": {
                "A_picking": "cort_picking.wav",
                "B_picking": "seagullartist_picking.wav",
                "A_strumming": "cort_strumming.wav",
                "B_strumming": "seagullartist_strumming.wav",
                "A_fingerstyle": "cort_fingerstyle.wav",
                "B_fingerstyle": "seagullartist_fingerstyle.wav",
            },
            "Guitars": {
                "A": "cort",
                "B": "seagullartist",
            }
        },
        {
            "Name": "Test 10",
            "TestID": "test_dangelico_furch",
            "Files": {
                "A_picking": "dangelico_picking.wav",
                "B_picking": "furch_picking.wav",
                "A_strumming": "dangelico_strumming.wav",
                "B_strumming": "furch_strumming.wav",
                "A_fingerstyle": "dangelico_fingerstyle.wav",
                "B_fingerstyle": "furch_fingerstyle.wav",
            },
            "Guitars": {
                "A": "dangelico",
                "B": "furch",
            }
        },
        {
            "Name": "Test 11",
            "TestID": "test_dangelico_recordingking",
            "Files": {
                "A_picking": "dangelico_picking.wav",
                "B_picking": "recordingking_picking.wav",
                "A_strumming": "dangelico_strumming.wav",
                "B_strumming": "recordingking_strumming.wav",
                "A_fingerstyle": "dangelico_fingerstyle.wav",
                "B_fingerstyle": "recordingking_fingerstyle.wav",
            },
            "Guitars": {
                "A": "dangelico",
                "B": "recordingking",
            }
        },
        {
            "Name": "Test 12",
            "TestID": "test_dangelico_fender",
            "Files": {
                "A_picking": "dangelico_picking.wav",
                "B_picking": "fender_picking.wav",
                "A_strumming": "dangelico_strumming.wav",
                "B_strumming": "fender_strumming.wav",
                "A_fingerstyle": "dangelico_fingerstyle.wav",
                "B_fingerstyle": "fender_fingerstyle.wav",
            },
            "Guitars": {
                "A": "dangelico",
                "B": "fender",
            }
        },
        {
            "Name": "Test 13",
            "TestID": "test_dangelico_seagullS6",
            "Files": {
                "A_picking": "dangelico_picking.wav",
                "B_picking": "seagullS6_picking.wav",
                "A_strumming": "dangelico_strumming.wav",
                "B_strumming": "seagullS6_strumming.wav",
                "A_fingerstyle": "dangelico_fingerstyle.wav",
                "B_fingerstyle": "seagullS6_fingerstyle.wav",
            },
            "Guitars": {
                "A": "dangelico",
                "B": "seagullS6",
            }
        },
        {
            "Name": "Test 14",
            "TestID": "test_dangelico_takamine",
            "Files": {
                "A_picking": "dangelico_picking.wav",
                "B_picking": "takamine_picking.wav",
                "A_strumming": "dangelico_strumming.wav",
                "B_strumming": "takamine_strumming.wav",
                "A_fingerstyle": "dangelico_fingerstyle.wav",
                "B_fingerstyle": "takamine_fingerstyle.wav",
            },
            "Guitars": {
                "A": "dangelico",
                "B": "takamine",
            }
        },
        {
            "Name": "Test 15",
            "TestID": "test_dangelico_epiphone",
            "Files": {
                "A_picking": "dangelico_picking.wav",
                "B_picking": "epiphone_picking.wav",
                "A_strumming": "dangelico_strumming.wav",
                "B_strumming": "epiphone_strumming.wav",
                "A_fingerstyle": "dangelico_fingerstyle.wav",
                "B_fingerstyle": "epiphone_fingerstyle.wav",
            },
            "Guitars": {
                "A": "dangelico",
                "B": "epiphone",
            }
        },
        {
            "Name": "Test 16",
            "TestID": "test_dangelico_lag",
            "Files": {
                "A_picking": "dangelico_picking.wav",
                "B_picking": "lag_picking.wav",
                "A_strumming": "dangelico_strumming.wav",
                "B_strumming": "lag_strumming.wav",
                "A_fingerstyle": "dangelico_fingerstyle.wav",
                "B_fingerstyle": "lag_fingerstyle.wav",
            },
            "Guitars": {
                "A": "dangelico",
                "B": "lag",
            }
        },
        {
            "Name": "Test 17",
            "TestID": "test_dangelico_seagullartist",
            "Files": {
                "A_picking": "dangelico_picking.wav",
                "B_picking": "seagullartist_picking.wav",
                "A_strumming": "dangelico_strumming.wav",
                "B_strumming": "seagullartist_strumming.wav",
                "A_fingerstyle": "dangelico_fingerstyle.wav",
                "B_fingerstyle": "seagullartist_fingerstyle.wav",
            },
            "Guitars": {
                "A": "dangelico",
                "B": "seagullartist",
            }
        },
        {
            "Name": "Test 18",
            "TestID": "test_furch_recordingking",
            "Files": {
                "A_picking": "furch_picking.wav",
                "B_picking": "recordingking_picking.wav",
                "A_strumming": "furch_strumming.wav",
                "B_strumming": "recordingking_strumming.wav",
                "A_fingerstyle": "furch_fingerstyle.wav",
                "B_fingerstyle": "recordingking_fingerstyle.wav",
            },
            "Guitars": {
                "A": "furch",
                "B": "recordingking",
            }
        },
        {
            "Name": "Test 19",
            "TestID": "test_furch_fender",
            "Files": {
                "A_picking": "furch_picking.wav",
                "B_picking": "fender_picking.wav",
                "A_strumming": "furch_strumming.wav",
                "B_strumming": "fender_strumming.wav",
                "A_fingerstyle": "furch_fingerstyle.wav",
                "B_fingerstyle": "fender_fingerstyle.wav",
            },
            "Guitars": {
                "A": "furch",
                "B": "fender",
            }
        },
        {
            "Name": "Test 20",
            "TestID": "test_furch_seagullS6",
            "Files": {
                "A_picking": "furch_picking.wav",
                "B_picking": "seagullS6_picking.wav",
                "A_strumming": "furch_strumming.wav",
                "B_strumming": "seagullS6_strumming.wav",
                "A_fingerstyle": "furch_fingerstyle.wav",
                "B_fingerstyle": "seagullS6_fingerstyle.wav",
            },
            "Guitars": {
                "A": "furch",
                "B": "seagullS6",
            }
        },
        {
            "Name": "Test 21",
            "TestID": "test_furch_takamine",
            "Files": {
                "A_picking": "furch_picking.wav",
                "B_picking": "takamine_picking.wav",
                "A_strumming": "furch_strumming.wav",
                "B_strumming": "takamine_strumming.wav",
                "A_fingerstyle": "furch_fingerstyle.wav",
                "B_fingerstyle": "takamine_fingerstyle.wav",
            },
            "Guitars": {
                "A": "furch",
                "B": "takamine",
            }
        },
        {
            "Name": "Test 22",
            "TestID": "test_furch_epiphone",
            "Files": {
                "A_picking": "furch_picking.wav",
                "B_picking": "epiphone_picking.wav",
                "A_strumming": "furch_strumming.wav",
                "B_strumming": "epiphone_strumming.wav",
                "A_fingerstyle": "furch_fingerstyle.wav",
                "B_fingerstyle": "epiphone_fingerstyle.wav",
            },
            "Guitars": {
                "A": "furch",
                "B": "epiphone",
            }
        },
        {
            "Name": "Test 23",
            "TestID": "test_furch_lag",
            "Files": {
                "A_picking": "furch_picking.wav",
                "B_picking": "lag_picking.wav",
                "A_strumming": "furch_strumming.wav",
                "B_strumming": "lag_strumming.wav",
                "A_fingerstyle": "furch_fingerstyle.wav",
                "B_fingerstyle": "lag_fingerstyle.wav",
            },
            "Guitars": {
                "A": "furch",
                "B": "lag",
            }
        },
        {
            "Name": "Test 24",
            "TestID": "test_furch_seagullartist",
            "Files": {
                "A_picking": "furch_picking.wav",
                "B_picking": "seagullartist_picking.wav",
                "A_strumming": "furch_strumming.wav",
                "B_strumming": "seagullartist_strumming.wav",
                "A_fingerstyle": "furch_fingerstyle.wav",
                "B_fingerstyle": "seagullartist_fingerstyle.wav",
            },
            "Guitars": {
                "A": "furch",
                "B": "seagullartist",
            }
        },
        {
            "Name": "Test 25",
            "TestID": "test_recordingking_fender",
            "Files": {
                "A_picking": "recordingking_picking.wav",
                "B_picking": "fender_picking.wav",
                "A_strumming": "recordingking_strumming.wav",
                "B_strumming": "fender_strumming.wav",
                "A_fingerstyle": "recordingking_fingerstyle.wav",
                "B_fingerstyle": "fender_fingerstyle.wav",
            },
            "Guitars": {
                "A": "recordingking",
                "B": "fender",
            }
        },
        {
            "Name": "Test 26",
            "TestID": "test_recordingking_seagullS6",
            "Files": {
                "A_picking": "recordingking_picking.wav",
                "B_picking": "seagullS6_picking.wav",
                "A_strumming": "recordingking_strumming.wav",
                "B_strumming": "seagullS6_strumming.wav",
                "A_fingerstyle": "recordingking_fingerstyle.wav",
                "B_fingerstyle": "seagullS6_fingerstyle.wav",
            },
            "Guitars": {
                "A": "recordingking",
                "B": "seagullS6",
            }
        },
        {
            "Name": "Test 27",
            "TestID": "test_recordingking_takamine",
            "Files": {
                "A_picking": "recordingking_picking.wav",
                "B_picking": "takamine_picking.wav",
                "A_strumming": "recordingking_strumming.wav",
                "B_strumming": "takamine_strumming.wav",
                "A_fingerstyle": "recordingking_fingerstyle.wav",
                "B_fingerstyle": "takamine_fingerstyle.wav",
            },
            "Guitars": {
                "A": "recordingking",
                "B": "takamine",
            }
        },
        {
            "Name": "Test 28",
            "TestID": "test_recordingking_epiphone",
            "Files": {
                "A_picking": "recordingking_picking.wav",
                "B_picking": "epiphone_picking.wav",
                "A_strumming": "recordingking_strumming.wav",
                "B_strumming": "epiphone_strumming.wav",
                "A_fingerstyle": "recordingking_fingerstyle.wav",
                "B_fingerstyle": "epiphone_fingerstyle.wav",
            },
            "Guitars": {
                "A": "recordingking",
                "B": "epiphone",
            }
        },
        {
            "Name": "Test 29",
            "TestID": "test_recordingking_lag",
            "Files": {
                "A_picking": "recordingking_picking.wav",
                "B_picking": "lag_picking.wav",
                "A_strumming": "recordingking_strumming.wav",
                "B_strumming": "lag_strumming.wav",
                "A_fingerstyle": "recordingking_fingerstyle.wav",
                "B_fingerstyle": "lag_fingerstyle.wav",
            },
            "Guitars": {
                "A": "recordingking",
                "B": "lag",
            }
        },
        {
            "Name": "Test 30",
            "TestID": "test_recordingking_seagullartist",
            "Files": {
                "A_picking": "recordingking_picking.wav",
                "B_picking": "seagullartist_picking.wav",
                "A_strumming": "recordingking_strumming.wav",
                "B_strumming": "seagullartist_strumming.wav",
                "A_fingerstyle": "recordingking_fingerstyle.wav",
                "B_fingerstyle": "seagullartist_fingerstyle.wav",
            },
            "Guitars": {
                "A": "recordingking",
                "B": "seagullartist",
            }
        },
        {
            "Name": "Test 31",
            "TestID": "test_fender_seagullS6",
            "Files": {
                "A_picking": "fender_picking.wav",
                "B_picking": "seagullS6_picking.wav",
                "A_strumming": "fender_strumming.wav",
                "B_strumming": "seagullS6_strumming.wav",
                "A_fingerstyle": "fender_fingerstyle.wav",
                "B_fingerstyle": "seagullS6_fingerstyle.wav",
            },
            "Guitars": {
                "A": "fender",
                "B": "seagullS6",
            }
        },
        {
            "Name": "Test 32",
            "TestID": "test_fender_takamine",
            "Files": {
                "A_picking": "fender_picking.wav",
                "B_picking": "takamine_picking.wav",
                "A_strumming": "fender_strumming.wav",
                "B_strumming": "takamine_strumming.wav",
                "A_fingerstyle": "fender_fingerstyle.wav",
                "B_fingerstyle": "takamine_fingerstyle.wav",
            },
            "Guitars": {
                "A": "fender",
                "B": "takamine",
            }
        },
        {
            "Name": "Test 33",
            "TestID": "test_fender_epiphone",
            "Files": {
                "A_picking": "fender_picking.wav",
                "B_picking": "epiphone_picking.wav",
                "A_strumming": "fender_strumming.wav",
                "B_strumming": "epiphone_strumming.wav",
                "A_fingerstyle": "fender_fingerstyle.wav",
                "B_fingerstyle": "epiphone_fingerstyle.wav",
            },
            "Guitars": {
                "A": "fender",
                "B": "epiphone",
            }
        },
        {
            "Name": "Test 34",
            "TestID": "test_fender_lag",
            "Files": {
                "A_picking": "fender_picking.wav",
                "B_picking": "lag_picking.wav",
                "A_strumming": "fender_strumming.wav",
                "B_strumming": "lag_strumming.wav",
                "A_fingerstyle": "fender_fingerstyle.wav",
                "B_fingerstyle": "lag_fingerstyle.wav",
            },
            "Guitars": {
                "A": "fender",
                "B": "lag",
            }
        },
        {
            "Name": "Test 35",
            "TestID": "test_fender_seagullartist",
            "Files": {
                "A_picking": "fender_picking.wav",
                "B_picking": "seagullartist_picking.wav",
                "A_strumming": "fender_strumming.wav",
                "B_strumming": "seagullartist_strumming.wav",
                "A_fingerstyle": "fender_fingerstyle.wav",
                "B_fingerstyle": "seagullartist_fingerstyle.wav",
            },
            "Guitars": {
                "A": "fender",
                "B": "seagullartist",
            }
        },
        {
            "Name": "Test 36",
            "TestID": "test_seagullS6_takamine",
            "Files": {
                "A_picking": "seagullS6_picking.wav",
                "B_picking": "takamine_picking.wav",
                "A_strumming": "seagullS6_strumming.wav",
                "B_strumming": "takamine_strumming.wav",
                "A_fingerstyle": "seagullS6_fingerstyle.wav",
                "B_fingerstyle": "takamine_fingerstyle.wav",
            },
            "Guitars": {
                "A": "seagullS6",
                "B": "takamine",
            }
        },
        {
            "Name": "Test 37",
            "TestID": "test_seagullS6_epiphone",
            "Files": {
                "A_picking": "seagullS6_picking.wav",
                "B_picking": "epiphone_picking.wav",
                "A_strumming": "seagullS6_strumming.wav",
                "B_strumming": "epiphone_strumming.wav",
                "A_fingerstyle": "seagullS6_fingerstyle.wav",
                "B_fingerstyle": "epiphone_fingerstyle.wav",
            },
            "Guitars": {
                "A": "seagullS6",
                "B": "epiphone",
            }
        },
        {
            "Name": "Test 38",
            "TestID": "test_seagullS6_lag",
            "Files": {
                "A_picking": "seagullS6_picking.wav",
                "B_picking": "lag_picking.wav",
                "A_strumming": "seagullS6_strumming.wav",
                "B_strumming": "lag_strumming.wav",
                "A_fingerstyle": "seagullS6_fingerstyle.wav",
                "B_fingerstyle": "lag_fingerstyle.wav",
            },
            "Guitars": {
                "A": "seagullS6",
                "B": "lag",
            }
        },
        {
            "Name": "Test 39",
            "TestID": "test_seagullS6_seagullartist",
            "Files": {
                "A_picking": "seagullS6_picking.wav",
                "B_picking": "seagullartist_picking.wav",
                "A_strumming": "seagullS6_strumming.wav",
                "B_strumming": "seagullartist_strumming.wav",
                "A_fingerstyle": "seagullS6_fingerstyle.wav",
                "B_fingerstyle": "seagullartist_fingerstyle.wav",
            },
            "Guitars": {
                "A": "seagullS6",
                "B": "seagullartist",
            }
        },
        {
            "Name": "Test 40",
            "TestID": "test_takamine_epiphone",
            "Files": {
                "A_picking": "takamine_picking.wav",
                "B_picking": "epiphone_picking.wav",
                "A_strumming": "takamine_strumming.wav",
                "B_strumming": "epiphone_strumming.wav",
                "A_fingerstyle": "takamine_fingerstyle.wav",
                "B_fingerstyle": "epiphone_fingerstyle.wav",
            },
            "Guitars": {
                "A": "takamine",
                "B": "epiphone",
            }
        },
        {
            "Name": "Test 41",
            "TestID": "test_takamine_lag",
            "Files": {
                "A_picking": "takamine_picking.wav",
                "B_picking": "lag_picking.wav",
                "A_strumming": "takamine_strumming.wav",
                "B_strumming": "lag_strumming.wav",
                "A_fingerstyle": "takamine_fingerstyle.wav",
                "B_fingerstyle": "lag_fingerstyle.wav",
            },
            "Guitars": {
                "A": "takamine",
                "B": "lag",
            }
        },
        {
            "Name": "Test 42",
            "TestID": "test_takamine_seagullartist",
            "Files": {
                "A_picking": "takamine_picking.wav",
                "B_picking": "seagullartist_picking.wav",
                "A_strumming": "takamine_strumming.wav",
                "B_strumming": "seagullartist_strumming.wav",
                "A_fingerstyle": "takamine_fingerstyle.wav",
                "B_fingerstyle": "seagullartist_fingerstyle.wav",
            },
            "Guitars": {
                "A": "takamine",
                "B": "seagullartist",
            }
        },
        {
            "Name": "Test 43",
            "TestID": "test_epiphone_lag",
            "Files": {
                "A_picking": "epiphone_picking.wav",
                "B_picking": "lag_picking.wav",
                "A_strumming": "epiphone_strumming.wav",
                "B_strumming": "lag_strumming.wav",
                "A_fingerstyle": "epiphone_fingerstyle.wav",
                "B_fingerstyle": "lag_fingerstyle.wav",
            },
            "Guitars": {
                "A": "epiphone",
                "B": "lag",
            }
        },
        {
            "Name": "Test 44",
            "TestID": "test_epiphone_seagullartist",
            "Files": {
                "A_picking": "epiphone_picking.wav",
                "B_picking": "seagullartist_picking.wav",
                "A_strumming": "epiphone_strumming.wav",
                "B_strumming": "seagullartist_strumming.wav",
                "A_fingerstyle": "epiphone_fingerstyle.wav",
                "B_fingerstyle": "seagullartist_fingerstyle.wav",
            },
            "Guitars": {
                "A": "epiphone",
                "B": "seagullartist",
            }
        },
        {
            "Name": "Test 45",
            "TestID": "test_lag_seagullartist",
            "Files": {
                "A_picking": "lag_picking.wav",
                "B_picking": "seagullartist_picking.wav",
                "A_strumming": "lag_strumming.wav",
                "B_strumming": "seagullartist_strumming.wav",
                "A_fingerstyle": "lag_fingerstyle.wav",
                "B_fingerstyle": "seagullartist_fingerstyle.wav",
            },
            "Guitars": {
                "A": "lag",
                "B": "seagullartist",
            }
        },
    ]
  }
  