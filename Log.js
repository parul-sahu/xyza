class Log extends BaseClass{
    constructor(x, y, height, angle) {
        Matter.Body.setAngle(this.body, angle);
      super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
  

      }
     
     
  };
  