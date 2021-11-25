const db = require('./connection');
const { User, Equipment } = require('../models');

db.once('open', async () => {
    await Equipment.deleteMany();


    const equipment = await Equipment.insertMany([
        {
            category: 'Guitar',
            brand: 'Epiphone',
            model: 'Poly Mod',
            description: 'Red with custom EMG pickups.',
            serialNumber: 'A879BU92CK',
            image: 'c2FkZmFzZGZhc2Rm',
            location: "lat: 50, lng: 30",
            lost: true
        },
        {
            category: 'Guitar',
            brand: 'Gibson',
            model: 'Les Paul',
            description: 'Sunburst with gold chrome knobs.',
            serialNumber: 'AG398SKU2341',
            image: 'VEVTVElORw==',
            location: "lat: 25, lng: 30",
            lost: false
        },
        {
            category: 'Amp',
            brand: 'Ampeg',
            model: 'V-4B',
            description: 'All stock items.',
            serialNumber: 'V4BASDF342MN',
            image: 'QW1weSBBbXA=',
            location: "lat: 35, lng: 20",
            lost: false
        },
        {
            category: 'Amp',
            brand: 'Marshall',
            model: 'JCM 900',
            description: 'All stock items.',
            serialNumber: 'MR7897SHL',
            image: 'QW1weSBBbXA=',
            location: "lat: 35, lng: 20",
            lost: true
        },
        {
            category: 'Microphone',
            brand: 'Shure',
            model: 'SM7B',
            description: 'All stock items.',
            serialNumber: 'V4BASDF342MN',
            image: 'QW1weSBBbXA=',
            location: "lat: 35, lng: 20",
            lost: true
        }
    ]);

    console.log('equipment seeded');

    await User.deleteMany();

    const users = await User.insertMany([
        {
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@aol.com',
            password: 'abc123',
            savedEquipment: [equipment[0]._id]
        },
        {
            firstName: 'Jane',
            lastName: 'Doe',
            email: 'janedoe@aol.com',
            password: 'abc456',
            savedEquipment: [equipment[1]._id, equipment[4]._id ]
        }, 
        {
            firstName: 'Jack',
            lastName: 'Deere',
            email: 'jackdeere@aol.com',
            password: 'xyz987',
            savedEquipment: [equipment[2]._id, equipment[3]._id]
        }
    ]);

    console.log('users seeded');

    process.exit();
});

