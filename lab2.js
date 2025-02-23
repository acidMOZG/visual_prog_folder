function sort_func(mas, params) {
    for (const man of mas) {
        if (typeof man !== 'object' || man === null) {
            throw new Error("Элементы массива должны быть объектами");
        }
  
        for (const param of params) {
            const value = man[param];
            if (param in man) { 
                // console.log(`${param}: ${value}`);
            } else {
                throw new Error("Объект не содержит всех требуемых параметров"); //`${param} не найдено в объекте ${man.name}`
            }
        }
    }
    console.log("Всё ок");
    const length = mas.length;
    let mas_copy = mas.slice();
    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            for (const parame of params)
            {
                if (mas_copy[j][parame] < mas_copy[minIndex][parame]) {
                    minIndex = j; 
                }
            }
        }
        if (minIndex !== i) {
            const temp = mas_copy[i];
            mas_copy[i] = mas_copy[minIndex];
            mas_copy[minIndex] = temp;
        }
    }
    return mas_copy;
}

let people_mas = [
    {
        name: "John",
        hp: 5,
        strength: "weakling",
        skill: "civilian"
    },
    {
        name: "Changh Che",
        hp: 3,
        strength: "normal",
        skill: "runner"
    },
    {
        name: "Vitalya",
        hp: 9,
        strength: "strong",
        skill: "fisherman"
    },
    {
        name: "Bomj",
        hp: 1,
        strength: "weakling",
    },
    {
        name: "Alfred",
        hp: 1,
        strength: "weakling",
        skill: "thief"
    },
    
    
]
module.exports = sort_func;

// let sort_params_mas = ["skill", "name"];
// let a = sort_func(people_mas, sort_params_mas);
// // a.forEach(man => {console.log(`${man.name} ${man.hp} ${man.strength} ${man.skill}.`);});
// a.forEach(man => {console.log(man);});