const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

function getUserInput() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: (input) => input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color:',
    },
  ]);
}

function writeFile(fileName, content) {
  fs.writeFileSync(fileName, content);
}

async function generateLogo() {
  const userInput = await getUserInput();

  // Determine the shape based on user input
  let shape;
  switch (userInput.shape.toLowerCase()) {
    case 'triangle':
      shape = new Triangle();
      break;
    case 'circle':
      shape = new Circle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      console.error('Invalid shape');
      return;
  }

  shape.setColor(userInput.shapeColor);

  const centerX = shape.getCenterX();  
  const centerY = shape.getCenterY();  

  // Adjust the text position based on the center of the shape
  const textX = centerX - userInput.text.length * 5;  
  const textY = centerY + 5;  // 

  const svgContent = `<svg width="300" height="200">
                      <text x="${textX}" y="${textY}" fill="${userInput.textColor}"></text>
                      ${shape.render()}
                      <text x="150" y="125" font-size="60" text-anchor="middle" fill=" "> ${userInput.text}</text>
                      </svg>`;


  const fileName = 'logo.svg';
  
  writeFile(fileName, svgContent);

  console.log(`Generated ${fileName}`);
}

generateLogo();
