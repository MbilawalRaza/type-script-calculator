var input = document.querySelector('#inp') as HTMLInputElement
console.log(input.value)
function getnum(num:void) {
    input.value += num;
    console.log(input.value)
}
function calculate():void {
    var output = eval(input.value);
    input.value = output;
    console.log('calculate')
    console.log(input.value)
}
function del():void {
    var inputvalue = input.value;
    let newStr = inputvalue.slice(0, -1);
    input.value = newStr;
    console.log('del')
}
function Ac():void{
    input.value=""
}
