var numParticipants = 30
var numTests = 45

/*
var probs = new Array(numTests).fill(0)



for (var j = 0; j < numParticipants; j++) {
    var count = 0
    for (var i = 0; i < numTests; i++) {

        var randNum = Math.random();
        if (randNum > 0.5) {
            probs[i] += 1
        }
    }
}

for (i = 0; i < numTests; i++) {
    probs[i] = probs[i] / numParticipants
}

console.log(probs)
*/

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

// Initialize probability matrix
var probMatrix = new Array(numTests);
for (var i = 0; i < probMatrix.length; i++) {
    probMatrix[i] = new Array(numTests).fill(0);
}

// Fill probability matrix
for (var i = 0; i < numParticipants; i++) {
    var probs = Array.from(Array(numTests).keys())
    probs = shuffleArray(probs)
    
    for (var j = 0; j < numTests; j++) {
        probMatrix[j][probs[j]]++
    }
}

// Create probabilities
for (var i = 0; i < numTests; i++) {
    for (var j = 0; j < numTests; j++) {
        probMatrix[i][j] = probMatrix[i][j] / numParticipants
    }
}

console.log(JSON.stringify(probMatrix))