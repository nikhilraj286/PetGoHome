package team10spring2021cmpe272.petgohome.UserDAL;

import java.sql.PreparedStatement;
import team10spring2021cmpe272.petgohome.MySQLConnector.MySQLConnector;
import java.sql.SQLException;

public class UserCreate {
    public static PreparedStatement preparedStatement = null;

    public static int createUser(String userName, String email, String hPassword, String phone, MySQLConnector databaseConnector) {

        try {
            // MySQL Select Query Tutorial
            String createQueryStatement = "INSERT INTO Users (username, email, hash_password, phone) VALUES (?, ?, ?, ?)";
            // TO DO's hash password function

            preparedStatement = databaseConnector.team10spring2021cmpe272.prepareStatement(createQueryStatement);

            preparedStatement.setString(1, userName);
            preparedStatement.setString(2, email);
            preparedStatement.setString(3, hPassword);
            preparedStatement.setString(4, phone);

            // Execute the Query, and get a java ResultSet
            preparedStatement.executeUpdate();

            return 0;

        } catch (SQLException e) {
            e.printStackTrace();
            return 1;
        }

    }
}
