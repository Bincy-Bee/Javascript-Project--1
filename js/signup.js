
// Signup page JS 

let pops = document.getElementById("poping");


const popopen=()=>{
    pops.classList.add("pop-up-open");
}

const popclose=()=>{
    pops.classList.remove("pop-up-open");

    window.location.href="http://127.0.0.1:5500/pages/signin.html";

    // document.getElementById("btn-sign").value = "Sign Out";
}


document.getElementById("signupform").addEventListener("submit",(e)=>{
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;
  
    console.log(name, email, password, repassword);

    let namecheck = /^[A-Za-z. ]{3,30}$/;
    let emailcheck = /^[A-Za-z0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    let passwordcheck = /^(?=.*[A-Z]{1})(?=.*[0-9])(?=.*[!@#$%^&*=-])[a-zA-Z0-9!@#$%^&*=-]{8,16}$/;

    //condition for users name
    if (namecheck.test(name)){
        document.getElementById("namealert").innerHTML = "";
    }else{
        document.getElementById("namealert").innerHTML = "** Invalid username !";
    }

     //condition for users email
     if(emailcheck.test(email)){
        document.getElementById("uemailalert").innerHTML = "";
    }else{
        document.getElementById("uemailalert").innerHTML = "** Invalid email !";
    }

    //condition for users password
    if(passwordcheck.test(password)){
        document.getElementById("upassalert").innerHTML = "";
    }else{
        document.getElementById("upassalert").innerHTML = "** Invalid password !";
    }
    
    //condition for users repassword
    if (password == repassword){
        document.getElementById("urepassalert").innerHTML = "";
    }else{
        document.getElementById("urepassalert").innerHTML = "** Password is mismatch !";
    }

    //condition for for popup box open
    if (namecheck.test(name) && emailcheck.test(email) && passwordcheck.test(password) && password == repassword){
         popopen();
    }

  
});
document.getElementById("close").addEventListener("click",(e)=>{
    e.preventDefault();
    let signupemail = document.getElementById("email").value;
    let userdata = {
       name :document.getElementById("name").value,
       email : document.getElementById("email").value,
       password : document.getElementById("password").value,
       repassword : document.getElementById("repassword").value,
    }
   console.log(userdata);
//    fetch(`http://localhost:8080/signupdata?email=${signupemail}`)
//     .then((xyz)=>{
//         let request = xyz;
//         if (request.length > 0){
//             if (request[i].email == signupemail){
//                 document.getElementById("uemailalert").innerHTML = "User Alredy exist";
//             }
//         }
//     })

    fetch("http://localhost:8080/signupdata",{
        method : "POST",
        headers : {"Content-Type":"application/json"},
        body : JSON.stringify(userdata)
    })
    .then((res)=> res.json())
    .then((dada)=> console.log(dada))
})

document.getElementById("close").addEventListener("click", popclose);

let get = async()=>{
fetch("http://localhost:8080/signupdata")
.then((xyz)=> xyz.json())
.then( (dada)=> console.log(dada))
}
get();




