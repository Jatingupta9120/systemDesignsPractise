package com.movieApplication.entities;
import java.util.Date;
public class Movie {
    
    private long id;
    
    private String name;
    
    private String desc;
    
    private double duration;
    
    private Language language;
    
    private Date releaseDate;
    
    public Movie(long id, String name, String desc, double duration, Language language, Date releaseDate) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.duration = duration;
        this.language = language;
        this.releaseDate = releaseDate;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public double getDuration() {
        return duration;
    }

    public void setDuration(double duration) {
        this.duration = duration;
    }

    public Language getLanguage() {
        return language;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }

}
