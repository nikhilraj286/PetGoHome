### Team10 Project Idea: 

# Pet Go Home - Approved 

1. ### Introduction to the problem statement
    Research has confirmed that for most people, the loss of a pet is comparable to the loss of a loved one. Pets became a very significant part for many, in today’s life.<br />
    
    If people realize just how intense the bond is between the pet and its owner, the grieving issue of losing a pet will be widely accepted. <br />

    Statistics show that, 1 out of 3 pets become lost at some point in their lifetime and close to 10 million dogs and cats are lost or stolen in the US every single year and less than 23% of lost pets in the U.S. are reunited with their owners.

2. ### Abstract
    We want to build a website helping people find their lost pets. We will use google map api combined with lost animal dataset from local animal shelters or animal control agencies. When someone’s pet is missing, they can go to our website and search by the lost location and time along with the description of their pets. Other people or nearby residents can help to find them. We also want to coordinate with local pet services and veterinary clinics so that they can get immediate treatment in case they are injured.<br />

    If you see a stray animal on the street, you can also go to our website and provide some basic information about the stray pet. It would be better if the user/person can take a picture of the stray pet and upload it on the website. We will classify them according to the location and time and store these information into our database. If there is an owner who has already reported his missing pet, we can use the information to find the owner.

3. ### Approach
    * Adding a Google map with a Maker to our website : https://developers.google.com/maps/documentation/javascript/adding-a-google-map

    * Animal Shelter Manager API : https://www.programmableweb.com/api/animal-shelter-manager

    * Petfinder API : https://www.programmableweb.com/api/petfinder

    * Functionalities
        * Search function
            * By State & county (location) and time (time frame , the window of reports to include such as Lst 30 Days)

        * Upload function
            * Pet’s owner can upload their pet’s information, e.g. pictures, age, lost location, weight, height, gender, breed, lost time, contact information, color and hair length, etc.

            * Other people can upload pictures of stray pet they see on the street.

4. ### Persona
    * #### Pet’s owner - 
        People who lost their pets. They can upload their pet’s pictures, location and time along with other description to let other people can recognize their pets. Besides, they can search our website by state, county and time to see if there are anyone who find their pets.

    * #### Residents/Other people -
        They can upload the stray animal’s picture and provide the information, such as time and location.

5. ### Dataset links
    * #### dataset sourse: Animal Shelters in North America ：
        https://www.kaggle.com/aaronschlegel/petfinder-animal-shelters-database
        
        
# Architecture diagram
![image](https://user-images.githubusercontent.com/28977052/110420358-fa987800-804f-11eb-87d9-f8c262e90ab2.png)
