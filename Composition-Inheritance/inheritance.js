class Monster {
    constructor(name){
        this.name = name
    }
    walk(){
        console.log(`${this.name} walking`);
    }

    attack(){
        console.log(`${this.name} attacking`);
    }
}

class FlyingMonster extends Monster{
    fly(){
        console.log(`${this.name} flying`);
    }
}

class SwimmingMonster extends Monster{
    swim(){
        console.log(`${this.name} swam`);
    }
}

const bear = new Monster('bear');
bear.walk();
bear.attack();

const eagle = new FlyingMonster('eagle');
eagle.walk();
eagle.attack();
eagle.fly();

const shark = new FlyingMonster('shark');
shark.walk();
shark.attack();
shark.fly();