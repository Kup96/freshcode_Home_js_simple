/*

6 Спросите у пользователя номер месяца 
(это будет число из интервала от 1 до 12) . 
Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
*/


let numberofMonth = prompt('Введите номер месяца');
if (numberofMonth ==12 || numberofMonth <=2){
    alert ("Зима");
}else if (numberofMonth >=3 && numberofMonth <=5){
    alert ("Весна");
}else if (numberofMonth >5 && numberofMonth <9){
    alert ("Лето");
}else if (numberofMonth >=9 && numberofMonth <12){
    alert ("Осень");
}
