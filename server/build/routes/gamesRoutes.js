"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var gameControllers_1 = require("../controllers/gameControllers");
var GamesRoutes = /** @class */ (function () {
    function GamesRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    GamesRoutes.prototype.config = function () {
        this.router.get('/', gameControllers_1.gameController.list);
        this.router.get('/:id', gameControllers_1.gameController.getOne);
        this.router.post('/', gameControllers_1.gameController.create);
        this.router.put('/:id', gameControllers_1.gameController.update);
        this.router.delete('/:id', gameControllers_1.gameController.delete);
    };
    return GamesRoutes;
}());
var gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
