module.exports = function(sequelize, DataTypes){
  var quotest = sequelize.define('quotes', {
    id: {
      type: DataTypes.INTENGEr,
      autoIncrement: true,
      primaryKey: true,
      field: 'id'
    },
    quote: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  },{
    timestamps: false,
    freezeTableName: true
  });
  return quotes;
}