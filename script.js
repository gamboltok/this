'use strict';

const userObj = {
    voice: "good"
};

function showVoiceStatus(name){
    console.log(this.voice + name);
}

showVoiceStatus.call(userObj);  //функция showVoiceStatus   будет работать внутри объекта userObj
showVoiceStatus.call(userObj, 'josh'); //наличие аргументов в функции, обращение к ним происходит через запятую.


function count(num){
    return this * num;
}

const result = count.bind(3); //this = 3
console.log(result(4));