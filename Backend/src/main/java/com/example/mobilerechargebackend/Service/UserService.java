package com.example.mobilerechargebackend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.mobilerechargebackend.Repositary.UserRepo;
import com.example.mobilerechargebackend.model.History;
import com.example.mobilerechargebackend.model.User;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User postuserdetails(String email, String name, String password,String phoneno){
        User user=new User();
        user.setEmail(email);
        user.setName(name);
        user.setPassword(passwordEncoder.encode(password));
        // user.setPassword(password);
        user.setPhno(phoneno);
        userRepo.save(user);
        
        return user;
    }
    public Optional<User> getuserInfo(String email){
        Optional<User> user=userRepo.findByEmail(email);
        return user;
    }
    public List<History> getuserHistory(int id){
        User us=userRepo.findById(id).orElse(null);
        return us.getHistory();
    }
    public long getTotalUserCount() {
        return userRepo.count(); // Get the total count of users
    }
}
