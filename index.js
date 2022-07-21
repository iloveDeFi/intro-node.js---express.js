const express = require ('express')

const app = express()

app.get('/', (req, res, next) => {

    res.send('Hello!')

})

app.listen(3000) // or 5000, 8000, 8080