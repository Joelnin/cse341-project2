const swaggerAutogen = require('swagger-autogen');

const doc = {
    info: {
        title: 'DnD Helper Api',
        description: 'DnD Helper Api'
    },
    hot: 'localhost:3000',
    schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// This will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
