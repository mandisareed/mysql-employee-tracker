INSERT INTO department (name) VALUES ("production"), ("finance");
INSERT INTO roles (title, salary, deptId) VALUES ("production manager", 80000.00, 1), ("assistant production manager", 65000.00, 1), ("lead accountant", 70000.00, 2), ("accountant", 55000.00, 2);
INSERT INTO employee (firstName, lastName, roleId, managerId)
    VALUES
    ("Mandisa", "Reed", 1, null);
    
INSERT INTO employee (firstName, lastName, roleId, managerId)
    VALUES    
    ("Shawn", "Rollins", 2, null),
    ("Daniel", "Nelson", 3, 1),
    ("Keisha", "Offerman", 3, null),
    ("Adrian", "Query", 4, null);

-- can do a select concat (table.column, " " table.column) AS ___(w/e i wanna call this new column) FROM table