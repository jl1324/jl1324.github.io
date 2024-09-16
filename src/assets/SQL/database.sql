-- Create Users Table
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone_number VARCHAR(20),
    dob DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Items Table
CREATE TABLE items (
    item_id INT PRIMARY KEY AUTO_INCREMENT,
    seller_id INT,
    item_name VARCHAR(255) NOT NULL,
    item_description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    listed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (seller_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Create Events Table

CREATE TABLE swap (
    swap_id INT PRIMARY KEY AUTO_INCREMENT,
    user1 INT,
    user2 INT,
    item1 INT,
    item2 INT,
    cash1 DECIMAL(10, 2),
    cash2 DECIMAL(10, 2),
    event_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user1) REFERENCES users(user_id) ON DELETE SET NULL,
    FOREIGN KEY (user2) REFERENCES users(user_id) ON DELETE SET NULL
);


CREATE TABLE payments (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    card_number VARBINARY(255),  -- Encrypted card number
    card_expiry DATE,            -- Expiry date does not need encryption
    card_holder_name VARCHAR(255), -- Name does not need encryption
    card_cvv VARBINARY(10),       -- Encrypted CVV
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    reviewer_id INT,
    reviewee_id INT,
    item_id INT,
    description TEXT,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (reviewer_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (item_id) REFERENCES items(item_id) ON DELETE CASCADE
);