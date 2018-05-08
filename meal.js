class Meal {
	var name;            //name of the meal
	var known;           //static boolean var if recipe is known
	var ingredients[];   //array of ingredients needed
	var amount[];        //array to check player has right amount of ingredients
						 // to make the recipe
	var tier;			 //Recipe tier, affects values, price etc.
	var nutrition; 		 //nutritional value of meal
	var id;

	constructor(name, false, ingredients,s amount, tier){
		this.name = name;
		this.known = false;
		this.ingredients = ingredients;
		this.amount = amount;
		this.tier = tier;
		this.nutrition = sumNutrition(ingredients, amount);
	};

	static list = [];    


	function start() {
		list.push(new Meal("Stir Fry", false, ingredient, amount, tier));
		list.push(new Meal("BLT", false, ingreidient, amount, tier));
	}


	function sumNutrition(ingredients, amount) {
		let nutri;
		for (i = 0; i < ingredients.length; i++) {
			nutri += ingredients[i].nutrition * amount[i];
		}
		return nutri;
	}
};



// class Kebab extends Meal {
// 	constructor() {
// 		super();
// 		this.known = false;
// 		this.ingredients = [2, 1, 3];
// 		this.amount = [1, 1, 1];
// 		this.nutrition = ;
// 		this.tier = 1;
// 	}
// }
