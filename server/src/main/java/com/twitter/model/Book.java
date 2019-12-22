package com.twitter.model;

import javax.persistence.*;

@   Entity
@Table(name = "employees")
public class Book {

    private long id;
    private String title;
    private String author;
    private String pubDate;

    public Book() {}

    public Book(String title, String author, String pubDate) {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "title", nullable = false)
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    @Column(name = "author", nullable = false)
    public String getAuthor() {
        return author;
    }
    public void setAuthor(String author) {
        this.title = title;
    }

    @Column(name = "pub_date", nullable = false)
    public String getPubDate() {
        return pubDate;
    }
    public void setPubDate(String pubDate) {
        this.pubDate = pubDate;
    }

    @Override
    public String toString() {
        return "Book {" +
                "id: " + id +
                ", title: " + title +
                ", author: " + author +
                ", pubDate: " + pubDate +
                "}";
    }
}
