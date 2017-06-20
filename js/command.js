/**
 * @function Log Helper
 * @param {} msg
 */
var log = (function(){
    var log = " ";

    return {
        add: function(msg) { log += msg + "\n" },
        show: function() { alert(log); log = ""}
    }
})();

/**
 * @function dragStart
 * @param {string} event
 */
function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

/**
 * @function dragover
 * @param {string} event
 */
function dragover(event) {
    event.preventDefault();
}

/**
 * @function Drop
 * @param {string} event
 */
function drop(event) {
    console.log("Drop");
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    event.dataTransfer.clearData();
}
    
document.getElementById('color').addEventListener('dragstart', dragStart);
document.getElementById('target').addEventListener('drop', drop);
document.getElementById('target').addEventListener('dragover', dragover);