package com.Manish.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
//Controller
@RestController
public class BasicAuthenticationController {
	
	//Hello World Bean Method
	@GetMapping(path = "/basicauth")
	public AuthenticationBean helloWorldBean() {	 
		return new AuthenticationBean("You are authenticated");
	}	
}
