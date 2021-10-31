let cursos = require("../data/cursos");
let model = require("./model/course");
let modelStudent = require("./model/student");
let types = require("./types");
let errorhandler = require("./errorHandler");

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

    course: async (root, args) => {
      //console.log(args.id);
      const cor = await model.findOne({ _id: args.id})
      return cor;
    },

    //operaciones query para estudiante
    students: async () => {
      const cursos = await modelStudent.find();

      return cursos;
    },
  },
  ...types, //resolver para tipos

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

    //operaciones para estudiantes
    addStudent: async (root, { input })=>{
      console.log("gQL input", input);
      const newStudent = new modelStudent(input);
      console.log("modelo mongo", newStudent);
      const user = await newStudent.save();

      return user;
    },

    addStudentToCourse: async (root, {courseID, studentID})=>{

      const student = await modelStudent.findOne({ _id: studentID})
      if(!student) throw new Error('No existe el estudiante buscado')
      const course = await model.findByIdAndUpdate(courseID,{ $push: { students: student._id} },{ new: true } )

      return course;
    }
  },
  
};
