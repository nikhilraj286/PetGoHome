package team10spring2021cmpe272.petgohome.UserDAL;

import java.sql.PreparedStatement;
import team10spring2021cmpe272.petgohome.MySQLConnector.MySQLConnector;
import java.sql.ResultSet;
import java.sql.SQLException;


public class UserRead {
    static PreparedStatement preparedStatement = null;

    public static ResultSet readUsersByUsernameAndPass(String username, String password, MySQLConnector databaseConnector) {

        try {
            String readQueryStatement = "SELECT username, password, phone FROM USERS WHERE username = ? AND password = ?";

            preparedStatement = databaseConnector.team10spring2021cmpe272.prepareStatement(readQueryStatement);

            preparedStatement.setString(1, username);
            preparedStatement.setString(2, password);

            // Execute the Query, and get a java ResultSet
            ResultSet rs = preparedStatement.executeQuery();

            return rs;

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;

    }
    public static ResultSet findUserByusername(String username, MySQLConnector databaseConnector) {

        try {
            String readQueryStatement = "SELECT username, email, password, phone FROM USERS WHERE username = ?";

            preparedStatement = databaseConnector.team10spring2021cmpe272.prepareStatement(readQueryStatement);
            preparedStatement.setString(1, username);

            // Execute the Query, and get a java ResultSet
            ResultSet rs = preparedStatement.executeQuery();

            return rs;

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;

    }
}
