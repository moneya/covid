-- phpMyAdmin SQL Dump
-- version 4.0.10.14
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Sep 17, 2018 at 01:19 PM
-- Server version: 5.6.33
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `vault_handesk`
--

-- --------------------------------------------------------

--
-- Table structure for table `parties`
--

CREATE TABLE IF NOT EXISTS `parties` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `acronym` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `parties_name_unique` (`name`),
  UNIQUE KEY `parties_acronym_unique` (`acronym`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=92 ;

--
-- Dumping data for table `parties`
--

INSERT INTO `parties` (`name`, `acronym`) VALUES
('Accord Party', 'A'),
('Action Alliance', 'AA'),
('AFRICAN ACTION CONGRESS', 'AAC'),
('ADVANCED ALLIED PARTY', 'AAP'),
('All Blending Party ', 'ABP'),
('Advanced Congress Of Democrats', 'ACD'),
('Allied Congress Party of Nigeria', 'ACPN'),
('Alliance For Democracy', 'AD'),
('African Democratic Congress', 'ADC'),
('Action Democratic Party', 'ADP'),
('All Grassroots Alliance', 'AGA'),
('ALL GRAND ALLIANCE PARTY', 'AGAP'),
('ADVANCED NIGERIA DEMOCRATIC PARTY', 'ANDP'),
('Alliance for New Nigeria', 'ANN'),
('ALLIANCE NATIONAL PARTY', 'ANP'),
('Abundant Nigeria Renewal Party', 'ANRP'),
('African Peoples Alliance', 'APA'),
('ALL PROGRESSIVES CONGRESS', 'APC'),
('Advanced Peoples Democratic Alliance ', 'APDA'),
('All Progressives Grand Alliance', 'APGA'),
('ALLIED PEOPLES MOVEMENT', 'APM'),
('ALTERNATIVE PARTY OF NIGERIA', 'APN'),
('ACTION PEOPLES PARTY', 'APP'),
('ALLIANCE OF SOCIAL DEMOCRATS', 'ASD'),
('ALLIANCE FOR A UNITED NIGERIA', 'AUN'),
('BETTER NIGERIA PROGRESSIVE PARTY', 'BNPP'),
('Coalition for Change', 'C4C'),
('CHANGE NIGERIA PARTY', 'CNP'),
('CONGRESS OF PATRIOTS', 'COP'),
('DEMOCRATIC ALTERNATIVE', 'DA'),
('Democratic Peoples Congress', 'DPC'),
('Democratic Peoples Party', 'DPP'),
('Freedom and Justice Party', 'FJP'),
('FRESH DEMOCRATIC PARTY', 'FRESH'),
('Grassroots Development Party of Nigeria', 'GDPN'),
('Green Party of Nigeria', 'GPN'),
('HOPE DEMOCRATIC PARTY', 'HDP'),
('INDEPENDENT DEMOCRATS', 'ID'),
('Justice Must Prevail Party', 'JMPP'),
('Kowa Party', 'KP'),
('LIBERATION MOVEMENT', 'LM'),
('Labour Party', 'LP'),
('Legacy Party of Nigeria', 'LPN'),
('Mass Action Joint Alliance ', 'MAJA'),
('Modern Democratic Party', 'MDP'),
('MASSES MOVEMENT OF NIGERIA', 'MMN'),
('MEGA PARTY OF NIGERIA ', 'MPN'),
('MOVEMENT FOR THE RESTORATION AND DEFENCE OF DEMOCRACY', 'MRDD'),
('NATIONAL ACTION COUNCIL', 'NAC'),
('NIGERIA COMMUNITY MOVEMENT PARTY', 'NCMP'),
('National Conscience Party', 'NCP'),
('Nigeria Democratic Congress Party', 'NDCP'),
('NATIONAL DEMOCRATIC LIBERTY PARTY', 'NDLP'),
('NIGERIA ELEMENTS PROGRESSIVE PARTY', 'NEPP'),
('NIGERIA FOR DEMOCRACY', 'NFD'),
('New Generation Party of Nigeria ', 'NGP'),
('National Interest Party', 'NIP'),
('New Nigeria Peoples Party', 'NNPP'),
('NIGERIA PEOPLES CONGRESS', 'NPC'),
('New Progressive Movement', 'NPM'),
('National Rescue Movement', 'NRM'),
('NATIONAL UNITY PARTY', 'NUP'),
('People’s Alliance for National Development & Liberty', 'PANDEL'),
('PEOPLES COALITION PARTY', 'PCP'),
('People For Democratic Change', 'PDC'),
('Peoples Democratic Movement ', 'PDM'),
('Peoples Democratic Party', 'PDP'),
('Progressive Peoples Alliance', 'PPA'),
('Providence People’s Congress', 'PPC'),
('Peoples Party of Nigeria', 'PPN'),
('PEOPLES PROGRESSIVE PARTY', 'PPP'),
('PEOPLES REDEMPTION PARTY', 'PRP'),
('People’s Trust', 'PT'),
('REFORM AND ADVANCEMENT PARTY', 'RAP'),
('Re-build Nigeria Party', 'RBNP'),
('Restoration Party of Nigeria', 'RP'),
('SAVE NIGERIA CONGRESS', 'S.N.C'),
('Social Democratic Party', 'SDP'),
('Sustainable National Party', 'SNP'),
('Socialist Party of Nigeria', 'SPN'),
('UNITED PEOPLES CONGRESS', 'U.P.C'),
('United Democratic Party', 'UDP'),
('UNITED PATRIOTS', 'UP'),
('Unity Party of Nigeria', 'UPN'),
('United Progressive Party', 'UPP'),
('WE THE PEOPLE NIGERIA', 'WTPN'),
('YOUNG DEMOCRATIC PARTY', 'YDP'),
('YES ELECTORATES SOLIDARITY', 'YES'),
('YOUTH PARTY', 'YP'),
('Young Progressive Party', 'YPP'),
('ZENITH LABOUR PARTY', 'ZLB');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
