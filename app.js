var input = document.querySelector('#inp');
console.log(input.value);
function getnum(num) {
    input.value += num;
    console.log(input.value);
}
function calculate() {
    var output = eval(input.value);
    input.value = output;
    console.log('calculate');
    console.log(input.value);
}
function del() {
    var inputvalue = input.value;
    var newStr = inputvalue.slice(0, -1);
    input.value = newStr;
    console.log('del');
}
function Ac() {
    input.value = "";
}
