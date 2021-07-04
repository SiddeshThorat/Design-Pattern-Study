function swimmer({ name }){
    return {
        swim: () => console.log(`${name} swam`)
    }
}
function flyer({ name }){
    return {
        fly: () => console.log(`${name} flew`)
    }
}
function attackerAndWalker({name}){
    return {
        attack: () => console.log(`${name} attack`),
        walked: () => console.log(`${name} walked`)
    }
}

function swimmerMonsterCreator(name){
    const monster = { name: name};
    return{
        ...monster,
        ...attackerAndWalker(monster),
        ...swimmer(monster)
    }
}

function fylingSwimmingMonsterCreator(name){
    const monster = { name: name};

    return{
        ...monster,
        ...attackerAndWalker(monster),
        ...flyer(monster),
        ...swimmer(monster)
    }
}

const obj = swimmerMonsterCreator('Monster');
obj.walked();
obj.attack();
obj.swim();


const flySwimMonster = fylingSwimmingMonsterCreator('newMonster');
flySwimMonster.walked();
flySwimMonster.attack();
flySwimMonster.swim();
flySwimMonster.fly();