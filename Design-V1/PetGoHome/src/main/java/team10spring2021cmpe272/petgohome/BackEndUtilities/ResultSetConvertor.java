package team10spring2021cmpe272.petgohome.BackEndUtilities;


import org.json.JSONArray;
import org.json.JSONObject;
import team10spring2021cmpe272.petgohome.Backend.User;
import team10spring2021cmpe272.petgohome.Backend.Pet;
import team10spring2021cmpe272.petgohome.MySQLConnector.MySQLConnector;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;
import java.util.*;

public class ResultSetConvertor {

    /**
     * Converts a mysql query result set to a JSONArray
     * @param resultSet is ResultSet
     * @return JSONArray conversion of the result set
     */
    public static JSONArray convertToJSON(ResultSet resultSet)
            throws Exception {
        JSONArray jsonArray = new JSONArray();
        while (resultSet.next()) {
            int total_rows = resultSet.getMetaData().getColumnCount();
            for (int i = 0; i < total_rows; i++) {
                JSONObject obj = new JSONObject();
                obj.put(resultSet.getMetaData().getColumnLabel(i + 1)
                        .toLowerCase(), resultSet.getObject(i + 1));
                jsonArray.put(obj);
            }
        }
        return jsonArray;
    }

    /**
     * Converts a mysql query result set to a list of Identity
     * @param resultSet of Identity
     * @return List<Identity> conversion of ResultSet
     */
    public static List<User> convertToUserList(ResultSet resultSet) throws SQLException {
        List<User> ll = new LinkedList<User>();

        while (resultSet.next()) {
            String username = resultSet.getString("username");
            String password = resultSet.getString("password");
            String email = resultSet.getString("email");
            String phone = resultSet.getString("phone");

            User acc = new User(username, email, password, phone);

            ll.add(acc);
        }

        return ll;
    }

    public static List<Pet> convertToPetList(ResultSet resultSet) throws SQLException {
        List<Pet> lp = new LinkedList<Pet>();

        while (resultSet.next()) {
            String petid = resultSet.getString("petid");
            String ownerid = resultSet.getString("ownerid");
            String pet_name = resultSet.getString("pet_name");
            String record_type = resultSet.getString("record_type");
            String type = resultSet.getString("type");
            float weight = resultSet.getFloat("weight");
            float height = resultSet.getFloat("height");
            String gender = resultSet.getString("gender");
            String Type = resultSet.getString("type");
            String breed = resultSet.getString("breed");
            String color = resultSet.getString("color");
            String hair_length = resultSet.getString("hair_length");
            int age = resultSet.getInt("age");
            String phone = resultSet.getString("phone");
            String email = resultSet.getString("email");
            String missing_date = resultSet.getString("missing_date");
            String lost_state = resultSet.getString("lost_state");
            String lost_county = resultSet.getString("lost_county");
            String lost_zip = resultSet.getString("lost_zip");
            String lost_location = resultSet.getString("lost_location");
            String picture = resultSet.getString("picture");
            String description = resultSet.getString("description");

            Pet acc = new Pet(petid, ownerid, pet_name, record_type, type, weight, height, gender, breed,
            color, hair_length, age, phone, email, missing_date, lost_state, lost_county, lost_location, lost_zip,
            picture, description);
            lp.add(acc);
        }

        return lp;
    }
}
