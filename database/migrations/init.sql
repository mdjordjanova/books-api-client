create table books.book(
   id serial PRIMARY KEY,
   title VARCHAR (50) NOT NULL,
   author_id INTEGER NOT NULL,
   CONSTRAINT author_id_fkey FOREIGN KEY (author_id)
      REFERENCES books.author (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
   published VARCHAR (4) NOT NULL,
   genre VARCHAR (50) NOT NULL
);

create table books.author(
   id serial PRIMARY KEY,
   name VARCHAR (50) NOT NULL
);