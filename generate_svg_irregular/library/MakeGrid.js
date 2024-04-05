class MakeGrid{
    constructor(step) {
        this.grid = [];
        this.grid_step_w = width / step;
        this.grid_step_h = height / step;
        this.step = step;
        this.grid_info = [];
        this.buffer;
    }

    setup() {
        for(var i = 0 ; i < this.step;i++){
            let column = [];
            for(var j = 0 ; j < this.step;j++){
                column.push(1);
            }
            this.grid.push(column);
        }

        
    }
    draw() {
        this.generateGrid([2,3,4]);
        this.generateGrid([1]);
        stroke(41,81,24);
        strokeWeight(4);
        this.drawGrid();
    }
    redraw() {

        this.grid.forEach((row, r) => { 
            row.forEach((col, c) => { 
                //print(this.grid[r][c]);
                this.grid[r][c] = "1"
            });
        });
        this.grid_info = [];
        this.draw();
    }
    generateGrid(arr) {
        for(var y = 0;y < this.step;y++){
            for(var x = 0;x < this.step ;x++){
                let wSize = random(arr);
                let hSize = random(arr);
                //print(wSize);
                let fits = true;
                if(y + hSize > this.step || x + wSize > this.step ){
                    fits = false;
                }
                if(fits){
                for(var yy = y ;yy < y + hSize; yy++){
                for(var xx = x ; xx < x + wSize ;xx++){ 
                    if (this.grid[yy][xx] == 0) { fits = false; }
                    }
                }
                    }


                if(fits){
                    for(var yy = y ;yy < y + hSize; yy++){
                    for(var xx = x ; xx < x + wSize ;xx++){
                     this.grid[yy][xx] = 0;
                    }
                }
                this.grid_info.push(new MakeRect(x,y,wSize,hSize));

                }


            }
        }
        
  
    }
    drawGrid() {
        this.buffer = createGraphics(width, height, SVG);
        
    this.grid_info.forEach((item)=>{
        this.buffer.image(random(list_svg),
            item.x * this.grid_step_w,
            item.y * this.grid_step_h,
            item.w * this.grid_step_w,
            item.h * this.grid_step_h
    );
  });
     }
 }