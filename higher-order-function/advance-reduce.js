import fs from 'fs'

var output = fs.readFileSync('./data/advance-reduce.txt', 'utf8')
.split('\n')
.map(line => line.split('\t'))
.reduce((customers, line) => {
	customers[line[0]] = customers[line[0]] || []
	customers[line[0]].push({
		name: line[1],
		item: line[2],
		quantity: line[3]
	})
	console.log(customers[line[0]]);
	return customers
}, {})
console.log(JSON.stringify(output, null, 2));

//npm run start higher-order-function/advance-reduce.js