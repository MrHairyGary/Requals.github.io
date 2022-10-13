class GameInstance{
  constructor({visible=true}){
    this.visible = visible;
    if(visible){this.element.style.display = "block"} else {this.element.style.display = "none"}
  }
  static element = document.querySelector(".game");
}
class SettingsInstance{
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

const Log = new GameConsole();
const Settings = new SettingsInstance();
const Game = new GameInstance();
mainConsole.log("Loaded!")
