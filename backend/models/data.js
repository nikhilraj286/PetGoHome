module.exports = (sequelize, DataTypes) => {
  const Data = sequelize.define("Data", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    record_type: { type: DataTypes.STRING },
    type: { type: DataTypes.STRING },
    gender: { type: DataTypes.STRING },
    breed: { type: DataTypes.STRING },
    color: { type: DataTypes.STRING },
    missing_date: { type: DataTypes.DATE },
    lost_state: { type: DataTypes.STRING },
    lost_location: { type: DataTypes.STRING },
    lost_zip: { type: DataTypes.STRING },
    picture: { type: DataTypes.STRING },
    lost_location: { type: DataTypes.STRING },
    latitude: { type: DataTypes.STRING },
    longitude: { type: DataTypes.STRING },
    location: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
  });

  return Data;
};
