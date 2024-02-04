const follows =(sequelize, type) =>{
    return sequelize.define('follows', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        name:type.STRING,
        fecha_inicio:type.STRING,

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

module.exports = follows