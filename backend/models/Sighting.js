module.exports = (sequelize, DataTypes) => {
  const Sightings = sequelize.define("Sightings", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING },
    userid: { type: DataTypes.STRING },
    petid: { type: DataTypes.STRING },
    time_stamp: { type: DataTypes.DATE },
    latitude: { type: DataTypes.STRING },
    longitude: { type: DataTypes.STRING },
    location: { type: DataTypes.STRING },
  });

  return Sightings;
};
