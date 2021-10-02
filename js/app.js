document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

let defaultText = document.querySelector('.default');
const contenedorTareas = document.querySelector('.contenedor-tareas');

function iniciarApp(){
    
    const btn = document.querySelector('.btn-agregar');

    btn.addEventListener('click', function(){
        const input = document.querySelector('.texto-tarea');

        if(input.value === '') return;

        // Crear Tarea
        const divTarea = document.createElement('DIV');
        divTarea.classList.add('nueva-tarea');    

        const tarea = document.createElement('P');
        tarea.textContent = input.value;

        const btn = document.createElement('button');
        btn.textContent = '-';
        btn.onclick = borrarTarea;
        btn.classList.add('btn', 'btn-borrar');

        divTarea.appendChild(tarea);
        divTarea.appendChild(btn);

        contenedorTareas.appendChild(divTarea);

        defaultText.remove();

        input.value = '';
    });
}

function borrarTarea(e){
    const tareaBorrar = e.target.parentNode;
    tareaBorrar.remove();

    if(!contenedorTareas.hasChildNodes()){
        const parrafoDefault = document.createElement('P');
        parrafoDefault.textContent = 'No tienes tareas pendientes';
        parrafoDefault.classList.add('default');
        defaultText = parrafoDefault;

        contenedorTareas.appendChild(parrafoDefault);
    }
}