package team10spring2021cmpe272.petgohome.Backend;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.sql.ResultSet;
import java.util.List;

import team10spring2021cmpe272.petgohome.Dao.PetCreate;
import team10spring2021cmpe272.petgohome.Dao.SearchPet;
import team10spring2021cmpe272.petgohome.MySQLConnector.MySQLConnector;
import team10spring2021cmpe272.petgohome.BackEndUtilities.PasswordHasher;
import team10spring2021cmpe272.petgohome.BackEndUtilities.ResultSetConvertor;
import team10spring2021cmpe272.petgohome.UserDAL.UserRead;
import team10spring2021cmpe272.petgohome.UserDAL.UserCreate;

@RestController
public class BackendController {

    /*
     * userReqBody
     *
     * userName : String
     * userPassword : String
     *
     * returns: List containing the session key for the current session
     */
    @PostMapping("/users/login")
    public ResponseEntity<List<User>> validateAccount(@RequestBody User userReqBody) throws Exception {
        // I use the simplest way to validate account, which is by user name
        MySQLConnector myConnector = new MySQLConnector();
        myConnector.makeJDBCConnection();

        ResultSet resultSet = UserRead.readUsersByUsernameAndPass(userReqBody.getUsername(), userReqBody.getPassword(), myConnector);
        List<User> userList = ResultSetConvertor.convertToUserList(resultSet);
        myConnector.closeJDBCConnection();
        return new ResponseEntity<List<User>>(userList, HttpStatus.OK);
    }

    /*
     * userReqBody
     *
     * userName : String
     *
     * returns: List user information for given username
     */
    @PostMapping("/users/finduser")
    public ResponseEntity<List<User>> finduser(@RequestBody User userReqBody) throws Exception {
        MySQLConnector myConnector = new MySQLConnector();
        myConnector.makeJDBCConnection();

        ResultSet resultSet = UserRead.findUserByusername(userReqBody.getUsername(), myConnector);
        List<User> userList = ResultSetConvertor.convertToUserList(resultSet);
        System.out.println(userList);
        myConnector.closeJDBCConnection();
        return new ResponseEntity<List<User>>(userList, HttpStatus.OK);
    }

    /*
     * userReqBody
     *
     * userPassword : String
     * userName : String
     * roleType : String (valid values: "user")
     */
    @PostMapping("/users/create")
    public ResponseEntity<List<String>> createUser(@RequestBody User userReqBody) throws Exception {
        //else: send user information to UserDAL for account creation

        //get mysql connection
        MySQLConnector myConnector = new MySQLConnector();
        myConnector.makeJDBCConnection();

        // check if user exists or not
        ResultSet resultSet = UserRead.readUsersByUsernameAndPass(userReqBody.getUsername(), userReqBody.getPassword(), myConnector);
        List<User> userList = ResultSetConvertor.convertToUserList(resultSet);
        boolean empty = userList.isEmpty();
        if (empty == true){  // user doesn't exist
            UserCreate.createUser(userReqBody.getUsername(), userReqBody.getEmail(),
                    PasswordHasher.generateStrongPasswordHash(userReqBody.getPassword()), userReqBody.getPhone(), myConnector);
            // close mysql connection
            myConnector.closeJDBCConnection();
            return null;
        }
        else{
            // close mysql connection
            myConnector.closeJDBCConnection();
            throw new Exception(userReqBody.getUsername() + " already exists");
        }
    }

    @PostMapping("/pets/upload")
    public ResponseEntity<List<String>> createPets(@RequestBody Pet userReqBody) throws Exception {
        MySQLConnector myConnector = new MySQLConnector();
        myConnector.makeJDBCConnection();

        PetCreate.createPet(userReqBody.getPetid(), userReqBody.getOwnerid(), userReqBody.getPet_name(),
                userReqBody.getRecord_type(), userReqBody.getType(), userReqBody.getWeight(),
                userReqBody.getHeight(), userReqBody.getGender(), userReqBody.getBreed(),
                userReqBody.getColor(), userReqBody.getHair_length(), userReqBody.getAge(),
                userReqBody.getPhone(), userReqBody.getEmail(), userReqBody.getMissing_date(),
                userReqBody.getLost_state(), userReqBody.getLost_county(), userReqBody.getLost_zip(),
                userReqBody.getLost_location(), userReqBody.getPictureUrl(), userReqBody.getDescription(), myConnector);
        myConnector.closeJDBCConnection();
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping("/pets/search")
    public ResponseEntity<List<Pet>> searchPets(@RequestBody Pet userReqBody) throws Exception {
        MySQLConnector myConnector = new MySQLConnector();
        myConnector.makeJDBCConnection();

        ResultSet resutSet = SearchPet.searchpets(userReqBody.getLost_state(), userReqBody.getLost_county(), userReqBody.getRecord_type(),
                userReqBody.getDays(), myConnector);
        List<Pet> petList = ResultSetConvertor.convertToPetList(resutSet);
        myConnector.closeJDBCConnection();
        return new ResponseEntity<List<Pet>>(petList, HttpStatus.OK);
    }
}


