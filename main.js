function factor() {
	var ask=Number(prompt('Veuillez entrer un nombre entier'));
	var prem=[2,3,5,7];
	var test=[];
	for (i=0;i<prem.length;){
		if (Number.isInteger(ask/prem[i])){
			ask=ask/prem[i];
			test.push(prem[i]);
		} else {
			i++ ;
		} if(ask % prem[i] ==1){
		console.log(test.join('*'));
	}
	}
	
}
factor();