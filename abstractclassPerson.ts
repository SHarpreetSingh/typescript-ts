abstract class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    display(): void {
        console.log(this.name);
    }

    abstract find(name:string): Person;
}

class Employee extends Person {
    empCode: number;
    
    constructor(name: string, code: number) {
        super(name); // must call super()
        this.empCode = code;
    }

    find(name:string): Person {
        // execute AJAX request to find an employee from a db
        return new Employee(name, 1);
    }
}

let emp: Person = new Employee("James", 100);
emp.display(); //James

let emp2: Person = emp.find('Steve');

//  empty object how many ways
// let obj = {a:1,b:2,c:{age:1}}
// 
// object.clone=object.assign({},obj)
// obj.c.age

// middleware
// event loop
// promise vs async await
// typescript
// function(...args){
    // for(let i for args){
        // 
        // ans*i=1
    // }    
    // }
// }
// display(4,3,1)
// 
