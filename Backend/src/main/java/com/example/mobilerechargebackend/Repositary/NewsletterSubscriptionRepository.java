package com.example.mobilerechargebackend.Repositary;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mobilerechargebackend.model.NewsletterSubscription;

public interface NewsletterSubscriptionRepository extends JpaRepository<NewsletterSubscription,Long> {
    
}
