(function(ns, undefined) {
    "use strict";

    var math = Math;
    var ceil = math.ceil;
    var random = math.random;

    ns.Fruit = function(position) {
        var fruit = this;
        fruit.position = position;
    };

    ns.Fruit.prototype = {
        getRandomPosition: function(field, snake) {
            var newPosition = {
                x: ceil(random() * field[0].length) - 1,
                y: ceil(random() * field.length) - 1
            };

            while (
                (snake.bodyElements.filter(function(snakeElement) {
                    return snakeElement.x === newPosition.x && snakeElement.y === newPosition.y;
                }).length > 0) ||
                (field[newPosition.y][newPosition.x] === ns.GAME_FIELD_TYPE.WALL)) {
                newPosition = {
                    x: ceil(random() * field[0].length),
                    y: ceil(random() * field.length)
                };
            }

            this.position = newPosition;
        }

    };
})(window.SnakeGameNS);


