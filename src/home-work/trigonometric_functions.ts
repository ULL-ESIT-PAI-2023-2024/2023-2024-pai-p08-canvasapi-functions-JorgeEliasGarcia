/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  trigonometric.ts
 *        File to define the TrigonometricFunction. It will be an abstract class that will be extended by the different functions.
 */

///<reference path="positive_and_negative_functions.ts" />

// We will use the template method pattern to draw the functions.
abstract class TrigonometricFunction extends PositiveAndNegativeFunction {
  // We will add any common functionality for the trigonometric functions. At the moment it is not necessary.
}