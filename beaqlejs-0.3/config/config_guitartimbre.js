// configure the test here
var TestConfigStage2 = {
    "TestName": "Guitar Timbre Listening Study Stage 2",
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
        {
            "Name": "Test 2",
            "TestID": "test_CortEarth100NS_LarryCarltonA3-DNT",
            "Files": {
                "A_picking": "Cort Earth 100 NS/picking.mp3",
                "B_picking": "Larry Carlton A3-D NT/picking.mp3",
                "A_strumming": "Cort Earth 100 NS/strumming.mp3",
                "B_strumming": "Larry Carlton A3-D NT/strumming.mp3",
                "A_fingerstyle": "Cort Earth 100 NS/fingerstyle.mp3",
                "B_fingerstyle": "Larry Carlton A3-D NT/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Cort Earth 100 NS",
                "B": "Larry Carlton A3-D NT",
            }
        },
        {
            "Name": "Test 3",
            "TestID": "test_CortEarth100NS_RecordingKingRDS-11-FE3-TBR",
            "Files": {
                "A_picking": "Cort Earth 100 NS/picking.mp3",
                "B_picking": "Recording King RDS-11-FE3-TBR/picking.mp3",
                "A_strumming": "Cort Earth 100 NS/strumming.mp3",
                "B_strumming": "Recording King RDS-11-FE3-TBR/strumming.mp3",
                "A_fingerstyle": "Cort Earth 100 NS/fingerstyle.mp3",
                "B_fingerstyle": "Recording King RDS-11-FE3-TBR/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Cort Earth 100 NS",
                "B": "Recording King RDS-11-FE3-TBR",
            }
        },
        {
            "Name": "Test 4",
            "TestID": "test_CortEarth100NS_FenderRedondoSpecialMAH",
            "Files": {
                "A_picking": "Cort Earth 100 NS/picking.mp3",
                "B_picking": "Fender Redondo Special MAH/picking.mp3",
                "A_strumming": "Cort Earth 100 NS/strumming.mp3",
                "B_strumming": "Fender Redondo Special MAH/strumming.mp3",
                "A_fingerstyle": "Cort Earth 100 NS/fingerstyle.mp3",
                "B_fingerstyle": "Fender Redondo Special MAH/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Cort Earth 100 NS",
                "B": "Fender Redondo Special MAH",
            }
        },
        {
            "Name": "Test 5",
            "TestID": "test_CortEarth100NS_SeagullS6OriginalNatural",
            "Files": {
                "A_picking": "Cort Earth 100 NS/picking.mp3",
                "B_picking": "Seagull S6 Original Natural/picking.mp3",
                "A_strumming": "Cort Earth 100 NS/strumming.mp3",
                "B_strumming": "Seagull S6 Original Natural/strumming.mp3",
                "A_fingerstyle": "Cort Earth 100 NS/fingerstyle.mp3",
                "B_fingerstyle": "Seagull S6 Original Natural/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Cort Earth 100 NS",
                "B": "Seagull S6 Original Natural",
            }
        },
        {
            "Name": "Test 6",
            "TestID": "test_CortEarth100NS_CortGoldOC8Natural",
            "Files": {
                "A_picking": "Cort Earth 100 NS/picking.mp3",
                "B_picking": "Cort Gold OC8 Natural/picking.mp3",
                "A_strumming": "Cort Earth 100 NS/strumming.mp3",
                "B_strumming": "Cort Gold OC8 Natural/strumming.mp3",
                "A_fingerstyle": "Cort Earth 100 NS/fingerstyle.mp3",
                "B_fingerstyle": "Cort Gold OC8 Natural/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Cort Earth 100 NS",
                "B": "Cort Gold OC8 Natural",
            }
        },
        {
            "Name": "Test 7",
            "TestID": "test_CortEarth100NS_EpiphoneHummingbird",
            "Files": {
                "A_picking": "Cort Earth 100 NS/picking.mp3",
                "B_picking": "Epiphone Hummingbird/picking.mp3",
                "A_strumming": "Cort Earth 100 NS/strumming.mp3",
                "B_strumming": "Epiphone Hummingbird/strumming.mp3",
                "A_fingerstyle": "Cort Earth 100 NS/fingerstyle.mp3",
                "B_fingerstyle": "Epiphone Hummingbird/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Cort Earth 100 NS",
                "B": "Epiphone Hummingbird",
            }
        },
        {
            "Name": "Test 8",
            "TestID": "test_CortEarth100NS_LAGTHV20DCETramontaneHyVibe",
            "Files": {
                "A_picking": "Cort Earth 100 NS/picking.mp3",
                "B_picking": "LAG THV20DCE Tramontane HyVibe/picking.mp3",
                "A_strumming": "Cort Earth 100 NS/strumming.mp3",
                "B_strumming": "LAG THV20DCE Tramontane HyVibe/strumming.mp3",
                "A_fingerstyle": "Cort Earth 100 NS/fingerstyle.mp3",
                "B_fingerstyle": "LAG THV20DCE Tramontane HyVibe/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Cort Earth 100 NS",
                "B": "LAG THV20DCE Tramontane HyVibe",
            }
        },
        {
            "Name": "Test 9",
            "TestID": "test_CortEarth100NS_SeagullArtistMosaicCHCWBourbonB",
            "Files": {
                "A_picking": "Cort Earth 100 NS/picking.mp3",
                "B_picking": "Seagull Artist Mosaic CH CW Bourbon B/picking.mp3",
                "A_strumming": "Cort Earth 100 NS/strumming.mp3",
                "B_strumming": "Seagull Artist Mosaic CH CW Bourbon B/strumming.mp3",
                "A_fingerstyle": "Cort Earth 100 NS/fingerstyle.mp3",
                "B_fingerstyle": "Seagull Artist Mosaic CH CW Bourbon B/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Cort Earth 100 NS",
                "B": "Seagull Artist Mosaic CH CW Bourbon B",
            }
        },
        {
            "Name": "Test 10",
            "TestID": "test_DAngelicoPremierBoweryLS_LarryCarltonA3-DNT",
            "Files": {
                "A_picking": "DAngelico Premier Bowery LS/picking.mp3",
                "B_picking": "Larry Carlton A3-D NT/picking.mp3",
                "A_strumming": "DAngelico Premier Bowery LS/strumming.mp3",
                "B_strumming": "Larry Carlton A3-D NT/strumming.mp3",
                "A_fingerstyle": "DAngelico Premier Bowery LS/fingerstyle.mp3",
                "B_fingerstyle": "Larry Carlton A3-D NT/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "DAngelico Premier Bowery LS",
                "B": "Larry Carlton A3-D NT",
            }
        },
        {
            "Name": "Test 11",
            "TestID": "test_DAngelicoPremierBoweryLS_RecordingKingRDS-11-FE3-TBR",
            "Files": {
                "A_picking": "DAngelico Premier Bowery LS/picking.mp3",
                "B_picking": "Recording King RDS-11-FE3-TBR/picking.mp3",
                "A_strumming": "DAngelico Premier Bowery LS/strumming.mp3",
                "B_strumming": "Recording King RDS-11-FE3-TBR/strumming.mp3",
                "A_fingerstyle": "DAngelico Premier Bowery LS/fingerstyle.mp3",
                "B_fingerstyle": "Recording King RDS-11-FE3-TBR/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "DAngelico Premier Bowery LS",
                "B": "Recording King RDS-11-FE3-TBR",
            }
        },
        {
            "Name": "Test 12",
            "TestID": "test_DAngelicoPremierBoweryLS_FenderRedondoSpecialMAH",
            "Files": {
                "A_picking": "DAngelico Premier Bowery LS/picking.mp3",
                "B_picking": "Fender Redondo Special MAH/picking.mp3",
                "A_strumming": "DAngelico Premier Bowery LS/strumming.mp3",
                "B_strumming": "Fender Redondo Special MAH/strumming.mp3",
                "A_fingerstyle": "DAngelico Premier Bowery LS/fingerstyle.mp3",
                "B_fingerstyle": "Fender Redondo Special MAH/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "DAngelico Premier Bowery LS",
                "B": "Fender Redondo Special MAH",
            }
        },
        {
            "Name": "Test 13",
            "TestID": "test_DAngelicoPremierBoweryLS_SeagullS6OriginalNatural",
            "Files": {
                "A_picking": "DAngelico Premier Bowery LS/picking.mp3",
                "B_picking": "Seagull S6 Original Natural/picking.mp3",
                "A_strumming": "DAngelico Premier Bowery LS/strumming.mp3",
                "B_strumming": "Seagull S6 Original Natural/strumming.mp3",
                "A_fingerstyle": "DAngelico Premier Bowery LS/fingerstyle.mp3",
                "B_fingerstyle": "Seagull S6 Original Natural/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "DAngelico Premier Bowery LS",
                "B": "Seagull S6 Original Natural",
            }
        },
        {
            "Name": "Test 14",
            "TestID": "test_DAngelicoPremierBoweryLS_CortGoldOC8Natural",
            "Files": {
                "A_picking": "DAngelico Premier Bowery LS/picking.mp3",
                "B_picking": "Cort Gold OC8 Natural/picking.mp3",
                "A_strumming": "DAngelico Premier Bowery LS/strumming.mp3",
                "B_strumming": "Cort Gold OC8 Natural/strumming.mp3",
                "A_fingerstyle": "DAngelico Premier Bowery LS/fingerstyle.mp3",
                "B_fingerstyle": "Cort Gold OC8 Natural/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "DAngelico Premier Bowery LS",
                "B": "Cort Gold OC8 Natural",
            }
        },
        {
            "Name": "Test 15",
            "TestID": "test_DAngelicoPremierBoweryLS_EpiphoneHummingbird",
            "Files": {
                "A_picking": "DAngelico Premier Bowery LS/picking.mp3",
                "B_picking": "Epiphone Hummingbird/picking.mp3",
                "A_strumming": "DAngelico Premier Bowery LS/strumming.mp3",
                "B_strumming": "Epiphone Hummingbird/strumming.mp3",
                "A_fingerstyle": "DAngelico Premier Bowery LS/fingerstyle.mp3",
                "B_fingerstyle": "Epiphone Hummingbird/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "DAngelico Premier Bowery LS",
                "B": "Epiphone Hummingbird",
            }
        },
        {
            "Name": "Test 16",
            "TestID": "test_DAngelicoPremierBoweryLS_LAGTHV20DCETramontaneHyVibe",
            "Files": {
                "A_picking": "DAngelico Premier Bowery LS/picking.mp3",
                "B_picking": "LAG THV20DCE Tramontane HyVibe/picking.mp3",
                "A_strumming": "DAngelico Premier Bowery LS/strumming.mp3",
                "B_strumming": "LAG THV20DCE Tramontane HyVibe/strumming.mp3",
                "A_fingerstyle": "DAngelico Premier Bowery LS/fingerstyle.mp3",
                "B_fingerstyle": "LAG THV20DCE Tramontane HyVibe/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "DAngelico Premier Bowery LS",
                "B": "LAG THV20DCE Tramontane HyVibe",
            }
        },
        {
            "Name": "Test 17",
            "TestID": "test_DAngelicoPremierBoweryLS_SeagullArtistMosaicCHCWBourbonB",
            "Files": {
                "A_picking": "DAngelico Premier Bowery LS/picking.mp3",
                "B_picking": "Seagull Artist Mosaic CH CW Bourbon B/picking.mp3",
                "A_strumming": "DAngelico Premier Bowery LS/strumming.mp3",
                "B_strumming": "Seagull Artist Mosaic CH CW Bourbon B/strumming.mp3",
                "A_fingerstyle": "DAngelico Premier Bowery LS/fingerstyle.mp3",
                "B_fingerstyle": "Seagull Artist Mosaic CH CW Bourbon B/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "DAngelico Premier Bowery LS",
                "B": "Seagull Artist Mosaic CH CW Bourbon B",
            }
        },
        {
            "Name": "Test 18",
            "TestID": "test_LarryCarltonA3-DNT_RecordingKingRDS-11-FE3-TBR",
            "Files": {
                "A_picking": "Larry Carlton A3-D NT/picking.mp3",
                "B_picking": "Recording King RDS-11-FE3-TBR/picking.mp3",
                "A_strumming": "Larry Carlton A3-D NT/strumming.mp3",
                "B_strumming": "Recording King RDS-11-FE3-TBR/strumming.mp3",
                "A_fingerstyle": "Larry Carlton A3-D NT/fingerstyle.mp3",
                "B_fingerstyle": "Recording King RDS-11-FE3-TBR/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Larry Carlton A3-D NT",
                "B": "Recording King RDS-11-FE3-TBR",
            }
        },
        {
            "Name": "Test 19",
            "TestID": "test_LarryCarltonA3-DNT_FenderRedondoSpecialMAH",
            "Files": {
                "A_picking": "Larry Carlton A3-D NT/picking.mp3",
                "B_picking": "Fender Redondo Special MAH/picking.mp3",
                "A_strumming": "Larry Carlton A3-D NT/strumming.mp3",
                "B_strumming": "Fender Redondo Special MAH/strumming.mp3",
                "A_fingerstyle": "Larry Carlton A3-D NT/fingerstyle.mp3",
                "B_fingerstyle": "Fender Redondo Special MAH/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Larry Carlton A3-D NT",
                "B": "Fender Redondo Special MAH",
            }
        },
        {
            "Name": "Test 20",
            "TestID": "test_LarryCarltonA3-DNT_SeagullS6OriginalNatural",
            "Files": {
                "A_picking": "Larry Carlton A3-D NT/picking.mp3",
                "B_picking": "Seagull S6 Original Natural/picking.mp3",
                "A_strumming": "Larry Carlton A3-D NT/strumming.mp3",
                "B_strumming": "Seagull S6 Original Natural/strumming.mp3",
                "A_fingerstyle": "Larry Carlton A3-D NT/fingerstyle.mp3",
                "B_fingerstyle": "Seagull S6 Original Natural/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Larry Carlton A3-D NT",
                "B": "Seagull S6 Original Natural",
            }
        },
        {
            "Name": "Test 21",
            "TestID": "test_LarryCarltonA3-DNT_CortGoldOC8Natural",
            "Files": {
                "A_picking": "Larry Carlton A3-D NT/picking.mp3",
                "B_picking": "Cort Gold OC8 Natural/picking.mp3",
                "A_strumming": "Larry Carlton A3-D NT/strumming.mp3",
                "B_strumming": "Cort Gold OC8 Natural/strumming.mp3",
                "A_fingerstyle": "Larry Carlton A3-D NT/fingerstyle.mp3",
                "B_fingerstyle": "Cort Gold OC8 Natural/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Larry Carlton A3-D NT",
                "B": "Cort Gold OC8 Natural",
            }
        },
        {
            "Name": "Test 22",
            "TestID": "test_LarryCarltonA3-DNT_EpiphoneHummingbird",
            "Files": {
                "A_picking": "Larry Carlton A3-D NT/picking.mp3",
                "B_picking": "Epiphone Hummingbird/picking.mp3",
                "A_strumming": "Larry Carlton A3-D NT/strumming.mp3",
                "B_strumming": "Epiphone Hummingbird/strumming.mp3",
                "A_fingerstyle": "Larry Carlton A3-D NT/fingerstyle.mp3",
                "B_fingerstyle": "Epiphone Hummingbird/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Larry Carlton A3-D NT",
                "B": "Epiphone Hummingbird",
            }
        },
        {
            "Name": "Test 23",
            "TestID": "test_LarryCarltonA3-DNT_LAGTHV20DCETramontaneHyVibe",
            "Files": {
                "A_picking": "Larry Carlton A3-D NT/picking.mp3",
                "B_picking": "LAG THV20DCE Tramontane HyVibe/picking.mp3",
                "A_strumming": "Larry Carlton A3-D NT/strumming.mp3",
                "B_strumming": "LAG THV20DCE Tramontane HyVibe/strumming.mp3",
                "A_fingerstyle": "Larry Carlton A3-D NT/fingerstyle.mp3",
                "B_fingerstyle": "LAG THV20DCE Tramontane HyVibe/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Larry Carlton A3-D NT",
                "B": "LAG THV20DCE Tramontane HyVibe",
            }
        },
        {
            "Name": "Test 24",
            "TestID": "test_LarryCarltonA3-DNT_SeagullArtistMosaicCHCWBourbonB",
            "Files": {
                "A_picking": "Larry Carlton A3-D NT/picking.mp3",
                "B_picking": "Seagull Artist Mosaic CH CW Bourbon B/picking.mp3",
                "A_strumming": "Larry Carlton A3-D NT/strumming.mp3",
                "B_strumming": "Seagull Artist Mosaic CH CW Bourbon B/strumming.mp3",
                "A_fingerstyle": "Larry Carlton A3-D NT/fingerstyle.mp3",
                "B_fingerstyle": "Seagull Artist Mosaic CH CW Bourbon B/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Larry Carlton A3-D NT",
                "B": "Seagull Artist Mosaic CH CW Bourbon B",
            }
        },
        {
            "Name": "Test 25",
            "TestID": "test_RecordingKingRDS-11-FE3-TBR_FenderRedondoSpecialMAH",
            "Files": {
                "A_picking": "Recording King RDS-11-FE3-TBR/picking.mp3",
                "B_picking": "Fender Redondo Special MAH/picking.mp3",
                "A_strumming": "Recording King RDS-11-FE3-TBR/strumming.mp3",
                "B_strumming": "Fender Redondo Special MAH/strumming.mp3",
                "A_fingerstyle": "Recording King RDS-11-FE3-TBR/fingerstyle.mp3",
                "B_fingerstyle": "Fender Redondo Special MAH/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Recording King RDS-11-FE3-TBR",
                "B": "Fender Redondo Special MAH",
            }
        },
        {
            "Name": "Test 26",
            "TestID": "test_RecordingKingRDS-11-FE3-TBR_SeagullS6OriginalNatural",
            "Files": {
                "A_picking": "Recording King RDS-11-FE3-TBR/picking.mp3",
                "B_picking": "Seagull S6 Original Natural/picking.mp3",
                "A_strumming": "Recording King RDS-11-FE3-TBR/strumming.mp3",
                "B_strumming": "Seagull S6 Original Natural/strumming.mp3",
                "A_fingerstyle": "Recording King RDS-11-FE3-TBR/fingerstyle.mp3",
                "B_fingerstyle": "Seagull S6 Original Natural/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Recording King RDS-11-FE3-TBR",
                "B": "Seagull S6 Original Natural",
            }
        },
        {
            "Name": "Test 27",
            "TestID": "test_RecordingKingRDS-11-FE3-TBR_CortGoldOC8Natural",
            "Files": {
                "A_picking": "Recording King RDS-11-FE3-TBR/picking.mp3",
                "B_picking": "Cort Gold OC8 Natural/picking.mp3",
                "A_strumming": "Recording King RDS-11-FE3-TBR/strumming.mp3",
                "B_strumming": "Cort Gold OC8 Natural/strumming.mp3",
                "A_fingerstyle": "Recording King RDS-11-FE3-TBR/fingerstyle.mp3",
                "B_fingerstyle": "Cort Gold OC8 Natural/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Recording King RDS-11-FE3-TBR",
                "B": "Cort Gold OC8 Natural",
            }
        },
        {
            "Name": "Test 28",
            "TestID": "test_RecordingKingRDS-11-FE3-TBR_EpiphoneHummingbird",
            "Files": {
                "A_picking": "Recording King RDS-11-FE3-TBR/picking.mp3",
                "B_picking": "Epiphone Hummingbird/picking.mp3",
                "A_strumming": "Recording King RDS-11-FE3-TBR/strumming.mp3",
                "B_strumming": "Epiphone Hummingbird/strumming.mp3",
                "A_fingerstyle": "Recording King RDS-11-FE3-TBR/fingerstyle.mp3",
                "B_fingerstyle": "Epiphone Hummingbird/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Recording King RDS-11-FE3-TBR",
                "B": "Epiphone Hummingbird",
            }
        },
        {
            "Name": "Test 29",
            "TestID": "test_RecordingKingRDS-11-FE3-TBR_LAGTHV20DCETramontaneHyVibe",
            "Files": {
                "A_picking": "Recording King RDS-11-FE3-TBR/picking.mp3",
                "B_picking": "LAG THV20DCE Tramontane HyVibe/picking.mp3",
                "A_strumming": "Recording King RDS-11-FE3-TBR/strumming.mp3",
                "B_strumming": "LAG THV20DCE Tramontane HyVibe/strumming.mp3",
                "A_fingerstyle": "Recording King RDS-11-FE3-TBR/fingerstyle.mp3",
                "B_fingerstyle": "LAG THV20DCE Tramontane HyVibe/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Recording King RDS-11-FE3-TBR",
                "B": "LAG THV20DCE Tramontane HyVibe",
            }
        },
        {
            "Name": "Test 30",
            "TestID": "test_RecordingKingRDS-11-FE3-TBR_SeagullArtistMosaicCHCWBourbonB",
            "Files": {
                "A_picking": "Recording King RDS-11-FE3-TBR/picking.mp3",
                "B_picking": "Seagull Artist Mosaic CH CW Bourbon B/picking.mp3",
                "A_strumming": "Recording King RDS-11-FE3-TBR/strumming.mp3",
                "B_strumming": "Seagull Artist Mosaic CH CW Bourbon B/strumming.mp3",
                "A_fingerstyle": "Recording King RDS-11-FE3-TBR/fingerstyle.mp3",
                "B_fingerstyle": "Seagull Artist Mosaic CH CW Bourbon B/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Recording King RDS-11-FE3-TBR",
                "B": "Seagull Artist Mosaic CH CW Bourbon B",
            }
        },
        {
            "Name": "Test 31",
            "TestID": "test_FenderRedondoSpecialMAH_SeagullS6OriginalNatural",
            "Files": {
                "A_picking": "Fender Redondo Special MAH/picking.mp3",
                "B_picking": "Seagull S6 Original Natural/picking.mp3",
                "A_strumming": "Fender Redondo Special MAH/strumming.mp3",
                "B_strumming": "Seagull S6 Original Natural/strumming.mp3",
                "A_fingerstyle": "Fender Redondo Special MAH/fingerstyle.mp3",
                "B_fingerstyle": "Seagull S6 Original Natural/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Fender Redondo Special MAH",
                "B": "Seagull S6 Original Natural",
            }
        },
        {
            "Name": "Test 32",
            "TestID": "test_FenderRedondoSpecialMAH_CortGoldOC8Natural",
            "Files": {
                "A_picking": "Fender Redondo Special MAH/picking.mp3",
                "B_picking": "Cort Gold OC8 Natural/picking.mp3",
                "A_strumming": "Fender Redondo Special MAH/strumming.mp3",
                "B_strumming": "Cort Gold OC8 Natural/strumming.mp3",
                "A_fingerstyle": "Fender Redondo Special MAH/fingerstyle.mp3",
                "B_fingerstyle": "Cort Gold OC8 Natural/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Fender Redondo Special MAH",
                "B": "Cort Gold OC8 Natural",
            }
        },
        {
            "Name": "Test 33",
            "TestID": "test_FenderRedondoSpecialMAH_EpiphoneHummingbird",
            "Files": {
                "A_picking": "Fender Redondo Special MAH/picking.mp3",
                "B_picking": "Epiphone Hummingbird/picking.mp3",
                "A_strumming": "Fender Redondo Special MAH/strumming.mp3",
                "B_strumming": "Epiphone Hummingbird/strumming.mp3",
                "A_fingerstyle": "Fender Redondo Special MAH/fingerstyle.mp3",
                "B_fingerstyle": "Epiphone Hummingbird/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Fender Redondo Special MAH",
                "B": "Epiphone Hummingbird",
            }
        },
        {
            "Name": "Test 34",
            "TestID": "test_FenderRedondoSpecialMAH_LAGTHV20DCETramontaneHyVibe",
            "Files": {
                "A_picking": "Fender Redondo Special MAH/picking.mp3",
                "B_picking": "LAG THV20DCE Tramontane HyVibe/picking.mp3",
                "A_strumming": "Fender Redondo Special MAH/strumming.mp3",
                "B_strumming": "LAG THV20DCE Tramontane HyVibe/strumming.mp3",
                "A_fingerstyle": "Fender Redondo Special MAH/fingerstyle.mp3",
                "B_fingerstyle": "LAG THV20DCE Tramontane HyVibe/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Fender Redondo Special MAH",
                "B": "LAG THV20DCE Tramontane HyVibe",
            }
        },
        {
            "Name": "Test 35",
            "TestID": "test_FenderRedondoSpecialMAH_SeagullArtistMosaicCHCWBourbonB",
            "Files": {
                "A_picking": "Fender Redondo Special MAH/picking.mp3",
                "B_picking": "Seagull Artist Mosaic CH CW Bourbon B/picking.mp3",
                "A_strumming": "Fender Redondo Special MAH/strumming.mp3",
                "B_strumming": "Seagull Artist Mosaic CH CW Bourbon B/strumming.mp3",
                "A_fingerstyle": "Fender Redondo Special MAH/fingerstyle.mp3",
                "B_fingerstyle": "Seagull Artist Mosaic CH CW Bourbon B/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Fender Redondo Special MAH",
                "B": "Seagull Artist Mosaic CH CW Bourbon B",
            }
        },
        {
            "Name": "Test 36",
            "TestID": "test_SeagullS6OriginalNatural_CortGoldOC8Natural",
            "Files": {
                "A_picking": "Seagull S6 Original Natural/picking.mp3",
                "B_picking": "Cort Gold OC8 Natural/picking.mp3",
                "A_strumming": "Seagull S6 Original Natural/strumming.mp3",
                "B_strumming": "Cort Gold OC8 Natural/strumming.mp3",
                "A_fingerstyle": "Seagull S6 Original Natural/fingerstyle.mp3",
                "B_fingerstyle": "Cort Gold OC8 Natural/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Seagull S6 Original Natural",
                "B": "Cort Gold OC8 Natural",
            }
        },
        {
            "Name": "Test 37",
            "TestID": "test_SeagullS6OriginalNatural_EpiphoneHummingbird",
            "Files": {
                "A_picking": "Seagull S6 Original Natural/picking.mp3",
                "B_picking": "Epiphone Hummingbird/picking.mp3",
                "A_strumming": "Seagull S6 Original Natural/strumming.mp3",
                "B_strumming": "Epiphone Hummingbird/strumming.mp3",
                "A_fingerstyle": "Seagull S6 Original Natural/fingerstyle.mp3",
                "B_fingerstyle": "Epiphone Hummingbird/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Seagull S6 Original Natural",
                "B": "Epiphone Hummingbird",
            }
        },
        {
            "Name": "Test 38",
            "TestID": "test_SeagullS6OriginalNatural_LAGTHV20DCETramontaneHyVibe",
            "Files": {
                "A_picking": "Seagull S6 Original Natural/picking.mp3",
                "B_picking": "LAG THV20DCE Tramontane HyVibe/picking.mp3",
                "A_strumming": "Seagull S6 Original Natural/strumming.mp3",
                "B_strumming": "LAG THV20DCE Tramontane HyVibe/strumming.mp3",
                "A_fingerstyle": "Seagull S6 Original Natural/fingerstyle.mp3",
                "B_fingerstyle": "LAG THV20DCE Tramontane HyVibe/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Seagull S6 Original Natural",
                "B": "LAG THV20DCE Tramontane HyVibe",
            }
        },
        {
            "Name": "Test 39",
            "TestID": "test_SeagullS6OriginalNatural_SeagullArtistMosaicCHCWBourbonB",
            "Files": {
                "A_picking": "Seagull S6 Original Natural/picking.mp3",
                "B_picking": "Seagull Artist Mosaic CH CW Bourbon B/picking.mp3",
                "A_strumming": "Seagull S6 Original Natural/strumming.mp3",
                "B_strumming": "Seagull Artist Mosaic CH CW Bourbon B/strumming.mp3",
                "A_fingerstyle": "Seagull S6 Original Natural/fingerstyle.mp3",
                "B_fingerstyle": "Seagull Artist Mosaic CH CW Bourbon B/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Seagull S6 Original Natural",
                "B": "Seagull Artist Mosaic CH CW Bourbon B",
            }
        },
        {
            "Name": "Test 40",
            "TestID": "test_CortGoldOC8Natural_EpiphoneHummingbird",
            "Files": {
                "A_picking": "Cort Gold OC8 Natural/picking.mp3",
                "B_picking": "Epiphone Hummingbird/picking.mp3",
                "A_strumming": "Cort Gold OC8 Natural/strumming.mp3",
                "B_strumming": "Epiphone Hummingbird/strumming.mp3",
                "A_fingerstyle": "Cort Gold OC8 Natural/fingerstyle.mp3",
                "B_fingerstyle": "Epiphone Hummingbird/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Cort Gold OC8 Natural",
                "B": "Epiphone Hummingbird",
            }
        },
        {
            "Name": "Test 41",
            "TestID": "test_CortGoldOC8Natural_LAGTHV20DCETramontaneHyVibe",
            "Files": {
                "A_picking": "Cort Gold OC8 Natural/picking.mp3",
                "B_picking": "LAG THV20DCE Tramontane HyVibe/picking.mp3",
                "A_strumming": "Cort Gold OC8 Natural/strumming.mp3",
                "B_strumming": "LAG THV20DCE Tramontane HyVibe/strumming.mp3",
                "A_fingerstyle": "Cort Gold OC8 Natural/fingerstyle.mp3",
                "B_fingerstyle": "LAG THV20DCE Tramontane HyVibe/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Cort Gold OC8 Natural",
                "B": "LAG THV20DCE Tramontane HyVibe",
            }
        },
        {
            "Name": "Test 42",
            "TestID": "test_CortGoldOC8Natural_SeagullArtistMosaicCHCWBourbonB",
            "Files": {
                "A_picking": "Cort Gold OC8 Natural/picking.mp3",
                "B_picking": "Seagull Artist Mosaic CH CW Bourbon B/picking.mp3",
                "A_strumming": "Cort Gold OC8 Natural/strumming.mp3",
                "B_strumming": "Seagull Artist Mosaic CH CW Bourbon B/strumming.mp3",
                "A_fingerstyle": "Cort Gold OC8 Natural/fingerstyle.mp3",
                "B_fingerstyle": "Seagull Artist Mosaic CH CW Bourbon B/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Cort Gold OC8 Natural",
                "B": "Seagull Artist Mosaic CH CW Bourbon B",
            }
        },
        {
            "Name": "Test 43",
            "TestID": "test_EpiphoneHummingbird_LAGTHV20DCETramontaneHyVibe",
            "Files": {
                "A_picking": "Epiphone Hummingbird/picking.mp3",
                "B_picking": "LAG THV20DCE Tramontane HyVibe/picking.mp3",
                "A_strumming": "Epiphone Hummingbird/strumming.mp3",
                "B_strumming": "LAG THV20DCE Tramontane HyVibe/strumming.mp3",
                "A_fingerstyle": "Epiphone Hummingbird/fingerstyle.mp3",
                "B_fingerstyle": "LAG THV20DCE Tramontane HyVibe/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Epiphone Hummingbird",
                "B": "LAG THV20DCE Tramontane HyVibe",
            }
        },
        {
            "Name": "Test 44",
            "TestID": "test_EpiphoneHummingbird_SeagullArtistMosaicCHCWBourbonB",
            "Files": {
                "A_picking": "Epiphone Hummingbird/picking.mp3",
                "B_picking": "Seagull Artist Mosaic CH CW Bourbon B/picking.mp3",
                "A_strumming": "Epiphone Hummingbird/strumming.mp3",
                "B_strumming": "Seagull Artist Mosaic CH CW Bourbon B/strumming.mp3",
                "A_fingerstyle": "Epiphone Hummingbird/fingerstyle.mp3",
                "B_fingerstyle": "Seagull Artist Mosaic CH CW Bourbon B/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "Epiphone Hummingbird",
                "B": "Seagull Artist Mosaic CH CW Bourbon B",
            }
        },
        {
            "Name": "Test 45",
            "TestID": "test_LAGTHV20DCETramontaneHyVibe_SeagullArtistMosaicCHCWBourbonB",
            "Files": {
                "A_picking": "LAG THV20DCE Tramontane HyVibe/picking.mp3",
                "B_picking": "Seagull Artist Mosaic CH CW Bourbon B/picking.mp3",
                "A_strumming": "LAG THV20DCE Tramontane HyVibe/strumming.mp3",
                "B_strumming": "Seagull Artist Mosaic CH CW Bourbon B/strumming.mp3",
                "A_fingerstyle": "LAG THV20DCE Tramontane HyVibe/fingerstyle.mp3",
                "B_fingerstyle": "Seagull Artist Mosaic CH CW Bourbon B/fingerstyle.mp3",
            },
            "Guitars": {
                "A": "LAG THV20DCE Tramontane HyVibe",
                "B": "Seagull Artist Mosaic CH CW Bourbon B",
            }
        },
    ]
  }
  