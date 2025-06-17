-- CreateTable
CREATE TABLE `user` (
    `user_id` BINARY(16) NOT NULL DEFAULT (uuid_to_bin(uuid())),
    `user_name` VARCHAR(45) NULL,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
