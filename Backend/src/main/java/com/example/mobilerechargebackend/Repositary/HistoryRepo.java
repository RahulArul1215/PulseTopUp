package com.example.mobilerechargebackend.Repositary;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.mobilerechargebackend.model.History;

@Repository
public interface HistoryRepo extends JpaRepository<History,Integer> {

    List<History> findAllById(int id);
    
    // @Query("select u from Histroy u where user_id ")
    // @Query("SELECT h FROM History h WHERE h.user_id = :userId")
    // List<History> findAllByUserId(@Param("userId") int userId);
    @Query("SELECT COUNT(h) FROM History h")
    long countAllHistories();

    @Query("SELECT COUNT(h) FROM History h WHERE h.sim = 'Airtel'")
    long countAirtelSIMs();

    @Query("SELECT COUNT(h) FROM History h WHERE h.sim = 'Jio'")
    long countJioSIMs();

    @Query("SELECT COUNT(h) FROM History h WHERE h.sim = 'VI'")
    long countVISIMs();

    @Query("SELECT COUNT(h) FROM History h WHERE h.sim = 'BSNL'")
    long countBSNLSIMs();

    @Query("SELECT SUM(h.amt) FROM History h")
    BigDecimal sumOfAmount();

}
