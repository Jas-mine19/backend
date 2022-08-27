CREATE TABLE category (
    categoryId SERIAL PRIMARY KEY,
    categoryName VARCHAR(25),  
    UNIQUE (categoryName)   
);



CREATE TABLE flower (
    flowerId SERIAL PRIMARY KEY,
    flowerName VARCHAR,
    flowerPrice INT,
    flowerInformation VARCHAR(25),
    categoryId INT,
    FOREIGN KEY (categoryId) REFERENCES category(categoryId)
    );



CREATE TABLE advertising (
    cardId SERIAL PRIMARY KEY,
    discount VARCHAR,
    infromation VARCHAR
    );




CREATE TABLE users (
    userId SERIAL PRIMARY KEY,
    username VARCHAR,
    login VARCHAR,
    password INT 
);




CREATE TABLE basket (
    basketId SERIAL PRIMARY KEY,
    flowerId INT,
    userId INT,
    FOREIGN KEY(userId) REFERENCES users (userId),
    FOREIGN KEY (flowerId) REFERENCES flower (flowerId)
);




CREATE TABLE favorite (
    favoritId SERIAL PRIMARY KEY,
    flowerId INT,
    userId INT,
    FOREIGN KEY(userId) REFERENCES users(userId),
    FOREIGN KEY (flowerId) REFERENCES flower(flowerId)
);






