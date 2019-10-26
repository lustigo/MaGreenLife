CREATE TABLE "users" (
    "id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    "name"	TEXT NOT NULL,
    "username"	TEXT NOT NULL UNIQUE
);
CREATE TABLE "friendlist" (
    "user"	INTEGER NOT NULL,
    "follows"	INTEGER NOT NULL,
    PRIMARY KEY("user","follows")
    FOREIGN KEY(user) REFERENCES users(id)
    FOREIGN KEY(follows) REFERENCES users(id)
);

CREATE TABLE "eventtype" (
    "id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    "description"	TEXT NOT NULL,
    "description_personal"  TEXT NOT NULL,
    "score" INTEGER NOT NULL
);

CREATE TABLE "events" (
    "type"	INTEGER NOT NULL,
    "date"	INTEGER NOT NULL,
    "user"	INTEGER NOT NULL,
    "id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    FOREIGN KEY(user) REFERENCES users(id)
    FOREIGN KEY(type) REFERENCES eventtype(id)
);

--- example users
INSERT INTO users(name, username) VALUES("Peter","indeednotpeter");
INSERT INTO users(name, username) VALUES("Max","max_der_echte");

--- example events
insert into eventtype(description, description_personal, score) VALUES("%1 hat den MaCup genutzt!", "Du hast den MaCup genutzt!", 20);
insert into eventtype(description, description_personal, score) VALUES("%1 ist Bahn/Bus gefahren!", "Du bist mit der Bahn/Bus gefahren!", 50);
insert into eventtype(description, description_personal, score) VALUES("%1 hat die Fahrgastmenge in der Bahn getrackt!", "Du hast die Fahrgastmenge in der Bahn getrackt!", 10);
insert into eventtype(description, description_personal, score) VALUES("%1 hat die Tagesfrage korrekt beantwortet", "Du hast die Tagesfrage korrekt beantwortet!", 10);

--- example friendlist
insert into friendlist(user, follows) values(1, 2);
insert into friendlist(user, follows) values(2, 1);

--- example events
insert into events (type, date, user) values(1, strftime("%s", "now"), 1);
insert into events (type, date, user) values(1, strftime("%s", "now"), 2);
insert into events (type, date, user) values(2, strftime("%s", "now", "-1 days"), 1);
insert into events (type, date, user) values(2, strftime("%s", "now", "-2 days"), 2);
insert into events (type, date, user) values(1, strftime("%s", "now", "-1 days"), 1);
insert into events (type, date, user) values(1, strftime("%s", "now", "-2 days"), 2);
