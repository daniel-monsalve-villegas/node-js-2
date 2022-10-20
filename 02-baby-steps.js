const [node, path, ...number] = process.argv;

//number.reduce((a, number) => a + number, 0);
//
let sum = 0;

for(let i = 0; i < number.length; i++) {
	sum += +number[i]; 
}

console.log(sum);
