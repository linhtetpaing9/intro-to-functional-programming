let rank = [
	{ id: 'immortal', up_rank: null },
	{ id: 'divine I', up_rank: 'immortal' },
	{ id: 'divine', up_rank: 'divine I' },
	{ id: 'ancient I', up_rank: 'divine' },
	{ id: 'ancient', up_rank: 'ancient I' },
	{ id: 'legend I', up_rank: 'ancient' },
	{ id: 'legend', up_rank: 'legend I' },
]

var makeTree = (rank, up_rank) => {
	let node = {};
	rank.filter(x => x.up_rank == up_rank)
		.forEach(x => node[x.id] = makeTree(rank, x.id))

	return node;
}


console.log(
	JSON.stringify(
		makeTree(rank , null)
		, null , 2
	)
)
