const { tasks, users } = require("../constants");

module.exports = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find((user) => user.id === id),
  },
  User: {
    name: ({ name }) => name.charAt(0).toUpperCase() + name.slice(1),
    tasks: ({ id }) => tasks.filter((task) => task.id === id),
  },
};
