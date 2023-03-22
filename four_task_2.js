(function (){
 function checkAge(){
let  name = prompt("What's your name?");
let age = prompt("How old are you?");
let status = prompt("What's your status? (moderator, admin or user)");

try{
    if(age === ""){
        throw new Error("The field is empty! Please enter your age");
    } else if(isNaN(Number(age))){
        throw new EvalError("Invalid age value!")
    } else if(age < 18 || age > 70){
        throw new RangeError("You are not eligible to watch this movie!")
    } else if(status !== "admin" && status !== "moderator" && status !== "user"){
        throw new EvalError('Invalid status value!');
    } else {
        alert(`Welcome ${name}! You are eligible to watch this movie.`)
    }
} catch (error){
    alert(`${error.name}: ${error.message}`);
}
 }
 checkAge()
})()