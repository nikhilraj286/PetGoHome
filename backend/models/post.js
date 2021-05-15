module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    postid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    // lostpet_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
  });

  Post.associate = (models) => {
    Post.belongsTo(models.Pet, {
      foreignKey: {
        allowNull: false,
        name: "lostpet_id",
      },
    }),
      Post.hasMany(models.Comment, {
        foreignKey: {
          allowNull: false,
          name: "postid",
        },
      });
  };

  return Post;
};
