// configure the test here
var TestConfig = {
    "TestName": "Guitar Timbre Listening Study",
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
            "TestID": "test_CortEarth100NS_DAngelicoPremierBoweryLS",
            "Files": {
                "A_picking": "Cort Earth 100 NS/picking.mp3",
                "B_picking": "DAngelico Premier Bowery LS/picking.mp3",
                "A_strumming": "Cort Earth 100 NS/strumming.mp3",
                "B_strumming": "DAngelico Premier Bowery LS/strumming.mp3",
                "A_fingerstyle": "Cort Earth 100 NS/fingerstyle.mp3",
                "B_fingerstyle": "DAngelico Premier Bowery LS/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Cort Earth 100 NS",
                "B": "DAngelico Premier Bowery LS",
            }
        },
    ]
  }
  