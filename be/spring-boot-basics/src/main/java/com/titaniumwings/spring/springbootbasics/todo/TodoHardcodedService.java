package com.titaniumwings.spring.springbootbasics.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
	
	private static List<Todo> todoList = new ArrayList<>();	
	
	static {
		todoList.add(new Todo(1, "yoga", true, "ritika", new Date()));
		todoList.add(new Todo(2, "gym", true, "ritika", new Date()));
		todoList.add(new Todo(3, "breakfast", true, "ritika", new Date()));
		todoList.add(new Todo(4, "lunch", true, "ritika", new Date()));
		todoList.add(new Todo(5, "dinner", true, "ritika", new Date()));
		todoList.add(new Todo(5, "yog nindra", true, "ritika", new Date()));

	}
	
	public List<Todo> getAllTodo(String user) {
		
		return todoList;
		
	}

}
