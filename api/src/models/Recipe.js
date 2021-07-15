const { DataTypes } = require('sequelize');
// DataTypes.ARRAY(DataTypes.ENUM(dietTypes)),
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    diets: {
      type: DataTypes.STRING,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false
    },
    aggregateLikes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    healthScore: {
      type: DataTypes.INTEGER,
      defaultValue: 0

    },
    instructions: {
      type: DataTypes.STRING
    },
  });
};
