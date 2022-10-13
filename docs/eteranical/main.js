class Game{
  constructor(){}
  
  static element = document.querySelector(".game");
}

class Settings{
  constructor(){}
  
  static element = document.querySelector(".settings");
}

class GameConsole{
  constructor({history = []}){
    this.history = [];
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
