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

///<reference path="graph.ts" />

/**
 * @Description Main Function. It will draw the function on the canvas. 
 * 
 * @return It won´t return anything, it will just draw the function on the canvas.
 */
const main = function(): void { 
  const graph: Graph = new Graph(50);
  graph.draw();
};
 
main(); 