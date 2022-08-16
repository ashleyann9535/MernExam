const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pets', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log('Established a connection to the Pets database'))
    .catch((err) => console.log('Something went wrong when connecting to the Pets database', err))