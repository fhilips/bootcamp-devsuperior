package com.devsuperior.bds02.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.bds02.dto.CityDTO;
import com.devsuperior.bds02.service.CityService;

@RestController
@RequestMapping(value = "/cities")
public class CityController {

	@Autowired
	private CityService service;
	
	@GetMapping
	public ResponseEntity<List<CityDTO>> findAllSortedByName(){
		List<CityDTO> entity = service.findAllSortedByName();	
		
		return ResponseEntity.ok(entity);	
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<CityDTO> deleteById(@PathVariable Long id){
		service.delete(id);	
		
		return ResponseEntity.noContent().build();	
	}
}
