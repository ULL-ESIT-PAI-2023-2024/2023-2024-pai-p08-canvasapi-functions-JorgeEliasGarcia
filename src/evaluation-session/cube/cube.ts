/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  draw_curves.ts
 *        File to define the draw a cube
 */


class Cube {
  private static canvas: HTMLCanvasElement = document.getElementById('tutorial') as HTMLCanvasElement;
  private static context: CanvasRenderingContext2D = Cube.canvas.getContext('2d')!;
  /**
   * @description Constructor for the class Graph. 
   * @param {number} side The side of the cube
   * @return It doesn´t return anything. 
   */
  constructor( private side: number = 250, private color = 'black' ) { 
    this.side = side;
  }
  
  /**
   * @description Method to draw the cube on the canvas
   * @param 
   * @return It doesn´t return anything. 
   */
  public draw( ): void {
    const verticalDesplacement: number = this.side / 3;
    const horizontalDesplacement: number = this.side / 3;
    this.drawFrontFace(Cube.context, verticalDesplacement); 
    this.drawTopFace(Cube.context, verticalDesplacement, horizontalDesplacement);
    this.drawSideFace(Cube.context, verticalDesplacement, horizontalDesplacement);
    this.drawDiscontinuousAxis(Cube.context, verticalDesplacement, horizontalDesplacement);
  }
  
  /**
   * @description Method to draw the front face of the cube
   * @param {CanvasRenderingContext2D} context The context of the canvas where the cube is going to be drawn.
   * @return It doesn´t return anything. 
   */
  private drawFrontFace(context: CanvasRenderingContext2D, verticalDesplacement: number): void {
    // Saves the current styles set elsewhere to avoid overwriting them
    context.save();
    context.beginPath();
    context.strokeStyle = this.color;
    const xCoordinate: number = this.side; 
    const yCoordinate: number = context.canvas.height / 2 + verticalDesplacement;
    context.rect(xCoordinate, yCoordinate, this.side, this.side)
    context.stroke()
    context.restore()
  }
  
  /**
   *  @description Method to draw the top face of the cube
   * @param {CanvasRenderingContext2D} context The context of the canvas where the cube is going to be drawn.
   * @param {number} verticalDesplacement The vertical desplacement of the top face of the cube
   */
  private drawTopFace(context: CanvasRenderingContext2D, verticalDesplacement: number, horizontalDesplacement: number): void {
    // Saves the current styles set elsewhere to avoid overwriting them
    context.save();
    context.beginPath();
    context.strokeStyle = this.color;
    const xCoordinate: number = this.side; 
    const yCoordinate: number = context.canvas.height / 2 + verticalDesplacement;
    context.moveTo(xCoordinate, yCoordinate);
    context.lineTo(xCoordinate + this.side, yCoordinate);
    context.lineTo(xCoordinate + this.side + horizontalDesplacement, yCoordinate - verticalDesplacement);
    context.lineTo(xCoordinate + horizontalDesplacement, yCoordinate - verticalDesplacement);
    context.lineTo(xCoordinate, yCoordinate);
    context.stroke()
    context.restore()
  }
  
  /**
   *  @description Method to draw the side face of the cube
   * @param {CanvasRenderingContext2D} context The context of the canvas where the cube is going to be drawn.
   * @param {number} verticalDesplacement The vertical desplacement of the top face of the cube
   */
  private drawSideFace(context: CanvasRenderingContext2D, verticalDesplacement: number, horizontalDesplacement: number): void {
    // Saves the current styles set elsewhere to avoid overwriting them
    context.save();
    context.beginPath();
    context.strokeStyle = this.color;
    const xCoordinate: number = this.side + this.side;
    const yCoordinate: number = context.canvas.height / 2 + verticalDesplacement + this.side;
    context.moveTo(xCoordinate, yCoordinate);
    context.lineTo(xCoordinate + horizontalDesplacement, yCoordinate - verticalDesplacement);
    context.lineTo(xCoordinate + horizontalDesplacement, yCoordinate - verticalDesplacement - this.side);
    context.stroke()
    context.restore()
  }

  /**
   *  @description Method to draw the discontinuous axis of the cube
   * @param {CanvasRenderingContext2D} context The context of the canvas where the cube is going to be drawn.
   * @param {number} verticalDesplacement The vertical desplacement of the top face of the cube
   */
  private drawDiscontinuousAxis(context: CanvasRenderingContext2D, verticalDesplacement: number, horizontalDesplacement: number): void {
    // Saves the current styles set elsewhere to avoid overwriting them
    context.save();
    context.beginPath();
    context.strokeStyle = this.color;
    const xCoordinate: number = this.side + verticalDesplacement; 
    const yCoordinate: number = context.canvas.height / 2 - this.side;
    context.moveTo(xCoordinate, yCoordinate);
    context.lineTo(xCoordinate, yCoordinate - this.side);
  
   // context.lineTo(xCoordinate + horizontalDesplacement, yCoordinate - verticalDesplacement);
    context.stroke();
  }
}