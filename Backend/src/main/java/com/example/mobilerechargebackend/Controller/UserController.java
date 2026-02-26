package com.example.mobilerechargebackend.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.RestController;

import com.example.mobilerechargebackend.Service.JwtService;
import com.example.mobilerechargebackend.Service.UserService;
import com.example.mobilerechargebackend.dto.AuthRequest;
import com.example.mobilerechargebackend.model.History;
import com.example.mobilerechargebackend.model.User;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {
    @Autowired 
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/postUserDetails")
    public String createUser(@RequestBody User user) {
        userService.postuserdetails(user.getEmail(),user.getName(), user.getPassword(),user.getPhno());
        return "Registeration Successful";
    }

    @GetMapping("/getUserInfo")
    public Optional<User> getUser(@RequestParam String email) {
        return userService.getuserInfo(email);
    }
    
    @GetMapping("/getuserHistory/{id}")
    public List<History> getMethodName(@PathVariable int id) {
        return userService.getuserHistory(id);
    }
    @PostMapping("/authenticate")
    public ResponseEntity<String> authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));

            System.out.println(authRequest.getUsername());
            System.out.println(authentication.isAuthenticated());
            if (authentication.isAuthenticated()) {
                String token = jwtService.generateToken(authRequest.getUsername());
                return ResponseEntity.ok(token);
            } else {
                throw new UsernameNotFoundException("Invalid user request!");
            }
        } catch (Exception e) {
            System.out.println(e);
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
    @GetMapping("/userscount")
    public long getTotalUserCount() {
        return userService.getTotalUserCount(); // Return the total count of users
    }
    
}
