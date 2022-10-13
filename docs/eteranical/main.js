
class GameInstance{
  constructor(){
  }
  element = document.querySelector(".game");
  hide(){this.element.style.display="none"}
  show(){this.element.style.display="block"}
  
}
class SettingsInstance{
  constructor(){
  }
  element = document.querySelector(".settings");
  hide(){this.element.style.display="none"}
  show(){this.element.style.display="block"}
  
}

class GameConsole{
  constructor(history = []){
    this.history = history;
  }
  element = document.querySelector(".console");
  hide(){this.element.style.display="none"}
  show(){this.element.style.display="block"}
  //IPad cannot look at console, also for buy/sell/whatever messages
  log(message){
    this.history.push(message)
  }
}

const Log = new GameConsole();
const Settings = new SettingsInstance();
const Game = new GameInstance();
Log.hide();
Settings.hide();
Game.show();
Log.log("Loaded!")
