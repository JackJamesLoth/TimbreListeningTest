// configure the test here
var TestConfig = {
    "TestName": "TRAINING",
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
            "Name": "Different sounding guitars",
            "TestID": "test_different",
            "Files": {
                "A_picking": "Epiphone J-15 EC Deluxe VS/picking.mp3",
                "B_picking": "Larry Carlton A3-D VS/picking.mp3",
                "A_strumming": "Epiphone J-15 EC Deluxe VS/strumming.mp3",
                "B_strumming": "Larry Carlton A3-D VS/strumming.mp3",
                "A_fingerstyle": "Epiphone J-15 EC Deluxe VS/fingerstyle.mp3",
                "B_fingerstyle": "Larry Carlton A3-D VS/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Epiphone J-15 EC Deluxe VS",
                "B": "Larry Carlton A3-D VS",
            }
        },
        {
            "Name": "Similar sounding guitars",
            "TestID": "test_similar",
            "Files": {
                "A_picking": "Maton EBW70C Blackwood/picking.mp3",
                "B_picking": "Epiphone Masterbilt Frontier/picking.mp3",
                "A_strumming": "Maton EBW70C Blackwood/strumming.mp3",
                "B_strumming": "Epiphone Masterbilt Frontier/strumming.mp3",
                "A_fingerstyle": "Maton EBW70C Blackwood/fingerstyle.mp3",
                "B_fingerstyle": "Epiphone Masterbilt Frontier/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Maton EBW70C Blackwood",
                "B": "Epiphone Masterbilt Frontier",
            }
        },
    ]
  }
  