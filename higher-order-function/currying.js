let person =
	name =>
		age => 
			occupation =>
				name + ' is ' + age + ' years old and working as ' + occupation

console.log(person('linhtetpaing')(22)('Web Developer'));