const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')
const $lineTime = document.querySelector('#lineTime')

// Llamamos a la variable play y le decimos que haga un evento que será "Play", con el parámetro "click" y la función creada "ClickOn"
$play.addEventListener('click', clickOn);
// Llamamos a la variable pause y le decimos que haga un evento que será "Pause", con el parámetro "click" y la función creada "ClickOut"
$pause.addEventListener('click', clickOut);
$backward.addEventListener('click', clickBack);
$forward.addEventListener('click', clickFor);


// Función creada: Nombramos a la función con sus (){ traemos al elemento $video y le decimos que ejecute play ".play", el console.log solo es para probar que esta bien }; 
function clickOn() {
    $video.play()
        // llamamos a hidden para decir si se va a ocultar o no
    $play.hidden = true
        // llamamos a hidden para decir si se va a ocultar o no
    $pause.hidden = false
    console.log('esta todo OK play')
}
// Función creada: Nombramos a la función con sus (){ traemos al elemento $video y le decimos que ejecute pause ".pause", el console.log solo es para probar que esta bien }; 
function clickOut() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('esta todo OK pause')
}

function clickBack() {
    $video.currentTime = $video.currentTime - 10
    console.log('Retrasar 10 seg')
}

function clickFor() {
    $video.currentTime = $video.currentTime + 10
    console.log('Adelante 10 seg')
}

$video.addEventListener('loadedmetadata', lineTime)
$video.addEventListener('timeupdate', lineTimeRange)

function lineTime() {
    $lineTime.max = $video.duration
    console.log("ha cargado mi video", $video.duration)
}

function lineTimeRange() {
    $lineTime.value = $video.currentTime
    console.log('Linea de tiempo exitosamente', $video.currentTime)

}

$lineTime.addEventListener('input', lineinput)

function lineinput() {
    $video.currentTime = $lineTime.value
    console.log($lineTime.value)
}