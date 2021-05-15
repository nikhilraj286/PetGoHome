package team10spring2021cmpe272.petgohome.Dao;

import team10spring2021cmpe272.petgohome.MySQLConnector.MySQLConnector;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class SearchPet {
    static PreparedStatement preparedStatement = null;

    public static ResultSet searchpets(String lost_state, String lost_county, String record_type, int days, MySQLConnector databaseConnector) {

        try {
            String readQueryStatement = "";
            if (record_type == null){
                readQueryStatement = "SELECT * FROM Pets WHERE lost_state = ? AND lost_county = ? " +
                        "AND missing_date > DATE_ADD(NOW(), INTERVAL ? DAY)";
            } else{
                readQueryStatement = "SELECT * FROM Pets WHERE lost_state = ? AND lost_county = ? AND record_type = ? " +
                        "AND missing_date > DATE_ADD(NOW(), INTERVAL ? DAY)";
            }

            preparedStatement = databaseConnector.team10spring2021cmpe272.prepareStatement(readQueryStatement);

            if (record_type == null){
                preparedStatement.setString(1, lost_state);
                preparedStatement.setString(2, lost_county);
                preparedStatement.setInt(3, days);
            } else{
                preparedStatement.setString(1, lost_state);
                preparedStatement.setString(2, lost_county);
                preparedStatement.setString(3, record_type);
                preparedStatement.setInt(4, days);
            }

            // Execute the Query, and get a java ResultSet
            ResultSet rs = preparedStatement.executeQuery();

            return rs;

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;

    }
}
