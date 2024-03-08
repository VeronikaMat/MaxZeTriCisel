const max3 = (num1, num2, num3) => {
    let max = num1

    if (num2 > max) {
        max = num2
    }

    if (num3 > max) {
        max = num3;
    }

    return max;
};

const num1 = 10
const num2 = 5
const num3 = 8

const vysledek = max3(num1, num2, num3)
console.log(vysledek)