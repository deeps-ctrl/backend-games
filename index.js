const express = require("express");
const cors = require("cors");

const PORT = 3000;

const app = express();
app.use(cors());

const games = [
  {
    id: 1,
    title: "The Legend of Zelda: Breath of the Wild",
    genre: "Action-adventure",
    platform: "Nintendo Switch",
    releaseYear: 2017,
  },
  {
    id: 2,
    title: "God of War",
    genre: "Action-adventure",
    platform: "PlayStation 4",
    releaseYear: 2018,
  },
  {
    id: 3,
    title: "Cyberpunk 2077",
    genre: "Role-playing",
    platform: "PC",
    releaseYear: 2020,
  },
  {
    id: 4,
    title: "Hollow Knight",
    genre: "Metroidvania",
    platform: "PC",
    releaseYear: 2017,
  },
  {
    id: 5,
    title: "Minecraft",
    genre: "Sandbox",
    platform: "Multi-platform",
    releaseYear: 2011,
  },
];

app.get("/games", (req, res) => {
  res.status(200).json({ games });
});

app.get("/games/:id", (req, res) => {
  const id = Number(req.params.id);
  const game = games.find((game) => game.id === id);
  if (game) {
    res.status(200).json({ game });
  } else {
    res.status(404).json({ message: "Game not found" });
  }
});

app.listen(PORT, () => console.log(`Server started listening on ${PORT} port`));
