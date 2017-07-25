// Variables
var attempt = [];
var observerPattern = ['red', 'blue', 'yellow', 'white'];

/**
 * @function ObserverList
 * @constructor
 */
function ObserverList() {
    this.handlers = []; //Observers
}

/**
 * @function ObserverList
 */
ObserverList.prototype = {
    subscribe: function(fn) {
        this.handlers.push(fn);
    },

    unsubscribe: function(fn) {
        this.handlers = this.handlers.filter(
            function(item) {
                if(item !== fn) {
                    return item;
                }
            }
        );
    },

    check: function() {
        var matchColor = 0;
        var matchPos = 0;
        console.log('attempt', attempt);
        console.log('pattern', observerPattern);
        attempt.forEach(function(color, idx) {
            observerPattern.forEach(function(color2, idx2) {
                if(color === color2) {
                    console.log('yey a color matched:', color);
                    matchColor +=1;
                    if(idx === idx2) {
                        console.log('and the position too :D :', idx);
                        matchPos +=1;
                    }
                }
            });
        });
        console.log('You have ' + matchColor + ' matching colors');
        console.log('You have ' + matchPos + ' matching positions');
        if(matchPos === observerPattern.length) {
            console.log('yey you won');
        }
    },
}

/**
 * @function createAttempt
 * @description Optional function, simulates the commands that creates an attempt
 */
function createAttempt() {
    attempt = [];
    var targets = target.getElementsByTagName('li');
    for(var i = 0; i < targets.length; i++) {
        attempt.push(targets[i].id);
    }
}

// /**
//  * @function run
//  */
// function run() {
//     // The subject is the attempt, and the observer is the constructed pattern(the one that the factory creates)
//     // When the user clicks the check button, triggers a function that notify(checks) various things between both
//     // patterns(attempt and pattern) like 1. If the attempt color exists in the pattern. 2. If the attempt color
//     // position is the same in the pattern. If this happens with every color; the user wins
//     var observerAttempt = new ObserverList();
//     var btnCheck = document.getElementById('check');
//
//     observerAttempt.subscribe(observerPattern);
//
//     btnCheck.addEventListener('click', createAttempt);
//     btnCheck.addEventListener('click', observerAttempt.check);
// }
//
// run();
