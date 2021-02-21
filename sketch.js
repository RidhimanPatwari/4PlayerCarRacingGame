var database;
var gameState = 0;
var playerCount;
var form, player, game;
var allPlayers;
var distance = 0;
var car1, carImage1, car2, carImage2, car3, carImage3, car4, carImage4, cars;
var trackImagePng, trackImageJpg;

function preload() {
    carImage1 = loadImage("images/car1.png");
    carImage2 = loadImage("images/car2.png");
    carImage3 = loadImage("images/car3.png");
    carImage4 = loadImage("images/car4.png")
    trackImageJpg = loadImage("images/track.jpg");
    trackImagePng = loadImage("images/track.png");
}

function setup(){
    database = firebase.database();
    createCanvas(displayWidth,displayHeight);
    
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");

    if (playerCount === 4) {
        game.update(1);
    }

    if (gameState === 1) {
        clear();
        game.play();
    }

    drawSprites();
}
