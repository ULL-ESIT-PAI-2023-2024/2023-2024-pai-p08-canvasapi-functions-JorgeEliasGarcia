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

///<reference path="positive_functions.ts" />

class Log extends PositiveFunction {

  /**
   * @description Method to get the value of the log function.
   * @param {number} x The x value.
   * @return The value of the log function. 
  */
  value(x: number): number {
    return (Math.log(x) / Math.log(10));
  }

}