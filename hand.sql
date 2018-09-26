-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Sep 26, 2018 at 11:49 PM
-- Server version: 5.6.35
-- PHP Version: 7.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `poker_machine_learning`
--

-- --------------------------------------------------------

--
-- Table structure for table `hand`
--

CREATE TABLE `hand` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `win` int(20) NOT NULL,
  `lose` int(20) NOT NULL,
  `total` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hand`
--

INSERT INTO `hand` (`id`, `name`, `win`, `lose`, `total`) VALUES
(1, 'HighCard', 0, 0, 0),
(2, 'OnePair', 0, 0, 0),
(3, 'TwoPair', 0, 0, 0),
(4, 'ThreeOfAKind', 0, 0, 0),
(5, 'Straight', 0, 0, 0),
(6, 'Flush', 0, 0, 0),
(7, 'FullHouse', 0, 0, 0),
(8, 'FourOfAKind', 0, 0, 0),
(9, 'StraightFlush', 0, 0, 0),
(10, 'Totals', 0, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hand`
--
ALTER TABLE `hand`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hand`
--
ALTER TABLE `hand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
