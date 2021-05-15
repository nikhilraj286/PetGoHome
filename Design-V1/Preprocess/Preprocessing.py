import pandas as pd
import sqlalchemy
import pymysql

df = pd.read_csv("lost_pets.csv")
df = df[['Record_Type','animal_type','Animal_Gender','Animal_Breed','Animal_Color', 'Date','State', 'Zip','Image','location_for_map']]
        # record_type,  type,          gender,          breed,        color,    missing_date,lost_state,lost_zip, picture, lost_location

df = df.iloc[1: , :]  # remove the title in dataframe
df = df.where(pd.notnull(df), None) # convert nan to None in dataframe (null in the mysql)
df_list = df.values.tolist() # convert df to list

# Open database connection
db = pymysql.connect("localhost","root","password123","PetGoHome" )

# prepare a cursor object using cursor() method
cursor = db.cursor()

# execute SQL query using execute() method.
add_pets = ("INSERT INTO Pets "
        "(record_type, type, gender, breed, color, missing_date, lost_state, lost_zip, picture, lost_location) "
        "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)")
for i in range(len(df_list)):
    data_pets = df_list[i]
    cursor.execute(add_pets, data_pets)

query = "SELECT * FROM Pets"
cursor.execute(query)
# Fetch a single row using fetchone() method.
print(cursor.fetchall()) 

# Make sure data is committed to the database
db.commit()
# disconnect from server
cursor.close()
db.close()
