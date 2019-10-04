package com.nflarchive.model;

import java.util.List;

public class Team {
	
	private String name;
	private String conference;
	private List<Player> playerList;
	
	public Team() {
		// TODO Auto-generated constructor stub
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getConference() {
		return conference;
	}

	public void setConference(String conference) {
		this.conference = conference;
	}

	public List<Player> getPlayerList() {
		return playerList;
	}

	public void setPlayerList(List<Player> playerList) {
		this.playerList = playerList;
	}

	@Override
	public String toString() {
		return "Team [name=" + name + ", conference=" + conference + ", playerList=" + playerList + "]";
	}
	
	

}
