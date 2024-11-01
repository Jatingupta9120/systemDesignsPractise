package com.movieApplication.entities;

import java.util.List;
import com.nimbusds.openid.connect.sdk.claims.Gender;

public class User {

    private int id;

    protected String name;

    private List<Long> phoneNumber;

    private int age;

    private Gender gender;

    protected Address address;

    public User(int id, String name, List<Long> phoneNumber, int age, Gender gender, Address address) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }

    public List<Long> getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(List<Long> phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }
    

    
}
