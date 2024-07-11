
show databases;
CREATE DATABASE referralDB;
USE referralDB;

CREATE TABLE referrals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    refereeName VARCHAR(255) NOT NULL,
    refereeEmail VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select * from referrals;
