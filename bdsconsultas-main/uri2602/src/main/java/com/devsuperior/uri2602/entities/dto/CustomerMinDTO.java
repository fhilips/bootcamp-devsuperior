package com.devsuperior.uri2602.entities.dto;



import com.devsuperior.uri2602.projection.CustomerMinProjection;

public class CustomerMinDTO {

	private String name;
	
	public CustomerMinDTO() {
	}

	public CustomerMinDTO(String name) {
		this.name = name;
	}

	public CustomerMinDTO(CustomerMinProjection projection) {
		name = projection.getName();
	}
	
	String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "CustomerMinDTO [name=" + name + "]";
	}
}
