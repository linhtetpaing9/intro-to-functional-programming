// ပေးထားတဲ့ Array ကို String တစ်ခုထဲ ပေါင်းထည့် ပြီး ပုံစံပြောင်းပြီး ပြရန်
var items = [
	{ name: 'Lin Htet Paing', rank: 'Ancient 4'},
	{ name: 'Henry', rank: 'Legend 1'},
	{ name: 'Thiha Thwin', rank: 'Legend 6'},
	{ name: 'Si Thu', rank: 'Crusader 7'},
]

//  ပုံမှန်လုပ်ထုံး လုပ်နည်း
var newItems = [];

for ( var i = 0; i < items.length; i++ ) {
	newItems.push( `${items[i].name} rank is ${items[i].rank}` );
}
console.log( newItems );

// Higher Order Function အသုံးပြုပြီး လုပ်နည်း
// Less Code, Less Bug, Composition
var newItems = items.map( (item) => `${item.name} rank is ${item.rank}` );

console.log( newItems );
