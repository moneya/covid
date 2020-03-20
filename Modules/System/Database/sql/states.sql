-- phpMyAdmin SQL Dump
-- version 4.0.10.14
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Aug 24, 2018 at 11:27 AM
-- Server version: 5.6.33
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `vault_cross`
--

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE IF NOT EXISTS `states` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `state_name` varchar(100) NOT NULL,
  `state_code` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=38 ;

--
-- Dumping data for table `states`
--

INSERT INTO `states` (`id`, `state_name`, `state_code`) VALUES
(1, 'ABIA', 'AB'),
(2, 'ADAMAWA', 'AD'),
(3, 'AKWA IBOM', 'AK'),
(4, 'ANAMBRA', 'AN'),
(5, 'BAUCHI', 'BA'),
(6, 'BAYELSA', 'BY'),
(7, 'BENUE', 'BN'),
(8, 'BORNO', 'BO'),
(9, 'CROSS RIVER', 'CR'),
(10, 'DELTA', 'DT'),
(11, 'EBONYI', 'EB'),
(12, 'EDO', 'ED'),
(13, 'EKITI', 'EK'),
(14, 'ENUGU', 'EN'),
(15, 'FCT', 'FCT'),
(16, 'GOMBE', 'GM'),
(17, 'IMO', 'IM'),
(18, 'JIGAWA', 'JG'),
(19, 'KADUNA', 'KD'),
(20, 'KANO', 'KN'),
(21, 'KATSINA', 'KT'),
(22, 'KEBBI', 'KB'),
(23, 'KOGI', 'KG'),
(24, 'KWARA', 'KW'),
(25, 'LAGOS', 'LA'),
(26, 'NASARAWA', 'NW'),
(27, 'NIGER', 'NG'),
(28, 'OGUN', 'OG'),
(29, 'ONDO', 'OD'),
(30, 'OSUN', 'OS'),
(31, 'OYO', 'OY'),
(32, 'PLATEAU', 'PL'),
(33, 'RIVERS', 'RV'),
(34, 'SOKOTO', 'SO'),
(35, 'TARABA', 'TR'),
(36, 'YOBE', 'YB'),
(37, 'ZAMFARA', 'ZF');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
