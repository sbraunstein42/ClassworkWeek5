export class Flower {
    maximumSize = 50;
    size = 0;
    canvas = document.getElementById("myCanvas");
    pencil = this.canvas.getContext("2d");

    draw(size, color) {
        this.pencil.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.pencil.beginPath();
        this.pencil.arc(
            this.canvas.width / 2,   // x center
            this.canvas.height / 2,  // y center
            this.size,               // radius
            0, Math.PI * 2
        );
        this.pencil.fillStyle = "pink";
        this.pencil.fill();
    }

    grow() {
        if (this.size < this.maximumSize) {
            this.size += 10;
            this.draw(this.size, "pink");
            
        } else {
            this.draw(this.size, "brown");
        }
    }
}