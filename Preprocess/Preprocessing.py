import pandas as pd
import sqlalchemy
import pymysql
import pymysql.cursors

df = pd.read_csv("lost_pets.csv")
df = df[['Record_Type', 'animal_type', 'Animal_Gender', 'Animal_Breed',
         'Animal_Color', 'Date', 'State', 'Zip', 'Image', 'location_for_map']]

print(df)
df = df.iloc[1:, :]
df = df.where(pd.notnull(df), None)
df_list = df.values.tolist()

db = pymysql.connect(host='petgohome.cyazxyujehyt.us-west-2.rds.amazonaws.com', user='root',
                     password='password123', database='PetGoHome', cursorclass=pymysql.cursors.DictCursor)
cursor = db.cursor()

add_pets = ("INSERT INTO Data (record_type, type, gender, breed, color, missing_date, lost_state, lost_zip, picture, lost_location) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)")
for i in range(len(df_list)):
    data_pets = df_list[i]
    cursor.execute(add_pets, data_pets)

query = "SELECT * FROM Data"
cursor.execute(query)
print(cursor.fetchall())

db.commit()
cursor.close()
db.close()
