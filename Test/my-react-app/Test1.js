// Q Find the Average Age
// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 22 },
//     { name: 'David', age: 28 },
// ]; 

// function ageAvg(people){
//     let fullAvg = 0
//     for(let i = 0; i < people.length; i++){
//         fullAvg = fullAvg + people[i].age;
//     }
//     return fullAvg / people.length;
// }

// console.log(ageAvg(people));

//  Question: Count the Number of Names Starting with "A"
const names = ["Alice", "Bob", "Anna", "Alex", "Charlie", "Amanda"];

// function A(names){
//     let count = 0;
//     for(i = 0; i< names.length; i++){
//         // console.log(names[i]);
//         if(names[i]=== "A"){
//             count++;
//         }
//     }
//     // return count;
// }


// console.log(count)

function countNamesStartingWithA(names) {
    let count = 0;

    for (let i = 0; i < names.length; i++) {
        // Convert each name to lowercase and check if it starts with 'a'
        if (names[i].toLowerCase().startsWith('a')) {
            count++;
        }
    }

    return count;
}

// const names = ["Alice", "Bob", "Anna", "Alex", "Charlie", "Amanda"];
console.log(countNamesStartingWithA(names));
