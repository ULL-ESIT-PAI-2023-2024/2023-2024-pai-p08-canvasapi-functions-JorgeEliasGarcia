/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  grid.ts
 *        Class to draw a grid on the canvas.
 */
// Class Definition
var Grid = /** @class */ (function () {
    /**
     * @description Constructor for the class GRID
     * @param {number} scaleUnit - Distance between each line of the grid. By default will be 100
     * @param {number} strokeWidth - Width of the lines of the axis. By default will be 3.
     * @param {string} fillColor By default will be black.
     * @return It doesn´t return anything.
     */
    function Grid(scaleUnit, strokeWidth, fillColor) {
        if (scaleUnit === void 0) { scaleUnit = 8; }
        if (strokeWidth === void 0) { strokeWidth = 1; }
        if (fillColor === void 0) { fillColor = 'lightgrey'; }
        this.scaleUnit = scaleUnit;
        this.strokeWidth = strokeWidth;
        this.fillColor = fillColor;
        this.scaleUnit = scaleUnit;
        this.strokeWidth = strokeWidth;
        this.fillColor = fillColor;
    }
    /**
     * @description Method to draw the grid on the screen. It will draw the horizontal and vertical lines of the grid.
     * @param {CanvasRenderingContext2D} context - The context of the canvas where the CoordinateAxis will be drawn.
     * @return It doesn´t return anything, it just draws the rectangle on the canvas.
     */
    Grid.prototype.draw = function (context) {
        var middleX = context.canvas.width / 2;
        var middleY = context.canvas.height / 2;
        this.drawHorizontalLines(context, middleY);
        this.drawVerticalLines(context, middleX);
    };
    /**
     * @description Method to draw the horizontal lines of the grid.
     * @param {CanvasRenderingContext2D} context - The context of the canvas where the CoordinateAxis will be drawn.
     * @param {number} middleY - The middle of the height of the canvas.
     * @return It doesn´t return anything, it just draws the rectangle on the canvas.
     */
    Grid.prototype.drawHorizontalLines = function (context, middleY) {
        context.save(); // Saves the current styles set elsewhere to avoid overwriting them
        context.fillStyle = this.fillColor; // Set the styles for this shape
        context.lineWidth = this.strokeWidth;
        context.beginPath(); // create the *path* for the coordinate axis.
        context.strokeStyle = this.fillColor;
        for (var i = middleY; i < context.canvas.height; i += this.scaleUnit) { // Draw the lines from the middle to the bottom
            context.moveTo(0, i);
            context.lineTo(context.canvas.width, i);
        }
        for (var i = middleY; i > 0; i -= this.scaleUnit) { // Draw the lines from the middle to the top
            context.moveTo(0, i);
            context.lineTo(context.canvas.width, i);
        }
        context.fill(); // draw the path to screen
        context.stroke();
        context.restore();
    };
    /**
     * @description Method to draw the vertical lines of the grid.
     * @param {CanvasRenderingContext2D} context - The context of the canvas where the CoordinateAxis will be drawn.
     * @param {number} middleX - The middle of the width of the canvas.
     * @return It doesn´t return anything, it just draws the rectangle on the canvas.
     */
    Grid.prototype.drawVerticalLines = function (context, middleX) {
        context.save(); // Saves the current styles set elsewhere to avoid overwriting them
        context.fillStyle = this.fillColor; // Set the styles for this shape
        context.lineWidth = this.strokeWidth;
        context.beginPath(); // create the *path* for the coordinate axis.
        context.strokeStyle = this.fillColor;
        for (var i = middleX; i < context.canvas.width; i += this.scaleUnit) { // Draw the lines from the middle to the right
            context.moveTo(i, 0);
            context.lineTo(i, context.canvas.height);
        }
        for (var i = middleX; i > 0; i -= this.scaleUnit) { // Draw the lines from the middle to the left
            context.moveTo(i, 0);
            context.lineTo(i, context.canvas.height);
        }
        context.fill(); // draw the path to screen
        context.stroke();
        context.restore();
    };
    return Grid;
}());
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  Curve_interface.ts
 *        File to define the interface of the function
 */
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  curves_lissajous.ts
 *        Class to draw the lissajous curves on the canvas
 */
///<reference path="grid.ts" />
///<reference path="curve_interface.ts" />
// Class Definition
var LissajousCurves = /** @class */ (function () {
    /**
    * @description Constructor for the class GRID
    * @param {number} sinValue - The value of a in the formule
    * @param {number} cosValue - The value of b in the formule
    * @param {number} phis - The value of phi in the formule
    * @return It doesn´t return anything.
   */
    function LissajousCurves(sinValue, cosValue, phis, scaleUnit) {
        if (scaleUnit === void 0) { scaleUnit = 300; }
        this.sinValue = sinValue;
        this.cosValue = cosValue;
        this.phis = phis;
        this.scaleUnit = scaleUnit;
        this.sinValue = sinValue;
        this.cosValue = cosValue;
        this.phis = phis;
    }
    /**
     * @description Method to draw the grid on the screen. It will draw the horizontal and vertical lines of the grid.
     * @param {CanvasRenderingContext2D} context - The context of the canvas where the CoordinateAxis will be drawn.
     * @param {string} color - The color of the grid. By default it is black.
     * @return It doesn´t return anything, it just draws the rectangle on the canvas.
     */
    LissajousCurves.prototype.draw = function (context, color) {
        if (color === void 0) { color = 'black'; }
        var grid = new Grid();
        grid.draw(context);
        this.drawCurves(context, color);
    };
    /**
     * @description Method to draw the lissajous curves on the canvas.
     * @param {CanvasRenderingContext2D} context - The context of the canvas where the CoordinateAxis will be drawn.
     * @param {string} color - The color of the curves.
     * @return It doesn´t return anything, it just draws the curves on the canvas.
     */
    LissajousCurves.prototype.drawCurves = function (context, color) {
        context.beginPath(); // create the *path* for the coordinate axis.
        context.strokeStyle = color;
        context.lineWidth = 2;
        var MIDDlE_WIDTH = context.canvas.width / 2;
        var MIDDlE_HEIGHT = context.canvas.height / 2;
        var xCoordinate = 0;
        var yCoordinate = 0;
        // First iteration outside
        xCoordinate = Math.sin(this.sinValue * 0 + this.phis);
        yCoordinate = Math.cos(this.cosValue * 0);
        context.moveTo(xCoordinate * this.scaleUnit + MIDDlE_WIDTH, yCoordinate * this.scaleUnit + MIDDlE_HEIGHT);
        // We will draw the curves from 0 to 1000.
        for (var i = 0; i < 1000; i += 1 / this.scaleUnit) {
            xCoordinate = Math.sin(this.sinValue * i + this.phis);
            yCoordinate = Math.cos(this.cosValue * i);
            context.lineTo(xCoordinate * this.scaleUnit + MIDDlE_WIDTH, yCoordinate * this.scaleUnit + MIDDlE_HEIGHT);
        }
        context.stroke();
    };
    return LissajousCurves;
}());
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
var DrawCurves = /** @class */ (function () {
    /**
     * @description Constructor for the class Graph.
     * @param
     * @return It doesn´t return anything.
     */
    function DrawCurves() {
    }
    /**
     * @description Method to draw the function and the coordinate axis on the canvas.
     * @param {CurvesInterface} curveToDraw The curve to draw
     * @return It doesn´t return anything.
     */
    DrawCurves.prototype.draw = function (curveToDraw) {
        curveToDraw.draw(DrawCurves.context, 'black');
    };
    DrawCurves.canvas = document.getElementById('tutorial');
    DrawCurves.context = DrawCurves.canvas.getContext('2d');
    return DrawCurves;
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
///<reference path="draw_curves.ts" />
/**
 * @Description Main Function. It will draw the function on the canvas.
 *
 * @return It won´t return anything, it will just draw the function on the canvas.
 */
var main = function () {
    var drawing = new DrawCurves();
    var lissajousCurves = new LissajousCurves(8, 9, 0);
    drawing.draw(lissajousCurves);
};
main();
