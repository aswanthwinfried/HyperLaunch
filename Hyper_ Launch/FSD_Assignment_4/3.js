/* 3.Create a class Laptop with a constructor that initializes 
    brand and model. Write a method getDetails() that returns the
     brand and model of the laptop.
*/

class Laptop {
    constructor(_brand ,_model){
        this.brand=_brand;
        this.model=_model;
    }
    getDetails(){
        console.log(`${this.brand}`,`${this.model}`);
    }
}

let brand1 = new Laptop('Lenovo','ThinkPad')

brand1.getDetails();