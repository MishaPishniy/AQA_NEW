const grades = [75, 90, 60, 85, 100];

console.log(grades[0]);
console.log(grades[grades.length -1])
grades.push(95);
console.log(grades);

for (let num of grades){
    console.log(num)
}


const grades = [75, 90, 60, 85, 100];

let sum = 0; 

for (let grade of grades) {
    sum = sum + grade;
}

const grades = [75, 90, 60, 85, 100];
let sum = 0; 
grades.forEach((grade) => {
    sum += grade;
});

const average = sum / grades.length;
console.log(average);