'use-strict';
var Game = require("../domain/game.js");
var client = require('request-promise-native')

const apiConfig = {
        baseUrl: 'http://minesweeper-lb-1547991656.us-east-1.elb.amazonaws.com',
        headers: {
            'Content-Type': "application/json"
        },
        json:true,
        retry: true,
        maxRetries: 3
    }

module.exports = {

    getGame: async function(id) {
        try {
            let response = await client.get(`/game/${id}`, apiConfig);
            return new Game(response);
        } catch (error) {
            console.log("something went wrong" + error);
            throw new Error(error);
        }   
        
    },

    listGames: async function() {
        try {
            let response = await client.get(`/games`, apiConfig);
            let result = [];
            response.forEach( (game) => {
                result.push(new Game(game))
            })
            return result;
        } catch (error) {
            console.log("something went wrong" + error)
            throw new Error(error)
        } 
    },

    createGame: async function(mines, rows, cols) {
        try {
            apiConfig.json = {"mines": mines, "rows": rows, "cols": cols};
            let response = await client.post(`/game`, apiConfig);
            return new Game(response);
        } catch (error) {
            console.log("something went wrong" + error)
            throw new Error(error)
        } 
    },

    clickCell: async function(gameId, row, col){
        try {
            apiConfig.json = {"row": row, "col": col};
            let response = await client.post(`/game/${gameId}/click`, apiConfig);
            return new Game(response);
        } catch (error) {
            console.log("something went wrong" + error)
            throw new Error(error)
        } 
    }
}