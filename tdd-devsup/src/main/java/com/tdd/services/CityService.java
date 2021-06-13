package com.tdd.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tdd.dto.CityDTO;
import com.tdd.entities.City;
import com.tdd.repositories.CityRepository;



@Service
public class CityService {
	@Autowired
	private CityRepository repository;
	
	public List<CityDTO> findAll() {		
		List<City> cities = repository.findAll(Sort.by(Sort.Direction.ASC, "name"));				
		return cities.stream().map(x -> copyToDto(x)).collect(Collectors.toList());
	}

	private CityDTO copyToDto(City city) {
		CityDTO dto = new CityDTO();
		dto.setId(city.getId());
		dto.setName(city.getName());		
		return dto;
	}

	@Transactional
	public CityDTO insert(CityDTO dto) {
		City entity = new City();
		entity.setName(dto.getName());
		entity = repository.save(entity);
		return new CityDTO(entity);
	}

	
}
