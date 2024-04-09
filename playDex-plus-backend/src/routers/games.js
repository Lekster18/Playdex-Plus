const express = require("express");
const router = express.Router();
const {
  getAllGames,
  getGameById,
  addFavourites,
  updateGame,
  removeGame,
  getFavourites,
} = require("../controllers/games");
const { seedGames } = require("../controllers/gameSeed");

router.get("/game_info/seed", seedGames);
router.get("/game_info", getAllGames);
router.post("/game_info", getGameById);
router.put("/favourites", addFavourites);
router.get("/favourites", getFavourites);
router.patch("/favourites/:id", updateGame);
router.delete("/favourites/:id", removeGame);

module.exports = router;
