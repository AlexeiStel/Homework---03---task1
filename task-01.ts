interface PriceParams {
    price: number;
    discount: number;
    isInstallment: boolean
     months: number
}

const totalPrice = ({ price, discount, isInstallment, months }: PriceParams): number => {
    if (price < 0 || discount < 0 || discount > 100) {
        throw new Error("Некоректно указана стоимость или скидка")    
    }

    if (isInstallment) {
        if (months < 0) {
            throw new Error("Некоректно указана количество месяцев")    
        }
       
        return price * (1 - discount/100) / months;      
    }
    return price * (1 - discount/100);      
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); 
