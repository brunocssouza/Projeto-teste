-- CreateTable
CREATE TABLE `ticket` (
    `ticket_id` BINARY(16) NOT NULL DEFAULT (uuid_to_bin(uuid())),
    `ticket_name` VARCHAR(45) NULL,

    PRIMARY KEY (`ticket_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
