/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  log.ts
 *        File to define the log class. It will draw the log function on the canvas.
 */

///<reference path="function.ts" />

class Log extends MyFunction {
  
  /**
   * @description Method to draw the sqrt function on the canvas.
   * @param {CanvasRenderingContext2D} context The context of the canvas.
   * @param {number} scaleUnit The scale unit of the canvas.
   * @param {string} color The color of the function. By default it is red.
   * @param {number} lineWidth The line width of the function. By default it is 2.
   * @return It doesn´t return anything. 
   */
  public draw(context: CanvasRenderingContext2D, scaleUnit: number, color: string = 'red', lineWidth: number = 2): void {
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    // The same for value between 0 and 1. We will reduce the scale to 1/10.
    const reducedScale: number = scaleUnit / this.reducedFactor;
    for (let i: number = context.canvas.width / 2 + reducedScale, j: number = 1 / this.reducedFactor; i < context.canvas.width; i += reducedScale, j += 1 / this.reducedFactor) {
      context.lineTo(i, context.canvas.height / 2 - (Math.log(j) / Math.log(10)) * scaleUnit); // The natural logarithm is divided by the natural logarithm of 10 to get the base 10 logarithm.  
    }

    context.stroke();
  }
}