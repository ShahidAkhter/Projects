let timesinsecond = 400000;
let minutes = 0;
let hours=0;
let seconds;
let j=0;
for (let i = 0; i < timesinsecond; i++) {
    if (timesinsecond>=60) {
        j++
    }
    if (timesinsecond >= 60) {
        // console.log(time,seconds, minutes)
        timesinsecond = timesinsecond - (60*j);
        // timesinsecond = seconds;
        minutes += 1;
        if (minutes>=60) {
            minutes=0;
            hours+=1;
        }
    }
}
console.log(seconds, minutes, hours,timesinsecond)