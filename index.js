const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Pani Chusko ra BULLE😎😎'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))