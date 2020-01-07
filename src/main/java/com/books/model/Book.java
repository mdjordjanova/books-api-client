package com.books.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Table(name = "book")
public class Book {

    @Id
    @GeneratedValue(generator = "book_generator")
    @SequenceGenerator(
            name = "book_generator",
            sequenceName = "book_sequence",
            initialValue = 1000
    )
    private Long id;

    @Column(columnDefinition = "title")
    private String title;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "author_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Author author;

    @Column(columnDefinition = "published")
    private String published;

    @Column(columnDefinition = "genre")
    private String genre;
}
