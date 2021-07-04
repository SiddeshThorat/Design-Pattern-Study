var Department;
(function (Department) {
    Department["Engineering"] = "engineering";
    Department["Marketing"] = "marketing";
    Department["Accounting"] = "accounting";
})(Department || (Department = {}));
var MarketingManager = /** @class */ (function () {
    function MarketingManager() {
    }
    MarketingManager.prototype.getDepartment = function () {
        return Department.Marketing;
    };
    MarketingManager.prototype.getSalary = function () {
        return 10;
    };
    MarketingManager.prototype.getName = function () {
        return "Marketing";
    };
    return MarketingManager;
}());
var EngineeringManager = /** @class */ (function () {
    function EngineeringManager() {
    }
    EngineeringManager.prototype.getDepartment = function () {
        return Department.Engineering;
    };
    EngineeringManager.prototype.getSalary = function () {
        return 450;
    };
    EngineeringManager.prototype.getName = function () {
        return "Software Engineer";
    };
    return EngineeringManager;
}());
var AccountingManager = /** @class */ (function () {
    function AccountingManager() {
    }
    AccountingManager.prototype.getDepartment = function () {
        return Department.Accounting;
    };
    AccountingManager.prototype.getSalary = function () {
        return 40;
    };
    AccountingManager.prototype.getName = function () {
        return "Accountant";
    };
    return AccountingManager;
}());
var Factory = /** @class */ (function () {
    function Factory(name) {
        this.organizationName = name;
    }
    Factory.prototype.getOrganizationName = function () {
        return this.organizationName;
    };
    Factory.prototype.addEmployees = function (type) {
        var obj;
        switch (type) {
            case 'engineering':
                obj = new EngineeringManager();
                break;
            case 'marketing':
                obj = new MarketingManager();
                break;
            case 'accounting':
                obj = new AccountingManager();
                break;
        }
        return obj;
    };
    return Factory;
}());
var factory = new Factory('HBC');
var object = factory.addEmployees('engineering');
console.log(object.getDepartment());
console.log(object.getName());
console.log(object.getSalary());
var newObject = factory.addEmployees('marketing');
console.log(newObject.getDepartment());
console.log(newObject.getName());
console.log(newObject.getSalary());
