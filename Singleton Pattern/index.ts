/**
 * Singleton Pattern Program using Typescript Class 
 */
class MySingleton{
    private static instance : MySingleton ;
    private constructor(){}

    static getinstance(): MySingleton{
        if(!MySingleton.instance){
            MySingleton.instance = new MySingleton();
        }
        return MySingleton.instance;
    }
}

const singletonObj1 = MySingleton.getinstance();
const singletonObj2 = MySingleton.getinstance();

console.log(singletonObj1 === singletonObj2);