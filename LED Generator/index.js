const fs = require('fs');

for(var i=1;i<=8;i++){
	for(var j=1;j<=8;j++){
		var out_a = `o ${i} ${j} a 3`;
		var out_b = `o ${i} ${j} a 0\nf ${i} ${j}`;

		fs.writeFileSync(`3 ${i} ${j} 1 a`, out_a, 'utf8');
		fs.writeFileSync(`3 ${i} ${j} 1 b`, out_b, 'utf8');
	}
}
