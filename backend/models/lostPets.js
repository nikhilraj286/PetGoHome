module.exports = (sequelize, DataTypes) => {
  const LostPet = sequelize.define("LostPet", {
    petid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    pet_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    record_type: { type: DataTypes.STRING },
    pet_type: { type: DataTypes.STRING },
    phone: { type: DataTypes.INTEGER },
    email: { type: DataTypes.STRING },
    missing_date: { type: DataTypes.DATE },
    location: { type: DataTypes.STRING },
    picture: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    latitude: { type: DataTypes.STRING },
    longitude: { type: DataTypes.STRING },
    breed: { type: DataTypes.STRING },
    gender: { type: DataTypes.STRING },
  });

  LostPet.associate = (models) => {
    LostPet.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
        name: "ownerid",
      },
    });
  };

  return LostPet;
};
