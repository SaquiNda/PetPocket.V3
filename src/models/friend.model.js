const friends =(sequelize, type) =>{
    return sequelize.define('friends', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
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

module.exports = friends