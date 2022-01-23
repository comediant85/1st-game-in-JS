'use strict';



const words = ["bear", "mamba", "james", "mother", "father", "aunt"];

const lowLevel = 20,
    middLevel = 15,
    maxLevel = 10;
let levelOption = 0;


let option = +prompt("Выберите ваш уровень: 1. Легкий 2.Средний 3. Сложный");

if (option===1) {
    levelOption = lowLevel;
}
else if (option===2) {
    levelOption = middLevel;
}
else if (option===3) {
    levelOption = maxLevel;
}
else {
    alert("такого выбора нет!");
}

alert("Игра начинается, мы загадываем слово!");

let randomWord = words[Math.floor(Math.random() * words.length)];
let convertedRandomWord =[];

for(let i = 0; i< randomWord.length; i++) {
    convertedRandomWord[i] = "_";
}

alert(convertedRandomWord);

let attemptCounter = 0;
let attemptCounter2 = levelOption;
while(attemptCounter < levelOption) {
    let character = prompt("Введите вашу букву");
    for(let i = 0; i < randomWord.length; i++) {
        if(character === randomWord[i]) {
            convertedRandomWord[i] = character;

        }
    }
    let word = "";
    for (let index = 0; index<convertedRandomWord.length; index++) {
        word = word + convertedRandomWord[index];
    }
    if(randomWord ===word) {
        alert("Вы выиграли!");
        attemptCounter = levelOption + 1;
        attemptCounter2--;
    }
    else {
        alert(convertedRandomWord + "У вас осталось: " + attemptCounter2 + "попыток");
        attemptCounter++;
        attemptCounter2--;
    
    }
}