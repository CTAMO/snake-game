(function(ns, undefined) {
    "use strict";

    ns.Engine = (function(ns) {
        var gameInterval;

        function run(snake, fruit, gameField) {
            if (snake.move(fruit, gameField)) {
                ns.Engine.end();
            }
        }

        function start(snake, fruit, gameField) {
            var gameFunction = this.run.bind(this, snake, fruit, gameField);
            var frameSpeed = snake.speed;

            gameInterval = setInterval(gameFunction, frameSpeed);
        }

        function end() {
            clearInterval(gameInterval);
        }

        return {
            run: run,
            start: start,
            end: end
        };
    })(ns);
})(window.SnakeGameNS);