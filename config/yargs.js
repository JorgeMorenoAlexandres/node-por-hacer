const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completadoo pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza una lista', { descripcion, completado })
    .command('borrar', 'borra una tarea', { descripcion })
    .help().argv;

module.exports = {
    argv
}