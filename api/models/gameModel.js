// models/Game.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  sport: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  activityAccess: {
    type: String,
    default: "public",
  },
  totalPlayers: {
    type: Number,
    required: true,
  },
  instruction: {
    type: String,
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  queries: [
    {
      question: String,
      answer: String,
    },
  ],
  //This is how our requests will be done and shown this is an important part
  requests: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      comment: {
        type: String,
      },
    },
  ],
  //must be boolean for logic
  isBooked: {
    type: Boolean,
    default: false,
  },
  //if 6/6 players matchfull will be true
  matchFull: {
    type: Boolean,
    default: false,
  },
  courtNumber: {
    type: String,
  },
});

module.exports = mongoose.model("Game", gameSchema);
