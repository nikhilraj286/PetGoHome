module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
    commentid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    postid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.Post, {
      foreignKey: {
        allowNull: false,
        name: "postid",
      },
    });
  };

  return Comment;
};
