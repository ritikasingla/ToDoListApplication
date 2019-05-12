package com.titaniumwings.spring.springbootbasics.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodosController {

	@Autowired
	TodoHardcodedService todoharcodedservice;
	
	@GetMapping("/users/{user}/todos")
	public List<Todo> getAllTodos(@PathVariable String user) {
		
		return todoharcodedservice.getAllTodo(user);
	}
}
