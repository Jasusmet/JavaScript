// Info date
const dateNumber = document.getElementById('dateNumber'); // Declara la constante del día
const dateMonth = document.getElementById('dateMonth'); // Declara la constante del mes
const dateYear = document.getElementById('dateYear'); // Declara la constante del año
const dateText = document.getElementById('dateText'); // Declara la constante del día de la semana en texto

// Task Container
const tasksContainer = document.getElementById('tasksContainer'); // Declara la constante del contenedor de las tareas

const setDate = () => { // Creamos una constante que dará las fechas pero que de forma predeterminada tendrá un valor vacío
    const date = new Date(); // Se inicializa el constructor de la variable "date" y posteriormente lo utilizamos para dar valores a las constantes en español
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' }); // Se convierte el día actual a un string que especificamos como "numeric"
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' }); // Se convierte el mes actual a un string que especificamos como "short"
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' }); // Se convierte el año actual a un string que especificamos como un "numeric"
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' }); // Se convierte el día de la semana actual a un string que especificamos como un "long"
};

const addNewTask = event => {  // Creamos una constante que será la encargada de añadir tareas nuevas especificando que será un evento (dado por el <form onsubmit="addNewTask(event)">)
    event.preventDefault(); // Con esta línea evitamos que el form haga un submit y nos lleve a otra página
    const { value } = event.target.taskText; // Tomamos del evento el "taskText" que es nuestro input
    if (!value.trim()) return; // Si no existe ningún "value" no se hará nada, evitando que se agreguen tareas vacías, además con "trim" eliminamos espacios en blanco
    const task = document.createElement('div'); // Creamos un elemento y lo guardamos en la variable "task"
    task.classList.add('task', 'roundBorder'); // Le agregamos dos clases
    task.addEventListener('click', changeTaskState) // Le agregamos un "EventListener" para que cuando hagamos click llamemos a la función "changeTaskState"
    task.textContent = value; // Ponemos dentro del elemento el texto que ingreso el usuario
    tasksContainer.prepend(task); // Añadimos al principio de la lista gracias al "prepend" la nueva tarea
    event.target.reset(); // Por último reseteamos para dejar vacío el input
};

const changeTaskState = event => { // Cada vez que hacemos click en una de las tareas recibimos un evento
    event.target.classList.toggle('done'); // Le agregamos o quitamos la clase "done" gracias al "toogle"
};

const order = () => { // Creamos la variable order que es la que utilizaremos para ordenar las tareas
    const done = []; // Creamos un array para las tareas hechas
    const toDo = []; // Creamos un array para las tareas por hacer
    tasksContainer.childNodes.forEach(el => { // Llamamos al elemento "taskContainer" para acceder a cada una de las tareas y utilizaremos un "forEach" para iterar cada uno de los elementos
        el.classList.contains('done') ? done.push(el) : toDo.push(el) // Mediante un operador ternario comprobamos si una tarea debe de ser marcada como hecha o por hacer
    })
    return [...toDo, ...done]; // Nos devuelve el array ordenado con las tareas por hacer en primer lugar y las hechas al final
}

const renderOrderedTasks = () => { // Llamamos a la función "renderOrderedTasks"
    order().forEach(el => tasksContainer.appendChild(el)) // Llamamos a la variable "order" que nos devuelve el array anterior e iteramos cada elemento del mismo para agregarlos a la lista de tareas
}

setDate(); // Declaramos "setDate" y lo llamamos automáticamente