var countDate = new Date("Sept 5, 2020 12:00:00").getTime();

function newYear() {
    var now = new Date().getTime();
    gap = countDate - now;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(gap / (day));
    var h = Math.floor((gap % (day)) / (hour));
    var m = Math.floor((gap % (hour)) / (minute));
    var s = Math.floor((gap % (minute)) / (second));
    if(d <= 0 && h <= 0 && m <= 0 && s <= 0 ) {
        return;
        clearInterval(timer)
    }

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

var timer = setInterval(function () {
    newYear();
}, 1000)


// Modal Window to Register
var modal = document.getElementById("registerModal");
var btn = document.getElementById("register");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}