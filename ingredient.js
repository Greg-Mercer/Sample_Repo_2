class Ingredients {
	var igrName;	//igrName of the ingredient
	var generic; 	//food type generic for recipes
	var faded;		//var if faded icons in menu
	var price;		//price per unit of the ingredient
	var decayrate;  //decay rate per ingredient
	var maxHealth;  //max health of ingredient
	var health;     //current health of ingredient
	var nutrition;  //nutritional value of ingredient
	var igrId;      //ingredient igrId

	var highHealth = 120;
	var medHealth = 100;
	var low health = 80;

	var hNutrition = 120;
	var mNutrition = 100;
	var lNutrition = 80;
	
	constructor(igrName, generic, faded, price, decayrate, maxHealth, health, nutrition, igrId){
		this.igrName = igrName;
		this.generic = generic;
		this.faded = faded;
		this.price = price;
		this.decayrate = decayrate;
		this.maxHealth = maxHealth;
		this.health = health;
		this.nutrition = nutrition;
		this.igrId = igrId;
	};

	function get(){
		return new Ingredient(
			this.igrName, this.generic, this.faded, this.price, this.decayrate,
			this.maxHealth, this.health, this.nutrition, this.igrId);
	}

	static list = [];

	function start(){

		list.push(new Ingredient("Apple", "PRODUCE", false, 0.60, 1.00, 100, 100, 100, 0));
		list.push(new Ingredient("Lettuce", "PRODUCE", false, 0.60, 1.00, 100, 100, 100, 1));
		list.push(new Ingredient("Tomato", "PRODUCE", false, 0.60, 1.00, 100, 100, 100, 2));
		list.push(new Ingredient("Broccoli", "PRODUCE", false 3.50, 1.00, 100, 100, 100, 3));
		list.push(new Ingredient("Carrot", "PRODUCE", false, 2.20, 1.00, 100, 100, 100, 4));
		list.push(new Ingredient("Orange", "PRODUCE", false, 1.10, 1.00, 100, 100, 100, 5));
		list.push(new Ingredient("Pear", "PRODUCE", false, 1.40, 1.00, 100, 100, 100, 6));
		list.push(new Ingredient("Green Onion", "PRODUCE", false, 1.40, 1.00, 100, 100, 100, 7));
		list.push(new Ingredient("Celery", "PRODUCE", false, 1.40, 1.00, 100, 100, 100, 8));
		list.push(new Ingredient("Spinach", "PRODUCE", false, 1.40, 1.00, 100, 100, 100, 9));
		list.push(new Ingredient("Potato", "PRODUCE", false, 1.40, 1.00, 100, 100, 100, 10));
		list.push(new Ingredient("Lemon", "PRODUCE", false, 1.40, 1.00, 100, 100, 100, 11));
		list.push(new Ingredient("Green Pepper", "PRODUCE", false, 1.40, 1.00, 100, 100, 100, 12));
		list.push(new Ingredient("Red Pepper", "PRODUCE", false, 1.40, 1.00, 100, 100, 100, 13));
		list.push(new Ingredient("Yellow Pepper", "PRODUCE", false, 1.40, 1.00, 100, 100, 100, 14));
		list.push(new Ingredient("Onion", "PRODUCE", false, 1.40, 1.00, 100, 100, 100, 15));

		list.push(new Ingredient("Bacon", "MEAT", false, 2.80, 1.00, 100, 100, 100, 16));
		list.push(new Ingredient("Chicken", "MEAT", false, 2.80, 1.00, 100, 100, 100, 17));
		list.push(new Ingredient("Peanut Butter", "MEAT", false, 1.40, 1.00, 100, 100, 100, 18));
		list.push(new Ingredient("Steak", "MEAT", false, 1.40, 1.00, 100, 100, 100, 19));
		list.push(new Ingredient("Fish", "MEAT", false, 1.40, 1.00, 100, 100, 100, 20));
		list.push(new Ingredient("Egg", "MEAT", false, 1.40, 1.00, 100, 100, 100, 21));
		list.push(new Ingredient("Beef", "MEAT", false, 1.40, 1.00, 100, 100, 100, 22));
		list.push(new Ingredient("Pork", "MEAT", false, 1.40, 1.00, 100, 100, 100, 23);

		list.push(new Ingredient("Milk", "DAIRY", false, 1.40, 1.00, 100, 100, 100, 24));
		list.push(new Ingredient("Cheese", "DAIRY", false, 1.40, 1.00, 100, 100, 100, 25));

		list.push(new Ingredient("Bread", "GRAIN", false, 2.80, 1.00, 100, 100, 100, 26));
		list.push(new Ingredient("Noodles", "GRAIN", false, 2.80, 1.00, 100, 100, 100, 27));
		list.push(new Ingredient("Cereal", "GRAIN", false, 1.40, 1.00, 100, 100, 100, 28));
		list.push(new Ingredient("Rice", "GRAIN", false, 1.40, 1.00, 100, 100, 100, 30));
		list.push(new Ingredient("Pasta", "GRAIN", false, 1.40, 1.00, 100, 100, 100, 31));

	}

};

// class Carrot extends ingredients {
// 	constructor() {
// 		super();
// 		this.generic = "VEGGIE"
// 		this.price = 2.20;
// 		this.decayrate = 1.00;
// 		this.maxHealth = 100;
// 		this.health = 100;
// 		this.nutrition = 100;
// 		this.igrId = 1;
// 	}
// };
