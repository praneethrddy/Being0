const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use('/static', express.static('public'))
app.get('/', (req, res) => res.sendfile(__dirname + '/public/htmls/index.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))