package team10spring2021cmpe272.petgohome.Dao;

import team10spring2021cmpe272.petgohome.Backend.Pet;

public interface PetDao {
    public int save(Pet pet);

    public void createPet(Pet pet);

    public void deletePetByPetId(String petId);

    public void searchPetByLocation(String location);
}
