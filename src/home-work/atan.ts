/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  Atan.ts
 *        File to define the Atan class. It will draw the tan function on the canvas.
 */

///<reference path="trigonometric_functions.ts" />

class ATan extends TrigonometricFunction {

  /**
   * @description Method to get the value of the tan.
   * @param {number} x The x value.
   * @return The value of the tan in x. 
   */
  value(x: number): number {
    return Math.atan(x);
  }
}