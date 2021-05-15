module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hash_password: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Pet, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false,
        name: "ownerid",
      },
    });
  };

  return User;
};
