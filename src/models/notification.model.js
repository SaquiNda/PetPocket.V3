const notifications =(sequelize, type) =>{
    return sequelize.define('notifications', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        profileimage:type.STRING,
        name:type.STRING,
        descripcion:type.STRING,

        createPublic:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatePublic:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
        },{
            timestamps: false,
        })
}

module.exports = notifications