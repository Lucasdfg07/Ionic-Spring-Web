package com.algaworks.projeto.controller;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.algaworks.projeto.model.Fornecedor;
import com.algaworks.projeto.repository.Fornecedores;

@RestController
@RequestMapping("/api/fornecedores")
public class FornecedoresControllerAPI {
	
	@Autowired
	private Fornecedores fornecedores;
	
	@RequestMapping(value =	"", method = RequestMethod.GET)
	public Collection<Fornecedor> listaFornecedores() {
		return fornecedores.findAll();
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
		public Optional<Fornecedor> getFornecedor(@PathVariable("id") Long id) {
		return this.fornecedores.findById(id);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> removeFornecedor(@PathVariable("id") Long id) {
		Optional<Fornecedor> c = fornecedores.findById(id);
		
		if (c == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		fornecedores.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@RequestMapping(value = "", method = RequestMethod.POST)
	public  ResponseEntity<?> saveFornecedor(@RequestBody Fornecedor fornecedor) {
		System.out.println(fornecedor.getId()+"  "+fornecedor.getNome()+" "+fornecedor.getAvaliacao());
		if (fornecedor.getId() != null) {
			//return new ResponseEntity<>(HttpStatus.OK);
			return new ResponseEntity<Fornecedor> (fornecedores.save(fornecedor), HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.OK);
	}

}

