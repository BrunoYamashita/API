'use strict'

let app = require('./bin/server');
const http = require('http');
const mongoose = require('mongoose');
let port = process.env.PORT || '8000';
let connectionString = process.env.NODE_ENV == 'production'
  ? process.env.MONGO_HOST
  : 'mongodb://localhost/store'

mongoose.connect(connectionString).catch(err=>{
    console.log(err);
    proccess.exit(1)
})

http.createServer(app).listen(port,()=>{
    console.log(`Listening on ${port}`);
});