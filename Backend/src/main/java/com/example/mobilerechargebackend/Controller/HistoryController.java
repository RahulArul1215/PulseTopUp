package com.example.mobilerechargebackend.Controller;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.mobilerechargebackend.Service.HistoryService;
import com.example.mobilerechargebackend.model.History;
import com.example.mobilerechargebackend.model.User;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;



@CrossOrigin("http://localhost:3000/")
@RestController
public class HistoryController {
    @Autowired
    private HistoryService historyService;

    @PostMapping("/postHistory")
    public String postMethodName(@RequestBody History history) {
        // history.setDate(LocalDateTime.now().toLocalDate());
        // history.setTime(LocalDateTime.now().toLocalTime());
         historyService.saveHistory(history.getId(),history.getStatus(),history.getAmt(),history.getSim(),history.getDate(),history.getTime(),history.getOfferplan(),history.getPhno(),history.getUser());
         return "Saved";    
    }

    @GetMapping("/getHistory")
    public List<History> getMethodName(@RequestParam int id) {
        return historyService.getHistory(id);
    }

    @GetMapping("/count")
    public long getHistoryCount() {
        return historyService.getCountOfAllHistories();
    }

    @GetMapping("/count/airtel")
    public long countAirtelSIMs() {
        return historyService.getAirtelSIMCount();
    }

    @GetMapping("/count/jio")
    public long countJioSIMs() {
        return historyService.getJioSIMCount();
    }

    @GetMapping("/count/vi")
    public long countVISIMs() {
        return historyService.getVISIMCount();
    }

    @GetMapping("/count/bsnl")
    public long countBSNLSIMs() {
        return historyService.getBSNLSIMCount();
    }
    
    @GetMapping("/history/total-amount")
    public BigDecimal getTotalAmount() {
        return historyService.getTotalAmount();
    }

    @GetMapping("/allhistory")
    public List<History> getAllHistory() {
        return historyService.getAllHistory();
    }

}
