class Player {
    constructor() {
        this.positionX = 50;
        this.positionY = 0;
        this.width = 20;
        this.heigth = 10;
        this.domElement = null;

        this.createDomElement()
    }

    createDomElement() {
        //create dom element - still not in html
        this.domElement = document.createElement("div")

        //set Id
        this.domElement.id = 'player'

        //positioning the player inside the dom
        this.domElement.style.width = this.width + "vw"
        this.domElement.style.height = this.heigth + "vh"
        this.domElement.style.left = this.positionX + "vw"
        this.domElement.style.bottom = this.positionY + "vh"

        //append to the dom 
        const parentElm = document.getElementById("board")
        parentElm.appendChild(this.domElement)
    }

    moveLeft() {
        this.positionX--;
        this.domElement.style.left = this.positionX + "vw"

    }
    moveRight() {
        this.positionX++;
        this.domElement.style.left = this.positionX + "vw"

    }

}


const player = new Player()
//i want to add a div to the dom so i have a player
//constructor method call
// createDom elemnt will be excuted 

document.addEventListener("keydown", (event) => {
    if(event.key === "ArrowLeft") {
        player.moveLeft();
    } else if (event.key === "ArrowRight") {
        player.moveRight();
    }
})
