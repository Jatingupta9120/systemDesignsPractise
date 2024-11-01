package com.movieApplication.entities;

public interface MovieService {
    // Allows user to search 
    
    //1.allow user to search movie by id 
    public Movie findMovieByName(String name);

    //2.allow user to find movie by name 
    public Movie findMovieById(String id);

    //create a movie  --only admin should be allowed

    public Movie createMovie(User user);

    //updating a movie --only admin can be able to update a movie
    public Movie updateMovie(User user);
}
