-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Image` VARCHAR(191) NULL,
    `title` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `isAvailable` BOOLEAN NOT NULL DEFAULT false,
    `description` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
