const { app } = require('electron')

const {app} = require('electron')

function clos(){
    console.log("closing")
    app.exit(0)
}