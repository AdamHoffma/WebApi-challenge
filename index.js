const express = require('express')

const db = require('./data/db.js')

const server = express()
server.use(express.json())

server.post('/api/posts', (req, res) => {
    const post = req.body
    if(post.title && post.contents) {
    db.insert(post)
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        res.send(error)
    })
} else {
    res
    .status(400)
    .json({ errorMessage: 'Please provide title and contents for the post.'})
}
})

server.post('/api/posts/:id/comments', (req, res) => {
    res.status(201).json(posts)
})

server.get('/api/posts', (req, res) => {
    res.status(200).json({api: "up"})
})

server.get('/api/posts/:id', (req, res) => {
    res.status(200)
})

server.get('/api/posts/:id/comments', (req, res) => {
    res.status(200)
})

server.delete('/api/posts:id', (req, res) => {
    res.status(204)
})

server.put('/api/posts/:id', (req, res) => {
    res.status(200).json({url: '/api/posts/:id', operation: PUT})
})

const port = 8000

server.listen(port, () => 
    console.log(`\n API on port ${port} \n`))