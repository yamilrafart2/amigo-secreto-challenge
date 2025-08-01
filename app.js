/*
    Array, que almacenará los nombres de los amigos ingresados.
 */
let nombreAmigos = [];

/*
    Función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
    *   Tareas específicas:
        -   Captura el valor del campo de entrada.
        -   Valida la entrada para asegurarse de que el campo no esté vacío. Si está vacío, muestra un alert con un mensaje de error: "Por favor, inserte un nombre."
        -   Actualiza el array de amigos: Si el valor es válido, añade al arreglo que almacena los nombre de amigos.
        -   Limpia el campo de entrada: Después de añadir el nombre, restablece el campo de texto a una cadena vacía.
*/
function agregarAmigo() {
    let elementoInput = document.getElementById('amigo');
    if (elementoInput.value == '') {
        alert('Por favor, inserte un nombre.')
    } else {
        if (nombreAmigos.includes(elementoInput.value)) {
            alert(`El nombre ${elementoInput.value} ya fue ingresado. Por favor, ingrese un nuevo nombre!`)
        } else {
            nombreAmigos.push(elementoInput.value);
            elementoInput.value = '';
            actualizarLista();
        }
    }
    return;
}

/*
    Función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML.
    *   Tareas específicas:
        -   Obtiene el elemento de la lista.
        -   Limpia la lista existente para asegurarse de que no haya duplicados al actualizar.
        -   Itera sobre el arreglo, recorre el arreglo amigos y crea elementos de lista (<li>) para cada título.
        -   Agrega elementos a la lista: Para cada amigo, crea un nuevo elemento de lista.
*/
function actualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    nombreAmigos.forEach(unNombre => {
        let item = document.createElement('li');
        item.textContent = unNombre;
        listaAmigos.appendChild(item);
    });
    return;
}

/*
    Función que selecciona de manera aleatoria uno de los nombres almacenados en el array amigos.
    *   Tareas específicas:
        -   Valida que haya amigos disponibles: Antes de sortear, comprueba si el array amigos no está vacío.
        -   Genera un índice aleatorio.
        -   Obtiene el nombre sorteado: Utiliza el índice aleatorio para acceder al nombre correspondiente en el arreglo.
        -   Muestra el resultado.
*/
function sortearAmigo() {
    if (nombreAmigos.length == 0) {
        alert('No existen amigos para sortear. Por favor, ingrese nombre de amigos!')
    } else {
        let indiceAleatorio = Math.floor(Math.random() * (nombreAmigos.length));
        let nombreSorteado = nombreAmigos[indiceAleatorio];
        document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: ${nombreSorteado}`;
    }
    return;
}