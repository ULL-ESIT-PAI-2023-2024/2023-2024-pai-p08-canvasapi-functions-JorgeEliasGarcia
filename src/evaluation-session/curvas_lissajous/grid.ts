/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  grid.ts
 *        Class to draw a grid on the canvas. 
 */


// Class Definition
class Grid {
	
  /**
   * @description Constructor for the class GRID
   * @param {number} scaleUnit - Distance between each line of the grid. By default will be 100
   * @param {number} strokeWidth - Width of the lines of the axis. By default will be 3.
   * @param {string} fillColor By default will be black. 
   * @return It doesn´t return anything. 
   */
  constructor(private scaleUnit: number = 8, private strokeWidth: number = 1, private fillColor: string = 'lightgrey') {
    this.scaleUnit = scaleUnit;
    this.strokeWidth = strokeWidth;
    this.fillColor = fillColor;
  }

  /**
   * @description Method to draw the grid on the screen. It will draw the horizontal and vertical lines of the grid. 
   * @param {CanvasRenderingContext2D} context - The context of the canvas where the CoordinateAxis will be drawn.
   * @return It doesn´t return anything, it just draws the rectangle on the canvas.
   */
  public draw(context: CanvasRenderingContext2D): void { 
    const middleX: number = context.canvas.width / 2;
    const middleY: number = context.canvas.height / 2;
    this.drawHorizontalLines(context, middleY);
    this.drawVerticalLines(context, middleX);
  }

  /**
   * @description Method to draw the horizontal lines of the grid. 
   * @param {CanvasRenderingContext2D} context - The context of the canvas where the CoordinateAxis will be drawn.
   * @param {number} middleY - The middle of the height of the canvas.
   * @return It doesn´t return anything, it just draws the rectangle on the canvas.
   */
  private drawHorizontalLines(context: CanvasRenderingContext2D, middleY: number): void {
    context.save(); // Saves the current styles set elsewhere to avoid overwriting them
    context.fillStyle = this.fillColor // Set the styles for this shape
    context.lineWidth = this.strokeWidth
    context.beginPath() // create the *path* for the coordinate axis.
    context.strokeStyle = this.fillColor
    for (let i = middleY; i < context.canvas.height; i += this.scaleUnit) { // Draw the lines from the middle to the bottom
      context.moveTo(0, i) 
      context.lineTo(context.canvas.width, i) 
    }
    for (let i = middleY; i > 0; i -= this.scaleUnit) { // Draw the lines from the middle to the top
      context.moveTo(0, i) 
      context.lineTo(context.canvas.width, i) 
    }
    context.fill() // draw the path to screen
    context.stroke()
    context.restore();
  }

  /**
   * @description Method to draw the vertical lines of the grid. 
   * @param {CanvasRenderingContext2D} context - The context of the canvas where the CoordinateAxis will be drawn.
   * @param {number} middleX - The middle of the width of the canvas.
   * @return It doesn´t return anything, it just draws the rectangle on the canvas.
   */
  private drawVerticalLines(context: CanvasRenderingContext2D, middleX: number): void {
    context.save(); // Saves the current styles set elsewhere to avoid overwriting them
    context.fillStyle = this.fillColor // Set the styles for this shape
    context.lineWidth = this.strokeWidth
    context.beginPath() // create the *path* for the coordinate axis.
    context.strokeStyle = this.fillColor
    for (let i = middleX; i < context.canvas.width; i += this.scaleUnit) { // Draw the lines from the middle to the right
      context.moveTo(i, 0) 
      context.lineTo(i, context.canvas.height) 
    }
    for (let i = middleX; i > 0; i -= this.scaleUnit) { // Draw the lines from the middle to the left
      context.moveTo(i, 0) 
      context.lineTo(i, context.canvas.height) 
    }
    context.fill() // draw the path to screen
    context.stroke()
    context.restore();
  }
}