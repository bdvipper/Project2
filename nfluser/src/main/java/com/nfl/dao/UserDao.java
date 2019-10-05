package com.nfl.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nfl.model.User;

@Repository
public interface UserDao extends JpaRepository<User, String> {

}
