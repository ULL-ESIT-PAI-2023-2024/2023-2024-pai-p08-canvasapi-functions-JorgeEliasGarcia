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


// Class Definition
class CoordinateAxis {
	
  /**
   * @description Constructor for the class CoordinateAxis. 
   * @param {number} scaleUnit - Distance between each unit of the axis. By default will be 50.
   * @param {number} strokeWidth - Width of the lines of the axis. By default will be 3.
   * @param {string} fillColor By default will be black. 
   * @return It doesn´t return anything. 
   */
  constructor(private scaleUnit: number = 50, private strokeWidth: number = 3, private fillColor: string = 'black') {
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
  private drawNumbers(context: CanvasRenderingContext2D, font: string = "25px Arial" ): void {
    context.save(); // Saves the current styles set elsewhere to avoid overwriting them
    context.fillStyle = this.fillColor // Set the styles for this shape
    context.font = font; // Adjust the size of the font, to see the number bigger.
    /*
    for (let i = 0; i < context.canvas.width; i += this.scaleUnit) { // Draw the numbers in the horizontal axis
      context.fillText(i.toString(), i, context.canvas.height / 2 + 10);
    }
    for (let i = 0; i < context.canvas.height; i +=  this.scaleUnit) { // Draw the numbers in the vertical axis
      context.fillText(i.toString(), context.canvas.width / 2 + 10, i);
    }*/
    context.fillText('5', context.canvas.width / 2 + 10, context.canvas.height / 2 - 100); // Draw the 0 in the middle of the axis
    context.restore();
  }
}