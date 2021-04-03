const uuid = require("uuid");
const { tasks, users } = require("../constants");

module.exports = {
  Query: {
    tasks: () => tasks,
    task: (_, args) => tasks.find((task) => task.id === args.id),
  },
  Mutation: {
    createTask: (_, { input }) => {
      const task = { ...input, id: uuid.v4() };
      tasks.push(task);
      return task;
    },
  },
  Task: {
    user: (parent) => users.find((user) => user.id === parent.userId),
  },
};
