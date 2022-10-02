const express = require('express')

const app = express()
const PORT = 3000

app.get('/greeting', (req, res) => {
    res.send('Hello Stranger')
})

app.get('/greeting/:name', (req, res) => {
    console.log(req.params);
    const {name} = req.params

    res.send(`Wow! Hello there, ${name}`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    console.log(req.params);
    const {total, tipPercentage} = req.params
    res.send(`20`)
})

app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res) => {
    const arr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", 
    "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"
]
    const respRan = arr[Math.floor(Math.random() * arr.length)]
    res.send(respRan)
})

app.listen(3000, function() {
    console.log(`Sever listening in ${PORT}`);
})