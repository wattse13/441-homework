/*
Author: Eli Watts
File Name: phaser.js
Date: 04/06/2020
Purpose: MART 441 Homework Assignment #12
*/

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var stars;
var bombs;
var gems;
var ow;
var platforms;
var cursors;
var score = 0;
var level = 1;
var gameOver = false;
var scoreText;
var levelText;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', '../assets/sky.png');
    this.load.image('ground', '../assets/platform.png');
    this.load.image('star', '../assets/star.png');
    this.load.image('bomb', '../assets/bomb.png');
    this.load.image('gem' , '../assets/sprites/orb-red.png');
    this.load.image( 'mines' , '../assets/sprites/mine.png' );
    this.load.spritesheet('cat', '../assets/sprites/baddie_cat_1.png', { frameWidth: 16, frameHeight: 16 });
    //this.load.spritesheet('gem', '../assets/sprites/gem-red-16x16x4.png', { frameWidth: 16, frameHeight: 16 });
}

function create ()
{
    //  A simple background for our game
    this.add.image(400, 300, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = this.physics.add.staticGroup();

    //Gems group contains collectable gems
    gems = this.physics.add.staticGroup();

    //Ow group contains collidable sparkles
    ow = this.physics.add.staticGroup();

    //  Here we create the ground.
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    //  Now let's create some ledges
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    //Creates some gems to be picked up
    gems.create( 600 , 525 , 'gem' );
    gems.create( 100 , 222 , 'gem' );
    gems.create( 700 , 192 , 'gem' );

    //Creates some sparkles to be collided with
    ow.create( 550 , 460 , 'mines' );
    ow.create( 400 , 300 , 'mines' );
    ow.create( 100 , 460 , 'mines' );

    // The player and its settings
    player = this.physics.add.sprite(200, 450, 'cat');


    //  Player physics properties. Give the little guy a slight bounce.
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('cat', { start: 0, end: 1 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'cat', frame: 1 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('cat', { start: 2, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();

    //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    stars.children.iterate(function (child) {

        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    bombs = this.physics.add.group();

    //  The score
    scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
    levelText = this.add.text( 250 , 16 , 'Level: ' + level , { fontSize: '32px' , fill: '#000' });

    //  Collide the player and the stars with the platforms
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(stars, platforms);
    this.physics.add.collider(bombs, platforms);
    //this.physics.add.collider( player , gems );
    //this.physics.add.collider( gems , platforms );

    //  Checks to see if the player overlaps with any of the stars if he does call the collectStar function
    this.physics.add.overlap(player, stars, collectStar, null, this);

    this.physics.add.collider(player, bombs, hitBomb, null, this);

    this.physics.add.overlap( player , gems , hitGem , null , this );

    this.physics.add.overlap( player , ow , hitMine , null , this );
}

function update ()
{
    if (gameOver)
    {
        return;
    }

    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.space.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }
}

function collectStar (player, star)
{
    star.disableBody(true, true);

    //  Add and update the score
    score += 10;
    scoreText.setText('Score: ' + score);

    if (stars.countActive(true) === 0)
    {
      level += 1;
      levelText.setText( 'Level: ' + level );
        //  A new batch of stars to collect
        stars.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);
        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;

    }
}

function hitGem (player, gems)
{
  gems.disableBody(true, true);

  //  Add and update the score
  score += 20;
  scoreText.setText('Score: ' + score);
  //console.log("ayo");
  /*if( gems.countActive(true) === 0 ) {
    gems.create(600 , 525 , 'gem' );
    gems.create( 100 , 222 , 'gem' );
    gems.create( 700 , 192 , 'gem' );
  }*/
}

function hitMine ( player , mines ) {

  this.physics.pause();

  player.setTint(0xff0000);

  gameOver = true;

  //Originally just wanted mines to decrease scoreText
  //Created bug which would reduce score continuously until next star or gem is picked up
  //score -= 10;
}


function hitBomb (player, bomb)
{
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    gameOver = true;
}
