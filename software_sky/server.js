'use strict';

const   express         = require('express'),
        http            = require('http'),
        //socketIO        = require('./routes/socket_server.js'),
        pug             = require('pug'),
        bodyParser      = require('body-parser'),
        session         = require('express-session'),
        errors          = require('./middlewares/errors'),
        moment          = require('moment'),
        auth            = require('./routes/auth-router'), //manejador de peticiones
        //routes          = require('./routes/videos-router'),
        //serveFavicon    = require('serve-favicon')(`${__dirname}/public/image/favicon.png`),
        publicDir       = express.static(`${__dirname}/public`), //directorio de css y estilos.

        viewDir         = `${__dirname}/views`, //directorio de las vistas

        sessionMiddleware = session({
                secret : 'shhhhhhh',
                resave: true,
                saveUninitialized: false
        }),
        port = (process.env.PORT || 8080);

let app = express();
let server = http.createServer(app);
//socketIO.handle(server, sessionMiddleware);

app
        .set('views', viewDir) //directorio donde se encuentran los archivos de plantillas.
        .set('view engine', 'pug') //define el motor de plantillas pug.
        .set('port', port)

        .use(sessionMiddleware)
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({ extended: false }))
        .use(publicDir)
       // .use(serveFavicon)

        .use(auth)
       // .use(routes)
        //.use(errors.http404);

app.locals.moment = require('moment');
moment.locale('es');

app.get('/login', function(req, res){
  res.render('inicio/indexlogin',
  {
  });
});

app.get('/inicio', function(req, res){
  res.render('inicio/indexinicio',
  {
  });
});

server.listen(app.get('port'), () => {
        console.log(`server run in port  ${app.get('port')}`);
});
