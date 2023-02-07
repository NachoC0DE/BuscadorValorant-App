import { ValorantApp } from './src/valorant/valorantApp'
import './style.css'


const name = 'Jett'

document.querySelector('#app').innerHTML = `

<div class="form">
<h1>Campeones de Valorant</h1>
<input type="text" name="" value=${name} id="buscar" placeholder="Buscar campeon">
<input type="button"id="btn" value="Buscar">
    
</div>

    <div class="appValorant">
    
    </div>
`



const element = document.querySelector('.appValorant')
ValorantApp(element)
