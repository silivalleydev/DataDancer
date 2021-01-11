package com.wisemk79.datadancer.controller;

import java.util.HashMap;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class DemoController {
  @RequestMapping(value="/hello3", method= RequestMethod.GET)
  public HashMap<String, String> test3() {
	  
	  System.out.println("호");
      HashMap<String, String> map = new HashMap<String, String>();
      map.put("abcaa", "ddeeed");
      return map;
  }
}