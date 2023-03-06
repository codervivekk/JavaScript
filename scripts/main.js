// let a=prompt();
// let b=a;
// console.log(b);


let user,password;
user=prompt("Who's there?");

if(user=="Admin"){
    password=prompt("Enter Password:")
    if(password=="TheMaster"){
        alert("Welcome!")
    }
    else if(password==null || password==undefined){
        alert("Cancelled!");
    }
    else{
        alert("Wrong Password!");
    }
}
else if(user==null || user==undefined){
    alert("Cancelled!");
}
else{
    alert("I don't know you! ");
}
