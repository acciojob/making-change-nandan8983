const makeChange = (c) => {
  // your name here
	let change = {};

	amount=c;
  change.q = Math.floor(amount / 25);
  amount %= 25;

  change.d = Math.floor(amount / 10);
  amount %= 10;

  change.n = Math.floor(amount / 5);
  amount %= 5;

  change.p = amount;

  return change;
	
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
