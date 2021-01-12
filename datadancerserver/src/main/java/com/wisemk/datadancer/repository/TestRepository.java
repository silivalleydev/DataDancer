package com.wisemk.datadancer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wisemk.datadancer.entity.TestEntity;

public interface TestRepository extends JpaRepository<TestEntity, Long>{
	
	Long deleteByName(String name);
}
