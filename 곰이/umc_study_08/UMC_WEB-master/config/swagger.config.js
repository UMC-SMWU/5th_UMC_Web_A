import SwaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
        info: {
            title: 'UMC Study API',
            version: '1.0.0',
            description: 'UMC Study API with express, API 설명'
        },
        host: 'localhost:8000',
        basepath: '../'
    },
    apis: ['./routes/*.js', './swagger/*']
};

export const specs = SwaggerJsdoc(options);
