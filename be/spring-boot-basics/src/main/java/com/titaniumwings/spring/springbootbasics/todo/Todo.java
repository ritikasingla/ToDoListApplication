package com.titaniumwings.spring.springbootbasics.todo;

import java.util.Date;

public class Todo {

	private int id;
	private String task;
	private boolean status;
	private String username;
	private Date targetDate;
	
	
	
	public Todo(int id, String task, boolean status, String username, Date targetDate) {
		super();
		this.id = id;
		this.task = task;
		this.status = status;
		this.username = username;
		this.targetDate = targetDate;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTask() {
		return task;
	}
	public void setTask(String task) {
		this.task = task;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Date getTargetDate() {
		return targetDate;
	}
	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}
	@Override
	public String toString() {
		return "Todo [id=" + id + ", task=" + task + ", status=" + status + ", username=" + username + ", targetDate="
				+ targetDate + "]";
	}
	
	
}
