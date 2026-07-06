CREATE TABLE `bookings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`customerName` varchar(255) NOT NULL,
	`customerEmail` varchar(320) NOT NULL,
	`customerPhone` varchar(20) NOT NULL,
	`serviceType` varchar(255) NOT NULL,
	`serviceDescription` text,
	`address` text NOT NULL,
	`city` varchar(100) NOT NULL,
	`state` varchar(2) NOT NULL,
	`zipCode` varchar(10) NOT NULL,
	`preferredDate` timestamp NOT NULL,
	`preferredTimeSlot` enum('morning','afternoon','evening') NOT NULL,
	`status` enum('pending','confirmed','in_progress','completed','cancelled') NOT NULL DEFAULT 'pending',
	`adminNotes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `bookings_id` PRIMARY KEY(`id`)
);
