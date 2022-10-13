class Game{
  constructor({visible=true}){
    this.visible = visible;
    if(visible){this.element.style.display = "block"} else {this.element.style.display = "none"}
  }
  static element = document.querySelector(".game");
}
class Settings{
  constructor({visible=false}){
    this.visible = visible;
    if(visible){this.element.style.display = "block"} else {this.element.style.display = "none"}
    }
  }
  static element = document.querySelector(".settings");
}

class GameConsole{
  constructor({history = [],visible=false}){
    this.history = history;
    this.visible = visible;
    if(visible){this.element.style.display = "block"} else {this.element.style.display = "none"}
  }
  static element = document.querySelector(".console");
  //IPad cannot look at console
  log(message){
    this.history.push(message)
  }
}

const mainConsole = new GameConsole();
const settings = new Settings();
mainConsole.log("Loaded!")
