let houre = document.getElementById("houre");
let minute = document.getElementById("minute");
let second = document.getElementById("second");


let dateNow = setInterval(()=>{
let timeDate = new Date();

let hr = timeDate.getHours();
let min = timeDate.getMinutes();
let sec = timeDate.getSeconds();

let calaHoure = (hr * 30) + (min / 2);
let calaMinute = (min * 6) + (sec / 10);
let calaSecond = sec * 6;

houre.style.transform = `rotate(${calaHoure}deg)`;
minute.style.transform = `rotate(${calaMinute}deg)`;
second.style.transform = `rotate(${calaSecond}deg)`;

},1000);






















