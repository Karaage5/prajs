// alert("sample01.jsからアラートを表示");

let x = 3;
console.log(x);

const a1 = "ラブライブ";
const a2 = "乃木坂";
console.log(a1 + a2);

console.log(1);
console.log("1");

const title = "Hello World";
document.querySelector("#title").textContent = title;

console.log(true);
console.log("true");

console.log(1===1);
console.log(1===2);
console.log(1==="1");

if (true) {
    console.log(true);
} else {
    console.log(false);
}

if (true && false) {
    console.log(true);
}

if (true || false) {
    console.log(true);
}

const array = [1, 2, 3];
console.log(array);

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

let members = ["yoda", "yama", "ume"];
members.forEach((member, index) => console.log(index + ":" + member));

members.unshift("sakurai");
members.push("endo");
console.log(members);
members.forEach((member, index) => console.log(index + ":" + member));

members.shift();
console.log(members);

members.pop();
console.log(members);

members.splice(1, 1);
console.log(members);

members.splice(1, 0, "kubo");
console.log(members);

members.splice(1, 0, "ozono", "renka");
console.log(members);

members.reverse();
console.log(members);

members.sort();
console.log(members);

console.log(members.slice(2));
console.log(members);

console.log(members.slice(-2));

console.log(members);
const notOzono = members.filter((member) => member !== "ozono");
console.log(notOzono);

const notA = members.filter((member) => member.search("a") !== -1);
console.log(notA);

const upperMembers = members.map((member) => member.toUpperCase());
console.log(upperMembers);

const members3 = ["yoda", "yama"];
const members4 = ["endo", "kaki"];
const members34 = members3.concat(members4);
console.log(members34);

console.log(members.indexOf("renka"));

const isExist1 = members.some((member) => member === "yoda");
const isExist2 = members.some((member) => member === "shiraishi");
console.log(isExist1);
console.log(isExist2);

const isExistAll = members.every((member) => member ==="yoda");
console.log(isExistAll);

const fourLengthMember = members.find((member) => member.length === 4);
console.log(fourLengthMember);