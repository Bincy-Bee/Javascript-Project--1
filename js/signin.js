
let data = JSON.parse(localStorage.getItem("datas")) || [];

let signinpop = document.getElementById("signinpop");
const spopopen=()=>{
    signinpop.classList.add("pop-up-open");
}

const spopclose=()=>{
    signinpop.classList.remove("pop-up-open");

    window.location.href="http://127.0.0.1:5500/index.html"; 
   
}

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


    fetch(`http://localhost:8080/signupdata?email=${useremail}`)
    .then((xyz)=> xyz.json())
    .then((dada)=>{
        console.log(dada);
        localStorage.setItem("datas", JSON.stringify(dada));
        
        if (dada.length > 0){
                for (let i = 0; i < dada.length ; i++){
                if( dada[i].email == useremail && dada[i].password == userpassword){
                    spopopen();
                   
                }
                else{
                    document.getElementById("useremailalert").innerHTML = "** Invalid email !";
                    document.getElementById("userpassalert").innerHTML = "** Invalid password !";
                }
            }
        }
        else{
            document.getElementById("useremailalert").innerHTML = "** User not exist !";
        }
      
})

})
document.getElementById("enter").addEventListener("click", spopclose);

let get = async()=>{ 

    fetch("http://localhost:8080/signupdata")
    .then((xyz)=> xyz.json())
    .then( (dada)=> console.log(dada))
    }
get();
