const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL);

const Cat = require("./models/cat");

async function seed() {
  await Cat.create({
    name: "Felix",
    color: "gray and white",
    hasClaws: true,
    likes: ["sleeping in the sun", "sipping milk", "climbing trees"],
  });

  await Cat.create({
    name: "Cedric",
    color: "ginger",
    hasClaws: false,
    likes: [
      "fighting in the street",
      "extreme ironing",
      "eating out of the trash",
    ],
  });
  console.log("go kitty go");
  mongoose.disconnect();
}

seed();
