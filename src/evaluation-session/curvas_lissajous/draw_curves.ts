/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  draw_curves.ts
 *        File to define the draw curves
 */

///<reference path="curves_lissajous.ts" />

class DrawCurves {
  private static canvas: HTMLCanvasElement = document.getElementById('tutorial') as HTMLCanvasElement;
  private static context: CanvasRenderingContext2D = DrawCurves.canvas.getContext('2d')!;
  /**
   * @description Constructor for the class Graph. 
   * @param 
   * @return It doesn´t return anything. 
   */
  constructor() { }
  
  /**
   * @description Method to draw the function and the coordinate axis on the canvas.
   * @param {CurvesInterface} curveToDraw The curve to draw
   * @return It doesn´t return anything. 
   */
  public draw( curveToDraw: CurvesInterface ): void {
    curveToDraw.draw(DrawCurves.context, 'black');
  }
}