var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Rectangle = /** @class */ (function () {
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
    function Rectangle(xPosition, yPosition, width, height, fillColor, strokeColor, strokeWidth) {
        if (xPosition === void 0) { xPosition = 20; }
        if (yPosition === void 0) { yPosition = 20; }
        if (width === void 0) { width = 20; }
        if (height === void 0) { height = 30; }
        if (fillColor === void 0) { fillColor = 'black'; }
        if (strokeColor === void 0) { strokeColor = 'black'; }
        if (strokeWidth === void 0) { strokeWidth = 2; }
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.width = width;
        this.height = height;
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
        this.strokeWidth = strokeWidth;
    }
    /**
     * @description Method to draw the rectangle on the canvas.
     * @param {CanvasRenderingContext2D} context - The context of the canvas where the Rectangle will be drawn.
     * @return It doesn´t return anything, it just draws the rectangle on the canvas.
     */
    Rectangle.prototype.draw = function (context) {
        // Saves the current styles set elsewhere to avoid overwriting them
        context.save();
        // Set the styles for this shape
        context.fillStyle = this.fillColor;
        context.lineWidth = this.strokeWidth;
        // create the *path*
        context.beginPath();
        context.strokeStyle = this.strokeColor;
        context.rect(this.xPosition, this.yPosition, this.width, this.height);
        // draw the path to screen
        context.fill();
        context.stroke();
        // restores the styles from earlier preventing the colors used here
        // from polluting other drawings
        context.restore();
    };
    /**
     * @description Method to get the area of the rectangle.
     *
     * @returns The area of the rectangle.
     */
    Rectangle.prototype.getArea = function () {
        return (this.width * this.height);
    };
    return Rectangle;
}());
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  CoordinateAxis.ts
 *        Class to draw a coordinate axis on a canvas. It will be drawns on the center of the canvas.
 */
///<reference path="rectangle.ts" /> 
// Class Definition
var CoordinateAxis = /** @class */ (function () {
    /**
     * @description Constructor for the class CoordinateAxis.
     * @param {number} scaleUnit - Distance between each unit of the axis. By default will be 50.
     * @param {number} strokeWidth - Width of the lines of the axis. By default will be 3.
     * @param {string} fillColor By default will be black.
     * @return It doesn´t return anything.
     */
    function CoordinateAxis(scaleUnit, strokeWidth, fillColor) {
        if (scaleUnit === void 0) { scaleUnit = 100; }
        if (strokeWidth === void 0) { strokeWidth = 3; }
        if (fillColor === void 0) { fillColor = 'black'; }
        this.scaleUnit = scaleUnit;
        this.strokeWidth = strokeWidth;
        this.fillColor = fillColor;
        this.scaleUnit = scaleUnit;
        this.strokeWidth = strokeWidth;
        this.fillColor = fillColor;
    }
    /**
     * @description Method to draw the coordinate axis on the canvas.
     * @param {CanvasRenderingContext2D} context - The context of the canvas where the CoordinateAxis will be drawn.
     * @return It doesn´t return anything, it just draws the rectangle on the canvas.
     */
    CoordinateAxis.prototype.draw = function (context) {
        this.drawAxis(context);
        this.drawNumbers(context);
    };
    /**
     * @description Method to draw the axis on the canvas.
     * @param {CanvasRenderingContext2D} context - The context of the canvas where the CoordinateAxis will be drawn.
     * @return It doesn´t return anything, it just draws the rectangle on the canvas.
     */
    CoordinateAxis.prototype.drawAxis = function (context) {
        context.save(); // Saves the current styles set elsewhere to avoid overwriting them
        context.fillStyle = this.fillColor; // Set the styles for this shape
        context.lineWidth = this.strokeWidth;
        context.beginPath(); // create the *path* for the coordinate axis.
        context.strokeStyle = this.fillColor;
        context.moveTo(0, context.canvas.height / 2); // move to the middle of the height of the canvas in the left side
        context.lineTo(context.canvas.width, context.canvas.height / 2); // draw the horizontal axis
        context.moveTo(context.canvas.width / 2, 0); // move to the middle of the width of the canvas in the top side
        context.lineTo(context.canvas.width / 2, context.canvas.height); // draw the vertical axis
        context.fill(); // draw the path to screen
        context.stroke();
        context.restore();
    };
    /**
     * @description Method to draw the number in the coordinate axis.
     * @param {CanvasRenderingContext2D} context - The context of the canvas where the CoordinateAxis will be drawn.
     * @param {string} font - The font of the number. By default will be 15px Arial.
     * @return It doesn´t return anything, it just draws the number in the coordinate axis.
     */
    CoordinateAxis.prototype.drawNumbers = function (context, font) {
        if (font === void 0) { font = "15px Arial"; }
        context.save(); // Saves the current styles set elsewhere to avoid overwriting them
        context.fillStyle = this.fillColor; // Set the styles for this shape
        context.font = font; // Adjust the size of the font, to see the number bigger.
        var MARGIN_DISTANCE = 20; // Distance from the number to the axis
        var MIDDLE_WIDTH = context.canvas.width / 2; // Middle of the width of the canvas
        var MIDDLE_HEIGHT = context.canvas.height / 2; // Middle of the height of the canvas
        var RECTANGLE_MARGIN = 3;
        for (var i = 0, j = 0; i < MIDDLE_WIDTH; i += this.scaleUnit, --j) { // Draw the negative numbers in the horizontal axis
            if (j % 2 == 0) {
                context.fillText(j.toString(), MIDDLE_WIDTH - i, MIDDLE_HEIGHT + MARGIN_DISTANCE);
            }
            this.drawRectangleAboveNumber(context, MIDDLE_WIDTH - i, MIDDLE_HEIGHT - RECTANGLE_MARGIN);
        }
        for (var i = this.scaleUnit, j = 1; i < MIDDLE_WIDTH; i += this.scaleUnit, ++j) { // Draw the positive numbers in the horizontal axis
            if (j % 2 == 0) {
                context.fillText(j.toString(), MIDDLE_WIDTH + i, MIDDLE_HEIGHT + MARGIN_DISTANCE);
            }
            this.drawRectangleAboveNumber(context, MIDDLE_WIDTH + i, MIDDLE_HEIGHT - RECTANGLE_MARGIN);
        }
        for (var i = this.scaleUnit, j = 1; i < MIDDLE_HEIGHT; i += this.scaleUnit, ++j) { // Draw the positive numbers in the vertical axis. We start higher to don´t draw the 0
            if (j % 2 == 0) {
                context.fillText(j.toString(), MIDDLE_WIDTH + MARGIN_DISTANCE, MIDDLE_HEIGHT - i);
            }
            this.drawRectangleAboveNumber(context, MIDDLE_WIDTH - RECTANGLE_MARGIN, MIDDLE_HEIGHT - i, true);
        }
        for (var i = this.scaleUnit, j = -1; i < MIDDLE_HEIGHT; i += this.scaleUnit, --j) { // Draw the negative numbers in the vertical axis
            if (j % 2 == 0) {
                context.fillText(j.toString(), MIDDLE_WIDTH + MARGIN_DISTANCE, MIDDLE_HEIGHT + i);
            }
            this.drawRectangleAboveNumber(context, MIDDLE_WIDTH - RECTANGLE_MARGIN, MIDDLE_HEIGHT + i, true);
        }
        context.restore();
    };
    /**
     * @description Method to draw a rectangle above the number in the axis.
     * @param {CanvasRenderingContext2D} context - The context of the canvas where the CoordinateAxis will be drawn.
     * @param {number} xPosition - X coord of the rectangle's position
     * @param {number} yPosition - Y coord of the rectangle's position
     * @param {boolean} invert - If the rectangle will be drawn above or below the number. By default will be false.
     * @return It doesn´t return anything, it just draws the rectangle above the number in the axis.
     */
    CoordinateAxis.prototype.drawRectangleAboveNumber = function (context, xPosition, yPosition, invert) {
        if (invert === void 0) { invert = false; }
        var RECTANGLE_WIDTH = 4;
        var RECTANGLE_HEIGHT = 7;
        var rectangleInTheAxis = new Rectangle(xPosition, yPosition, RECTANGLE_WIDTH, RECTANGLE_HEIGHT);
        if (invert) {
            rectangleInTheAxis = new Rectangle(xPosition, yPosition, RECTANGLE_HEIGHT, RECTANGLE_WIDTH);
        }
        rectangleInTheAxis.draw(context);
    };
    return CoordinateAxis;
}());
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
var GRID = /** @class */ (function () {
    /**
     * @description Constructor for the class GRID
     * @param {number} scaleUnit - Distance between each line of the grid. By default will be 100
     * @param {number} strokeWidth - Width of the lines of the axis. By default will be 3.
     * @param {string} fillColor By default will be black.
     * @return It doesn´t return anything.
     */
    function GRID(scaleUnit, strokeWidth, fillColor) {
        if (scaleUnit === void 0) { scaleUnit = 100; }
        if (strokeWidth === void 0) { strokeWidth = 1; }
        if (fillColor === void 0) { fillColor = 'grey'; }
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
    GRID.prototype.draw = function (context) {
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
    GRID.prototype.drawHorizontalLines = function (context, middleY) {
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
    GRID.prototype.drawVerticalLines = function (context, middleX) {
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
    return GRID;
}());
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
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  function.ts
 *        File to define the function class. It will be an abstract class that will be extended by the different functions.
 */
///<reference path="function_interface.ts" />
var MyFunction = /** @class */ (function () {
    /**
     * @description Constructor of the class. It will store the reduced factor.
     * @param {number} scaleReducedFactor The reduced factor for the scale to be use in the function. By default it is 100.
     */
    function MyFunction(scaleReducedFactor) {
        if (scaleReducedFactor === void 0) { scaleReducedFactor = 100; }
        this.scaleReducedFactor = scaleReducedFactor;
        this.scaleReducedFactor = scaleReducedFactor;
    }
    return MyFunction;
}());
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
///<reference path="function.ts" />
var Graph = /** @class */ (function () {
    /**
     * @description Constructor for the class Graph.
     * @param {number} scaleUnit Scale unit for the graph. By default it is 100.
     * @return It doesn´t return anything.
     */
    function Graph(scaleUnit) {
        if (scaleUnit === void 0) { scaleUnit = 50; }
        this.scaleUnit = scaleUnit;
        this.scaleUnit = scaleUnit;
    }
    /**
     * @description Method to draw the function and the coordinate axis on the canvas.
     * @param {MyFunction} functionsToDraw The vector with the functions to be drawn on the canvas.
     * @return It doesn´t return anything.
     */
    Graph.prototype.draw = function (functionsToDraw) {
        var coordinateAxis = new CoordinateAxis(this.scaleUnit);
        coordinateAxis.draw(Graph.context);
        var grid = new GRID(this.scaleUnit);
        grid.draw(Graph.context);
        for (var _i = 0, functionsToDraw_1 = functionsToDraw; _i < functionsToDraw_1.length; _i++) {
            var actualFunction = functionsToDraw_1[_i];
            actualFunction.draw(Graph.context, this.scaleUnit);
        }
    };
    Graph.canvas = document.getElementById('tutorial');
    Graph.context = Graph.canvas.getContext('2d');
    return Graph;
}());
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  positive_and_negative_functions.ts
 *        File to define the abtract class for function that can recive positive and negative values.
 */
///<reference path="function.ts" />
// We will use the template method pattern to draw the functions.
var PositiveAndNegativeFunction = /** @class */ (function (_super) {
    __extends(PositiveAndNegativeFunction, _super);
    function PositiveAndNegativeFunction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @description Method to draw a trigonometric function on the canvas.
     * @param {CanvasRenderingContext2D} context The context of the canvas.
     * @param {number} scaleUnit The scale unit of the canvas.
     * @param {string} color The color of the function. By default it is red.
     * @param {number} lineWidth The line width of the function. By default it is 2.
     * @return It doesn´t return anything.
     */
    PositiveAndNegativeFunction.prototype.draw = function (context, scaleUnit, color, lineWidth) {
        if (color === void 0) { color = 'blue'; }
        if (lineWidth === void 0) { lineWidth = 2; }
        context.beginPath();
        context.strokeStyle = color;
        context.lineWidth = lineWidth;
        // The same for value between 0 and 1. We will reduce the scale to 1/10.
        var reducedScale = scaleUnit / this.scaleReducedFactor;
        var firstNonNegativeValue = 0; // The first value of the function.
        // We will draw from the middle of the canvas to the right.
        for (var i = context.canvas.width / 2, j = firstNonNegativeValue; i < context.canvas.width; i += reducedScale, j += 1 / this.scaleReducedFactor) {
            context.lineTo(i, context.canvas.height / 2 - this.value(j) * scaleUnit);
        }
        context.moveTo(context.canvas.width / 2, context.canvas.height / 2 - this.value(firstNonNegativeValue) * scaleUnit);
        // We will draw from the middle of the canvas to the left.
        for (var i = context.canvas.width / 2 - reducedScale, j = -(1 / this.scaleReducedFactor); i > 0; i -= reducedScale, j -= 1 / this.scaleReducedFactor) {
            context.lineTo(i, context.canvas.height / 2 - this.value(j) * scaleUnit);
        }
        context.stroke();
    };
    return PositiveAndNegativeFunction;
}(MyFunction));
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y TecnoExpía
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  Exp.ts
 *        File to define the Exp class. It will draw the Exp function on the canvas.
 */
///<reference path="positive_and_negative_functions.ts" />
var Exp = /** @class */ (function (_super) {
    __extends(Exp, _super);
    function Exp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @description Method to get the value of e^x
     * @param {number} x The x value.
     * @return The value of the e^x function.
     */
    Exp.prototype.value = function (x) {
        return Math.exp(x);
    };
    return Exp;
}(PositiveAndNegativeFunction));
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
var TrigonometricFunction = /** @class */ (function (_super) {
    __extends(TrigonometricFunction, _super);
    function TrigonometricFunction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TrigonometricFunction;
}(PositiveAndNegativeFunction));
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  sen.ts
 *        File to define the sen class. It will draw the sen function on the canvas.
 */
///<reference path="trigonometric_functions.ts" />
var Sen = /** @class */ (function (_super) {
    __extends(Sen, _super);
    function Sen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @description Method to get the value of the sen function.
     * @param {number} x The x value.
     * @return The value of the sen function.
     */
    Sen.prototype.value = function (x) {
        return Math.sin(x);
    };
    return Sen;
}(TrigonometricFunction));
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  Cos.ts
 *        File to define the Cos class. It will draw the Cos function on the canvas.
 */
///<reference path="trigonometric_functions.ts" />
var Cos = /** @class */ (function (_super) {
    __extends(Cos, _super);
    function Cos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @description Method to get the value of the cos.
     * @param {number} x The x value.
     * @return The value of the cos in x.
     */
    Cos.prototype.value = function (x) {
        return Math.cos(x);
    };
    return Cos;
}(TrigonometricFunction));
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  Atan.ts
 *        File to define the Atan class. It will draw the tan function on the canvas.
 *        It extends from TrigonometricFunction.
 */
///<reference path="trigonometric_functions.ts" />
var Atan = /** @class */ (function (_super) {
    __extends(Atan, _super);
    function Atan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @description Method to get the value of the tan.
     * @param {number} x The x value.
     * @return The value of the tan in x.
     */
    Atan.prototype.value = function (x) {
        return Math.atan(x);
    };
    return Atan;
}(TrigonometricFunction));
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  positive_functions.ts
 *        File to define the abtract class for function that can only receive positive values.
 */
///<reference path="function.ts" />
// We will use the template method pattern to draw the functions.
var PositiveFunction = /** @class */ (function (_super) {
    __extends(PositiveFunction, _super);
    function PositiveFunction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @description Method to draw a trigonometric function on the canvas.
     * @param {CanvasRenderingContext2D} context The context of the canvas.
     * @param {number} scaleUnit The scale unit of the canvas.
     * @param {string} color The color of the function. By default it is red.
     * @param {number} lineWidth The line width of the function. By default it is 2.
     * @return It doesn´t return anything.
     */
    PositiveFunction.prototype.draw = function (context, scaleUnit, color, lineWidth) {
        if (color === void 0) { color = 'orange'; }
        if (lineWidth === void 0) { lineWidth = 2; }
        context.beginPath();
        context.strokeStyle = color;
        context.lineWidth = lineWidth;
        // The same for value between 0 and 1. We will reduce the scale to 1/10.
        var reducedScale = scaleUnit / this.scaleReducedFactor;
        for (var i = context.canvas.width / 2 + reducedScale, j = 1 / this.scaleReducedFactor; i < context.canvas.width; i += reducedScale, j += 1 / this.scaleReducedFactor) {
            context.lineTo(i, context.canvas.height / 2 - this.value(j) * scaleUnit); // The natural logarithm is divided by the natural logarithm of 10 to get the base 10 logarithm.  
        }
        context.stroke();
    };
    return PositiveFunction;
}(MyFunction));
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  log.ts
 *        File to define the log class. It will draw the log function on the canvas.
 */
///<reference path="positive_functions.ts" />
var Log = /** @class */ (function (_super) {
    __extends(Log, _super);
    function Log() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @description Method to get the value of the log function.
     * @param {number} x The x value.
     * @return The value of the log function.
    */
    Log.prototype.value = function (x) {
        return (Math.log(x) / Math.log(10));
    };
    return Log;
}(PositiveFunction));
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García
 * @since 14 Marzo 2024
 * @desc  sqrt.ts
 *        File to define the sqrt class. It will draw the sqrt function on the canvas.
 */
///<reference path="positive_functions.ts" />
var Sqrt = /** @class */ (function (_super) {
    __extends(Sqrt, _super);
    function Sqrt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @description Method to get the value of the sqrt function.
     * @param {number} x The x value.
     * @return The value of the sqrt function.
    */
    Sqrt.prototype.value = function (x) {
        return Math.sqrt(x);
    };
    return Sqrt;
}(PositiveFunction));
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
///<reference path="graph.ts" />
///<reference path="exp.ts" />
///<reference path="sen.ts" />
///<reference path="cos.ts" />
///<reference path="atan.ts" />
///<reference path="log.ts" />
///<reference path="sqrt.ts" />
/**
 * @Description Main Function. It will draw the function on the canvas.
 *
 * @return It won´t return anything, it will just draw the function on the canvas.
 */
var main = function () {
    var graph = new Graph();
    var functionsToDraw = [];
    functionsToDraw.push(new Sen());
    functionsToDraw.push(new Sqrt());
    functionsToDraw.push(new Cos());
    //  functionsToDraw.push(new Exp());
    //  functionsToDraw.push(new Log());
    //  functionsToDraw.push(new Atan());
    graph.draw(functionsToDraw);
};
main();
