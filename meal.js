class Meal {
	var known;           //static boolean var if recipe is known
	var ingredients[];   //array of ingredients needed
	var amount[];        //array to check player has right amount of ingredients
						 // to make the recipe
	var tier;			 //Recipe tier, affects values, price etc.
	var nutrition; 		 //nutritional value of meal
	var id;

	constructor(false, ingredients, amount, tier){
		this.known = false;
		this.ingredients = ingredients;
		this.amount = amount;
		this.tier = tier;
		this.nutrition = sumNutrition(ingredients, amount);
	};

	static mealList = [];    



	function start() {
		mealList.push(new Meal(
			));
	}


	function sumNutrition(ingredients, amount) {
		let nutri;
		for (i = 0; i < ingredients.length; i++) {
			nutri += ingredients[i].nutrition * amount[i];
		}
		return nutri;
	}
}



class Kebab extends Meal {
	constructor() {
		super();
		this.known = false;
		this.ingredients = [2, 1, 3];
		this.amount = [1, 1, 1];
		this.nutrition = ;
		this.tier = 1;
	}
}

class Stirfry extends Meal {
	constructor() {
		super();
		this.known = false;
		this.ingredients = [VEGGIE, MEAT];
		this.amount = [2, 1];
		this.nutrition = ;
		this.tier = 2;
	}
}