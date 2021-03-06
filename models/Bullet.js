class Bullet {
    constructor(player, xChange, yChange,color) {
        this.id = new Date().getTime();
        this.playerID = player.id
        this.posx = player.posx;
        this.posy = player.posy;
        this.color = color;
        this.xChange = xChange;
        this.yChange = yChange;

        this.isActive = true;
        this.distance = 0;
        this.maxDistance = 10;
        this.damage=player.damage;

    }
  
    update = () => {
        this.move();
    }
    move = () => {
        this.distance++;
        // if (this.distance > this.maxDistance) {
        //     this.isActive = false;
        // }
        // console.log(this.distance, this.maxDistance)
        this.posx += this.xChange;
        this.posy += this.yChange;
    }
}
module.exports = Bullet;