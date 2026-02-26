package com.example.mobilerechargebackend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mobilerechargebackend.Repositary.ContactRepo;
import com.example.mobilerechargebackend.model.Contact;

@Service
public class ContactService {
    @Autowired
    private ContactRepo contactRepo;

    public Contact saveContact(Contact contact)
    {
        return contactRepo.save(contact);
    }

    public long getcontactcount(){
        return contactRepo.count();
    }

    public List<Contact> getAllContacts() {
        return contactRepo.findAll();
    }
}
