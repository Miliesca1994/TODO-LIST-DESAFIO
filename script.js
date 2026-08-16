// ARREGLO DE TAREAS

let tareas = [
    {
        id: 1,
        descripcion: "Llamar a cliente",
        completado: false
    },
    {
        id: 2,
        descripcion: "Enviar correo",
        completado: false
    },
    {
        id: 3,
        descripcion: "Responder WhatsApp",
        completado: false
    },
    {
        id: 4,
        descripcion: "Agendar compromiso de pago",
        completado: false
    }
];


// ELEMENTOS DEL HTML

const inputTarea = document.querySelector("#inputTarea");
const btnAgregar = document.querySelector("#btnAgregar");
const listaTareas = document.querySelector("#listaTareas");

const totalTareas = document.querySelector("#totalTareas");
const tareasRealizadas = document.querySelector("#tareasRealizadas");


// MOSTRAR TAREAS

function renderizarTareas() {

    let html = "";

    for (const tarea of tareas) {

        html += `
            <div class="tarea">

                <div class="tarea-info">

                    <span class="tarea-id">
                        ${tarea.id}.
                    </span>

                    <span class="${tarea.completado ? "completada" : ""}">
                        ${tarea.descripcion}
                    </span>

                    ${
                        tarea.completado
                        ? `<span class="realizada">
                            Realizado
                           </span>`
                        : ""
                    }

                </div>


                <div class="botones">

                    <button
                        class="btn-cambiar"
                        onclick="cambiarEstado(${tarea.id})"
                    >
                        Cambiar
                    </button>

                    <button
                        class="btn-eliminar"
                        onclick="eliminarTarea(${tarea.id})"
                    >
                        Eliminar
                    </button>

                </div>

            </div>
        `;
    }

    listaTareas.innerHTML = html;

    actualizarResumen();
}


// AGREGAR TAREA

btnAgregar.addEventListener("click", agregarTarea);

function agregarTarea() {

    const descripcion = inputTarea.value.trim();

    if (descripcion === "") {

        alert("Debes ingresar una tarea");

        return;
    }

    const nuevaTarea = {

        id: tareas.length + 1,

        descripcion: descripcion,

        completado: false
    };

    tareas.push(nuevaTarea);

    inputTarea.value = "";

    renderizarTareas();
}


// ELIMINAR TAREA

function eliminarTarea(id) {

    tareas = tareas.filter(
        tarea => tarea.id !== id
    );

    renderizarTareas();
}


// CAMBIAR ESTADO

function cambiarEstado(id) {

    const tarea = tareas.find(
        tarea => tarea.id === id
    );

    if (tarea) {

        tarea.completado = !tarea.completado;
    }

    renderizarTareas();
}


// ACTUALIZAR RESUMEN

function actualizarResumen() {

    const total = tareas.length;

    const realizadas = tareas.filter(
        tarea => tarea.completado === true
    ).length;

    totalTareas.textContent = total;

    tareasRealizadas.textContent = realizadas;
}


// MOSTRAR TAREAS INICIALES

renderizarTareas();