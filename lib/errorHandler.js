
const errorhandler = (er)=>{
    console.error(er)
    throw new Error("Fallo en la operacion del servidor")
}

module.exports = errorhandler