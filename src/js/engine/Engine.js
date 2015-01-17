(function(ns, undefined) {
    "use strict";

    ns.Engine = (function(ns) {
        var gameInterval;

        function run(snake, fruit, gameField) {
            if (snake.move(fruit, gameField)) {
                ns.Engine.end(snake.score);
            }
        }

        function start(snake, fruit, gameField) {
            var gameFunction = this.run.bind(this, snake, fruit, gameField);
            var frameSpeed = snake.speed;

            gameInterval = setInterval(gameFunction, frameSpeed);
        }

        function end(score) {
            clearInterval(gameInterval);
            alert("Game over! Your score is: " + score);

        }

        return {
            run: run,
            start: start,
            end: end
        };
    })(ns);
})(window.SnakeGameNS);