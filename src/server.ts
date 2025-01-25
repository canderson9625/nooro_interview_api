import express from "@express"
import middleware from "./middleware"

const app = express();

// auth middleware
app.use();

app.get('/tasks', (req, res) => {

})

app.post('/tasks', (req, res) => {
    
})

app.put('/tasks', (req, res) => {

})

app.delete('/tasks', (req, res) => {

})

app.static();

const port = 6001;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});