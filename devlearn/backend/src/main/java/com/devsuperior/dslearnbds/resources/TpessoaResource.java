package com.devsuperior.dslearnbds.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dslearnbds.dto.DeliverRevisionDTO;
import com.devsuperior.dslearnbds.entities.TestePessoa;
import com.devsuperior.dslearnbds.repositories.TPessoaRepo;
import com.devsuperior.dslearnbds.services.DeliverService;

@RestController
@RequestMapping(value = "/tpessoa")
public class TpessoaResource {

	@Autowired
	private TPessoaRepo repo;
	
	@PostMapping
	public ResponseEntity<Void> save( @RequestBody TestePessoa p) {
		System.out.println(p.getImgUri());
		repo.save(p);
		
		System.out.println("a");
		return ResponseEntity.noContent().build();
	}
	
	@GetMapping(value = "get")
	public void getl(@PathVariable Long id) {
		
		// findGene = repo.findGene(p.getName(), p.getImgUri(), p.getId());
		//System.out.println(findGene);
		//repo.save(p);
		//
		
		
	}
}
