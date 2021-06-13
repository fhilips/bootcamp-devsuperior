package com.tdd.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tdd.entities.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {

}
