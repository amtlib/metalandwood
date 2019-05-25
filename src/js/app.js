import $ from 'jquery'
import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'
import '../css/style.scss'

$(document).ready(() => {
    let trigger = document.querySelector('.sidenav')
    let instance = M.Sidenav.init(trigger)
})