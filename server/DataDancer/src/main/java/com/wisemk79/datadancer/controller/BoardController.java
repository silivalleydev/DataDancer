package com.wisemk79.datadancer.controller;

import java.util.HashMap;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class BoardController {
	public HashMap<String, String> boardlist() {
		
		HashMap<String, String> data = new HashMap<String, String>();
		
		data.put("bdlist", "data");
		return data;
	}
	
}
