const thoughtSeeds = [
  {
    thoughtText: "example thought text 1",
    username: "testName1",
    reactions: [
      {
        reactionBody: "Woah, a reaction!",
        username: "testName2",
      },
    ],
  },
  {
    thoughtText: "example thought text 2",
    username: "testName2",
    reactions: [
      {
        reactionBody: "Abject dismay!",
        username: "testName3",
      },
      {
        reactionBody: "Vehement agreement!",
        username: "testName1",
      },
    ],
  },
  {
    thoughtText: "example thought text 3",
    username: "testName3",
    reactions: [
      {
        reactionBody: "Abject dismay!",
        username: "testName1",
      },
      {
        reactionBody: "Vehement agreement!",
        username: "testName2",
      },
    ],
  },
];

module.exports = thoughtSeeds;
