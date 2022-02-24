const archivoJson = JSON.parse(file);

console.log(archivoJson.results);

class Node {
    constructor(name, data) {
        this.name = name;
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.size = 0;
    }

    insert(name, data) {
        let node = new Node(name, data);

        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;

            for (let i = 0; i < this.size; i++) {
                //let valorNodo = current.data
                if ((current.next === null) /*&& (current.data !== data)*/) {
                    current.next = node;
                } else {
                    current = current.next;
                }
            }
        }

        this.size += 1;
    }

    //Eliminar el primer nodo de la lista enlazada:
    /* deleteFirstNode() {        
        let current = this.head;
        this.head = current.next;

        this.size = this.size - 1;
    } */

    //Eliminar un nodo inicial, intermedio o el ultimo de la lista enlazada:
    delete(data) {
        let current = this.head
        let anterior = current;

        if (current.data === data) {
            //let current = this.head;
            this.head = current.next;
        } else {
            for (let i = 0; i < this.size; i++) {
                if (current.data === data) {
                    anterior.next = current.next //2:DATOS2 ahora señala al que señalaba DATOS3
                    break;
                } else {
                    anterior = current //0:DATOS1 -> 1:DATOS2
                    current = current.next //0:DATOS2 -> 1:DATOS3
                }
            }
        }

        this.size = this.size - 1
    }

    search(name) {
        let current = this.head
        for (let i = 0; i < this.size; i++) {
            if (current.name == name) {
                return current
            } else {
                current = current.next
            }
        }
    }

}

function separarEnlaces(arreglo) {
    let htmlEnlace = "";
    for (let i = 0; i < arreglo.length; i++) {
        htmlEnlace +=
            `
        <a href="${arreglo[i]}" target="_blank" class="link-secondary">Link nro: ${i + 1}</a>
        `;
    }

    if (htmlEnlace.length === 0) {
        htmlEnlace = `<p class="d-inline">no data</p>`;
    }

    return htmlEnlace;
}

function mostrarEnlace(texto) {
    let htmlEnlace = `
    <a href="${texto}" target="_blank" class="link-secondary">information link</a>
    `;

    return htmlEnlace;
}

listaEnlazada = new LinkedList();

for (let i = 0; i < archivoJson.results.length; i++) {
    let personaje = archivoJson.results[i];
    listaEnlazada.insert(personaje.name, personaje);
}

console.log(listaEnlazada);

function buscarPersonaje() {
    let nombre = document.getElementById("nombrePersonaje").value;
    let personajeEncontrado = listaEnlazada.search(nombre);

    let htmlAgregado = document.getElementById("resultadoBusqueda");

    if (personajeEncontrado !== undefined) {
        let urlImagen = "./images/";
        switch (personajeEncontrado.data.name) {
            case "Luke Skywalker":
                urlImagen += "Luke Skywalker.jpg";
                break;
            case "C-3PO":
                urlImagen += "C_3PO.jpg";
                break;
            case "R2-D2":
                urlImagen += "R2_D2.jpg";
                break;
            case "Darth Vader":
                urlImagen += "Darth Vader.jpg";
                break;
            case "Leia Organa":
                urlImagen += "Leia Organa.jpg";
                break;
            case "Owen Lars":
                urlImagen += "Owen Lars.jpg";
                break;
            case "Beru Whitesun lars":
                urlImagen += "Beru Whitesun lars.jpg";
                break;
            case "R5-D4":
                urlImagen += "R5-D4.jpg";
                break;
            case "Biggs Darklighter":
                urlImagen += "Biggs Darklighter.jpg";
                break;
            case "Obi-Wan Kenobi":
                urlImagen += "Obi-Wan Kenobi.jpg";
                break;
        }

        htmlAgregado.innerHTML =
            `
            <div class="clearfix">
                            <img src="${urlImagen}" class="col-md-6 float-md-end mb-3 ms-md-3" alt="...">

                            <div class="d-block mb-2">
                                <div class="badge bg-primary text-wrap" style="width: 6rem;">
                                    Name:
                                </div>
                                <p class="d-inline">${personajeEncontrado.data.name}</p>
                            </div>

                            <div class="d-block mb-2">
                                <div class="badge bg-primary text-wrap" style="width: 6rem;">
                                    Height:
                                </div>
                                <p class="d-inline">${personajeEncontrado.data.height}</p>
                            </div>

                            <div class="d-block mb-2">
                                <div class="badge bg-primary text-wrap" style="width: 6rem;">
                                    Mass:
                                </div>
                                <p class="d-inline">${personajeEncontrado.data.mass}</p>
                            </div>

                            <div class="d-block mb-2">
                                <div class="badge bg-primary text-wrap" style="width: 6rem;">
                                    Birth Year:
                                </div>
                                <p class="d-inline">${personajeEncontrado.data.birth_year}</p>
                            </div>

                            <div class="d-block mb-2">
                                <div class="badge bg-primary text-wrap" style="width: 6rem;">
                                    Created:
                                </div>
                                <p class="d-inline">${personajeEncontrado.data.created}</p>
                            </div>

                            <div class="d-block mb-2">
                                <div class="badge bg-primary text-wrap" style="width: 6rem;">
                                    Edited:
                                </div>
                                <p class="d-inline">${personajeEncontrado.data.edited}</p>
                            </div>

                            <div class="d-block mb-2">
                                <div class="badge bg-primary text-wrap" style="width: 6rem;">
                                    Eye Color:
                                </div>
                                <p class="d-inline">${personajeEncontrado.data.eye_color}</p>
                            </div>

                            <div class="d-block mb-2">
                                <div class="badge bg-primary text-wrap" style="width: 6rem;">
                                    Films:
                                </div>
                                ${separarEnlaces(personajeEncontrado.data.films)}
                            </div>

                            <div class="d-block mb-2">
                                <div class="badge bg-primary text-wrap" style="width: 6rem;">
                                    Gender:
                                </div>
                                <p class="d-inline">${personajeEncontrado.data.gender}</p>
                            </div>

                            <div class="d-block mb-2">
                                <div class="badge bg-primary text-wrap" style="width: 6rem;">
                                    Hair Color:
                                </div>
                                <p class="d-inline">${personajeEncontrado.data.hair_color}</p>
                            </div>

                            <div class="d-block mb-2">
                                <div class="badge bg-primary text-wrap" style="width: 6rem;">
                                    HomeWorld:
                                </div>
                                ${mostrarEnlace(personajeEncontrado.data.homeworld)}
                            </div>

                            <div class="d-block mb-2">
                                <div class="badge bg-primary text-wrap" style="width: 6rem;">
                                    Skin Color:
                                </div>
                                <p class="d-inline">${personajeEncontrado.data.skin_color}</p>
                            </div>

                            <div class="d-block mb-2">
                                <div class="badge bg-primary text-wrap" style="width: 6rem;">
                                    Species:
                                </div>
                                ${separarEnlaces(personajeEncontrado.data.species)}
                            </div>

                            <div class="d-block mb-2">
                                <div class="badge bg-primary text-wrap" style="width: 6rem;">
                                    Star Ships:
                                </div>
                                ${separarEnlaces(personajeEncontrado.data.starships)}
                            </div>

                            <div class="d-block mb-2">
                                <div class="badge bg-primary text-wrap" style="width: 6rem;">
                                    Url:
                                </div>
                                ${mostrarEnlace(personajeEncontrado.data.url)}
                            </div>

                            <div class="badge bg-primary text-wrap" style="width: 6rem;">
                                Vehicles:
                            </div>
                            ${separarEnlaces(personajeEncontrado.data.vehicles)}
                        </div>
            `;

        document.getElementById("nombrePersonaje").value = "";
    }else{
        htmlAgregado.innerHTML =`
            <div>
                <div class="position-absolute top-50 start-50 translate-middle">
                    <img class="rounded mx-auto d-block mt-5" src="./images/baby_yoda.gif" style="width: 240px;">

                    <p class="mt-2">
                    Sorry, we have no information about this character 😟
                    May the force be with you in your next search.🤖✌
                    </p>
                </div>
            </div>
            `;
    }
}