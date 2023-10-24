	fetch('https://tightrope.jp/stone/server/current.txt')
	.then(response => response.text())
	.then(data => { 
		console.log(data)
	});
