enum Department{
    Engineering = "engineering",
    Marketing = "marketing",
    Accounting = "accounting"
}

interface IEmployee{
    getDepartment(): Department
    getSalary(): number
    getName(): string
}

class MarketingManager implements IEmployee{
    getDepartment(): Department{
        return Department.Marketing;
    }
    getSalary():number{
        return 10;
    }
    getName():string{
        return  "Marketing";
    }
}

class EngineeringManager implements IEmployee{
    getDepartment(): Department{
        return Department.Engineering;
    }
    getSalary():number{
        return 450;
    }
    getName():string{
        return "Software Engineer";
    }
}

class AccountingManager implements IEmployee{
    getDepartment(): Department{
        return Department.Accounting;
    }
    getSalary():number{
        return 40;
    }
    getName():string{
        return "Accountant";
    }   
}

class Factory{
    private organizationName: string;
    
    constructor(name: string){
        this.organizationName = name;
    }

    public getOrganizationName(): string{
        return this.organizationName;
    }

    addEmployees(type: string): IEmployee{
        let obj;
        switch(type){
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
    }
}

const factory = new Factory('HBC');
const object = factory.addEmployees('engineering');
console.log(object.getDepartment());
console.log(object.getName());
console.log(object.getSalary());

const newObject = factory.addEmployees('marketing');
console.log(newObject.getDepartment());
console.log(newObject.getName());
console.log(newObject.getSalary());