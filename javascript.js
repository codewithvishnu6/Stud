let countdowndate = new Date("Jan 1, 2024 00:00:00").getTime();

let x = setInterval(function() {
    let now = new Date().getTime();
    // let distance =  countdowndate - now;
    let distance =  now - countdowndate;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

}, 1000)

let user = alert("Tap 'OK'  :  Accept All Cookies")
// for(let i=0; i<alert.length; i++) {
//     console.log(alert[i])
// }