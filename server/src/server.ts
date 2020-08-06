import express from 'express';

const app = express();

app.get('/users', (request, response ) => {
    const users = [
        { name: 'Philipe', age: 22 },
        { name: 'Ray', age: 21}
    ];

    return response.json(users);
})

app.listen(3333);