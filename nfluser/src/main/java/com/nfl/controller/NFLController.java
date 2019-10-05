package com.nfl.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nfl.model.User;
import com.nfl.service.UserService;

@CrossOrigin
@RestController
public class NFLController {

	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public User register(@RequestBody User user) {
		User registeredUser=userService.regsiter(user);
		if(registeredUser.equals(new User())) {
		//logic for if the user registration fails
		}
		return registeredUser;
	}
	
	@PostMapping("/login")
	public User logIn(@RequestBody User user) {
		User loggedIn=userService.logIn(user);
		if(loggedIn.equals(new User())) {
			//logic for if login fails
		}
		return loggedIn;
	}
}
