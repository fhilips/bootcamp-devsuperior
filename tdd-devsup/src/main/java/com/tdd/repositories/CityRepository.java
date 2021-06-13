package com.tdd.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tdd.entities.City;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {

}
