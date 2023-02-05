const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.user_role = require("./user_role.model");
db.role = require("./role.model");


db.User_ROLES = ["user",
                "admin",
                "moderator"
];
db.ROLES = ['Guerrier',
            'Alchimiste',
            'Sorcier',
            'Espions',
            'Enchanteur'
        ];

module.exports = db;