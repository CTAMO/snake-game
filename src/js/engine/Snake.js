(function(ns, undefined) {
    "use strict";

    ns.Snake = function(bodyElements, speed, direction, renderer) {
        var snake = this;
        snake.bodyElements = bodyElements;
        snake.speed = speed;
        snake.direction = direction;
        snake.renderer = renderer;
        snake.score = 0;
    };

    ns.Snake.prototype = (function() {
        var detectCollisions = function(field, block) {
            if (field[block.y][block.x] === ns.GAME_FIELD_TYPE.WALL) {
                return crashIntoWall();
            }
            if (this.bodyElements.filter(function(e) {
                    return e.x === block.x && e.y === block.y;
                }).length > 0) {
                return crashIntoSelf();
            }

            return false;
        };

        var crashIntoWall = function() {
            return true;
        };

        var crashIntoSelf = function() {
            return true;
        };

        var checkForFruit = function(fruit, field, block) {
            if (block.y === fruit.position.y && block.x === fruit.position.x) {
                eatFruit.call(this, fruit, field);
                return true;
            }

            return false;
        };

        var eatFruit = function(fruit, field) {
            var snake = this;
            snake.renderer.cleanElement(fruit.position);
            fruit.getRandomPosition(field, snake);
            snake.renderer.renderElement(fruit.position, ns.GAME_FIELD_TYPE.FRUIT);
            snake.score++;
        };

        var move = function(fruit, field) {
            var lastBlock = this.bodyElements[this.bodyElements.length - 1];
            var newBlock;

            switch (this.direction) {
                case ns.MOVE_DIRECTION.LEFT:
                    newBlock = {
                        x: lastBlock.x - 1,
                        y: lastBlock.y
                    };
                    break;
                case ns.MOVE_DIRECTION.RIGHT:
                    newBlock = {
                        x: lastBlock.x + 1,
                        y: lastBlock.y
                    };
                    break;
                case ns.MOVE_DIRECTION.UP:
                    newBlock = {
                        x: lastBlock.x,
                        y: lastBlock.y - 1
                    };
                    break;
                case ns.MOVE_DIRECTION.DOWN:
                    newBlock = {
                        x: lastBlock.x,
                        y: lastBlock.y + 1
                    };
                    break;
            }

            if (detectCollisions.call(this, field, newBlock)) {
                return true;
            }

            if (checkForFruit.call(this, fruit, field, newBlock) === false) {
                this.renderer.cleanElement(this.bodyElements[0]);
                this.bodyElements.shift();
            }

            this.bodyElements.push(newBlock);
            this.renderer.renderElement(newBlock, ns.GAME_FIELD_TYPE.SNAKE);
        };

        var turnLeft = function() {
            this.direction = ns.MOVE_DIRECTION.LEFT;
        };

        var turnRight = function() {
            this.direction = ns.MOVE_DIRECTION.RIGHT;
        };

        var turnUp = function() {
            this.direction = ns.MOVE_DIRECTION.UP;
        };

        var turnDown = function() {
            this.direction = ns.MOVE_DIRECTION.DOWN;
        };

        return {
            move: move,
            turnLeft: turnLeft,
            turnRight: turnRight,
            turnUp: turnUp,
            turnDown: turnDown
        };
    })();
})(window.SnakeGameNS);