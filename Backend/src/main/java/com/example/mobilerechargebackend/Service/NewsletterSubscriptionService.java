package com.example.mobilerechargebackend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.mobilerechargebackend.Repositary.NewsletterSubscriptionRepository;
import com.example.mobilerechargebackend.model.NewsletterSubscription;

@Service
public class NewsletterSubscriptionService {

    @Autowired
    private NewsletterSubscriptionRepository subscriptionRepository;

    @Autowired
    private JavaMailSender mailSender;

    
    private void sendConfirmationEmail(String email) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Welcome to PulseTopup! 🎉 You're All Set to Stay Connected!");
        message.setText("Hello,\n" + //
                        "\n" + //
                        "Thank you for subscribing to PulseTopup – your go-to platform for quick, easy, and reliable mobile recharges! We're thrilled to have you join our community of smart, connected users.\n" + //
                        "\n" + //
                        "As a PulseTopup subscriber, you’ll be the first to know about:\n" + //
                        "\n" + //
                        "Exclusive Offers: Get the latest deals and discounts on mobile recharges.\n" + //
                        "New Features: Stay updated on the newest tools and enhancements we're rolling out to make your experience even better.\n" + //
                        "Tips & Tricks: Discover how to get the most out of PulseTopup with insider tips and guides.\n" + //
                        "We're committed to ensuring that your mobile recharge experience is seamless, fast, and secure. Stay tuned for more exciting updates coming your way!\n" + //
                        "\n" + //
                        "In the meantime, why not take a look around? Recharge your mobile now with just a few clicks and see how easy it is with PulseTopup.\n" + //
                        "\n" + //
                        "Need Help?\n" + //
                        "If you have any questions, our support team is here to assist you 24/7. Just reply to this email or visit our Help Center.\n" + //
                        "\n" + //
                        "Thank you for choosing PulseTopup! We’re here to keep you connected.\n" + //
                        "\n" + //
                        "Best regards,\n" + //
                        "The PulseTopup Team\n" + //
                        "Your Connection, Your Way\n" + //
                        "\n" + //
                        "P.S. Don’t forget to add us to your address book to make sure you never miss an update!");
        
        mailSender.send(message);
    }
    
    public void subscribe(String email) {
        NewsletterSubscription subscription = new NewsletterSubscription();
        subscription.setEmail(email);
        subscriptionRepository.save(subscription);
        sendConfirmationEmail(email);
    }
}
