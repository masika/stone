	fetch('current.txt')
	.then(response => response.text())
	.then(data => { 
		console.log(data)
	});
