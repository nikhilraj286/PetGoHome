package team10spring2021cmpe272.petgohome.Service;

import team10spring2021cmpe272.petgohome.Backend.Pet;

import java.util.Optional;

public interface PetService {
    void addNewLostPet(Pet pet);
    void updatePetInfo(Pet pet);
    void removeYourPet(Pet pet);
}
