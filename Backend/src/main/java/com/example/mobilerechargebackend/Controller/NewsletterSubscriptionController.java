package com.example.mobilerechargebackend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.mobilerechargebackend.Service.NewsletterSubscriptionService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class NewsletterSubscriptionController {

    @Autowired
    private NewsletterSubscriptionService newsletterSubscriptionService;

    @PostMapping("/subscribe/{email}")
    public ResponseEntity<String> Rsubscribe(@PathVariable String email) {
        newsletterSubscriptionService.subscribe(email);
        return ResponseEntity.ok("Subscription successful. A confirmation email has been sent to your email address.");
    }
}