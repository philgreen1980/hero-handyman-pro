CREATE TABLE `membershipSavings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`membershipId` int NOT NULL,
	`serviceDate` timestamp NOT NULL,
	`serviceType` varchar(255) NOT NULL,
	`originalPrice` int NOT NULL,
	`discountAmount` int NOT NULL,
	`schedulingFeeSaved` int NOT NULL DEFAULT 7900,
	`totalSaved` int NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `membershipSavings_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `memberships` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int,
	`memberName` varchar(255) NOT NULL,
	`memberEmail` varchar(320) NOT NULL,
	`memberPhone` varchar(20) NOT NULL,
	`status` enum('active','expired','cancelled') NOT NULL DEFAULT 'active',
	`startDate` timestamp NOT NULL,
	`endDate` timestamp NOT NULL,
	`stripeCustomerId` varchar(255),
	`stripeSubscriptionId` varchar(255),
	`schedulingToken` varchar(64) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `memberships_id` PRIMARY KEY(`id`),
	CONSTRAINT `memberships_schedulingToken_unique` UNIQUE(`schedulingToken`)
);
