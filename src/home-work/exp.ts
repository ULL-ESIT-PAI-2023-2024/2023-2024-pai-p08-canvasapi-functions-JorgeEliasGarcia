/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y TecnoExpía
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  Exp.ts
 *        File to define the Exp class. It will draw the Exp function on the canvas.
 */

///<reference path="positive_and_negative_functions.ts" />

class Exp extends PositiveAndNegativeFunction {
  /**
   * @description Method to get the value of e^x
   * @param {number} x The x value.
   * @return The value of the e^x function. 
   */
  value(x: number): number {
    return Math.exp(x);
  }
}