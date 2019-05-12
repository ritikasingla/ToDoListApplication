package com.titaniumwings.spring.springbootbasics.helloworld;

public class Books {

	
	private String name;
	private int id;
	
	public Books(String name, int id) {
		this.name = name;
		this.id=id;
	}
	public String getName() {
		return name;
	}
	public int getId() {
		return id;
	}
	
	
}
