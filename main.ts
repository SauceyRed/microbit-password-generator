let password: string = ""
let chars = []
for (let i = 32; i < 127; i++) {
    chars.push(String.fromCharCode(i));
}
console.log(chars);
let length = 8
for (let j = 0; j <= length - 1; j++) {
    console.log(j);
const char = chars.get(Math.randomRange(0, chars.length))
console.log(char);
password = "" + password + char
}
console.log(password);
basic.showString(password)
