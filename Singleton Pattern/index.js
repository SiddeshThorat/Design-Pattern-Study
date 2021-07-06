/**
 * Singleton Pattern Program using Typescript Class
 */
var MySingleton = /** @class */ (function () {
    function MySingleton() {
    }
    MySingleton.getinstance = function () {
        if (!MySingleton.instance) {
            MySingleton.instance = new MySingleton();
        }
        return MySingleton.instance;
    };
    return MySingleton;
}());
var singletonObj1 = MySingleton.getinstance();
var singletonObj2 = MySingleton.getinstance();
console.log(singletonObj1 === singletonObj2);
