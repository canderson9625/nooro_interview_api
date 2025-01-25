import express from "express/index.js"
import middleware from "./middleware"

const app = express();

app.use(...middleware);

app.get('/tasks', (req, res) => {
    // console.log(req)
    return res.json({tasks: []})
})

app.post('/tasks', (req, res) => {
    
})

app.put('/tasks/:id', (req, res) => {

})

app.delete('/tasks/:id', (req, res) => {

})

const port = 6001;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});