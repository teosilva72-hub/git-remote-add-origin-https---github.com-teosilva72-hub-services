const express = require('express')
const SQL = require('./server/SQL/SQL')
const curl = ('curl')

const app = express()
const check = true
const port = 3000
const host = 'localhost'
if (check) {
    console.log('::: LIGANDO')
    setTimeout(() => {
        app.listen(port, host, (e) => {
            try {
                console.log('LIGADO :::::')
                init()
            } catch (err) {
                console.log(`ERRO::: ${err}`)
            }
        })
    }, 1000)
} else {
    console.log(':::: DESLIGADO')
}

async function init() {


}