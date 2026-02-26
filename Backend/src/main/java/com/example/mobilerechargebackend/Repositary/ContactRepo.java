package com.example.mobilerechargebackend.Repositary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mobilerechargebackend.model.Contact;

@Repository
public interface ContactRepo extends JpaRepository<Contact,Integer> {
    long count();
}
