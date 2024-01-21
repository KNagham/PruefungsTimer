var countDownDate = new Date("Nov 24, 2024 08:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;

    if (distance < 0) {
        document.getElementById("day").innerHTML = "00";
        document.getElementById("hour").innerHTML = "00";
        document.getElementById("min").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";
    }

}, 1000);

const paths = document.querySelectorAll(".path-1, .path-2");
const groups = document.querySelectorAll(".group");

paths.forEach((path, index) => {
    const length = Math.ceil(path.getTotalLength())
    path.style.setProperty("--length", length)
    path.style.setProperty("--double-length", length * 2)
    path.style.setProperty("--negative-length", length * -2)
})

groups.forEach((group, index) => {
    // const length = Math.ceil(group.getTotalLength())
    const percentage = Math.round(Math.random() * 14) - 7
    group.style.setProperty("--displace", `${(index + 1) * percentage}%`)
})