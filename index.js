const fs = require("fs");
const inquirer = require("inquirer");
const generateLogo = require("./lib/generateLogo");

const questions = [
    {
        type: "input",
        name: "characters",
        message: "Please insert characters from your logo (n < 3):",
    },
    {
        type: "input",
        name: "textcolor",
        message: "Please input the text color (name or number):"
    },
    {
        type: "list",
        name: "shape",
        message: "Please choose a shape for your logo:",
        choice: ["Square", "Circle", "Triangle"], 
    },
    {
        type: "input",
        name: "shapecolor",
        message:"Please input the shape color (name or number):"
    },
];

function writeFile(data) {
    let fileName = "./examples/logo.svg";
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Generated gnerateLogo.svg!");
    });
}

function init() {
    inquirer
    .createPromptModule(questions)
    .then((answers) => writeFile(generateLogo(answers)))
    .catch((err) => console.log(err));
}

init();