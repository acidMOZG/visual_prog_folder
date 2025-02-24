const sort_func = require('./lab2.js');
let sort_params_mas = ["hp", "name"];



test('check sort', () => {
    let people_mas = [
    {name: "John", hp: 5, strength: "weakling", skill: "civilian"},
    {name: "Changh Che", hp: 3, strength: "normal", skill: "runner"},
    {name: "Vitalya", hp: 9, strength: "strong", skill: "fisherman"},
    {name: "Bomj", hp: 1, strength: "weakling",},
    {name: "Alfred", hp: 1, strength: "weakling", skill: "thief"},
    ]

    expect(sort_func(people_mas, sort_params_mas)).toEqual([
    { name: 'Alfred', hp: 1, strength: 'weakling', skill: 'thief' },
    { name: 'Bomj', hp: 1, strength: 'weakling' },
    { name: 'Changh Che', hp: 3, strength: 'normal', skill: 'runner' },
    { name: 'John', hp: 5, strength: 'weakling', skill: 'civilian' },
    { name: 'Vitalya', hp: 9, strength: 'strong', skill: 'fisherman' }
    ]);
});

test('check params integrity', () => {
    let sort_params_mas2 = ["skill", "name"];
    let people_mas = [
        {name: "John", hp: 5, strength: "weakling", skill: "civilian"},
        {name: "Changh Che", hp: 3, strength: "normal", skill: "runner"},
        {name: "Vitalya", hp: 9, strength: "strong", skill: "fisherman"},
        {name: "Bomj", hp: 1, strength: "weakling"},
        {name: "Alfred", hp: 1, strength: "weakling", skill: "thief"},
    ]
    expect(() => sort_func(people_mas, sort_params_mas2)).toThrow(new Error("Объект не содержит всех требуемых параметров"));
});

test('check objects integrity', () => {
    let people_mas = [
        {name: "John", hp: 5, strength: "weakling", skill: "civilian"},
        {name: "Changh Che", hp: 3, strength: "normal", skill: "runner"},
        {name: "Vitalya", hp: 9, strength: "strong", skill: "fisherman"},
        {name: "Bomj", hp: 1, strength: "weakling"},
        {name: "Alfred", hp: 1, strength: "weakling", skill: "thief"},
        "КамАЗ-55111"
    ]
    expect(() => sort_func(people_mas, sort_params_mas)).toThrow(new Error("Элементы массива должны быть объектами"));
});
module.exports = sort_func;
//expect(orderBy(pandasDefolt, prop)).toEqual([