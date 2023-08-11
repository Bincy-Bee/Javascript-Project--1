
document.getElementById("menu").addEventListener("click", ()=>{
    document.getElementById("menu-list").style.display = "block";
});
document.getElementById("ul-close").addEventListener("click", ()=>{
    document.getElementById("menu-list").style.display = "none";
});

const display=(blogdata)=>{
    document.getElementById("displayui").innerHTML="";
    blogdata.map((ele)=>{

        let title = document.createElement("h2");
        title.innerHTML = ele.title;

        let img = document.createElement("img");
        img.src = ele.conimg;

        let category = document.createElement("h4");
        category.innerHTML = ele.category;

        let content = document.createElement("p");
        content.innerHTML = ele.content;
        content.setAttribute("id","context");
    
        let btn = document.createElement("button");
        btn.innerHTML = "More...";
        btn.setAttribute("id","readmore");
        
        let div = document.createElement("div");
        div.setAttribute("id","sub-div");

        div.append(title, img, category, content, btn);
        document.getElementById("displayui").append(div);

    })

}


const searchcat=()=>{
    let serval = document.getElementById("blogsearchinput").value;
   
    fetch(`http://localhost:8080/addblogs`)
    .then((res)=> res.json())
    .then((blogs)=> {
        console.log(blogs);
        let cat = blogs.filter((item)=> item.category.toLowerCase().match(serval.toLowerCase()));
        display(cat);
    })
};

document.getElementById("startsearch").addEventListener("click", searchcat);

document.getElementById("blogsearchinput").addEventListener("input",(e)=>{
    // console.log(e.key);
    // if (e.key == "Enter"){
    //     searchcat();
    // }
    searchcat();
});

const handelcat=(cat)=>{
    fetch(`http://localhost:8080/addblogs?category=${cat}`)
    .then((res)=> res.json())
    .then((blogs)=> display(blogs))

}


document.getElementById("all").addEventListener("click", ()=>get());
document.getElementById("tech").addEventListener("click", ()=> handelcat("Technology"));
document.getElementById("gad").addEventListener("click", ()=> handelcat("Gadgets"));
document.getElementById("spo").addEventListener("click", ()=> handelcat("Sports"));
document.getElementById("heal").addEventListener("click", ()=> handelcat("Health"));
document.getElementById("edu").addEventListener("click", ()=> handelcat("Education"));
document.getElementById("ent").addEventListener("click", ()=> handelcat("Entertainment"));
document.getElementById("sci").addEventListener("click", ()=> handelcat("Science"));
document.getElementById("int").addEventListener("click", ()=> handelcat("Internet"));

let get = async()=>{
    fetch("http://localhost:8080/addblogs")
    .then((res)=> res.json())
    .then((blogs)=> display(blogs));
}

get();