import Common from "../../core/index";

class hpjy extends Common{
  constructor(){
    super()
    this.name = 'hpjy'
    this.init()
  }
  init(){
    console.log(`my name :${this.name}`);
  }
}

export default new hpjy();