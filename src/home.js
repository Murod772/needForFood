export default function cacheHomeDom(){
    const content = document.querySelector("#content")
    const main = document.createElement("div");
    let home = document.querySelector(".home")
    home.style.color = "#14c394cc";
    main.className = "main-home";
    main.style.display = "block";
    content.appendChild(main);

    mainContent();

    function mainContent(){
        const card = document.createElement("div");
        card.className = "home-card";

        const para = document.createElement("div");
        para.className = "home-para";

        const button = document.createElement("button");
        button.className = "home-btn";

        const secPara = document.createElement("div");
        secPara.className = "home-secPara";

        para.textContent = "When you feel Need for Food, come on down for some delicious meals";
        button.textContent = "Order Now";
        secPara.textContent = "Fast and Tasty";

        card.appendChild(para);
        card.appendChild(button);
        card.appendChild(secPara);
        main.appendChild(card)
    }
}




