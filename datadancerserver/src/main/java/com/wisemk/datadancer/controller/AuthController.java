package com.wisemk.datadancer.controller;

import java.util.HashMap;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController()
public class AuthController {
	
	@GetMapping("/login")
	public HashMap<String, String> login() {
		
		HashMap<String, String> data = new HashMap<String, String>();
		
		data.put("auth", "login");
		
		return data;
	}
	
}
