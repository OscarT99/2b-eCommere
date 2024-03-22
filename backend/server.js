const express = require('express')
const {dbConnection} = require('./database/config')
const path = require('path'); 
const bodyParser = require('body-parser')

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();   
        this.conectarDB();     
    }

    listen(){
        this.app.listen(this.port,() => {
            console.log(`Escuchando en el puerto ${this.port}`)
        })
    }

    middlewares(){        
        this.app.set('view engine','ejs')
        this.app.set('views', path.join(__dirname, '../frontend/views'))
        this.app.use(bodyParser.json()) 
    }

    routes(){
        this.app.use(require('./routes/tareas'))
    }

    async conectarDB(){
        await dbConnection()
    }
        
}    
module.exports = Server;