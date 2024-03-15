/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 10 Marzo 2024
 * @desc  Rectangle.ts
 *        Fichero para implementar la clase rectangle, para dibujar rectángulos.
 */

// Class Definition
class Rectangle {
	
  /**
   * @description Constructor for the class Rectangle. 
   * @param {number} xPosition - X coord of the rectangle's position
   * @param {number} yPosition - Y coord of the rectangle's position
   * @param {number} width  
   * @param {number} height  
   * @param {string} fillColor  
   * @param {string} strokeColor  
   * @param {number} strokeWidth  
   * @return It doesn´t return anything. 
   */
  constructor(
    private xPosition: number = 20, 
    private yPosition: number = 20, 
    private width: number = 20, 
    private height: number = 30,
    private fillColor: string = 'black', 
    private strokeColor: string = 'black', 
    private strokeWidth: number = 2) {}

  /**
   * @description Method to draw the rectangle on the canvas.
   * @param {CanvasRenderingContext2D} context - The context of the canvas where the Rectangle will be drawn.
   * @return It doesn´t return anything, it just draws the rectangle on the canvas.
   */
  public draw(context: CanvasRenderingContext2D): void { 
    // Saves the current styles set elsewhere to avoid overwriting them
    context.save()
  
    // Set the styles for this shape
    context.fillStyle = this.fillColor
    context.lineWidth = this.strokeWidth

    // create the *path*
    context.beginPath()
    context.strokeStyle = this.strokeColor
    context.rect(this.xPosition, this.yPosition, this.width, this.height)

    // draw the path to screen
    context.fill()
    context.stroke()

    // restores the styles from earlier preventing the colors used here
    // from polluting other drawings
    context.restore()
  }
  
  /**
   * @description Method to get the area of the rectangle.
   * 
   * @returns The area of the rectangle.
   */
  public getArea(): number {
    return (this.width * this.height);
  }

}