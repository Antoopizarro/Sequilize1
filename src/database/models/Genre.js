module.exports = (sequilze, dataTypes) => {
    const alias = "Genre";
    const cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        created_at : {
            type : dataTypes.DATE,
            allowNull : true
        },
        updated_at : {
            type : dataTypes.DATE,
            allowNull : true
        },
        name : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        ranking : {
            type : dataTypes.INTEGER,
            allowNull : false,
            unique : true
        },
        active : {
            type : dataTypes.BOOLEAN,
            allowNull : false            
        }
    }
    const config = {
        tableName : 'genres',
        times : true,
        underscored : true
    }
    const Genre = sequelize.define(alias, cols, config)
    return Genre
}