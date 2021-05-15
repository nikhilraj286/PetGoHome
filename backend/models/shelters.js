module.exports = (sequelize, DataTypes) => {
  const Shelters = sequelize.define("Shelters", {
    id: { type: DataTypes.STRING, primaryKey: true },
    address1: { type: DataTypes.STRING },
    address2: { type: DataTypes.STRING },
    city: { type: DataTypes.STRING },
    country: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    latitude: { type: DataTypes.STRING },
    longitude: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    state: { type: DataTypes.STRING },
    zip: { type: DataTypes.STRING },
  });

  return Shelters;
};
