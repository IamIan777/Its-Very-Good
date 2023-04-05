class Shape {
    constructor(characters, color, textcolor) {
        this.characters = characters;
        this.color = color;
        this.textcolor =textcolor
    }
}

class Square extends Shape {
    drawshape = function() {
        return `<svg viewbox="0 0 100 100 xmlns="http://eee.w3.org/2000/svg">
        <rect x="30" y="30" width="50" height="50" fill="${this.color}"/>
        <text x="41" y="59" class="small" fill="${this.textcolor}">${this.characters}</text> 
        </svg>`;
    };
}

class Circle extends Shape {
    drawshape = function() {
        return `<svg viewbox="0 0 100 100 xmlns="http://eee.w3.org/2000/svg">
        <rect cx="50" cy="50" r="30" fill="${this.color}"/>
        <text x="36" y="54" class="small" fill="${this.textcolor}">${this.characters}</text> 
        </svg>`;
    };
}

class Triangle extends Shape {
    drawshape = function() {
        return `<svg viewbox="0 0 100 100 xmlns="http://eee.w3.org/2000/svg" viewBox="0 -20 100 170">
        <polygon points="50 15, 100 100, 0 100" fill="${this.color}"/>
        <text x="35" y="75" class="small" fill="${this.textcolor}">${this.characters}</text> 
        </svg>`;
    };
}
module.exports = {
    Square: Square,    
    Circle: Circle,
    Triangle: Triangle,
};
