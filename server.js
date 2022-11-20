const express = require("express");
const {MongoClient} = require("mongodb");
const dotenv = require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

//Initialize middleware
app.use(express.json({ extended: false }));

app.get('/api/articles/:name', async(req,res)=>{
  try{
    const articleName = req.params.name;
    const client=await MongoClient.connect(process.env.MONGO_URL);
    const db=client.db("mern-blog");
    const articleInfo= await db.collection('articles').findOne({name: articleName});
    res.status(200).json(articleInfo);
    client.close();
  }catch(error){
    res.status(500).json({message: "Error connection to database",error})
  }
})

app.post("/api/articles/:name/add-comments", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;
  articlesInfo[articleName].comments.push({ username, text });
  res.status(200).send(articlesInfo[articleName]);
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
