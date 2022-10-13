
class GameInstance{
  constructor(){
  }
  element = document.querySelector(".game");
  hide(){element.style.display="none"}
  show(){element.style.display="block"}
  
}
class SettingsInstance{
  constructor(){
  }
  element = document.querySelector(".settings");
  hide(){element.style.display="none"}
  show(){element.style.display="block"}
  
}

class GameConsole{
  constructor(history = []){
    this.history = history;
  }
  element = document.querySelector(".console");
  hide(){element.style.display="none"}
  show(){element.style.display="block"}
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
mainConsole.log("Loaded!")
