let popwrites = document.getElementById("writepop");
console.log(popwrites)

const wpopopen=()=>{
    popwrites.classList.add("pop-up-open");
}

const wpopclose=()=>{
    popwrites.classList.remove("pop-up-open");

    window.location.href="http://127.0.0.1:5500/index.html";
}


document.getElementById("blogpostform").addEventListener("submit", (e)=>{
    e.preventDefault();
    // create object for input
    

    // Store value of input in store
    let conimg = document.getElementById("conimg").value;
    let category = document.getElementById("category").value;
    let title = document.getElementById("title").value;
    let content = document.getElementById("textcontent").value;
    let catselect = document.getElementById("selected").value;

    console.log(conimg, category, title, content, catselect)
    
    //Condition for input data
    if(conimg == ""){
        document.getElementById("urlalert").innerHTML = "** url shouldn't not be blank !";
    }else{
        document.getElementById("urlalert").innerHTML = "";
    }

    if(category == catselect){
        document.getElementById("selectalert").innerHTML = "** Please select category !";
    }else{
        document.getElementById("selectalert").innerHTML = "";
    }

    if (title == ""){
        document.getElementById("titlealert").innerHTML = "** Title shouldn't not be blank !";
    }else{
        document.getElementById("titlealert").innerHTML = "";
    }

    if (content.length < 200){
        document.getElementById("contentalert").innerHTML = "** Content should be min 200 characters !";
    }else{
        document.getElementById("contentalert").innerHTML = "";
    }

    // Condition all fullfiled then put condition
    if (conimg && category != catselect && title && content.length > 200 ){
        wpopopen();
    }

   
});
document.getElementById("w-close").addEventListener("click",()=>{

    let blogs = {
        conimg : document.getElementById("conimg").value,
        category : document.getElementById("category").value,
        title : document.getElementById("title").value,
        content : document.getElementById("textcontent").value,
    }

     fetch("http://localhost:8080/addblogs",{
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(blogs)
        })
        .then((res)=> res.json())
        .then((writes)=> console.log(writes));

    wpopclose();
})

document.getElementById("backwritepost").addEventListener("click",()=>{
    window.history.back();
})

let get = async()=>{
    fetch("http://localhost:8080/addblogs")
    .then((res)=> res.json())
    .then((blogs)=> display(blogs));
}

get();