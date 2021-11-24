const db = require('./connection');
const { User, Equipment } = require('../models');

db.once('open', async () => {
    await Equipment.deleteMany();


    const equipment = await Equipment.insertMany([
        {
            Category: 'Guitar',
            Brand: 'Epiphone',
            Model: 'Poly Mod',
            Description: 'Red with custom EMG pickups.',
            serialNumber: 'A879BU92CK',
            Image: 'c2FkZmFzZGZhc2Rm',
            Location: "lat: 50, lng: 30",
            Lost: true
        },
        {
            Category: 'Guitar',
            Brand: 'Gibson',
            Model: 'Les Paul',
            Description: 'Sunburst with gold chrome knobs.',
            serialNumber: 'AG398SKU2341',
            Image: 'VEVTVElORw==',
            Location: "lat: 25, lng: 30",
            Lost: false
        },
        {
            Category: 'Amp',
            Brand: 'Ampeg',
            Model: 'V-4B',
            Description: 'All stock items.',
            serialNumber: 'V4BASDF342MN',
            Image: 'QW1weSBBbXA=',
            Location: "lat: 35, lng: 20",
            Lost: false
        },
        {
            Category: 'Amp',
            Brand: 'Marshall',
            Model: 'JCM 900',
            Description: 'All stock items.',
            serialNumber: 'MR7897SHL',
            Image: 'QW1weSBBbXA=',
            Location: "lat: 35, lng: 20",
            Lost: true
        },
        {
            Category: 'Microphone',
            Brand: 'Shure',
            Model: 'SM7B',
            Description: 'All stock items.',
            serialNumber: 'V4BASDF342MN',
            Image: 'QW1weSBBbXA=',
            Location: "lat: 35, lng: 20",
            Lost: true
        }
    ]);

    console.log('equipment seeded');

    await User.deleteMany();

    const users = await User.insertMany([
        {
            firstName: 'John',
            lastName: 'Doe',
            Email: 'johndoe@aol.com',
            Password: 'abc123',
            savedEquipment: [equipment[0]._id]
        },
        {
            firstName: 'Jane',
            lastName: 'Doe',
            Email: 'janedoe@aol.com',
            Password: 'abc456',
            savedEquipment: [equipment[1]._id, equipment[4]._id ]
        }, 
        {
            firstName: 'Jack',
            lastName: 'Deere',
            Email: 'jackdeere@aol.com',
            Password: 'xyz987',
            savedEquipment: [equipment[2]._id, equipment[3]._id]
        }
    ]);

    console.log('users seeded');

    process.exit();
});

