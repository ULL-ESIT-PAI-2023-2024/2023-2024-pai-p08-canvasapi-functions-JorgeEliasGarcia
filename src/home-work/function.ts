/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  function.ts
 *        File to define the function class. It will be an abstract class that will be extended by the different functions.
 */

///<reference path="function_interface.ts" />

abstract class MyFunction implements FunctionInterface {
  /**
   * @description Constructor of the class. It will store the reduced factor.
   * @param {number} scaleReducedFactor The reduced factor for the scale to be use in the function. By default it is 100.
   */
  constructor(protected scaleReducedFactor: number = 100) { // Higher the reduced factor, higher detail in the function.
    this.scaleReducedFactor = scaleReducedFactor; 
  }
  abstract draw(context: CanvasRenderingContext2D, scaleUnit: number, color?: string, lineWidth?: number): void;
  abstract value(x: number): number;
}
