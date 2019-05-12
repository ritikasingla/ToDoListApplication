package com.titaniumwings.spring.springbootbasics.helloworld;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class BooksController {

	@GetMapping("/books")
	public List<Books> getAllBooks() {
		return Arrays.asList(new Books("ritika", 1));
	}
	
	@RequestMapping(method=RequestMethod.GET, path="/hello-world")
	public String helloWorld() {
		return "Hello World";
	}
	
	@GetMapping("/books/{bookName}")
	public String bookNameMethod(@PathVariable String bookName) {
		
		throw new RuntimeException("something went wrong");
		//return String.format("book is: %s", bookName);
	}
}
