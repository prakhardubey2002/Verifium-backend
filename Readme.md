## To Clone Project using Git

```git
git clone https://github.com/prakhardubey2002/Verifium-backend.git
```
## To Start Backend
```npm
npm i
node index
``` 

## Create database for backend architecture with sample data
```sql
-- --------------------------------------------------------
-- Host:                         alibaba.mysql.polardb.ap-south-1.rds.aliyuncs.com
-- Server version:               8.0.13 - Source distribution
-- Server OS:                    Linux
-- HeidiSQL Version:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for tester
CREATE DATABASE IF NOT EXISTS `tester` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `tester`;

-- Dumping structure for table tester.certificates
CREATE TABLE IF NOT EXISTS `certificates` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `institute` varchar(255) DEFAULT NULL,
  `course` varchar(255) DEFAULT NULL,
  `certificate` varchar(255) DEFAULT NULL,
  `certificate_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table tester.certificates: ~7 rows (approximately)
INSERT INTO `certificates` (`id`, `name`, `institute`, `course`, `certificate`, `certificate_id`) VALUES
	(0, 'pra', 'inu1', 'CSE', 'Csex', 'rwet124'),
	(1, 'John Doe', 'Example University', 'Bachelor of Science in Computer Science', 'Degree Certificate', 'ABC123'),
	(2, 'Praks', 'certinu2', 'CSE', 'Launch Badge', 'SErte123'),
	(7, 'pra', 'inu1', 'CSE', 'Csex', 'rwet124'),
	(78, 'pra', 'inu1', 'CSE', 'Csex', 'rwet124'),
	(234, 'Brimin Wang', 'ALixwangux International College', 'Ai/ML', 'Starting with Apsara functionalities', 'rtw362'),
	(4537, 'Presing', 'Gyan Ganga Institute', 'CSE', 'ApsaraDb starter Badge', '12a');

-- Dumping structure for table tester.feedback
CREATE TABLE IF NOT EXISTS `feedback` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `feedback_text` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table tester.feedback: ~10 rows (approximately)
INSERT INTO `feedback` (`id`, `feedback_text`, `created_at`, `updated_at`) VALUES
	(1, 'This is great feedback!', '2023-03-06 17:05:54', '2023-03-06 17:05:54'),
	(2, 'This is great feedback!', '2023-03-06 17:21:45', '2023-03-06 17:21:45'),
	(3, 'new feedback', '2023-03-06 17:31:44', '2023-03-06 17:31:44'),
	(4, 'this isnsNK', '2023-03-06 18:09:45', '2023-03-06 18:09:45'),
	(5, 'This is test2', '2023-03-06 18:10:37', '2023-03-06 18:10:37'),
	(6, 'This is feedback', '2023-03-09 08:52:59', '2023-03-09 08:52:59'),
	(7, 'This is feedback', '2023-03-09 13:28:05', '2023-03-09 13:28:05'),
	(8, 'This ois himan', '2023-03-12 07:09:45', '2023-03-12 07:09:45'),
	(9, 'new feedback', '2023-03-12 07:13:06', '2023-03-12 07:13:06'),
	(10, 'This is text34', '2023-03-12 16:21:53', '2023-03-12 16:21:53');

-- Dumping structure for table tester.feedback_table
CREATE TABLE IF NOT EXISTS `feedback_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `institute_name` varchar(255) NOT NULL,
  `course_specialisation` varchar(255) NOT NULL,
  `feedback` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table tester.feedback_table: ~5 rows (approximately)
INSERT INTO `feedback_table` (`id`, `name`, `institute_name`, `course_specialisation`, `feedback`) VALUES
	(1, 'testuser', 'testinu', 'testcourse', 'testfeedback'),
	(22, 'This is  atest', 'test@isnti', 'cse', 'retw'),
	(23, 'Prakash', 'kashinu@wang', 'CSE', 'NA'),
	(24, 'Wushung', 'Wushunginstitute', 'Computer Science', 'NA'),
	(25, 'Wushung', 'Wushunginstitute', 'Computer Science', 'NA');

-- Dumping structure for table tester.nft_data
CREATE TABLE IF NOT EXISTS `nft_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file` mediumblob NOT NULL,
  `network` varchar(255) NOT NULL,
  `publicKey` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `symbol` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `attributes` text NOT NULL,
  `extUrl` varchar(255) NOT NULL,
  `maxSup` int(11) NOT NULL,
  `roy` int(11) NOT NULL,
  `adres` varchar(255) NOT NULL,
  `minted` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table tester.nft_data: ~4 rows (approximately)
INSERT INTO `nft_data` (`id`, `file`, `network`, `publicKey`, `name`, `symbol`, `description`, `attributes`, `extUrl`, `maxSup`, `roy`, `adres`, `minted`) VALUES
	(1, _binary '', 'Ethereum', '0x123456789abcdef', 'My NFT', 'NFT', 'This is a description of my NFT', '{"attribute1": "value1", "attribute2": "value2"}', 'https://example.com', 1000, 10, '0x987654321fedcba', '0'),
	(2, _binary '', 'Binance Smart Chain', '0x987654321fedcba', 'Another NFT', 'ANFT', 'This is another NFT', '{"attribute1": "value1", "attribute3": "value3"}', 'https://example.com/another', 500, 5, '0x123456789abcdef', '1'),
	(3, _binary '', 'Ethereum', '0x123456789abcdef', 'My NFT', 'NFT', 'This is a description of my NFT', '{"attribute1": "value1", "attribute2": "value2"}', 'https://example.com', 1000, 10, '0x987654321fedcba', '0'),
	(4, _binary '', 'Binance Smart Chain', '0x987654321fedcba', 'Another NFT', 'ANFT', 'This is another NFT', '{"attribute1": "value1", "attribute3": "value3"}', 'https://example.com/another', 500, 5, '0x123456789abcdef', '1');

-- Dumping structure for table tester.programming_languages
CREATE TABLE IF NOT EXISTS `programming_languages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `released_year` int(11) NOT NULL,
  `githut_rank` int(11) DEFAULT NULL,
  `pypl_rank` int(11) DEFAULT NULL,
  `tiobe_rank` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table tester.programming_languages: ~18 rows (approximately)
INSERT INTO `programming_languages` (`id`, `name`, `released_year`, `githut_rank`, `pypl_rank`, `tiobe_rank`, `created_at`, `updated_at`) VALUES
	(1, 'JavaScript', 1995, 1, 3, 7, '2023-01-29 16:03:59', '2023-01-29 16:03:59'),
	(2, 'Python', 1991, 2, 1, 3, '2023-01-29 16:03:59', '2023-01-29 16:03:59'),
	(4, 'TypeScript', 2012, 7, 10, 42, '2023-01-29 16:03:59', '2023-01-29 16:03:59'),
	(5, 'C#', 2000, 9, 4, 5, '2023-01-29 16:03:59', '2023-01-29 16:03:59'),
	(6, 'PHP', 1995, 8, 6, 8, '2023-01-29 16:03:59', '2023-01-29 16:03:59'),
	(7, 'C++', 1985, 5, 5, 4, '2023-01-29 16:03:59', '2023-01-29 16:03:59'),
	(8, 'C', 1972, 10, 5, 1, '2023-01-29 16:03:59', '2023-01-29 16:03:59'),
	(9, 'Ruby', 1995, 6, 15, 15, '2023-01-29 16:03:59', '2023-01-29 16:03:59'),
	(10, 'R', 1993, 33, 7, 9, '2023-01-29 16:03:59', '2023-01-29 16:03:59'),
	(11, 'Objective-C', 1984, 18, 8, 18, '2023-01-29 16:03:59', '2023-01-29 16:03:59'),
	(12, 'Swift', 2015, 16, 9, 13, '2023-01-29 16:03:59', '2023-01-29 16:03:59'),
	(13, 'Kotlin', 2011, 15, 12, 40, '2023-01-29 16:03:59', '2023-01-29 16:03:59'),
	(14, 'Go', 2009, 4, 13, 14, '2023-01-29 16:03:59', '2023-01-29 16:03:59'),
	(15, 'Rust', 2010, 14, 16, 26, '2023-01-29 16:03:59', '2023-01-29 16:03:59'),
	(16, 'Scala', 2004, 11, 17, 34, '2023-01-29 16:03:59', '2023-01-29 16:03:59'),
	(18, 'java', 2011, 22, 20, 25, '2023-01-29 20:40:12', '2023-01-29 20:40:36'),
	(19, 'dart', 2011, 13, 20, 25, '2023-01-29 20:40:43', '2023-01-29 20:40:43'),
	(20, 'dartx', 2011, 13, 20, 25, '2023-02-16 15:33:19', '2023-02-16 15:33:19');

-- Dumping structure for table tester.wallet
CREATE TABLE IF NOT EXISTS `wallet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=155 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table tester.wallet: ~14 rows (approximately)
INSERT INTO `wallet` (`id`, `address`) VALUES
	(1, '0x1234567890ABCDEF1234567890ABCDEF12345678'),
	(142, '7vNuzfun1WUkJvfZa6PVaRnXz6kRFFWnN2SqYsymrsBN'),
	(143, '2ySgbrocD3Hwg53yTGDBt4GEt7JnrUfq1rEr2R2PfjXF'),
	(144, '2ySgbrocD3Hwg53yTGDBt4GEt7JnrUfq1rEr2R2PfjXF'),
	(145, '2ySgbrocD3Hwg53yTGDBt4GEt7JnrUfq1rEr2R2PfjXF'),
	(146, '2ySgbrocD3Hwg53yTGDBt4GEt7JnrUfq1rEr2R2PfjXF'),
	(147, '4wHF5FHWeE6gsjEe7tPNswAfj3yCJs47auseaeqZsBX3'),
	(148, '4wHF5FHWeE6gsjEe7tPNswAfj3yCJs47auseaeqZsBX3'),
	(149, '4wHF5FHWeE6gsjEe7tPNswAfj3yCJs47auseaeqZsBX3'),
	(150, '4wHF5FHWeE6gsjEe7tPNswAfj3yCJs47auseaeqZsBX3'),
	(151, '4wHF5FHWeE6gsjEe7tPNswAfj3yCJs47auseaeqZsBX3'),
	(152, '4wHF5FHWeE6gsjEe7tPNswAfj3yCJs47auseaeqZsBX3'),
	(153, '4wHF5FHWeE6gsjEe7tPNswAfj3yCJs47auseaeqZsBX3'),
	(154, '4wHF5FHWeE6gsjEe7tPNswAfj3yCJs47auseaeqZsBX3');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

```


## Update config for local setup
```javascript
const config = {
    db: {
      host: "HostLink",
      user: "username",
      password: "password",
      database: "tester",
      port:"3306"
    },
    listPerPage: 20,//list element Count
  };
  module.exports = config;
```