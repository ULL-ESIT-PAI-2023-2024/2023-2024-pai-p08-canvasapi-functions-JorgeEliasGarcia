/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  main.ts
 *        Main file to draw functions on the canvas
 */

///<reference path="coordinate_axis.ts" />

/**
 * @Description Main Function. It will draw the function on the canvas. 
 * 
 * @return It won´t return anything, it will just draw the function on the canvas.
 */
const main = function(): void { 
  const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('tutorial');
  const context: CanvasRenderingContext2D = canvas.getContext('2d')!;
  const coordinateAxis: CoordinateAxis = new CoordinateAxis();
  coordinateAxis.draw(context);
};
 
main(); 