package com.example.mobilerechargebackend.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mobilerechargebackend.Repositary.HistoryRepo;
import com.example.mobilerechargebackend.Repositary.UserRepo;
import com.example.mobilerechargebackend.model.History;
import com.example.mobilerechargebackend.model.User;

@Service
public class HistoryService {
     @Autowired 
    private HistoryRepo historyRepo;
    

    public History saveHistory(int id, String status,String amt, String sim, LocalDate date,LocalTime time, String offerplan,String phno,User user){
        History h=  new History();
        h.setAmt(amt);
        h.setDate(date);
        h.setId(id);
        h.setOfferplan(offerplan);
        h.setPhno(phno);
        h.setSim(sim);
        h.setStatus(status);
        h.setTime(time);
        User u = new User();
        u.setId(user.getId());
        
        h.setUser(u);
        return historyRepo.save(h);
    }

    public List<History> getHistory(int id){
        return historyRepo.findAllById(id);
    }

    public long getCountOfAllHistories() {
        return historyRepo.countAllHistories();
    }

    public long getAirtelSIMCount() {
        return historyRepo.countAirtelSIMs();
    }

    public long getJioSIMCount() {
        return historyRepo.countJioSIMs();
    }
    public long getVISIMCount() {
        return historyRepo.countVISIMs();
    }
    public long getBSNLSIMCount() {
        return historyRepo.countBSNLSIMs();
    }
     public BigDecimal getTotalAmount() {
        return historyRepo.sumOfAmount();
    }
    public List<History> getAllHistory() {
        return historyRepo.findAll();
    }

}
