// variables
let defaultText = document.querySelector('.default');
const contenedorTareas = document.querySelector('.tareas');
const btnAgregar = document.querySelector('.btn-agregar');

let tareas = [];

// event listeners
eventListeners();
function eventListeners() {
    btnAgregar.addEventListener('click', agregarTarea);
}


// funciones
function agregarTarea(){
    
        const textoTarea = document.querySelector('.texto-tarea').value;
        const idTarea = Date.now();
        
        const tareaObj = {textoTarea , idTarea};
        tareas = [...tareas, tareaObj];

        if(textoTarea === '') {
            mostrarMensaje('Escribe una tarea, por favor','error');
            return;   
        }

        mostrarMensaje('Tarea agregada correctamente', 'correcto');

        mostrarTareas(tareas);
}

function mostrarTareas(tareas) {

    while(contenedorTareas.firstChild){
        contenedorTareas.removeChild(contenedorTareas.firstChild);
    }

    tareas.forEach( tarea => {
        // Crear Tarea -> DOM Scripting
        const divTarea = document.createElement('DIV');
        divTarea.dataset.id = tarea.idTarea;
        divTarea.classList.add('nueva-tarea');    

        const nuevaTarea = document.createElement('P');
        nuevaTarea.textContent = tarea.textoTarea;

        const btn = document.createElement('button');
        btn.textContent = '-';
        btn.onclick = borrarTarea;
        btn.classList.add('btn', 'btn-borrar');

        divTarea.appendChild(nuevaTarea);
        divTarea.appendChild(btn);

        contenedorTareas.appendChild(divTarea);
    });
     

     document.querySelector('.texto-tarea').value = '';
     defaultText.remove();
     console.log(tareas);
}

function borrarTarea(e){
    const tareaBorrar = e.target.parentNode;
    const idBorrar = Number(tareaBorrar.dataset.id);
    tareas = tareas.filter( t => t.idTarea !== idBorrar);
    mostrarTareas(tareas);
}

function mostrarMensaje(mensaje,tipo){
    const divMensaje = document.createElement('div');
    divMensaje.textContent = mensaje;
    if(tipo === 'error')
        divMensaje.classList.add('error');
    else
        divMensaje.classList.add('correcto');

   const contenedor = document.querySelector('.contenedor-tareas');
   contenedor.insertBefore(divMensaje,document.querySelector('.default'));

   setTimeout(()=>{
    divMensaje.remove();
   },3000)
}