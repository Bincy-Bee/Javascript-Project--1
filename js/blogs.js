const display=(blogdata)=>{

    blogdata.map((ele)=>{

        let title = document.createElement("h2");
        title.innerHTML = ele.title;

        let img = document.createElement("img");
        img.src = ele.conimg;

        let category = document.createElement("h4");
        category.innerHTML = ele.category;

        let content = document.createElement("p");
        content.innerHTML = ele.content;

        let div = document.createElement("div")
        div.setAttribute("id","sub-div");

        div.append(title, img, category, content);
        document.getElementById("displayui").append(div);

    })

}

let get = async()=>{
    fetch("http://localhost:8080/addblogs")
    .then((res)=> res.json())
    .then((blogs)=> display(blogs));
}

get();