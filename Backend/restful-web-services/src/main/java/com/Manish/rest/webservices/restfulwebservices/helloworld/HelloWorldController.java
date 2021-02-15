package com.Manish.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
//Controller
@RestController
public class HelloWorldController {
	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello Wolrd";
	}
	
	//Hello World Bean Method
	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldBean() {	
		throw new RuntimeException("System Error!!Contact Support at 9785798852");
//		return new HelloWorldBean("Hello World");
	}
	//Hello World With Path Variable
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello  %s",name));
	}	
}
