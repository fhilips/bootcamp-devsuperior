package com.devsuperior.dslearnbds.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dslearnbds.entities.TestePessoa;


public interface TPessoaRepo extends JpaRepository<TestePessoa, Long> {
	
//	@Query("SELECT obj FROM TPessoa obj WHERE "
//			+ "(id = :id ) AND "
//			+ "(LOWER(obj.name) LIKE LOWER(CONCAT('%',:name,'%'))) ")
//	TestePessoa findGene(String name, Long id);

//	@Query("SELECT DISTINCT obj FROM Product obj INNER JOIN obj.categories cats WHERE "
//			+ "(COALESCE(:categories) IS NULL OR cats IN :categories) AND "
//			+ "(LOWER(obj.name) LIKE LOWER(CONCAT('%',:name,'%'))) ")
//	Page<Product> find(List<Category> categories, String name, Pageable pageable);
}
