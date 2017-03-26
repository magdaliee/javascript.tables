// 8.7 tablice 
var femaleNames = ['Ola', 'Kasia', 'Asia', 'Justyna'];
var maleNames = ['Kuba', 'Sebastian', 'Krzysiu', 'Jacek'];
var allNames = femaleNames.concat(maleNames);


var newName ='Marian';

if (allNames.indexOf(newName) === -1) {
	var x = allNames.push('Marian');
}

console.log( allNames );

// 8.9 choinka 
function rysujChoinke(n) {
	for ( var k = 1 ; k < n; k++) {
		var star = '*';
			for ( var j = 1 ; j < k*2-1; j++) {
				star  += '*';
			}
			console.log(star);
	}
	
}

rysujChoinke(6);