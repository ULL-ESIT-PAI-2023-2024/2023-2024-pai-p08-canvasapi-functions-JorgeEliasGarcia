/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  positive_and_negative_functions.ts
 *        File to define the abtract class for function that can recive positive and negative values.
 */

///<reference path="function.ts" />

// We will use the template method pattern to draw the functions.
abstract class PositiveAndNegativeFunction extends MyFunction {
  
  /**
   * @description Method to draw a trigonometric function on the canvas. 
   * @param {CanvasRenderingContext2D} context The context of the canvas.
   * @param {number} scaleUnit The scale unit of the canvas.
   * @param {string} color The color of the function. By default it is red.
   * @param {number} lineWidth The line width of the function. By default it is 2.
   * @return It doesn´t return anything. 
   */
  draw(context: CanvasRenderingContext2D, scaleUnit: number, color: string = 'blue', lineWidth: number = 2): void {
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    // The same for value between 0 and 1. We will reduce the scale to 1/10.
    const reducedScale: number = scaleUnit / this.scaleReducedFactor;
    const firstNonNegativeValue: number = 0; // The first value of the function.
    // We will draw from the middle of the canvas to the right.
    for (let i: number = context.canvas.width / 2, j: number = firstNonNegativeValue; i < context.canvas.width; i += reducedScale, j += 1 / this.scaleReducedFactor) {
      context.lineTo(i, context.canvas.height / 2 - this.value(j) * scaleUnit);
    }
    context.moveTo(context.canvas.width / 2, context.canvas.height / 2 - Math.exp(firstNonNegativeValue) * scaleUnit);
    // We will draw from the middle of the canvas to the left.
    for (let i: number = context.canvas.width / 2 - reducedScale, j: number = - (1 / this.scaleReducedFactor); i > 0; i -= reducedScale, j -= 1 / this.scaleReducedFactor) {
      context.lineTo(i, context.canvas.height / 2 - this.value(j) * scaleUnit);
    }

    context.stroke();
  }
  
  /**
   * @description Method to get the value of the function.
   * @param {number} x The x value.
   * @return The value of the function. 
   */
  abstract value(x: number): number;
}