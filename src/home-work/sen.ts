/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  sen.ts
 *        File to define the sen class. It will draw the sen function on the canvas.
 */

///<reference path="trigonometric_functions.ts" />

class Sen extends TrigonometricFunction {

  /**
   * @description Method to get the value of the sen function.
   * @param {number} x The x value.
   * @return The value of the sen function. 
   */
  value(x: number): number {
    return Math.sin(x);
  }
  
}