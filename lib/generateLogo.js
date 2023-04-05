let CSS_COLORS=['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];
const Shape = require("./shapes.js");
const hexReg = /^#[A-FA-f0-9]{6}[A-FA-f0-9]{3}$/i;

function generateLogo(data) {
    if (!data.character.length > 3) {
        throw new Error('Number or characters must not exceed 3.')
    }
    if (!data.shapecolor) {
        throw new Error('Must be an actual color in CSS.')
    }
    if (!data.textcolor) {
        throw new Error('Must be an actual color in CSS.')
    }
    if (!CSS_COLORS.includes(data.textcolor)) {
        if (!hexReg.test(data.textcolor)) {
        throw new Error('Color is undefined.')
        }
    }

    if (!CSS_COLORS.includes(data.shapecolor)) {
        if (!hexReg.test(data.shapecolor)) {
        throw new Error('Color is undefined.')
        }
    }
    if (data.shape === "square") {
        const newLogo = new Shape.Square(
            data.characters,
            data.textcolor,
            data.shapecolor
        );
        return newLogo.drawshape();
    }
    else if (data.shape === "circle") {
        const newLogo = new Shape.Circle(
            data.characters,
            data.textcolor,
            data.shapecolor
        );
        return newLogo.drawshape();
    }
    else if (data.shape === "triangle") {
        const newLogo = new Shape.Triangle(
            data.characters,
            data.textcolor,
            data.shapecolor
        );
        return newLogo.drawshape();
    }
}

module.exports = generateLogo;