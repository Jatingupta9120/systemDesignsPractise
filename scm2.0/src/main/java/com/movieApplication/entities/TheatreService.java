package com.movieApplication.entities;

import java.util.List;
public interface TheatreService {

    //get all theatre using pinCode

    public List<Theatre> findTheatreByZipCode(int zipCode);
    
    //get all movies inside a particular theatre

    public List<Movie> findMovieInATheatre(String theaterName);

    //get theater by name

    public Theatre getTheaterByName(String name);

    //only admin can add a movie in a theater
    public void addNewMovieInATheater(String theaterName,long movieId,User user);

    //only admin can remove a movie in a theater

    public void removeMovieInATheater(String theaterName,long movieId,User user);
}