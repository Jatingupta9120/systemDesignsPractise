package com.movieApplication.entities;
import java.util.Date;  
public interface BookingService {

    public long createBooking(long userId,long movieId,Date movieBookingTime,int numberOfSeats);

}