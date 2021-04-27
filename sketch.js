var dog,sadDog,happyDog;
var feed,addFood,foodObj,foodStock,time;
var database;
var feedbutton,addbutton

function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  database=firebase.database()
database.ref("food").on("value",readStock);

database=firebase.database()
database.ref("feedtime").on("value",feedStock);

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  
feedbutton=createButton("Feed Dog");
feedbutton.position(600,100);
feedbutton.mousePressed(feedDog);

addbutton=createButton("Add food");
addbutton.position(700,100);
addbutton.mousePressed(addFood);
 
foodObj=new Food();
}

function draw() {
  background(46,139,87);
foodObj.display();
fill ("white");
text ("last time feed:-"+time,10,60)

  drawSprites();
}

//function to read food Stock
function feedDog(){
  dog.addImage(happyDog);
  foodObj.updateFood(foodObj.getFood()-1);
database.ref("/").update({food:foodObj.getFood(),feedtime:hour()})

}
function addFood(){
  dog.addImage(sadDog);
  foodObj.updateFood(foodObj.getFood()+1);
  database.ref("/").update({food:foodObj.getFood()})
}
//function to update food stock and last fed time
function readStock(data){
foodStock=data.val();
foodObj.updateFood(foodStock)
}
function feedStock(data){
  time=data.val();
  
  }

//function to add food in stock
