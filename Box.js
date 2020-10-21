class Box {
    constructor( width, height) {
      
      this.body = Bodies.rectangle(boxPosition , boxY,width, height);
      this.boxPosition = 750 ; 
      this.boxY = 370 ; 
      this.width = width;
      this.height = height;

      
      World.add(world, this.body);
    }
    display(){
      
      fill("grey");
      rect(0, 0, this.width, this.height);
      
      } ;