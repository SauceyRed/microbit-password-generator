const chars: string[] = [];
for (let i = 32; i < 127; i++) {
    chars.push(String.fromCharCode(i));
}
console.log(chars);
let length = 8;
basic.showString(length.toString());
input.onButtonPressed(Button.B, function() {
    length += 1;
    basic.showString(length.toString());
})
input.onButtonPressed(Button.A, function() {
    let password = "";
    for (let i = 0; i < length; i++) {
        const char = chars.get(Math.randomRange(0, chars.length))
        password += char;
    }

    console.log(password);
    basic.showString(password);
})