function light(){
    var bulbOff = document.getElementById('bulb-off')
    bulbOff.classList.remove("d-flex")
    bulbOff.classList.add("d-none")
    var bulbOn = document.getElementById('bulb-on')
    bulbOn.classList.remove("d-none")
    bulbOn.classList.add("d-flex")

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://54.237.104.99:443/bulbstate/1", true);
    xhr.send()
}
function dark(){
    var bulbOff = document.getElementById('bulb-off')
    bulbOff.classList.remove("d-none")
    bulbOff.classList.add("d-flex")
    var bulbOn = document.getElementById('bulb-on')
    bulbOn.classList.remove("d-flex")
    bulbOn.classList.add("d-none")

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://54.237.104.99:443/bulbstate/0", true);
    xhr.send()
}
function check(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://54.237.104.99:443/bulbstate", false);
    xhr.send(null)
    var state = JSON.parse(xhr.responseText).state
    if(state==1){
        console.log("light")
        light()}
    else{
        console.log("dark")
        dark()}
}