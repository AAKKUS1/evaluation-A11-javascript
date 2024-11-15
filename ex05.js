
function isEnoughMoney(price, wallet) {
	return wallet - price >= 0
}

console.log(isEnoughMoney(10, 0)); // Résultat attendu: false
console.log(isEnoughMoney(5, 25)); 