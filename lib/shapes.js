class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    // Placeholder methods, implement in child classes
    getCenterX() {
      throw new Error('getCenterX method not implemented');
    }
  
    getCenterY() {
      throw new Error('getCenterY method not implemented');
    }
  
    render() {
      throw new Error('render method not implemented');
    }
  }
  
  class Triangle extends Shape {
    // Implement getCenterX and getCenterY for Triangle class
    getCenterX() {
      return (150 + 244 + 56) / 3;
    }
  
    getCenterY() {
      return (18 + 182 + 182) / 3;
    }
  
    render() {
      return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    // Implement getCenterX and getCenterY for Circle class
    getCenterX() {
      return 150; // Adjust based on the center of your circle
    }
  
    getCenterY() {
      return 100; // Adjust based on the center of your circle
    }
  
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    // Implement getCenterX and getCenterY for Square class
    getCenterX() {
      return 150; // Adjust based on the center of your square
    }
  
    getCenterY() {
      return 100; // Adjust based on the center of your square
    }
  
    render() {
      return `<rect x="40" y="40" width="220" height="120" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  
  