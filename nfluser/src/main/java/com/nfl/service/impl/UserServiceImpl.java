package com.nfl.service.impl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nfl.dao.UserDao;
import com.nfl.model.User;
import com.nfl.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDao dao;

	@Override
	public User regsiter(User user) {
		User registeredUser= new User();
		if(user.getUsername()!=null&&!(user.getUsername().equals(""))&&user.getPassword()!=null&&!(user.getPassword().equals(""))) {
			List<User> users= dao.findAll();
			boolean cont=true;
			for(User u: users) {
				if(u.getUsername().equals(user.getUsername())) {
					cont=false;
				}
			}
			if(cont) {
				return dao.save(user);
			}
		}
		return registeredUser;
	}

	@Override
	public User logIn(User user) {
		User loggedIn= new User();
		if(user.getUsername()!=null&&!(user.getUsername().equals(""))&&user.getPassword()!=null&&!(user.getPassword().equals(""))) {
			List<User> users= dao.findAll();
			for(User u: users) {
				if(u.getUsername().equals(user.getUsername())&&u.getPassword().equals(user.getPassword())) {
					loggedIn=user;
				}
			}
		}
		return loggedIn;
	}
	
}
