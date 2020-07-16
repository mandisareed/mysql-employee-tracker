CREATE DATABASE employee_tracker_db;
USE employee_tracker_db;

create table department (
id int auto_increment not null,
name varchar(30) not null,
primary key (id)
);

create table roles (
id int auto_increment not null,
title varchar(30),
salary decimal (10, 2),
deptId int,
primary key (id),
foreign key (deptId) references department(id)
);

create table employee (
id int auto_increment not null,
firstName varchar(30) not null,
lastName varchar(30) not null,
roleId int,
managerId int,
primary key (id),
foreign key (roleId) references roles(id),
foreign key (managerId) references roles(title)
);