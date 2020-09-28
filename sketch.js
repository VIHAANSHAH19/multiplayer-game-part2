var hypnoticBall, database;
var position;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  form=new Form()
}

function draw(){
  form.display()
}