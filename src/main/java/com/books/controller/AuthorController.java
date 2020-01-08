package com.books.controller;

import com.books.exception.ResourceNotFoundException;
import com.books.model.Author;
import com.books.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class AuthorController {

    @Autowired
    private AuthorRepository authorRepository;

    @GetMapping("/authors")
    public List<Author> getAuthors() {
        return authorRepository.findAll();
    }

    @PostMapping("/authors")
    public Author createAuthor(@Valid @RequestBody Author author) {
        return authorRepository.save(author);
    }

    @PutMapping("/authors/{id}")
    public Author updateAuthor(@PathVariable Long id,
                                   @Valid @RequestBody Author authorRequest) {
        return authorRepository.findById(id)
                .map(author -> {
                    author.setName(authorRequest.getName());
                    return authorRepository.save(author);
                }).orElseThrow(() -> new ResourceNotFoundException("Author not found with id " + id));
    }

    @DeleteMapping("/authors/{id}")
    public ResponseEntity<?> deleteAuthor(@PathVariable Long id) {
        return authorRepository.findById(id)
                .map(author -> {
                    authorRepository.delete(author);
                    return ResponseEntity.ok().build();
                }).orElseThrow(() -> new ResourceNotFoundException("Author not found with id " + id));
    }
}
