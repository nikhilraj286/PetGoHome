module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define("Pet", {
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
    type: { type: DataTypes.STRING },
    weight: { type: DataTypes.FLOAT },
    height: { type: DataTypes.FLOAT },
    gender: { type: DataTypes.STRING },
    breed: { type: DataTypes.STRING },
    color: { type: DataTypes.STRING },
    hair_length: { type: DataTypes.STRING },
    age: { type: DataTypes.INTEGER },
    phone: { type: DataTypes.INTEGER },
    email: { type: DataTypes.STRING },
    missing_date: { type: DataTypes.DATE },
    lost_state: { type: DataTypes.STRING },
    lost_location: { type: DataTypes.STRING },
    lost_zip: { type: DataTypes.STRING },
    picture: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
  });

  Pet.associate = (models) => {
    Pet.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
        name: "ownerid",
      },
    }),
      Pet.hasMany(models.Post, {
        foreignKey: {
          allowNull: false,
          name: "lostpet_id",
        },
      });
  };

  return Pet;
};
