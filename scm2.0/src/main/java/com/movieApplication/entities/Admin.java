package com.movieApplication.entities;

import java.util.List;

import com.nimbusds.openid.connect.sdk.claims.Gender;
public class Admin extends User{

    private long employeeId;

    public Admin(int id,String name,List<Long>phoneNumber,int age,Gender gender,Address address){
        super(id, name, phoneNumber, age,gender, address);
    }


    public Admin(int id,String name,List<Long>phoneNumber,int age,Gender gender,Address address,Long employeeId){
        super(id, name, phoneNumber, age,gender, address);
        this.employeeId=employeeId;
    }

    public long getEmployeeId(){
        return employeeId;
    }

    
}
