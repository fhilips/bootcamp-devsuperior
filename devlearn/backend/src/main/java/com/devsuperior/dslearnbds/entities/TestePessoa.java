package com.devsuperior.dslearnbds.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbL_tpessoa")
public class TestePessoa extends SuperPessoa implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String imgUri;
	private String teste;	
	
	
	public TestePessoa(Long id, String idade, String name, String imgUri, String teste) {
		super(id, idade);
		this.name = name;
		this.imgUri = imgUri;
		this.teste = teste;
	}
	
	public TestePessoa() {
		super();
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getImgUri() {
		return imgUri;
	}
	public void setImgUri(String imgUri) {
		this.imgUri = imgUri;
	}
		
	public String getTeste() {
		return teste;
	}

	public void setTeste(String teste) {
		this.teste = teste;
	}

	@Override
	public String toString() {
		return "TestePessoa [id=" + id + ", name=" + name + ", imgUri=" + imgUri + "]";
	}
	
	
	
}
