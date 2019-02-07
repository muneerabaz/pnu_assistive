DROP DATABASE IF EXISTS pnu_assistive;

CREATE DATABASE pnu_assistive;

\c pnu_assistive

CREATE TABLE users(
  id serial primary key,
  email varchar UNIQUE NOT NULL,
  password_digest varchar NOT NULL,
  is_admin boolean DEFAULT 'f'
);

CREATE TABLE clubs(
    club_id serial primary key,
    name_eng varchar ,
    name_arb varchar ,
    realtedTo varchar NOT NULL ,
    logo text ,
    twitter_account varchar ,
    instgram_account varchar,
    office text ,
    users_id INT, 
    foreign key(users_id) references users
);

CREATE TABLE announcements(
    announcement_id serial primary key ,
    issue_date date , 
    period text ,
    subject VARCHAR NOT NULL,
    type VARCHAR ,
    link VARCHAR ,
    day text ,
    hours INT ,
    club_id INT  ,
    foreign key(club_id) references clubs
);

CREATE TABLE admin(
    name varchar NOT NULL ,
    email varchar NOT NULL ,
    password varchar NOT NULL ,
    club_id INT  ,
    foreign key(club_id) references clubs
);

INSERT INTO users(email , password_digest) VALUES
('Ccis-ic@pnu.edu.sa', '12'),
('techminds_club@yahoo.com', '12'),
('TPSC_PNU@gmail.com', '12'),
('Nourahvolunteer@gmail.com', '12'),
('infosec.club.ccis@gmail.com', '12'),
('maatharah@gmail.com', '12'),
('nzaha@gmail.com', '12'),
('art@gmail.com','12'),
('engineering','12'),
('Pnuentreclub@gmail.com' ,'12'),
('psychologypnu1@gmail.com','12'),
('Health_Club@gmail.com','12');

INSERT INTO clubs(users_id, name_eng , name_arb, realtedTo, twitter_account , office, logo) 
VALUES
(6,'IT Club' ,'نادي تقنية المعلومات ', 'College of Computer anf Information Sciences' ,'@Ccis_ic','1.505.12' ,'https://pbs.twimg.com/profile_images/973930471011700736/g_EJLRXJ_400x400.jpg' ) ,
(5,'Tech Minds Club' ,'نادي  عقول التقنيه ','College of Computer anf Information Sciences' , '@Techminds_Club' , '1.33.3' ,'https://pbs.twimg.com/profile_images/916044519409438721/Zmz5vnoL.jpg' ) ,
(4,'TPSC_PNU' ,'نادي الإلقاء والمسرح', 'A4', '@TPSC_PNU'  , '2.22.2' , 'https://pbs.twimg.com/profile_images/570975902181380097/enG7HxTV_400x400.jpeg'),
(4,'Nourah volunteer' ,'نادي حاضنات نوره التطوعيه ','Community College' , '@nourahvolunteer' , 'a7.5.5' , 'http://medadcenter.com/sites/default/files/gG5DmZAB_400x400.jpg'  ) ,
(5,'Security club' , 'نادي امن المعلومات ' , 'College of Computer anf Information Sciences' , '@Securityclub3' , '1.22.88' , 'https://pbs.twimg.com/profile_images/1042420287311106048/pFT1eaF4_400x400.jpg' ) ,
(6,'Maatharah' , 'جمعية مأثرة الطلابية' , 'College of Computer anf Information Sciences' , '@maatharah' , '2.44.4' , 'https://pbs.twimg.com/profile_images/914389723895992321/aELc1qMU_400x400.jpg'),
(7,'Nzaha','نادي نزاهة','A4', '@NzPnu', 'A4.2' , 'https://pbs.twimg.com/profile_images/660059389437607936/XxLIHaMD_400x400.jpg'),
(8,'Art Club' , 'نادي الفن' ,'College of Arts and Design' , '@art_club_pnu', 'A5 2.203' , 'https://pbs.twimg.com/profile_images/378800000614776354/14f96457976166e2f92cc149ca040954_400x400.jpeg'),
(9,'Engineering','نادي الهندسة' ,'College of Engineering' , '@PNU_EnClub' , 'A4 1.222' , 'https://pbs.twimg.com/profile_images/1086296465411059712/DPtKsPIh_400x400.jpg'),
(10,' Entrepreneurship Club' , 'نادي ريادة الأعمال' , 'College of Business Administration','@PnuEntreClub' , 'A6 0.506' , 'https://pbs.twimg.com/profile_images/1049220102183374848/JbLsDWvi_400x400.jpg'),
(11,'Psychology club' , 'نادي علم النفس' , 'College Of Education' , '@PSYClub_pnu' ,'A7 2.2.08' , 'https://pbs.twimg.com/profile_images/935149763653226496/i3lCbIuq_400x400.jpg'),
(12,'Health Club' , 'النادي الصحي' , 'College of Nursing','@HcnPnu' ,'A10' , 'https://pbs.twimg.com/profile_images/1076919922465349635/KQDQ_cUe_400x400.jpg' );

INSERT INTO admin(name , email , password) VALUES('Muneera' , 'Muneerabinbaz@gmail.com' , 'muneera_password');


INSERT INTO announcements(club_id , subject , type , issue_date , day , hours ,period ,link) VALUES 
(25,'HTML , CSS' , 'Work shop' , '2/4/2019', 'Sunday',4,'3 days' ,'https://www.youtube.com/watch?v=y3UH2gAhwPI') ,
(26, 'SQL' , 'Work shop' , '12/3/2019' ,'Monday', 2,'1 day' ,'https://www.youtube.com/watch?v=9Pzj7Aj25lw' ),
(27, 'Photography',  'Event' , '3/4/2019' , 'Sunday' , 5 ,'1 day' ,'https://courses.laimoon.com/saudi-arabia/riyadh/media-creative-and-design/photography'),
(28,'Cyber security' , 'class' , '5/5/2019' , 'Thusday' , 4 ,'7 days ' ,'http://www.pnu.edu.sa/arr/NewsActivities/News/Pages/news699.aspx'),
(29,'Voluntary Work License' , 'License' , '1/5/1440' ,'Sunday', 2 ,'3 days' ,'https://twitter.com/nourahvolunteer/status/1085811472888819714'),
(30,'Basics of drawing' ,'Workshop' ,'2/6/1440 ' , 'Thursday' , 4 ,'2 days' ,'https://twitter.com/maatharah/status/1092652358935433216' ),
(31,'Final gathering for the club members','Event' , '4/7/1440','Monday' , 2 ,'one day' ,'https://twitter.com/NzPnu/status/982900645270257665'),
(32,'Voting','Online' , '11/5/1440' ,'Friday' , 3 ,'one week' ,'https://twitter.com/art_club_pnu/status/1091308593440268289');