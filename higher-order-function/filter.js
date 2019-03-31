// ပေးထားတဲ့ Array ထဲက နေ rank Ancient 4 ဖြစ်တဲ့ Object ကိုရှာရန်
var items = [
	{ name: 'Lin Htet Paing', rank: 'Ancient 4'},
	{ name: 'Henry', rank: 'Legend 1'},
	{ name: 'Thiha Thwin', rank: 'Legend 6'},
	{ name: 'Si Thu', rank: 'Crusader 7'},
]

//  ပုံမှန်လုပ်ထုံး လုပ်နည်း
var newItems = [];

for ( var i = 0; i < items.length; i++ ) {
	if( items[i].rank == 'Ancient 4' ){
		newItems.push( items[i] );
	}
}
console.log( newItems );

// Higher Order Function အသုံးပြုပြီး လုပ်နည်း
// Less Code, Less Bug, Composition
var newItems = items.filter( (item) => item.rank == 'Ancient 4' );

console.log( newItems );
