
// Signup page JS 

document.getElementById("signupform").addEventListener("submit", (e)=>{
    e.preventDefault();

    let upuser = {
        name : document.getElementById("name").value,
        username : document.getElementById("username").value,
        email : document.getElementById("email").value,
        password : document.getElementById("password").value,
    }
    let name = upuser.name;
    let username = upuser.username;
    let email = upuser.email;
    let password = upuser.password;

    console.log(name, username, email, password);

    if (name.length == 0){
        document.getElementById("namealert").innerHTML = "Please enter your name !";
    }else if(name.length < 2){
        document.getElementById("namealert").innerHTML = "Name is too short !";
    }else{
        document.getElementById("namealert").innerHTML = "";
    }

    if(username.length == 0){
        document.getElementById("unamealert").innerHTML = "Please enter username !";
    }else if(username == upuser.name){
        document.getElementById("unamealert").innerHTML = "Name & Username shouln't same !";
    }else if(username.length < 2){
        document.getElementById("unamealert").innerHTML = "Userame is too short !";
    }else{
        document.getElementById("unamealert").innerHTML = "";
    }

    if(email.length == 0){
        document.getElementById("uemailalert").innerHTML = "Please enter email !";
    }else{
        document.getElementById("uemailalert").innerHTML = "";
    }
    
    if (password.length == 0){
        document.getElementById("upassalert").innerHTML = "Please enter email !";
    }else if (password.length < 8){
        document.getElementById("upassalert").innerHTML = "Password lenght min 8 characters !";
    }else{
        document.getElementById("upassalert").innerHTML = "";
    }

})