/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  Cos.ts
 *        File to define the Cos class. It will draw the Cos function on the canvas.
 */

///<reference path="trigonometric_functions.ts" />

class Cos extends TrigonometricFunction {

  /**
   * @description Method to get the value of the cos.
   * @param {number} x The x value.
   * @return The value of the cos in x. 
   */
  value(x: number): number {
    return Math.cos(x);
  }
}