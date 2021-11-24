const db = require('./connection');
const { User, Equipment } = require('../models');

db.once('open', async () => {
    await Equipment.deleteMany();
})

const Equipment = await Equipment.insertMany([
    
])