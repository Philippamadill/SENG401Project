use SENG401;
delete from CurrentlyReading;
delete from WantToRead;
delete from AlreadyRead;
INSERT INTO CurrentlyReading (ISBN, username)
VALUES (100, 'user1'),
    (200, 'user1'),
    (300, 'user1'),
    (400, 'user2'),
    (500, 'user2'),
    (600, 'user2'),
    (700, 'user2'),
    (800, 'user3'),
    (900, 'user3'),
    (1000, 'user3'),
    (1100, 'user3');
INSERT INTO WantToRead (ISBN, username)
VALUES (100, 'user3'),
    (200, 'user3'),
    (300, 'user3'),
    (400, 'user1'),
    (1000, 'user2'),
    (1100, 'user2'),
    (1200, 'user1'),
    (1300, 'user1'),
    (1400, 'user1'),
    (1500, 'user1');
INSERT INTO AlreadyRead (ISBN, username)
VALUES (400, 'user1'),
    (500, 'user1'),
    (600, 'user1'),
    (100, 'user2'),
    (200, 'user2'),
    (300, 'user2'),
    (100, 'user3'),
    (200, 'user3'),
    (300, 'user3');