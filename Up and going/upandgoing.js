// Program to calculate the total price of a phone purchase.
const ACC_PRICE = 19.99;
const PHONE_PRICE = 99.99;
const TAXES = 0.08;

var bank_acc_capacity = 10000;
var amount = 0;

function canIAffordAcc() {
		if((amount + ACC_PRICE + PHONE_PRICE) < bank_acc_capacity) {
			return ACC_PRICE + PHONE_PRICE;
		}
		else return 0;
}
while(amount < bank_acc_capacity) {
	if((amount + PHONE_PRICE) < bank_acc_capacity) amount += PHONE_PRICE;
	
	amount += canIAffordAcc();
	bank_acc_capacity -= amount;
	console.log(bank_acc_capacity);
}
console.log(amount + " amount");
amount = amount + (amount * TAXES);
console.log('$' + amount.toFixed(2));
