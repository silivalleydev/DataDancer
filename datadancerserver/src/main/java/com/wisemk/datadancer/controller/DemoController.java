package com.wisemk.datadancer.controller;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wisemk.datadancer.entity.TestEntity;
import com.wisemk.datadancer.repository.TestRepository;

@CrossOrigin
@RestController
public class DemoController {
  @Autowired 
  TestRepository testRepository;

  @Transactional
  @RequestMapping(value="/all", method= RequestMethod.GET)
  public List<TestEntity> selectAll() {
	  List<TestEntity> list = testRepository.findAll();
      
      
      return list;
  }
  
  @Transactional
  @RequestMapping(value="/insert", method= RequestMethod.GET)
  public List<TestEntity> insert() {
	  List<TestEntity> list = testRepository.findAll();
	  
	  TestEntity ts = new TestEntity();
	  ts.setName("blue");
      
	  TestEntity rs = testRepository.save(ts);
      System.out.println("Delete OK");
      System.out.println(rs);
      
      
      return list;
  }
  
  
  @Transactional
  @RequestMapping(value="/delete", method= RequestMethod.GET)
  public List<TestEntity> delete() {
	  List<TestEntity> list = testRepository.findAll();
      
      TestEntity rm = new TestEntity();
	  rm.setName("blue");
	  
	  Long rs1 = testRepository.deleteByName("day");
      
      System.out.println("Delete OK");
      System.out.println(rs1);
      
      return list;
  }
  
  @Transactional
  @RequestMapping(value="/update", method= RequestMethod.GET)
  public List<TestEntity> update() {
	  List<TestEntity> list = testRepository.findAll();
	  
	  Long param = (long) 12;
	  // 업데이트 로직 필요 
	  Optional<TestEntity> find = testRepository.findById(param);
	  TestEntity entity = find.orElse(null);
	  entity.setName("hack");
	  
	  testRepository.save(entity);
 
      return list;
  }
}