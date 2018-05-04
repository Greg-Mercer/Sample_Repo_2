class ingredients {
	var price;
	var decayrate;  //decay rate per ingredient
	var maxHealth;  //max health of ingredient
	var health;     //current health of ingredient
	var nutrition;  //nutritional value of ingredient
	var id;         //ingredient ID
	constructor(price, decayrate, maxHealth, health, nutrition, id){
		this.price = price;
		this.decayrate = decayrate;
		this.maxHealth = maxHealth;
		this.health = health;
		this.nutrition = nutrition;
		this.id = id;
	};
}

class Apple extends ingredients {
	constructor() {
		super();
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
		this.price = 2.20;
		this.decayrate = 1.00;
		this.maxHealth = 100;
		this.health = 100;
		this.nutrition = 100;
		this.id = 1;
	}
};



class Corn extends ingredients {
	constructor() {
		super();
		this.price = 0.80;
		this.decayrate = 1.00;
		this.maxHealth = 100;
		this.health = 100;
		this.nutrition = 100;
		this.id = 1;
	}
};



class Chicken extends ingredients {
	constructor() {
		super();
		this.price = 
		this.decayrate = 1.00;
		this.maxHealth = 100;
		this.health = 100;
		this.nutrition = 100;
		this.id = 1;
	}
};



class Kale extends ingredients {
	constructor() {
		super();
		this.decayrate = 1.00;
		this.maxHealth = 100;
		this.health = 100;
		this.nutrition = 100;
		this.id = 1;
	}
};

