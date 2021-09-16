package com.tharindu.api.Repository;

import com.tharindu.api.Model.RegistrationModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistrationRepository extends JpaRepository<RegistrationModel, Long> {
     boolean existsByVehicleLicensePlate(String licensePlate);
}
