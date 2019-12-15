-- CREATE the company database and USE it
CREATE DATABASE company CHARACTER SET utf8mb4 collate utf8mb4_unicode_ci;
USE company;


-- CREATE the tables
CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `employee` ADD PRIMARY KEY (`id`);
ALTER TABLE `employee` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;


-- INSERT data
INSERT INTO employee (lastname, firstname, email) VALUES
('Ramirez', 'Violet', 'Violet.Ramirez@videnupu.pk'),
('Mannucci', 'Carlos', 'Carlos.Mannucci@wahahja.pn'),
('Ikeda', 'Susan', 'Susan.Ikeda@so.ac'),
('McGuire', 'Sean', 'Sean.McGuire@fut.td'),
('Cavicchi', 'Jon', 'Jon.Cavicchi@zan.pg'),
('Verbeek', 'Peter', 'Peter.Verbeek@onefiba.rs'),
('Wong', 'Todd', 'Todd.Wong@fe.hu'),
('Watson', 'Alice', 'Alice.Watson@jazus.cr'),
('Ciabatti', 'Millie', 'Millie.Ciabatti@faotori.qa'),
('Marino', 'Alejandro', 'Alejandro.Marino@uvhimvi.si'),
('Patterson', 'Maud', 'Maud.Patterson@dawmevgeb.gt'),
('Diez', 'Andre', 'Andre.Diez@isiavra.km'),
('Dean', 'Jackson', 'Jackson.Dean@atjon.cc'),
('Bernardi', 'Barbara', 'Barbara.Bernardi@kegavbag.kz'),
('Valk', 'Cameron', 'Cameron.Valk@pa.bo'),
('van Oosten', 'Calvin', 'Calvin.van Oosten@ekidafij.ps'),
('Mazzei', 'Ollie', 'Ollie.Mazzei@ze.ag'),
('Blake', 'Jack', 'Jack.Blake@kur.ru'),
('Tran', 'Edwin', 'Edwin.Tran@rezi.pf'),
('Butler', 'Celia', 'Celia.Butler@hilcehbi.tw'),
('Bouvier', 'Adele', 'Adele.Bouvier@ta.bg'),
('Amato', 'Dylan', 'Dylan.Amato@ukihom.gy'),
('Black', 'Louisa', 'Louisa.Black@bemufe.bs'),
('Ndiaye', 'Lloyd', 'Lloyd.Ndiaye@wilcu.cw'),
('Carrai', 'Mattie', 'Mattie.Carrai@ipe.bo'),
('van der Heijden', 'Stephen', 'Stephen.van der Heijden@fu.eh'),
('Rodgers', 'Ollie', 'Ollie.Rodgers@ufa.io'),
('Cantini', 'Brent', 'Brent.Cantini@wunpa.am'),
('Michel', 'Ricardo', 'Ricardo.Michel@do.tp'),
('Hunt', 'Gabriel', 'Gabriel.Hunt@ha.com'),
('Sanz', 'Chris', 'Chris.Sanz@ju.tn'),
('Guerrero', 'Cora', 'Cora.Guerrero@zuwovho.wf');