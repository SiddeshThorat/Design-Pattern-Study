interface AbstractProductA{
    usefulFunctionA(): string;
}
interface AbstractProductB{
    usefulFunctionB(): string;
    anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

interface AbstractFactory{
    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;
}

class ConcreteFactory1 implements AbstractFactory{
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }
    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

class ConcreteFactory2 implements AbstractFactory{
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }
    public createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}

class ConcreteProductA1 implements AbstractProductA{
    public usefulFunctionA(): string{
        return "the result of product A1";
    }
}
class ConcreteProductA2 implements AbstractProductA{
    public usefulFunctionA(): string{
        return "the result of product A2";
    }
}

class ConcreteProductB1 implements AbstractProductB{
    public usefulFunctionB(): string{
        return "the result of product B1";
    }
    public anotherUsefulFunctionB(collaborator: AbstractProductA){
        const result = collaborator.usefulFunctionA();
        return `The result of the B1 collaborating with the ${result}`;
    }
}
class ConcreteProductB2 implements AbstractProductB{
    public usefulFunctionB(): string{
        return "the result of product B2";
    }
    public anotherUsefulFunctionB(collaborator: AbstractProductA){
        const result = collaborator.usefulFunctionA();
        return `The result of the B2 collaborating with  ${result}`;
    }
}

function clientCode(factory : AbstractFactory){
    const productA  =factory.createProductA();
    const productB = factory.createProductB();

    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}

console.log("Client: Testing client code with first factory type...");
const factory1 = new ConcreteFactory1();
clientCode(factory1);

const factory2 = new ConcreteFactory2();
clientCode(factory2);

