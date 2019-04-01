// ပေးထားတဲ့ Array ထဲက amount တွေပေါင်းရန်
var items = [
	{ amount: 100 },
	{ amount: 110 },
	{ amount: 130 },
	{ amount: 120 },
	{ amount: 200 }
];

//  ပုံမှန်လုပ်ထုံး လုပ်နည်း
var totalAmount = 0;

for ( var i = 0; i < items.length; i++ ) {
	totalAmount += items[i].amount; 
}
console.log( totalAmount );

// Higher Order Function အသုံးပြုပြီး လုပ်နည်း
// Less Code, Less Bug, Composition
var totalAmount = items.reduce( (sum, item) => sum + item.amount , 0);

console.log( totalAmount );
