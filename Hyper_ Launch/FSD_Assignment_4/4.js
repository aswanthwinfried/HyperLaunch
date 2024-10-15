/* 4. Create a base class Animal with a method makeSound(). Then create a
 derived class Dog that extends Animal and overrides makeSound() to print
  "Woof". Create an instance of Dog and call the makeSound() method.
*/

class Animal{
    constructor(_sound){
        this.sound=_sound;
    }
    makeSound(){
        console.log(`${this.sound}`)
    }
}

class Dog extends Animal{
    constructor(_sound){
        super(_sound)
    }
    makeSound(){
        super.makeSound();
    }
}

let animal1 = new Dog('Woof');
animal1.makeSound()