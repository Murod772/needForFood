import './style.css';
import cacheHomeDom from './home.js';
import cacheMenuDom from './menu';



(function(){
    const content = document.querySelector("#content");

    function header(){
        const header = document.createElement("div");
        header.className = "header";
        
        const left = document.createElement("div");
        left.className = "left";
    
        const right = document.createElement("div");
        right.className = "right"
        
        const logo = document.createElement("div");
        logo.className = "logo";
        logo.textContent = "Need for Food";
    
        const home = document.createElement("button");
        home.className = "home";
        home.textContent = "Home";
    
        const menu = document.createElement("button");
        menu.className = "menu";
        menu.textContent = "Menu";
    
        const contact = document.createElement("button");
        contact.className = "contact";
        contact.textContent = "Contact";

        home.addEventListener("click", showHome);
        menu.addEventListener("click", showMenu);
    
        header.appendChild(left);
        header.appendChild(right)
        left.appendChild(logo);
        right.appendChild(home);
        right.appendChild(menu);
        right.appendChild(contact);
        content.appendChild(header);
    }

    function showHome(){
        document.querySelector(".main-home").style.display = "block";
        document.querySelector(".home").style.color = "#14c394cc";

        document.querySelector(".main-menu").style.display = "none";

    }

    function showMenu(){
        document.querySelector(".main-home").style.display = "none";
        document.querySelector(".home").style.color = "white";

        document.querySelector(".main-menu").style.display = "block";

    }


    function footer(){
        const footer = document.createElement("div");
        footer.className = "footer";
        content.appendChild(footer);
    }


    header();
    cacheHomeDom();
    cacheMenuDom();
    footer();


    
})();


