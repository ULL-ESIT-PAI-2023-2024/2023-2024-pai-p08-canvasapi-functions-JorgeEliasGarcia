/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  sqrt.ts
 *        File to define the sqrt class. It will draw the sqrt function on the canvas.
 */

///<reference path="positive_functions.ts" />

class Sqrt extends PositiveFunction {
  
  /**
   * @description Method to get the value of the sqrt function.
   * @param {number} x The x value.
   * @return The value of the sqrt function. 
  */
  value(x: number): number {
    return Math.sqrt(x);
  }
}