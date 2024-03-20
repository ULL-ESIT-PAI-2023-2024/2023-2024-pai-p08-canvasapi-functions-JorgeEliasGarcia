/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  main.ts
 *        Main to use the character class
 */


import { Character } from './character-better';

/**
 * @Description Main Function. It will create different characters.
 * 
 * @return It won´t return anything, it will just draw the function on the canvas.
 */
function main(): void{ 
  const gandalf: Character = new Character('Gandalf', 17);
  gandalf.describe();
  const copiaGandalf: Character = gandalf.clone();
  copiaGandalf.describe();
};
 
main(); 