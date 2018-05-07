class Ingredients {
	var name;		//name of the food
	var generic; 	//food type generic for recipes
	var faded;		//var if faded icons in menu
	var price;		//price per unit of the ingredient
	var decayrate;  //decay rate per ingredient
	var maxHealth;  //max health of ingredient
	var health;     //current health of ingredient
	var nutrition;  //nutritional value of ingredient
	var id;         //ingredient ID
	constructor(name, generic, faded, price, decayrate, maxHealth, health, nutrition, id){
		this.name = name;
		this.generic = generic;
		this.faded = faded;
		this.price = price;
		this.decayrate = decayrate;
		this.maxHealth = maxHealth;
		this.health = health;
		this.nutrition = nutrition;
		this.id = id;
	};

	function get(){
		return new Ingredient(
			this.name, this.generic, this.price, this.decayrate,
			this.maxHealth, this.health, this.nutrition, this.id);
	}

	static list = [];

	function start(){
		list.push(new Ingredient("Apple", "FRUIT", 0.60, 1.00, 100, 100, 100, 0));
		list.push(new Ingredient("Bread", "CARB", 2.80, 1.00, 100, 100, 100, 1));
		list.push(new Ingredient("Broccoli", "VEGGIE" 3.50, 1.00, 100, 100, 100, 2));
		list.push(new Ingredient("Carrot", "VEGGIE", 2.20, 1.00, 100, 100, 100, 3));
	}

	static function newApple("FRUIT", 0.60, 1.00, 100, 100, 100, 1){
		return new Ingredient();
	}
}

class Apple extends ingredients {
	constructor() {
		super();
		this.generic = "FRUIT";
		this.price = 0.60;
		this.decayrate = 1.00;
		this.maxHealth = 100;
		this.health = 100;
		this.nutrition = 100;
		this.id = 1;
	}
};

class Bread extends ingredients {
	constructor() {
		super();
		this.generic = "CARB"
		this.price = 2.80;
		this.decayrate = 1.00;
		this.maxHealth = 100;
		this.health = 100;
		this.nutrition = 100;
		this.id = 1;
	}
};


class Broccoli extends ingredients {
	constructor() {
		super();
		this.generic = "VEGGIE"
		this.price = 3.50;
		this.decayrate = 1.00;
		this.maxHealth = 100;
		this.health = 100;
		this.nutrition = 100;
		this.id = 1;
	}
};



class Cheese extends ingredients {
	constructor() {
		super();
		this.generic = "PROTEIN"
		this.price = 2.60;
		this.decayrate = 1.00;
		this.maxHealth = 100;
		this.health = 100;
		this.nutrition = 100;
		this.id = 1;
	}
};



class Carrot extends ingredients {
	constructor() {
		super();
		this.generic = "VEGGIE"
		this.price = 2.20;
		this.decayrate = 1.00;
		this.maxHealth = 100;
		this.health = 100;
		this.nutrition = 100;
		this.id = 1;
	}
};
