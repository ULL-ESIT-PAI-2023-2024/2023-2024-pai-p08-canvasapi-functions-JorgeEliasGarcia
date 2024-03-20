/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  curves_lissajous.ts
 *        Class to draw the lissajous curves on the canvas
 */

///<reference path="grid.ts" />
///<reference path="curve_interface.ts" />

// Class Definition
class LissajousCurves implements CurvesInterface {

  /**
  * @description Constructor for the class GRID
  * @param {number} sinValue - The value of a in the formule
  * @param {number} cosValue - The value of b in the formule
  * @param {number} phis - The value of phi in the formule 
  * @return It doesn´t return anything. 
 */
  constructor(private sinValue: number, private cosValue: number, private phis: number, private scaleUnit: number = 300) {
    this.sinValue = sinValue;
    this.cosValue = cosValue;
    this.phis = phis;
  }
  
  /**
   * @description Method to draw the grid on the screen. It will draw the horizontal and vertical lines of the grid. 
   * @param {CanvasRenderingContext2D} context - The context of the canvas where the CoordinateAxis will be drawn.
   * @param {string} color - The color of the grid. By default it is black.
   * @return It doesn´t return anything, it just draws the rectangle on the canvas.
   */
  public draw(context: CanvasRenderingContext2D, color: string = 'black'): void { 
    const grid: Grid = new Grid();
    grid.draw(context); 
    this.drawCurves(context, color);
  }

  /**
   * @description Method to draw the lissajous curves on the canvas. 
   * @param {CanvasRenderingContext2D} context - The context of the canvas where the CoordinateAxis will be drawn.
   * @param {string} color - The color of the curves. 
   * @return It doesn´t return anything, it just draws the curves on the canvas.
   */
  private drawCurves(context: CanvasRenderingContext2D, color: string): void {
    context.beginPath();  // create the *path* for the coordinate axis.
    context.strokeStyle = color; 
    context.lineWidth = 2; 
    const MIDDlE_WIDTH: number = context.canvas.width / 2;
    const MIDDlE_HEIGHT: number = context.canvas.height / 2;
    let xCoordinate: number = 0; 
    let yCoordinate: number = 0;
    // First iteration outside
    xCoordinate = Math.sin(this.sinValue * 0 + this.phis);
    yCoordinate = Math.cos(this.cosValue * 0);
    context.moveTo(xCoordinate * this.scaleUnit +  MIDDlE_WIDTH, yCoordinate * this.scaleUnit + MIDDlE_HEIGHT);
    // We will draw the curves from 0 to 1000.
    for (let i = 0; i < 1000; i += 1 / this.scaleUnit) {
      xCoordinate = Math.sin(this.sinValue * i + this.phis);
      yCoordinate = Math.cos(this.cosValue * i);
      context.lineTo(xCoordinate * this.scaleUnit +  MIDDlE_WIDTH, yCoordinate * this.scaleUnit + MIDDlE_HEIGHT);
    }
    context.stroke();
  }
}