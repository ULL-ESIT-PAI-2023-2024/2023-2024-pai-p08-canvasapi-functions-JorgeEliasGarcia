/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  Character.ts
 *        File to define a Character.
 */


export class Character  {

  /**
   * @description Constructor of the class
   * @param {string} name Name of the character
   * @param {number} strength The strength of the character
   */
  constructor(private name: string, private strength: number) {
    this.name = name;
    this.strength = strength;
  }
  
  /**
   * @description Method to clone the character
   * @return A new character with the same properties
   */
  public clone(): Character {
    return new Character(this.name, this.strength);
  }
  
  /**
   * @description Method to describe the character
   * @return It doesn´t return anything, it will just describe the character.
   */
  public describe(): void {
    console.log(`Name: ${this.name}, Strength: ${this.strength}`);
  }
}