package team10spring2021cmpe272.petgohome.Backend;

//@Builder(toBuilder=true)
public class Pet {
    private String ownerid;
    private String petid;
    private String pet_name;
    private String record_type;
    private String type;
    private String gender;
    private String breed;
    private String color;
    private String hair_length;
    private int age;
    private float weight;
    private float height;
    private String phone;
    private String email;
    private String missing_date;
    private String lost_state;
    private String lost_county;
    private String lost_zip;
    private String lost_location;
    private String description;
    private String pictureUrl;
    private int days;

    public Pet(String petid, String ownerid, String pet_name, String record_type, String type,
               float weight, float height, String gender, String breed,
               String color, String hair_length, int age, String phone, String email,
               String missing_date, String lost_state, String lost_county,
               String lost_zip, String lost_location, String pictureUrl,
               String description){
        this.petid = petid;
        this.ownerid = ownerid;
        this.pet_name = pet_name;
        this.record_type = record_type;
        this.type = type;
        this.weight = weight;
        this.height = height;
        this.gender = gender;
        this.breed = breed;
        this.color = color;
        this.hair_length = hair_length;
        this.age = age;
        this.phone = phone;
        this.email = email;
        this.missing_date = missing_date;
        this.lost_state = lost_state;
        this.lost_county = lost_county;
        this.lost_zip = lost_zip;
        this.lost_location = lost_location;
        this.pictureUrl = pictureUrl;
        this.description = description;
    };

    public String getPetid() {
        return petid;
    }

    public void setPetid(String petid) {
        this.petid = petid;
    }

    public String getOwnerid() {
        return ownerid;
    }

    public void setOwnerid(String ownerid) {
        this.ownerid = ownerid;
    }

    public String getPet_name() {
        return pet_name;
    }

    public void setPet_name(String pet_name) {
        this.pet_name = pet_name;
    }

    public String getRecord_type() {
        return record_type;
    }

    public void setRecord_type(String record_type) {
        this.record_type = record_type;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getHair_length() {
        return hair_length;
    }

    public void setHair_length(String hair_length) {
        this.hair_length = hair_length;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public float getWeight() {
        return weight;
    }

    public void setWeight(float weight) {
        this.weight = weight;
    }

    public float getHeight() {
        return height;
    }

    public void setHeight(float height) {
        this.height = height;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMissing_date() {
        return missing_date;
    }

    public void setMissing_date(String missing_date) {
        this.missing_date = missing_date;
    }

    public String getLost_state() {
        return lost_state;
    }

    public void setLost_state(String lost_state) {
        this.lost_state = lost_state;
    }

    public String getLost_county() {
        return lost_county;
    }

    public void setLost_county(String lost_county) {
        this.lost_county = lost_county;
    }

    public String getLost_zip() {
        return lost_zip;
    }

    public void setLost_zip(String lost_zip) {
        this.lost_zip = lost_zip;
    }

    public String getLost_location() {
        return lost_location;
    }

    public void setLost_location(String lost_location) {
        this.lost_location = lost_location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }

    public int getDays(){
        return days;
    }

    public void setDays(int days){
        this.days = days;
    }
}
