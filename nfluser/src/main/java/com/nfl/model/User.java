package com.nfl.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="STPUser")
public class User {
	
	@Id
	@Column(length=100, nullable=false)
	private String username;
	@Column(length=100, nullable=false)
	private String password;
	@Column(length=100, nullable=true)
	private String email;
	@Column(length=20, nullable=true)
	private String favTeam;
	public User() {
		// TODO Auto-generated constructor stub
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFavTeam() {
		return favTeam;
	}

	public void setFavTeam(String favTeam) {
		this.favTeam = favTeam;
	}

	@Override
	public String toString() {
		return "User [username=" + username + ", password=" + password + ", email=" + email + ", favorite team=" + favTeam + "]";
	}

	
	
	
	

}
