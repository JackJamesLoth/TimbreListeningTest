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
            "TestID": "test_EpiphoneJ-15ECDeluxeVS",
            "Files": {
                "A_picking": "TR_epiphone_picking.wav",
                "A_strumming": "TR_epiphone_strumming.wav",
                "A_fingerstyle": "TR_epiphone_fingerstyle.wav",
            },
            "Guitars": {
                "A": "Epiphone J-15 EC Deluxe VS"
            }
        },
        {
            "Name": "Test 2",
            "TestID": "test_Dangelico_Epiphone",
            "Files": {
                "A_picking": "TR_dangelico_picking.wav",
                "B_picking": "TR_epiphone_picking.wav",
                "A_strumming": "TR_dangelico_strumming.wav",
                "B_strumming": "TR_epiphone_strumming.wav",
                "A_fingerstyle": "TR_dangelico_fingerstyle.wav",
                "B_fingerstyle": "TR_epiphone_fingerstyle.wav",
            },
            "Guitars": {
                "A": "DAngelico Premier Bowery ANM",
                "B": "Epiphone J-15 EC Deluxe VS",
            }
        }
    ]
  }
  