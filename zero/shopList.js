// Массив списков покупок

let shopList = [
	['salmon', 'chicken', 'beef'],
	['apples', 'orange', 'banana'],
	['tomato', 'peas', 'onion'],
	['milk', 'cheese'],
	['protein bar']
]
for (let i = 0; i < shopList.length; i++) {
	for (let j = 0; j < shopList[i].length; j++) {
		console.log (shopList[i][j]);
	}
}