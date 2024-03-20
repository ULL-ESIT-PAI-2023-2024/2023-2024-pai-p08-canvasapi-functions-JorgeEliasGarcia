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
var Cube = /** @class */ (function () {
    /**
     * @description Constructor for the class Graph.
     * @param {number} side The side of the cube
     * @return It doesn´t return anything.
     */
    function Cube(side, color) {
        if (side === void 0) { side = 250; }
        if (color === void 0) { color = 'black'; }
        this.side = side;
        this.color = color;
        this.side = side;
    }
    /**
     * @description Method to draw the cube on the canvas
     * @param
     * @return It doesn´t return anything.
     */
    Cube.prototype.draw = function () {
        var verticalDesplacement = this.side / 3;
        var horizontalDesplacement = this.side / 3;
        this.drawFrontFace(Cube.context, verticalDesplacement);
        this.drawTopFace(Cube.context, verticalDesplacement, horizontalDesplacement);
        this.drawSideFace(Cube.context, verticalDesplacement, horizontalDesplacement);
        this.drawDiscontinuousAxis(Cube.context, verticalDesplacement, horizontalDesplacement);
    };
    /**
     * @description Method to draw the front face of the cube
     * @param {CanvasRenderingContext2D} context The context of the canvas where the cube is going to be drawn.
     * @return It doesn´t return anything.
     */
    Cube.prototype.drawFrontFace = function (context, verticalDesplacement) {
        // Saves the current styles set elsewhere to avoid overwriting them
        context.save();
        context.beginPath();
        context.strokeStyle = this.color;
        var xCoordinate = this.side;
        var yCoordinate = context.canvas.height / 2 + verticalDesplacement;
        context.rect(xCoordinate, yCoordinate, this.side, this.side);
        context.stroke();
        context.restore();
    };
    /**
     *  @description Method to draw the top face of the cube
     * @param {CanvasRenderingContext2D} context The context of the canvas where the cube is going to be drawn.
     * @param {number} verticalDesplacement The vertical desplacement of the top face of the cube
     */
    Cube.prototype.drawTopFace = function (context, verticalDesplacement, horizontalDesplacement) {
        // Saves the current styles set elsewhere to avoid overwriting them
        context.save();
        context.beginPath();
        context.strokeStyle = this.color;
        var xCoordinate = this.side;
        var yCoordinate = context.canvas.height / 2 + verticalDesplacement;
        context.moveTo(xCoordinate, yCoordinate);
        context.lineTo(xCoordinate + this.side, yCoordinate);
        context.lineTo(xCoordinate + this.side + horizontalDesplacement, yCoordinate - verticalDesplacement);
        context.lineTo(xCoordinate + horizontalDesplacement, yCoordinate - verticalDesplacement);
        context.lineTo(xCoordinate, yCoordinate);
        context.stroke();
        context.restore();
    };
    /**
     *  @description Method to draw the side face of the cube
     * @param {CanvasRenderingContext2D} context The context of the canvas where the cube is going to be drawn.
     * @param {number} verticalDesplacement The vertical desplacement of the top face of the cube
     */
    Cube.prototype.drawSideFace = function (context, verticalDesplacement, horizontalDesplacement) {
        // Saves the current styles set elsewhere to avoid overwriting them
        context.save();
        context.beginPath();
        context.strokeStyle = this.color;
        var xCoordinate = this.side + this.side;
        var yCoordinate = context.canvas.height / 2 + verticalDesplacement + this.side;
        context.moveTo(xCoordinate, yCoordinate);
        context.lineTo(xCoordinate + horizontalDesplacement, yCoordinate - verticalDesplacement);
        context.lineTo(xCoordinate + horizontalDesplacement, yCoordinate - verticalDesplacement - this.side);
        context.stroke();
        context.restore();
    };
    /**
     *  @description Method to draw the discontinuous axis of the cube
     * @param {CanvasRenderingContext2D} context The context of the canvas where the cube is going to be drawn.
     * @param {number} verticalDesplacement The vertical desplacement of the top face of the cube
     */
    Cube.prototype.drawDiscontinuousAxis = function (context, verticalDesplacement, horizontalDesplacement) {
        // Saves the current styles set elsewhere to avoid overwriting them
        context.save();
        context.beginPath();
        context.strokeStyle = this.color;
        var xCoordinate = this.side + verticalDesplacement;
        var yCoordinate = context.canvas.height / 2 - this.side;
        context.moveTo(xCoordinate, yCoordinate);
        context.lineTo(xCoordinate, yCoordinate - this.side);
        // context.lineTo(xCoordinate + horizontalDesplacement, yCoordinate - verticalDesplacement);
        context.stroke();
    };
    Cube.canvas = document.getElementById('tutorial');
    Cube.context = Cube.canvas.getContext('2d');
    return Cube;
}());
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
///<reference path="cube.ts" />
/**
 * @Description Main Function. It will draw the function on the canvas.
 *
 * @return It won´t return anything, it will just draw the function on the canvas.
 */
var main = function () {
    var cube = new Cube();
    cube.draw();
};
main();
