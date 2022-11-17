const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

//Route test
app.get('/', (req,res) => {
    res.send("Hola mundo!!!");
});

app.listen(PORT, ()=>console.log(`Server started at port ${PORT}`));