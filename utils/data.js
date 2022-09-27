const userSeeds = [
  {
    username: "testName1",
    email: "test1@me.com",
    // thoughts: [array of id values],
    // friends: [array of id values],
  },
  {
    username: "testName2",
    email: "test2@me.com",
    // thoughts: [array of id values],
    // friends: [array of id values],
  },
  {
    username: "testName3",
    email: "test3@me.com",
    // thoughts: [array of id values],
    // friends: [array of id values],
  },
];

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

module.exports = { userSeeds, thoughtSeeds };
