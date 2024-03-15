/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  CoordinateAxis.ts
 *        Class to draw a coordinate axis on a canvas. It will be drawns on the center of the canvas.
 */

///<reference path="rectangle.ts" /> 

// Class Definition
class CoordinateAxis {
	
  /**
   * @description Constructor for the class CoordinateAxis. 
   * @param {number} scaleUnit - Distance between each unit of the axis. By default will be 50.
   * @param {number} strokeWidth - Width of the lines of the axis. By default will be 3.
   * @param {string} fillColor By default will be black. 
   * @return It doesn´t return anything. 
   */
  constructor(private scaleUnit: number = 100, private strokeWidth: number = 3, private fillColor: string = 'black') {
    this.scaleUnit = scaleUnit;
    this.strokeWidth = strokeWidth;
    this.fillColor = fillColor;
  }

  /**
   * @description Method to draw the coordinate axis on the canvas. 
   * @param {CanvasRenderingContext2D} context - The context of the canvas where the CoordinateAxis will be drawn.
   * @return It doesn´t return anything, it just draws the rectangle on the canvas.
   */
  public draw(context: CanvasRenderingContext2D): void { 
    this.drawAxis(context);
    this.drawNumbers(context);
  }
  
  /**
   * @description Method to draw the axis on the canvas.
   * @param {CanvasRenderingContext2D} context - The context of the canvas where the CoordinateAxis will be drawn.
   * @return It doesn´t return anything, it just draws the rectangle on the canvas.
   */
  private drawAxis(context: CanvasRenderingContext2D): void {
    context.save(); // Saves the current styles set elsewhere to avoid overwriting them
    context.fillStyle = this.fillColor // Set the styles for this shape
    context.lineWidth = this.strokeWidth
    context.beginPath() // create the *path* for the coordinate axis.
    context.strokeStyle = this.fillColor
    context.moveTo(0, context.canvas.height / 2) // move to the middle of the height of the canvas in the left side
    context.lineTo(context.canvas.width, context.canvas.height / 2) // draw the horizontal axis
    context.moveTo(context.canvas.width / 2, 0) // move to the middle of the width of the canvas in the top side
    context.lineTo(context.canvas.width / 2, context.canvas.height) // draw the vertical axis
    context.fill() // draw the path to screen
    context.stroke()
    context.restore(); 
  }

  /**
   * @description Method to draw the number in the coordinate axis.
   * @param {CanvasRenderingContext2D} context - The context of the canvas where the CoordinateAxis will be drawn.
   * @param {string} font - The font of the number. By default will be 15px Arial.
   * @return It doesn´t return anything, it just draws the number in the coordinate axis.
   */
  private drawNumbers(context: CanvasRenderingContext2D, font: string = "15px Arial" ): void {
    context.save(); // Saves the current styles set elsewhere to avoid overwriting them
    context.fillStyle = this.fillColor // Set the styles for this shape
    context.font = font; // Adjust the size of the font, to see the number bigger.
    const MARGIN_DISTANCE: number = 20; // Distance from the number to the axis
    const MIDDLE_WIDTH: number = context.canvas.width / 2; // Middle of the width of the canvas
    const MIDDLE_HEIGHT: number = context.canvas.height / 2; // Middle of the height of the canvas
    const RECTANGLE_MARGIN: number = 3; 
    for (let i: number = 0, j: number = 0; i < MIDDLE_WIDTH; i += this.scaleUnit, j -= 2) { // Draw the negative numbers in the horizontal axis
      context.fillText(j.toString(), MIDDLE_WIDTH - i, MIDDLE_HEIGHT + MARGIN_DISTANCE);
      this.drawRectangleAboveNumber(context, MIDDLE_WIDTH - i, MIDDLE_HEIGHT - RECTANGLE_MARGIN);
    }
    for (let i: number = this.scaleUnit, j: number = 2; i < MIDDLE_WIDTH; i += this.scaleUnit, j += 2) { // Draw the positive numbers in the horizontal axis
      context.fillText(j.toString(), MIDDLE_WIDTH + i, MIDDLE_HEIGHT + MARGIN_DISTANCE);
      this.drawRectangleAboveNumber(context, MIDDLE_WIDTH + i, MIDDLE_HEIGHT - RECTANGLE_MARGIN);
    }
    for (let i: number = this.scaleUnit, j: number = 2; i < MIDDLE_HEIGHT; i += this.scaleUnit, j += 2) { // Draw the positive numbers in the vertical axis. We start higher to don´t draw the 0.
      context.fillText(j.toString(), MIDDLE_WIDTH + MARGIN_DISTANCE, MIDDLE_HEIGHT - i);
      this.drawRectangleAboveNumber(context, MIDDLE_WIDTH - RECTANGLE_MARGIN, MIDDLE_HEIGHT - i, true);
    }
    for (let i: number = this.scaleUnit, j: number = -2; i < MIDDLE_HEIGHT; i += this.scaleUnit, j -= 2) { // Draw the negative numbers in the vertical axis
      context.fillText(j.toString(), MIDDLE_WIDTH + MARGIN_DISTANCE, MIDDLE_HEIGHT + i);
      this.drawRectangleAboveNumber(context, MIDDLE_WIDTH - RECTANGLE_MARGIN, MIDDLE_HEIGHT + i, true);
    }
    
    context.restore();
  }
  
  /**
   * @description Method to draw a rectangle above the number in the axis.
   * @param {CanvasRenderingContext2D} context - The context of the canvas where the CoordinateAxis will be drawn.
   * @param {number} xPosition - X coord of the rectangle's position
   * @param {number} yPosition - Y coord of the rectangle's position
   * @param {boolean} invert - If the rectangle will be drawn above or below the number. By default will be false.
   * @return It doesn´t return anything, it just draws the rectangle above the number in the axis.
   */
  private drawRectangleAboveNumber(context: CanvasRenderingContext2D, xPosition: number, yPosition: number, invert: boolean = false) {
    const RECTANGLE_WIDTH: number = 4;
    const RECTANGLE_HEIGHT: number = 7;
    let rectangleInTheAxis = new Rectangle(xPosition, yPosition, RECTANGLE_WIDTH, RECTANGLE_HEIGHT);
    if (invert) {
      rectangleInTheAxis = new Rectangle(xPosition, yPosition, RECTANGLE_HEIGHT, RECTANGLE_WIDTH);
    }
    rectangleInTheAxis.draw(context);
  }
}