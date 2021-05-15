import pandas as pd
import sqlalchemy
import pymysql


def process():
    df = pd.read_csv("lost_pets.csv")
    df = df[['Record_Type', 'animal_type', 'Animal_Gender', 'Animal_Breed',
             'Animal_Color', 'Date', 'State', 'Zip', 'Image', 'location_for_map']]
    # record_type,  type,          gender,          breed,        color,    missing_date,lost_state,lost_zip, picture, lost_location

    print(df.head())
    df = df.iloc[1:, :]  # remove the title in dataframe
    # convert nan to None in dataframe (null in the mysql)
    df = df.where(pd.notnull(df), None)
    df_list = df.values.tolist()  # convert df to list

    # Open database connection
    con_str = "petgohome.cyazxyujehyt.us-west-2.rds.amazonaws.com"
    db = pymysql.connect(con_str, "root", "password123", "PetGoHome")

    # prepare a cursor object using cursor() method
    cursor = db.cursor()

    # execute SQL query using execute() method.
    add_pets = ("INSERT INTO Data "
                "(record_type, type, gender, breed, color, missing_date, lost_state, lost_zip, picture, lost_location) "
                "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)")
    for i in range(len(df_list)):
        data_pets = df_list[i]
    cursor.execute(add_pets, data_pets)

    query = "SELECT * FROM Data"
    cursor.execute(query)
    # Fetch a single row using fetchone() method.
    print(cursor.fetchall())

    # Make sure data is committed to the database
    db.commit()
    # disconnect from server
    cursor.close()
    db.close()


def __init__(self, name):
    process()
