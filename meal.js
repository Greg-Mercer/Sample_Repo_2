class meal {
	var known;           //static boolean var if recipe is known
	var ingredients[];   //array of ingredients needed
	var amount[];        //array to check player has right amount of ingredients
						 // to make the recipe
	var tier;			 //Recipe tier, affects values, price etc.
	constructor(){};
}

class kebab extends meal {
	constructor() {
		super();
		this.known = false;
		this.ingredients[] = [Broccoli, Carrot, Corn];
		this.amount[] = [1, 1, 1,];
		this.tier = 1;
	}
}