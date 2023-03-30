const userTable = `CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);
`;
const sampleData = `INSERT INTO users (name, email, phone) VALUES 
    ('John Doe', 'johndoe@example.com', '555-1234'),
    ('Jane Doe', 'janedoe@example.com', '555-5678'),
    ('Bob Smith', 'bobsmith@example.com', '555-9876'),
    ('Alice Johnson', 'alicejohnson@example.com', '555-5555'),
    ('Sam Lee', 'samlee@example.com', '555-1111'),
    ('Emily Taylor', 'emilytaylor@example.com', '555-2222'),
    ('Mike Brown', 'mikebrown@example.com', '555-3333'),
    ('Olivia Davis', 'oliviadavis@example.com', '555-4444'),
    ('Liam Wilson', 'liamwilson@example.com', '555-8888'),
    ('Sophie Martinez', 'sophiemartinez@example.com', '555-9999'),
    ('Luke Miller', 'lukemiller@example.com', '555-0000'),
    ('Hailey Rodriguez', 'haileyrodriguez@example.com', '555-7777'),
    ('Mason Lewis', 'masonlewis@example.com', '555-6666'),
    ('Victoria Hernandez', 'victoriahernandez@example.com', '555-2222'),
    ('Isaac Gonzalez', 'isaacgonzalez@example.com', '555-3333'),
    ('Grace Jackson', 'gracejackson@example.com', '555-4444'),
    ('Andrew Campbell', 'andrewcampbell@example.com', '555-1111'),
    ('Eva Young', 'evayoung@example.com', '555-5555'),
    ('Ethan Martinez', 'ethanmartinez@example.com', '555-7777'),
    ('Avery Williams', 'averywilliams@example.com', '555-8888'),
    ('Chloe Brown', 'chloebrown@example.com', '555-9999'),
    ('Nicholas Thompson', 'nicholasthompson@example.com', '555-0000'),
    ('Samantha Davis', 'samanthadavis@example.com', '555-5678'),
    ('Owen Clark', 'owenclark@example.com', '555-9876'),
    ('Lily Garcia', 'lilygarcia@example.com', '555-1111'),
    ('Caleb Rodriguez', 'calebrodriguez@example.com', '555-2222'),
    ('Aria Martinez', 'ariamartinez@example.com', '555-3333'),
    ('William Hernandez', 'williamhernandez@example.com', '555-4444')
`;

const selectQuery = "SELECT * FROM users"
const host = 'localhost';
const user = 'root';
const password = '';
const database = '2_second';
module.exports = {
    userTable : userTable,
    sampleData : sampleData,
    host : host,
    user : user,
    password : password,
    database : database,
    selectQuery : selectQuery
}