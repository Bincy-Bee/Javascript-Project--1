
// Signup page JS 

let pops = document.getElementById("poping");

function popopen(){
    pops.classList.add("pop-up-open");
}
function popclose(){
    pops.classList.remove("pop-up-open");
    window.location.href="./signin.html"
    document.getElementById("btn-sign").value = "Sign Out";
}


document.getElementById("signupform").addEventListener("submit", (e)=>{
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;
  
    // console.log(name, email, password, repassword);

    let namecheck = /^[A-Za-z. ]{3,30}$/;
    let emailcheck = /^[A-Za-z0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/
    let passwordcheck = /^(?=.*[A-Z]{1})(?=.*[0-9])(?=.*[!@#$%^&*=-])[a-zA-Z0-9!@#$%^&*=-]{8,16}$/

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
})
document.getElementById("close").addEventListener("click", popclose);  //call popclose 

//sign up data will post to api server.. js
document.getElementById("close").addEventListener("click",()=>{
    // above sign up data store in api

    let userdata ={
        uname : document.getElementById("name").value,
        uusername : document.getElementById("username").value,
        uemail : document.getElementById("email").value,
        upassword : document.getElementById("password").value,
    }
    console.log(userdata);

    fetch("http://localhost:8090/signup" ,{
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(userdata)
    })
    .then((res)=> res.json())
    .then((usedata)=> console.log(usedata))
})


// //Sign in Data

const signindata=(e)=>{
    e.preventDefault();

    let user = {
        name1 : document.getElementById("suname").value,
        password1 : document.getElementById("supassword").value,
    }
    console.log(user);

    fetch("http://localhost:8090/signin" ,{
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(user)
    })
}


document.getElementById("signinform").addEventListener("submit",signindata)