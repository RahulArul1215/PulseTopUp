package com.example.mobilerechargebackend.Repositary;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mobilerechargebackend.model.User;


@Repository
public interface UserRepo extends JpaRepository<User,Integer> {
    
    // User findByEmail(String email);

    // Optional<UserInfo> findByName(String username);

    // List<UserInfo> findAll();
    // // Optional<UserInfo> findByEmail()
    Optional<User> findByEmail(String email);
    // Optional<UserInfo> findByPhone(String phone);

    long count();

}
