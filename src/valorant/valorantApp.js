'use strict'


const fetchQuote = async () => {
    const rest = await fetch(`https://valorant-api.com/v1/agents?language=es-ES`)
    const data = await rest.json()
    return data
}


export const ValorantApp = async (element) => {
    // variables HTML 
    const inputBuscar = document.querySelector('#buscar')
    const btnBuscar = document.querySelector('#btn')


    // contenedor total 
    const divSalder = document.createElement('div')
    divSalder.className = 'container'

    // contenedor Nombre y apodo
    const contName = document.createElement('div')
    contName.className = 'containerName'

    // nombre y apodo
    const name = document.createElement('h1')
    name.className = 'nombreChamp'
    const apodo = document.createElement('p')
    apodo.className = 'apodoChamp'

    // contenedor rol y descripcion
    const contRol = document.createElement('div')
    contRol.className = 'containerRol'

    //rol
    const rolChamp = document.createElement('h2')
    rolChamp.className = 'rolChamp'

    // descripcion 
    const description = document.createElement('p')
    description.classList = 'descriptionChamp'

    // contenedor imagen
    const contenedorImagen = document.createElement('div')
    contenedorImagen.className = 'contenedorImagen'

    // imagen 
    const imagen = document.createElement('img')
    imagen.className = 'logoChamp'

    // contenedor habilidades
    const contenedorHabilidades = document.createElement('div')
    contenedorHabilidades.classList = 'contenedorHabilidades'

    // contenedor habilidad 1
    const habilidadUno = document.createElement('div')
    habilidadUno.classList = 'habilidadContenedor'

    // Titulo habilidad 1
    const titleUno = document.createElement('h3')
    titleUno.classList = 'titleHabilidad'

    // imagen habilidad 1
    const imagenHabilidad1 = document.createElement('img')
    imagenHabilidad1.classList = 'imgHUno'

    // descripcion habilidad
    const descripcionUno = document.createElement('p')
    descripcionUno.classList = 'descripcionUno'

    // contenedor habilidad 2
    const habilidadDos = document.createElement('div')
    habilidadDos.classList = 'habilidadContenedor'
    // Titulo habilidad 2
    const titleDos = document.createElement('h3')
    titleDos.classList = 'titleHabilidad'
    // imagen habilidad 2
    const imagenHabilidad2 = document.createElement('img')
    imagenHabilidad2.classList = 'imagenHabilidadDos'
    // descripcion habilidad
    const descripcionDos = document.createElement('p')
    descripcionDos.classList = 'descripcionDos'
    // contenedor habilidad 3
    const habilidadTres = document.createElement('div')
    habilidadTres.classList = 'habilidadContenedor'

    // Titulo habilidad 3
    const titleTres = document.createElement('h3')
    titleTres.classList = 'titleHabilidad'

    // imagen habilidad 3
    const imagenHabilidad3 = document.createElement('img')
    imagenHabilidad3.classList = 'imagenHabilidadTres'

    // descripcion habilidad
    const descripcionTres = document.createElement('p')
    descripcionTres.classList = 'descripcionTres'
    // contenedor habilidad 4
    const habilidadCuatro = document.createElement('div')
    habilidadCuatro.classList = 'habilidadContenedor'

    // Titulo habilidad 3
    const titleCuatro = document.createElement('h3')
    titleCuatro.classList = 'titleHabilidad'

    // imagen habilidad 3
    const imagenHabilidad4 = document.createElement('img')
    imagenHabilidad4.classList = 'imagenHabilidadCuatro'

    // descripcion habilidad
    const descripcionCuatro = document.createElement('p')
    descripcionCuatro.classList = 'descripcionCuatro'
    const divElemento = element;
    divElemento.replaceChildren(divSalder, contenedorHabilidades)
    divSalder.append(contName, contenedorImagen)
    contName.append(name, apodo, rolChamp, description)

    contenedorImagen.append(imagen)
    contenedorHabilidades.append(habilidadUno, habilidadDos, habilidadTres, habilidadCuatro)
    habilidadUno.append(titleUno, imagenHabilidad1, descripcionUno)
    habilidadDos.append(titleDos, imagenHabilidad2, descripcionDos)
    habilidadTres.append(titleTres, imagenHabilidad3, descripcionTres)
    habilidadCuatro.append(titleCuatro, imagenHabilidad4, descripcionCuatro)


    divElemento.style.display = "none"

    btnBuscar.addEventListener('click', () => {


        const busquedaCampeones = (data) => {

            let busqueda = data.data
            let campeonBusqueda = inputBuscar.value



            for (let i = 0; i < busqueda.length; i++) {

                const element = busqueda[i].displayName;
                const elemento = busqueda[i];
                const campeon = campeonBusqueda[0].toUpperCase() + campeonBusqueda.substring(1)
                const kyo = "KAY/O"
                if (campeon === element ) {
                    divElemento.style.display = "block"
                    console.log({ campeonBusqueda })
                    name.innerHTML = campeonBusqueda
                    apodo.innerHTML = elemento.developerName

                    imagen.src = elemento.displayIcon
                    rolChamp.innerHTML = elemento.role.displayName
                    description.innerHTML = elemento.description
                    
                    titleUno.innerHTML = elemento.abilities[0].displayName
                    imagenHabilidad1.src = elemento.abilities[0].displayIcon
                    descripcionUno.innerHTML = elemento.abilities[0].description
                    
                    titleDos.innerHTML = elemento.abilities[1].displayName
                    imagenHabilidad2.src = elemento.abilities[1].displayIcon
                    descripcionDos.innerHTML = elemento.abilities[1].description
            
                    titleTres.innerHTML = elemento.abilities[2].displayName
                    imagenHabilidad3.src = elemento.abilities[2].displayIcon
                    descripcionTres.innerHTML = elemento.abilities[2].description
            
                    titleCuatro.innerHTML = elemento.abilities[3].displayName
                    imagenHabilidad4.src = elemento.abilities[3].displayIcon
                    descripcionCuatro.innerHTML = elemento.abilities[3].description

                    divElemento.style.background = `#${elemento.backgroundGradientColors[2]}`
                    name.style.color = `#${elemento.backgroundGradientColors[0]}`
                    rolChamp.style.color = `#${elemento.backgroundGradientColors[0]}`
                    habilidadUno.style.background = `#${elemento.backgroundGradientColors[1]}`
                    habilidadDos.style.background = `#${elemento.backgroundGradientColors[1]}`
                    habilidadTres.style.background = `#${elemento.backgroundGradientColors[1]}`
                    habilidadCuatro.style.background = `#${elemento.backgroundGradientColors[1]}`
                    btnBuscar.style.background  = `#${elemento.backgroundGradientColors[0]}`
                    break;
                    
                }
            }
        }

        fetchQuote()
            .then(busquedaCampeones);
    })
 }