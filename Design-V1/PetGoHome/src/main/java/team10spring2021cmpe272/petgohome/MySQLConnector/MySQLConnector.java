package team10spring2021cmpe272.petgohome.MySQLConnector;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import team10spring2021cmpe272.petgohome.BackEndUtilities.SystemOptionalLogging;

public class MySQLConnector {
    public Connection team10spring2021cmpe272 = null;

    public void makeJDBCConnection() {

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            SystemOptionalLogging.log("Congrats - Seems your MySQL JDBC Driver Registered!");
        } catch (ClassNotFoundException e) {
            SystemOptionalLogging.log("Sorry, couldn't found JDBC driver. Make sure you have added JDBC Maven Dependency Correctly");
            e.printStackTrace();
            return;
        }

        try {
            // DriverManager: The basic service for managing a set of JDBC drivers.
            //String jdbcConnString = System.getenv("jdbcConnectionString");
            //String jdbcUser = System.getenv("jdbcUser");
            //String jdbcPassword = System.getenv("jdbcPassword");
            String jdbcConnString = "jdbc:mysql://localhost:3306/PetGoHome?serverTimezone=GMT-7";
            String jdbcUser = "root";
            String jdbcPassword="password123";

            team10spring2021cmpe272 = DriverManager.getConnection(jdbcConnString, jdbcUser, jdbcPassword);
            if (team10spring2021cmpe272 != null) {
                SystemOptionalLogging.log("Connection Successful! Enjoy. Now it's time to push data");
            } else {
                SystemOptionalLogging.log("Failed to make connection!");
            }
        } catch (SQLException e) {
            SystemOptionalLogging.log("MySQL Connection Failed!");
            e.printStackTrace();
            return;
        }

    }

    public void closeJDBCConnection() {
        try {
            team10spring2021cmpe272.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
