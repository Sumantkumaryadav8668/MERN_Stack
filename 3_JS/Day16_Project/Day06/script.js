
const counter = document.getElementById('day');

setInterval(()=>{
const current = Date.now();
const holi = new Date(2026,3,2).getTime();

let timer = holi - current;

let day = Math.floor(timer / (1000*60*60*24));
timer %= (1000*60*60*24);

let hour = Math.floor(timer / (1000*60*60));
timer %= (1000*60*60);

let min = Math.floor(timer / (1000*60));
timer %= (1000*60);

let sec = Math.floor(timer / 1000);

counter.textContent =
`${day} Days ${hour} Hours ${min} Minutes ${sec} Seconds`;

})