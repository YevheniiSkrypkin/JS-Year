let number = +prompt('Введите число')


if (isNaN(number)) {
    alert('Error')
}

else if (number % 100 > 4 && number % 100 < 20) {
    console.log(number + ' лет');
}
else {
    if (number % 10 === 1) {
        console.log(number + ' год'); 
    }
    else if (number % 10 >= 2 && number % 10 <= 4) {
        console.log(number + ' года');
    }
    else {
    console.log(number + ' лет');
    }
}