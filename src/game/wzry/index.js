import Common from "../../core/index";

class wzry extends Common{
  constructor(){
    super()
    this.name = 'hpyj'
    this.init()
  }
  init(){
    console.log(`my name :${this.name}`);
  }
}

export default new wzry();