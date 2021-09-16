package com.tharindu.api.Controller;

import com.tharindu.api.Model.RegistrationModel;
import com.tharindu.api.Repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ApiController {

    @Autowired
    RegistrationRepository registrationRepository;

    @PostMapping("/")
    public RegistrationModel registerVehicle(@RequestBody RegistrationModel registrationModel){
        return registrationRepository.save(registrationModel);
    }

    @DeleteMapping("/")
    public void deleteVehicle(@RequestBody RegistrationModel registrationModel){
       registrationRepository.deleteById(registrationModel.getId());
    }

    @PutMapping("/{id}")
    public RegistrationModel updateVehicle(@RequestBody RegistrationModel registrationModel,@PathVariable Long id){
        RegistrationModel vehicle = registrationRepository.getById(id);
        vehicle.setModel(registrationModel.getModel());
        vehicle.setColor(registrationModel.getColor());
        vehicle.setMake(registrationModel.getMake());
        vehicle.setOwnerAddress(registrationModel.getOwnerAddress());
        vehicle.setOwnerID(registrationModel.getOwnerID());
        vehicle.setVehicleLicensePlate(registrationModel.getVehicleLicensePlate());
        vehicle.setYear(registrationModel.getYear());
        vehicle.setOwnerName(registrationModel.getOwnerName());

        return registrationRepository.save(vehicle);
    }

    @GetMapping("/")
    public List <RegistrationModel> getAll(){
        List <RegistrationModel> registrations = registrationRepository.findAll();
        return  registrations;
    }

}
