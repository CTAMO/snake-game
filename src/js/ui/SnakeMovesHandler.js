(function(ns, $, undefined) {
    "use strict";

    ns.SnakeMovesManager = (function(ns, $) {
        var MOVE_DIRECTION = ns.MOVE_DIRECTION;
        var keyboard = {
            UP_ARROW: 38,
            DOWN_ARROW: 40,
            LEFT_ARROW: 37,
            RIGHT_ARROW: 39
        };

        function handleMoves(snake) {
            $(document).on("keydown", function onKeyDownHandler(e) {
                switch (e.keyCode) {
                    case keyboard.DOWN_ARROW:
                    {
                        e.preventDefault();

                        if (snake.direction !== MOVE_DIRECTION.UP) {
                            snake.turnDown();
                        }
                        break;
                    }
                    case keyboard.UP_ARROW:
                    {
                        e.preventDefault();

                        if (snake.direction !== MOVE_DIRECTION.DOWN) {
                            snake.turnUp();
                        }
                        break;
                    }
                    case keyboard.LEFT_ARROW:
                    {
                        e.preventDefault();

                        if (snake.direction !== MOVE_DIRECTION.RIGHT) {
                            snake.turnLeft();
                        }
                        break;
                    }
                    case keyboard.RIGHT_ARROW:
                    {
                        e.preventDefault();

                        if (snake.direction !== MOVE_DIRECTION.LEFT) {
                            snake.turnRight();
                        }
                        break;
                    }
                    default:
                    {
                        break;
                    }
                }
            });
        }

        return {
            handleMoves: handleMoves
        };
    }(ns, $));
})(window.SnakeGameNS, window.jQuery);