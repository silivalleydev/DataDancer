package com.wisemk.datadancer.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Index {
	@GetMapping("/")
	public String index() {
		return "Hello World";
	}
}
