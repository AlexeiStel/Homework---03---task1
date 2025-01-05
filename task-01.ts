interface PriceParams {
    price: number;
    discount: number;
    isInstallment: boolean
     months: number
}

const totalPrice = ({ price, discount, isInstallment, months }: PriceParams): number => {
    if (price < 0 || discount < 0 || discount > 100 || months < 0) {
        throw new Error("Некоректно указана стоимость или скидка, или значение количества месяцев")
        
    }

    return price * (1 - discount/100) / months;   
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); 
