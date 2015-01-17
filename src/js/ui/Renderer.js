(function(ns, $, undefined) {
    "use strict";

    var doc = window.document,
        GAME_FIELD_TYPE = ns.GAME_FIELD_TYPE,
        TR = "tr",
        TD = "td",
        TABLE = "table",
        ELEMENT = "element",
        DASH = "-";

    ns.Renderer = function(classNames) {
        this.cssClassNames = classNames;
    };

    ns.Renderer.prototype = {
        renderElement: function(element, elementType) {
            var cell = $("#" + ELEMENT + DASH + element.x + DASH + element.y)[0];
            cell.className = this.cssClassNames[elementType];
        },

        cleanElement: function(element) {
            var cell = $("#" + ELEMENT + DASH + element.x + DASH + element.y)[0];
            cell.className = this.cssClassNames[GAME_FIELD_TYPE.EMPTY];
        },

        renderGameField: function(gameField) {
            var table,
                fieldRowsLength = gameField.length,
                fieldColumnsLength = 0,
                tableRow = null,
                tableCell = null,
                row,
                column;

            table = doc.createElement(TABLE);
            $(doc.body).append(table);

            for (row = 0; row < fieldRowsLength; row++) {
                tableRow = doc.createElement(TR);
                fieldColumnsLength = gameField[row].length;

                for (column = 0; column < fieldColumnsLength; column++) {
                    tableCell = doc.createElement(TD);
                    $(tableCell).addClass(this.cssClassNames[gameField[row][column]]);
                    $(tableCell).attr("id", ELEMENT + DASH + column + DASH + row);
                    $(tableRow).append(tableCell);
                }
                $(table).append(tableRow);
            }
        }
    };
})(window.SnakeGameNS, window.jQuery);
