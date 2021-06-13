package com.tdd.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tdd.dto.EventDTO;
import com.tdd.entities.City;
import com.tdd.entities.Event;
import com.tdd.repositories.CityRepository;
import com.tdd.repositories.EventRepository;



@Service
public class EventService {
	@Autowired
	private EventRepository repository;
	
	@Autowired
	private CityRepository cityRepository;
	
	
	public Page<EventDTO> findAllPaged(PageRequest pageRequest) {		
		Page<Event> cities = repository.findAll(pageRequest);				
		return cities.map(x -> copyToDto(x));
	}	

	@Transactional
	public EventDTO insert(EventDTO dto) {		
		Event entity = dtoToEntity(dto);
		entity = repository.save(entity);
		return new EventDTO(entity);
	}

	private EventDTO copyToDto(Event event) {
		EventDTO dto = new EventDTO();
		dto.setId(event.getId());		
		dto.setCityId(event.getCity().getId());
		dto.setDate(event.getDate());
		dto.setName(event.getName());
		dto.setUrl(dto.getUrl());
		return dto;		
	}
	
	private Event dtoToEntity(EventDTO dto) {
		Event entity = new Event();
		entity.setId(dto.getId());
		entity.setDate(dto.getDate());
		entity.setUrl(dto.getUrl());
		entity.setName(dto.getName());
		Optional<City> city = cityRepository.findById(dto.getCityId());
		entity.setCity(city.get()); 
		
		return entity;
	}
	
}
