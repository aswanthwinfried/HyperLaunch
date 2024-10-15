/* 5.Create a class Rectangle with properties width and height. 
    Add a getter method to calculate the area and a setter method to 
    ensure the width is positive before updating the property.
*/

class Rectangle{
    constructor(_width,_height){
        this.width = _width;
        this.height = _height;
    }
    get area(){
        return this.width*this.height;
    }

    set width(value){
        if(value>0){
         this._width = value; 
        }
        else{
            console.log("Width must be positive");
        }
    }

    get width(){
        return this._width;
    }
}

let rect = new Rectangle(4,19);
console.log(rect.area);

rect.width = -3;
console.log(rect.width);