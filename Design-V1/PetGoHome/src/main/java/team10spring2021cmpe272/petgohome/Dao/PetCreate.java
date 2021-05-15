package team10spring2021cmpe272.petgohome.Dao;

import team10spring2021cmpe272.petgohome.MySQLConnector.MySQLConnector;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class PetCreate {
    public static PreparedStatement preparedStatement = null;

    public static int createPet(String petid, String ownerid, String pet_name, String record_type, String type,
                                      float weight, float height, String gender, String breed,
                                      String color, String hair_length, int age, String phone, String email,
                                      String missing_date, String lost_state, String lost_county,
                                      String lost_zip, String lost_location, String picture,
                                      String description, MySQLConnector databaseConnector) {

        try {
            String createQueryStatement = "INSERT INTO Pets (petid, ownerid, pet_name, record_type, type, weight, height, gender, " +
                    "breed, color, hair_length, age, phone, email, missing_date, lost_state, lost_county, lost_zip, " +
                    "lost_location, picture, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,?)";

            preparedStatement = databaseConnector.team10spring2021cmpe272.prepareStatement(createQueryStatement);

            preparedStatement.setString(1, petid);
            preparedStatement.setString(2, ownerid);
            preparedStatement.setString(3, pet_name);
            preparedStatement.setString(4, record_type);
            preparedStatement.setString(5, type);
            preparedStatement.setFloat(6, weight);
            preparedStatement.setFloat(7, height);
            preparedStatement.setString(8, gender);
            preparedStatement.setString(9, breed);
            preparedStatement.setString(10, color);
            preparedStatement.setString(11, hair_length);
            preparedStatement.setInt(12, age);
            preparedStatement.setString(13, phone);
            preparedStatement.setString(14, email);
            preparedStatement.setString(15, missing_date);
            preparedStatement.setString(16, lost_state);
            preparedStatement.setString(17, lost_county);
            preparedStatement.setString(18, lost_zip);
            preparedStatement.setString(19, lost_location);
            preparedStatement.setString(20, picture);
            preparedStatement.setString(21, description);
            // Execute the Query, and get a java ResultSet
            preparedStatement.executeUpdate();
            return 0;

        } catch (SQLException e) {
            e.printStackTrace();
            return 1;
        }
    }
}