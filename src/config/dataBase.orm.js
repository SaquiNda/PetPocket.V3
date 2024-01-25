const { Sequelize, HasMany } = require("sequelize");
const { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE, MYSQLPORT, MYSQL_URI } = require("../keys");

let sequelize;

// Usar URI de conexión si está disponible
if (MYSQL_URI) {
    sequelize = new Sequelize(MYSQL_URI);
} else {
    // Configuración para parámetros individuales
    sequelize = new Sequelize(MYSQLDATABASE, MYSQLUSER, MYSQLPASSWORD, {
        host: MYSQLHOST,
        port: MYSQLPORT,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 1,
            acquire: 30000,
            idle: 10000
        }
    });
}

const usersModel = require('../models/user.model');
const publicsModel = require('../models/public.model');
const notificationsModel = require('../models/notification.model');
const friendsModel = require('../models/friend.model');
const geolocationsModel = require('../models/geolocation.model');
const commentarysModel = require("../models/commetary.model")



// Autenticar y sincronizar
sequelize.authenticate()
  .then(() => {
    console.log('Connect')
  })
  .catch(err => {
    console.log('No connect')
  })

sequelize.sync({ force: false })
  .then(() => {
    console.log("synchronized tables")
  })


//sincronia
const users = usersModel(sequelize, Sequelize);
const publics = publicsModel(sequelize, Sequelize);
const notifications = notificationsModel(sequelize, Sequelize);
const friends = friendsModel(sequelize, Sequelize);
const geolocations = geolocationsModel(sequelize, Sequelize);
const commetarys = commentarysModel(sequelize, Sequelize)

//Relaciones

users.hasMany(friends);
friends.belongsTo(users);

users.hasMany(geolocations);
geolocations.belongsTo(users);

users.hasMany(notifications);
notifications.belongsTo(users);

users.hasMany(publics);
publics.belongsTo(users);

users.hasMany(commetarys);
commetarys.belongsTo(users);




// Exportar el objeto sequelize
module.exports = sequelize;