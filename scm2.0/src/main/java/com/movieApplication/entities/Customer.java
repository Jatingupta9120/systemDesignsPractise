package com.movieApplication.entities;

import com.nimbusds.openid.connect.sdk.claims.Gender;
import java.util.List;
public class Customer extends User {
    
    public Customer(int id, String name, List<Long> phoneNumber, int age, Gender gender, Address address){
        super(id, name, phoneNumber, age, gender, address);
    }
}
