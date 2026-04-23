    let body = document.querySelector("#body");
    let btn = document.querySelector("#btn");
    let h1 = document.querySelector("h1");

    body.style.backgroundColor = "white";

    btn.addEventListener("click", function(){
        if(body.style.backgroundColor === "white"){
            body.style.backgroundColor = "black";
            body.style.color = "white";
            h1.style.textShadow = "2px 2px 2px white";
            h1.innerHTML = `"Dark mode is activated."`;
            btn.textContent = "DarkMode"
            
        } else {
            body.style.backgroundColor = "white"
            body.style.color = "black";
            h1.style.textShadow = "1px 1px 1px black";
            h1.innerHTML = `"Light mode is activated."`;
            btn.textContent = "WhiteMode";
        }
    })
