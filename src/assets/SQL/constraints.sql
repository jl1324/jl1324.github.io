DELIMITER //

CREATE TRIGGER after_swap_insert
AFTER INSERT ON swap
FOR EACH ROW
BEGIN
    -- Delete items associated with the swap
    DELETE FROM items WHERE item_id = NEW.item1 OR item_id = NEW.item2;
END //

DELIMITER ;



DELIMITER //

CREATE TRIGGER before_insert_swap
BEFORE INSERT ON swap
FOR EACH ROW
BEGIN
    -- Check if either cash1 or cash2 is not null or zero
    IF (NEW.cash1 IS NOT NULL AND NEW.cash1 != 0) OR (NEW.cash2 IS NOT NULL AND NEW.cash2 != 0) THEN
        -- Check if user1 has an entry in the payments table
        IF NOT EXISTS (SELECT 1 FROM payments WHERE user_id = NEW.user1) THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'User1 does not have a valid payment record.';
        END IF;
        
        -- Check if user2 has an entry in the payments table
        IF NOT EXISTS (SELECT 1 FROM payments WHERE user_id = NEW.user2) THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'User2 does not have a valid payment record.';
        END IF;
    END IF;
END //

DELIMITER ;


DELIMITER //

CREATE TRIGGER before_insert_review
BEFORE INSERT ON reviews
FOR EACH ROW
BEGIN
    -- Check if a swap entry exists where reviewer_id and reviewee_id are either user1 and user2 or user2 and user1
    -- and item_id matches item1 or item2.
    IF NOT EXISTS (
        SELECT 1
        FROM swap
        WHERE (user1 = NEW.reviewer_id AND user2 = NEW.reviewee_id
               OR user1 = NEW.reviewee_id AND user2 = NEW.reviewer_id)
          AND (item1 = NEW.item_id OR item2 = NEW.item_id)
    ) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'The review cannot be added because no valid swap exists.';
    END IF;
END //

DELIMITER ;

