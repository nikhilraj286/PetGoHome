package team10spring2021cmpe272.petgohome.Service.Impl;

import org.springframework.stereotype.Service;
import team10spring2021cmpe272.petgohome.Backend.Pet;
import team10spring2021cmpe272.petgohome.Dao.PetDao;
import team10spring2021cmpe272.petgohome.Service.PetService;

@Service
public class PetServiceImpl implements PetService {
    private PetDao petDao;

    @Override
    public void addNewLostPet(Pet pet) {
        petDao.save(pet);
    }

    @Override
    public void updatePetInfo(Pet pet) {
    }

    @Override
    public void removeYourPet(Pet pet) {
        petDao.deletePetByPetId(pet.getPetid());
    }
}
