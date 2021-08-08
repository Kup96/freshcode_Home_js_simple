/*
8 Вычислите стоимость покупки (N штук товара по цене P). 
начислить 2% скидки, если сумма больше 500 грн 
и 3%, если сумма больше 800грн.
*/


let valueBought = prompt ('Стоимoсть покупки:');
if (valueBought > 800){
    valueBought -= valueBought * 0.03;
}else if (valueBought > 500){
    valueBought -= valueBought * 0.02;
}
alert (`К оплате: ${valueBought} grn`);