require('dotenv').config();

module.exports = {
    app: { 
        port: process.env.PORT || 4000,
        //port: process.env.PORT,
    },

    jwt:{
        secret: process.env.KEY_SECRET || 'notasecreta',
    },

    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DB || '',
    }
}