//  const student = {
//             name : "lajitha",
//             age : 50,
//             isActive : false ,
//             coursestaken : ["mango", "express", "react", "node"],
//             clculatedays : function (a , b){
//                 return a + b
//             },
            
//     }

//     console.log(student.age);
    

//     const {  name : userName  , age , isActive} = student




//     console.log(student.name);

//     console.log(name);







    
    









                        

    // student.currentCourse = "web dev"
    // student.age = 21

    // console.log(student.name);
    // console.log(student.isActive);
    // console.log(student.clculatedays(1 ,30));

    // console.log(student);
    

    // delete student.isActive;
    



    
    // console.log(student);








    // class Car {
    //     constructor (brand , year ){
    //         this.brand =  brand
    //         this.year = year 

    //     }
    //     start() {
    //         console.log(this.brand);
    //     }

    //     off(){
    //         console.log(this.year );
            

    //     }
    // }


    // const c1 = new Car("BMW" , 2020)


    // c1.start()
    // c1.off()


// function User(name) {
//   this.name = name;
// }

// User.prototype.sayHi = function() {
//   console.log("Hi " + this.name);
// };

// const u1 = new User("Arun");
// u1.sayHi();



class Animal {
    speak(){
        console.log("aimal spaks");
        
    }
    
}

class Dog extends Animal{
    bark(){
        console.log("dogs Bark");
        
    }
}

const d = new Dog();

d.speak()
d.bark()