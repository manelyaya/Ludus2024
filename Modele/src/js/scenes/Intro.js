class Accueil extends Phaser.Scene {
    constructor() {
        super({ key: "Accueil" });
      }

    preload() {
        this.load.image(
            "office",
            "https://raw.githubusercontent.com/manelyaya/assets/main/Wall%20(1).webp"
          );
          this.load.image(
            "start",
            "https://raw.githubusercontent.com/manelyaya/assets/main/btn_commencer.png"
          );
          this.load.image(
            "credit",
            "https://raw.githubusercontent.com/manelyaya/assets/main/credit_btn.png"
          );
    }

    create() {
      //image de fond
 this.img = this.add.image(config.width / 2, config.height / 2, "office");
let scaleX = config.width / this.img.width;
let scaleY = config.height / this.img.height;
let scale = Math.max(scaleX, scaleY);
this.img.setScale(scale);

//button1
this.image = this.add.image(400, 500, 'start').setScale(0.3);

  this.image.setInteractive();
  this.image.on('pointerdown', (pointer) => {
    console.log('Jeu');
  });
  // boutton2 
  this.image = this.add.image(200, 500, 'credit').setScale(0.3);

  this.image.setInteractive();
  this.image.on('pointerdown', (pointer) => {
    console.log('Jeu');
  });







    }

    update() {

    }
}
class Jeu extends Phaser.Scene {
  constructor() {
    super({ key: "Jeu" });
  }}