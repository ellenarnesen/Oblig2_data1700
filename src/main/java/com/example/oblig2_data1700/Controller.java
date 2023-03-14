package com.example.oblig2_data1700;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import com.sun.java.accessibility.util.AccessibilityEventMonitor;

import java.util.ArrayList;
import java.util.List;

@RestController //forteller serveren hvor den skal lete
public class Controller {
    public List<Billett>listeBillett = new ArrayList<>();
    @PostMapping("/lagre") //Sender data til serveren og lagrer den der
    public void lagreBillett (Billett inn) {
        listeBillett.add(inn);
    }

    @GetMapping("/send")// henter data fra klientside - og returnerer fra Arrayet til tabellen
    public List<Billett>utBillett(){
        return listeBillett;
    }

    @PostMapping("/slett") //Postmapping her ettersom vi sender beskjed til serveren om å slette arrayet
    public void slett(){
        listeBillett.clear();
    }
}
