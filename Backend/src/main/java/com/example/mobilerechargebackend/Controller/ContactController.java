package com.example.mobilerechargebackend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.mobilerechargebackend.Service.ContactService;
import com.example.mobilerechargebackend.model.Contact;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin("http://localhost:3000/")
@RestController
public class ContactController {
    @Autowired
    public ContactService contactService;

    @PostMapping("/postSupport")
    public Contact postMethodName(@RequestBody Contact contact) {
        return contactService.saveContact(contact);
        // return "Support sent"; 
    }
    @GetMapping("/contactcount")
    public long getContactCount() {
        return contactService.getcontactcount();
    }
    @GetMapping("/allcontacts")
    public List<Contact> getAllContacts() {
        return contactService.getAllContacts();
    }
    
}
