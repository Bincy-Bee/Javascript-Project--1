
// Signup page JS 

let pops = document.getElementById("poping");
let signinpops = document.getElementById("signinpop")

const popopen=()=>{
    pops.classList.add("pop-up-open");
}
const spopopen=()=>{
    signinpops.classList.add("pop-up-open");
}
const popclose=()=>{
    pops.classList.remove("pop-up-open");

    window.location.href="./signin.html"

    // document.getElementById("btn-sign").value = "Sign Out";
}
const spopclose=()=>{
    signinpops.classList.remove("pop-up-open");

    window.location.href="./index.html"

    // document.getElementById("btn-sign").value = "Sign Out";
}


// const sen=(data)=>{
    
//     let useremail = document.getElementById("uname").value;
//     let userpassword = document.getElementById("password").value;
//     console.log(data)
   
//     let emailsave = data.filter((item) => item.email1.match(useremail));
//     console.log(emailsave);

//     let passsave = data.filter((item) => item.password1.match(userpassword));
//     console.log(passsave);

//     if( useremail == emailsave && userpassword == passsave){
//         alert("sign in succesfull")
//         spopopen();
//         window.location.href="./index.html";
//     }

// }

document.getElementById("signinform").addEventListener("submit",(e)=>{
    e.preventDefault();

    let useremail = document.getElementById("uname").value;
    let userpassword = document.getElementById("password").value;

    let emailcheck = /^[A-Za-z0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    let passwordcheck = /^(?=.*[A-Z]{1})(?=.*[0-9])(?=.*[!@#$%^&*=-])[a-zA-Z0-9!@#$%^&*=-]{8,16}$/;

    // input data fill up condition 
    if(emailcheck.test(useremail)){
        document.getElementById("useremailalert").innerHTML = "";
    }else{
        document.getElementById("useremailalert").innerHTML = "** Invalid email !";
    }

    //condition for users password
    if(passwordcheck.test(userpassword)){
        document.getElementById("userpassalert").innerHTML = "";
    }else{
        document.getElementById("userpassalert").innerHTML = "** Invalid password !";
    }

    if (emailcheck.test(useremail) && passwordcheck.test(userpassword)){
        spopopen();
    }
    
    fetch("http://localhost:8080/signupdata")
    .then((xyz)=> {
        let req = xyz;

        let userExist = false;

        for(let i = 0;i < req.length; i++){
            if (req[i].email1 == useremail && req[i].password1 == userpassword){
                window.location.href="./index.html"
            }
        }
        if (userExist == true){
            window.location.href="./index.html"
        }else{
            window.location.href="./signup.html"
        };
    })
    .then((data)=>console.log(data))
    }
    
   
    // let emailsave = data.filter((item)=> item.email1.match(useremail));
    // console.log(emailsave);
    // let passsave =  data.filter((item)=> item.password.match(userpassword));
    // console.log(passsave);

    // if( useremail == emailsave && userpassword == passsave){
    //     window.location.href="./index.html"
    // }
    

    
})
let get = async()=>{ 

    fetch("http://localhost:8080/signupdata")
    .then((xyz)=> xyz.json())
    .then( (dada)=> sen(dada))
    }
get();

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

    let userdata = {
       name1 :document.getElementById("name").value,
       email1 : document.getElementById("email").value,
       password1 : document.getElementById("password").value,
       repassword1 : document.getElementById("repassword").value,
    }
   console.log(userdata);

    fetch("http://localhost:8080/signupdata",{
        method : "POST",
        headers : {"Content-Type":"application/json"},
        body : JSON.stringify(userdata)
    })
    .then((res)=> res.json())
    .then((dada)=> console.log(dada))
})

document.getElementById("close").addEventListener("click", popclose);
document.getElementById("enter").addEventListener("click", spopclose);

// let get = async()=>{
// fetch("http://localhost:8080/signupdata")
// .then((xyz)=> xyz.json())
// .then( (dada)=> zzz(dada))
// }
// get();




