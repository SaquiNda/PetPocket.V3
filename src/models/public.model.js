const publics =(sequelize, type) =>{
    return sequelize.define('puclics', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        video_url:type.STRING,
        descripcion:type.STRING,
        datepublic:type.STRING,
        ubicacion:type.STRING,
        duracion:type.INTEGER,

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

module.exports = publics