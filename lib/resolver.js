let cursos = require("../data/cursos");
let model = require("../lib/model/user");

module.exports = {
  Query: {
    hello: () => {
      return "hola";
    },

    test: () => {
      return "test gql";
    },

    courses: async () => {
      const cursos = await model.find();

      return cursos;
    },

    course: (root, args) => {
      console.log(args.id);
      const curso = cursos.find((element) => element._id == args.id);
      return curso;
    },
  },

  Mutation: {
    addCourse: async (root, { input }) => {
      console.log("gQL input", input);
      const newCourse = new model(input);
      console.log("modelo mongo", newCourse);
      const user = await newCourse.save();

      return user;
    },

    deleteCourse: async (root, { _id }) => {
      const eliminado = await model.findByIdAndDelete(_id);

      return eliminado;
    },

    updateCourse: async (root, { _id, course }) => {
      const editado = await model.findByIdAndUpdate(_id, course, { new: true });

      return editado;
    },
  },
};
