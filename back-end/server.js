const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const userRoutes = require('./Routes/user.routes');
const postRoutes = require('./Routes/post.routes');
const expoRoutes = require('./Routes/expo.routes.js')
const {checkUser} = require ('./Midlewares/auth.middleware');
const { requireAuth } = require("./Midlewares/auth.middleware");
const dotenv = require("dotenv")
const cors = require('cors')
require('./.config/mongodb')
dotenv.config()
const jwt = require('jsonwebtoken')
const app = express();
const { json } = require("express");



const PORT = process.env.PORT || 4000;


//middleware
//app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
 app.use(function(req, res, next){
      res.setHeader('Allow-Origin', 'http://localhost:3000');
       res.setHeader('Access-Control-Allow-Credentials',true)
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
       next();
     });

 jwt
 app.get('*', checkUser);
 app.get('/jwtid', requireAuth,(req,res) =>{
     res.status(200).send(res.locals.user._id)
 })

// point de sorti de la table user
app.use('/api/user', userRoutes);

// point de sorti de la table post
app.use('/api/post', postRoutes);

// point de sorti de la table expo
app.use('/api/expo', expoRoutes)



//server
app.listen(PORT,() => console.log(`${PORT}`));













