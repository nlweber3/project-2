require('dotenv').config();

module.exports = {
    'connection': {
        'host': 'localhost',
        'user': 'root', 
        'password': process.env.PASSWORD,
        'database': 'db',
    },
	'database': 'db',
    
};



