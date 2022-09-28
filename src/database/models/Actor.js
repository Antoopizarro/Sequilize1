module.exports = (sequilze, dataTypes) => {
    const alias = "Actor";
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
    first_name : {
        type : dataTypes.STRING(100),
        allowNull : false
    },
    last_name : {
        type : dataTypes.STRING(100),
        allowNull : false
    },
    rating : {
        type : dataTypes.DECIMAL(3,1),
        allowNull : true
    },
    favorite_movie_id : {
        type : dataTypes.INTEGER,
        allowNull : true,
        unique : true
    }
}
const config = {
    tableName : 'actors',
    times : true,
    underscored : true
}
const Actor = sequelize.define(alias, cols, config)
return Actor
}