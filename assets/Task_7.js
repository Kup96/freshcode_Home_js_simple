/*
7 Если переменная a равна или меньше 1, а переменная b больше 5, то выведите сумму этих переменных, 
иначе выведите их разность.
*/

let a = prompt ("Введите переменную а");
let b = prompt ("Введите переменную b");
let result;
if (a<=1 && b >5){
    result = Number(a) + Number(b);
}else {
    result = a-b;
}
alert(result);