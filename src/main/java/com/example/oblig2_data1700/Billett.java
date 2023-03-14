package com.example.oblig2_data1700;

public class Billett {
    private String film, antall, navn, etterNavn, telefon, epost;

    public Billett(String film, String antall, String navn, String etterNavn, String telefon, String epost){
        this.film = film;
        this.antall = antall;
        this.navn = navn;
        this.etterNavn = etterNavn;
        this.telefon = telefon;
        this.epost = epost;
    }
    public String getFilm(){
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public String getAntall() {
        return antall;
    }

    public void setAntall(String antall) {
        this.antall = antall;
    }

    public String getNavn() {
        return navn;
    }

    public void setNavn(String navn) {
        this.navn = navn;
    }

    public String getEtterNavn() {
        return etterNavn;
    }

    public void setEtterNavn(String etterNavn) {
        this.etterNavn = etterNavn;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }

    @Override
    public String toString() {
        return "Billett{" +
                "film='" + film + '\'' +
                ", antall='" + antall + '\'' +
                ", navn='" + navn + '\'' +
                ", etterNavn='" + etterNavn + '\'' +
                ", telefon='" + telefon + '\'' +
                ", epost='" + epost + '\'' +
                '}';
    }
}
