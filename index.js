const express = require('express');
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

app.set("view engine","ejs")

/*Set style*/
app.use(express.static(__dirname + '/public'));

//router
app.get('/about-us', (req, res) => {
    res.render('about-us/about-us')
})

app.get('/', (req, res) => {
    res.render('home/home')
})

app.get('/login', (req, res) => {
    res.render('login/login')
})
