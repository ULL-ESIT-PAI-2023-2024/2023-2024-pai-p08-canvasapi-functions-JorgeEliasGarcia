/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  graph.ts
 *        File to define the graph class. It will draw a coordinate axis and a grid on the canvas. It will also draw the function on the canvas.
 */

///<reference path="coordinate_axis.ts" />
///<reference path="grid.ts" />
///<reference path="sqrt.ts" />
///<reference path="log.ts" />

class Graph {
  private static canvas: HTMLCanvasElement = document.getElementById('tutorial') as HTMLCanvasElement;
  private static context: CanvasRenderingContext2D = Graph.canvas.getContext('2d')!;
  /**
   * @description Constructor for the class Graph. 
   * @param {number} scaleUnit Scale unit for the graph. By default it is 100.
   * @return It doesn´t return anything. 
   */
  constructor(private scaleUnit: number = 100) {
    this.scaleUnit = scaleUnit;
  }
  /**
   * @description Method to draw the function and the coordinate axis on the canvas.
   * @return It doesn´t return anything. 
   */
  public draw(): void {
    const coordinateAxis: CoordinateAxis = new CoordinateAxis(this.scaleUnit);
    coordinateAxis.draw(Graph.context);
    const grid: GRID = new GRID(this.scaleUnit);
    grid.draw(Graph.context);
    const sqrt: Sqrt = new Sqrt();
    sqrt.draw(Graph.context, this.scaleUnit); 
    const log: Log = new Log();
    log.draw(Graph.context, this.scaleUnit);
  }
}