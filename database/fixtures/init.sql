insert into public.author (id, name) values (1,'John Ronald Reuel Tolkien');
insert into public.author (id, name) values (2,'Franz Kafka');
insert into public.author (id, name) values (3,'Stefan Zweig');

insert into public.book (id, title, author_id, published, genre) values (1,'The Lord of the Rings', 1, '1954', 'fantasy');
insert into public.book (id, title, author_id, published, genre) values (2,'The Hobbit', 1, '1937', 'fantasy');
insert into public.book (id, title, author_id, published, genre) values (3,'The Silmarillion', 1, '1977', 'mythopoeia');
insert into public.book (id, title, author_id, published, genre) values (4,'The Metamorphosis', 2, '1915', 'philosophical fiction');
insert into public.book (id, title, author_id, published, genre) values (5,'The Trial', 2, '1925', 'philosophical fiction');
insert into public.book (id, title, author_id, published, genre) values (6,'The Royal Game', 3, '1943', 'novella');