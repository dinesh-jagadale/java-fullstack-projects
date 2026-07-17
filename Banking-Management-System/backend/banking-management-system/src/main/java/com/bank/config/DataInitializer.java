package com.bank.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.bank.entity.Role;
import com.bank.enums.RoleName;
import com.bank.repository.RoleRepository;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initRoles(RoleRepository roleRepository) {

        return args -> {

            if (!roleRepository.existsByName(RoleName.ROLE_ADMIN)) {

            	Role admin = new Role();
            	admin.setName(RoleName.ROLE_ADMIN);
            	roleRepository.save(admin);
            }

            if (!roleRepository.existsByName(RoleName.ROLE_EMPLOYEE)) {

            	Role employee = new Role();
            	employee.setName(RoleName.ROLE_EMPLOYEE);
            	roleRepository.save(employee);

            }

            if (!roleRepository.existsByName(RoleName.ROLE_CUSTOMER)) {

            	Role customer = new Role();
            	customer.setName(RoleName.ROLE_CUSTOMER);
            	roleRepository.save(customer);

            }

            System.out.println("Roles initialized successfully.");

        };
    }
}