package com.books.model;

import javax.persistence.*;

@Entity
@Table(name = "author")
public class Author {

    @Id
    @GeneratedValue(generator = "author_generator")
    @SequenceGenerator(
            name = "author_generator",
            sequenceName = "author_sequence",
            initialValue = 1000
    )
    private Long id;

    @Column(columnDefinition = "name")
    private String name;

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
}
