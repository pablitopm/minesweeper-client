var restclient = require("./src/rest/rest")

module.exports = {
    getGame: function(id) {
        return restclient.getGame(id)//.then( game => console.log(game));
    },

    createGame: function(mines, rows, cols) {
        return restclient.createGame(mines, rows, cols)//.then( game => console.log(game));
    },

    listGames: function() {
        return restclient.listGames()//.then( games => console.log(games));
    },

    clickCell: function(gameID, row, col) {
        return restclient.clickCell(gameID, row, col)//.then( game => console.log(game));
    },
}

