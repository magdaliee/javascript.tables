var femaleNames = ['Ola', 'Kasia', 'Asia', 'Justyna'];
var maleNames = ['Kuba', 'Sebastian', 'Krzysiu', 'Jacek'];
var allNames = femaleNames.concat(maleNames);


var newName ='Marian';

if (allNames.indexOf(newName) === -1) {
	var x = allNames.push('Marian');
}

console.log( allNames );