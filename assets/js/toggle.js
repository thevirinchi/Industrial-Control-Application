function light(){
    var bulbOff = document.getElementById('bulb-off')
    bulbOff.classList.remove("d-flex")
    bulbOff.classList.add("d-none")
    var bulbOn = document.getElementById('bulb-on')
    bulbOn.classList.remove("d-none")
    bulbOn.classList.add("d-flex")
}
function dark(){
    var bulbOff = document.getElementById('bulb-off')
    bulbOff.classList.remove("d-none")
    bulbOff.classList.add("d-flex")
    var bulbOn = document.getElementById('bulb-on')
    bulbOn.classList.remove("d-flex")
    bulbOn.classList.add("d-none")
}