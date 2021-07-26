const express = require('express');
const cfg = require('config')
const path = require('path')
const mongoose = require('mongoose')

const app = express()
const PORT = cfg.get('port')||5000



app.use(express.json({extended:true}));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/transport', require('./routes/transport.routes'));

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
  }

async function start() {
    try{
        console.log(cfg.get('jwtSecret'));
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
        await mongoose.connect(cfg.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            
        });
        
     } catch(e){
        console.log("Server Error", e.message);
        process.exit(1);
    }
}

start()

