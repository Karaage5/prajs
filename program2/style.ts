const myDate = new Date();
console.log(myDate.getFullYear());

const dayNames = ["日", "月", "火", "水", "木", "金", "土"];
const dayNamesNum = myDate.getDay();
console.log(dayNamesNum);
console.log(dayNames[dayNamesNum]);

myDate.setFullYear(2000);
console.log(myDate.getFullYear());


const timeoutId1 = setTimeout(() => console.log("3s経過"), 3000);
clearTimeout(timeoutId1);


let count = 1;
const intervalId = setInterval(() => {
    console.log(`${count}s経過`);

    if (count >= 5) {
        clearInterval(intervalId);
        console.log("停止しました");
    }

    count++;
}, 1000);