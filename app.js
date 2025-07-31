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
    if (document.getElementById('amigo').value == '') {
        alert('Por favor, inserte un nombre.')
    } else {
        nombreAmigos.push(document.getElementById('amigo').value);
        document.getElementById('amigo').value = '';
        actualizarLista();
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