let number = +prompt('Введите число')
let last = number.toString().slice(-1)
let lastException = number.toString().slice(-2)

if (number === isNaN) {
    alert('Error')
}

if (lastException >= 11 && lastException <= 14) {
    alert(number + ' лет')
}
else {
    if (last === 1) {
        alert(number + ' год')
    }
    else if (last === 2 || last === 3 || last === 4) {
        alert(number + ' годa')
    }
    else if (last === 5 || last === 6 || last === 7 || last === 8 || last === 9 || last === 0){
        alert(number + ' лет')
    }
}
