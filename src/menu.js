import hamburgerImage from './hamburger.png';
import cheeseburgerImage from './cheeseburger.png';
import friesImage from './fries.png';



export default function cacheMenuDom(){
    
    const content = document.querySelector("#content")
    const main = document.createElement("div");
    main.className = "main-menu";
    main.style.display = "none";
    content.appendChild(main);
    const card = document.createElement("div");
    card.className = "menu-card";

    mainContent();

    function mainContent(){

        const hamburgerImg = new Image();
        hamburgerImg.src = hamburgerImage;

        const cheeseburgerImg = new Image();
        cheeseburgerImg.src = cheeseburgerImage;

        const friesImg = new Image();
        friesImg.src = friesImage;

        const hamburger = new Food("Hamburger", "$14.49", "Buns, patty, tomato, onions, lettuce, and our secret recipe.", hamburgerImg);
        const cheeseburger = new Food("Cheeseburger", "$16.49", "Buns, two patty, tomato, onions, lettuce, and our secret recipe.", cheeseburgerImg);
        const fries = new Food("Fries", "$4.49", "Sometimes you don't want to eat your burger alone, why not add some french fries?", friesImg);

        addFoodToMenu(hamburger, cheeseburger, fries);

        main.appendChild(card)
    }

    function addFoodToMenu(...arg){
        for (let i = 0; i < arg.length; i++){
            const foodCard = document.createElement("div");
            foodCard.className = "food-card";
            const foodInfo = document.createElement("div");
            foodInfo.className = "food-info";
            foodInfo.innerHTML = `
                <div class="food-name">
                    <div class="name">${arg[i].name}</div>
                    <div class="price">${arg[i].price}</div>
                </div>
                <div>${arg[i].info}</div>
            `;
            foodCard.appendChild(arg[i].img);
            foodCard.appendChild(foodInfo);
            card.appendChild(foodCard);
            console.log(arg[i].name);
        }
    }
}

class Food {
    constructor(name, price, info, img){
        this.name = name;
        this.price = price;
        this.info = info;
        this.img = img;
    }
}