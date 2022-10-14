


var count = 0
for (var i = 0; i < 30; i++) {

    var randNum = Math.random();
    if (randNum > 0.5) {
        count++
    }
    
}

console.log(count)
var ratio = count / 30
console.log(ratio)