/*
Lever 3
9 Определите к внешней или к внутренней части круга принадлежит введенная пользователем точка с координатами (x, y) 
если уравнение окружности в центре координат (0,0) будет x^2 + y^2 = r^2. 
Значение радиуса и координаты точки задаёт пользователь.
Примечание : значком ^ отмечена степень числа.
*/


let x = prompt ('Введите координату x:');
let y = prompt ('Введите координату y:');
let r = prompt ('Введите радиус r:');
let h = x**2 + y**2;
if (h>r){
    alert ("Точка вне радиуса круга(");
}else {
    alert ("Точка в радиусе круга!");
}