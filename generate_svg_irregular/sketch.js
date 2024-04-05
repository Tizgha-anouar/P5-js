let Grid_irr;
let buff;
let list_svg = [];
let pg;
function preload() { 
  for (var index = 1; index < 6;index++ ){
      list_svg[index - 1] = loadSVG(`svg/${index}.svg`);
  }
}

function setup() {
    createCanvas(400, 400,SVG);
  frameRate(1);
    Grid_irr = new MakeGrid(5);
    Grid_irr.setup();
    Grid_irr.draw();
}
function mousePressed() {
  console.log("save");
  saveSVG("art_generate","svg");
}
function draw() {
  //clear();
  background("white");
  image(Grid_irr.buffer, 0, 0);
  addStroke();
  Grid_irr.redraw();
}

function addStroke() {
  var g = document.getElementsByTagName("g");
  var paths = document.getElementsByTagName("path");
  for(let n = 0; n < paths.length; n++){
    paths[n].setAttribute('stroke', "black")
    paths[n].setAttribute('stroke-width', "2") 
    //paths[n].setAttribute('filter', 'url(#displacementFilter)')
    var col = paths[n].getAttribute('fill')
}

}