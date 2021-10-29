let cursos = require('../data/cursos');

module.exports = {
Query: {
  hello: () => {
    return "hola";
  },

  test: () => {
    return "test gql";
  },

  courses: ()=>{
    return cursos;
  },
  
  course: (root, args)=>{
    console.log(args.id);
    const curso = cursos.find((element)=>element._id == args.id)
    return curso;
  }
}
};
