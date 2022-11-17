const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

//Iniitalize middleware
app.use(express.json({extended:false}))

//Route test
app.get('/', (req,res) => {
    res.send("Hola mundo!!!");
});
app.post('/',(req,res)=>{
    res.send(`The request ${req.body.text}`)
});

app.listen(PORT, ()=>console.log(`Server started at port ${PORT}`));