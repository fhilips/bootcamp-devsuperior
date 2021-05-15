package com.devsup.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsup.entities.Client;
	
@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

}
