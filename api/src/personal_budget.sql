-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 11, 2022 at 09:32 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `personal_budget`
--

-- --------------------------------------------------------

--
-- Table structure for table `operations`
--

CREATE TABLE `operations` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `type` varchar(6) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `date` date NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `operations`
--

INSERT INTO `operations` (`id`, `name`, `type`, `amount`, `date`, `user_id`) VALUES
(6, 'Blue Jeans', 'Income', '51.00', '2022-08-22', 55),
(11, 'Perro Con Perro', 'income', '36.00', '2022-08-20', 8),
(12, 'Coca Cola', 'income', '36000000.00', '2022-08-20', 8),
(16, 'Vue', 'Income', '27.60', '2022-10-08', 55),
(18, 'Games', 'Egress', '58.00', '2022-10-01', 55),
(24, 'Otra De Prueba', 'Income', '100.00', '2022-10-09', 55),
(25, 'Otra', 'Income', '100.00', '2022-10-09', 55);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(8, 'Luis', 'luis@gmail.com', '123456789'),
(42, 'Pedro Sanchez', 'Sanchez@gmail.com', '$2b$10$iBIkRa6PA5hp25bjgnb4cOubvtIbCOd83HIVPj4ASok7yMfi9AfTe'),
(46, 'Pedro Sanchez', 'Sanchezz@gmail.com', '$2b$10$ydqVQEZ9josBtNuh1Jd7yOkQZps78jYCn0B3zHoblcRKlC0RR9DLy'),
(47, 'Pedro Sanchez', 'Sanchezq@gmail.com', '$2b$10$PlnOYYjOnWeDdOlKQYa2fOMlpQsr35yNUk0o1p/RaOW4MipVHi6tG'),
(48, 'Pedro Sanchez', 'Sanchezq19@gmail.com', '$2b$10$qEX1gSYNAI7mKd9w4pHjSuqEhlDZJMiGJTdDraYQnGyC254y3pVYm'),
(49, 'Pedro Sanchez', 'Sanchezq199@gmail.com', '$2b$10$1/j6fKYWTBFZqn0JbGt.XuxPEtbuL.HVNGfcifkm0j77KR323lMJq'),
(50, 'Pedro Sanchez', 'Sanchezq1996@gmail.com', '$2b$10$179D1A5V.SHpTGHZ1ozn.O/g9gbsc05e9KTyUUqzt3Y60qCDVoXtO'),
(51, 'Pedro Sanchez', 'Sanchezq1998@gmail.com', '$2b$10$Oa55WBl5WJPib6.wNu.Um.C5CaNzmZZzOu3od6xxZ6Ap0OaA2ZXY6'),
(52, 'Pedro Sanchez', 'Sanchezq19798@gmail.com', '$2b$10$RRa15BTbCg.faPYVjxvp3e.7OEAbqkcgw/GAen2XV5jC3FD7uTmxa'),
(53, 'Pedro Sanchez', 'Sanch@gmail.com', '$2b$10$vSn4H7nOxG9LC4ETJ66dPOr4B9ehK0cLu98qb/NitLYpO2bJ3ncmi'),
(54, 'Casimiro', 'casimiro@gmail.com', '$2b$10$N5QudUFw5CBPMmZzt.yP5.sIqAfCuKicQeRpveSuPQFOvgEUvaYUe'),
(55, 'Luis Salcedo', 'luis.salcedo@gmail.com', '$2b$10$ES.ODAeGwqIkGjmdWtakzO3SHuJmki4n.UvHCbHOs/Uc7OmDmQUc6'),
(56, 'name', 'email', 'password'),
(57, 'Pedrito', 'pedrito@gmail.com', '$2b$10$hMaRP13LMBKDatxIM2feZeXU6PXr0NvLm0YZmojCMzO5zpBefX9Ze'),
(58, 'Pedrito', 'pedritto@gmail.com', '$2b$10$vWWtA4t8HsgcnmabvLCqP.hh6qaLZAAQ/ug9SyM2V.7vF22uFBI8u'),
(59, 'Servicios', 'luis.salcedo17@gmail.com', '$2b$10$i9.kPCYaxAnp4z.pVJ54muWmgtgi3xqiLPx1SQGJ1BhHTug6gMdxm'),
(60, 'Servicios', 'luis.salcedo27@gmail.com', '$2b$10$t62d/UPQHURM3GkJk0I40.CRsMvocZNvNbM2PqBZc9sur3NN2/zVK'),
(61, 'Services', 'luis_1154@hotmail.com', '$2b$10$RgVLUNJI.OQTH72Ge9sn4./59FofDrm4xvUcY94SZcvUBB1a1J/GC'),
(62, 'Servicios', 'admin@gmail.com', '$2b$10$B0n9hlC3krHXn0FQMlBD1edjKjUnc8Kvob7J.Z08E3k9./uT7l/A6');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `operations`
--
ALTER TABLE `operations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `operations`
--
ALTER TABLE `operations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `operations`
--
ALTER TABLE `operations`
  ADD CONSTRAINT `operations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
