SELECT `name`, CAST(aes_decrypt(`email`, '4u7x!A%D*G-KaPdS') AS CHAR(255)) AS `email`, `phone` FROM `Users` AS `Users`;

select * from Users where CAST(aes_decrypt(`email`, '4u7x!A%D*G-KaPdS') AS CHAR(255)) like  '%jjjj%';

select * from Users;
truncate table Users;
 



INSERT INTO `Users` (`id`,`name`,`email`,`phone`,`createdAt`,`updatedAt`)
 VALUES (DEFAULT,'Gaurav',aes_encrypt('gaurav@gmail.com', '4u7x!A%D*G-KaPdS'),'1323455455','2023-01-04 13:19','2023-01-04 13:32:19');