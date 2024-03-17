/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  Function_interface.ts
 *        File to define the interface of the function
 */

interface FunctionInterface {
  draw(context: CanvasRenderingContext2D, scaleUnit: number, color: string, lineWidth: number): void; 
  value(x: number): number; 
}