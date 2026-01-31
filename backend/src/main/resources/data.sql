-- Categories
INSERT INTO categories (name, sort_order) VALUES ('Trending Now', 1);
INSERT INTO categories (name, sort_order) VALUES ('Popular Series', 2);
INSERT INTO categories (name, sort_order) VALUES ('Crime & Drama', 3);
INSERT INTO categories (name, sort_order) VALUES ('Sci-Fi & Fantasy', 4);
INSERT INTO categories (name, sort_order) VALUES ('Action & Thriller', 5);
INSERT INTO categories (name, sort_order) VALUES ('Romantic', 6);
INSERT INTO categories (name, sort_order) VALUES ('Comedy', 7);

-- Featured titles for hero banner
-- Peaky Blinders
INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'Peaky Blinders',
  'A gangster family epic set in 1919 Birmingham, England, centered on a gang who sew razor blades in the peaks of their caps.',
  'https://image.tmdb.org/t/p/original/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg',
  'https://www.youtube.com/watch?v=oVzVdvGICXU',
  'SERIES',
  1,
  'Cillian Murphy, Helen McCrory, Paul Anderson, Sophie Rundle',
  'English',
  2013,
  'TV-MA',
  'Crime, Drama, Action',
  1,
  CURRENT_TIMESTAMP
);

-- Stranger Things
INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'Stranger Things',
  'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
  'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
  'https://www.youtube.com/watch?v=b9EkMc79ZSU',
  'SERIES',
  1,
  'Millie Bobby Brown, Finn Wolfhard, David Harbour, Winona Ryder',
  'English',
  2016,
  'TV-14',
  'Sci-Fi, Horror, Drama, Thriller',
  1,
  CURRENT_TIMESTAMP
);

-- Breaking Bad
INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'Breaking Bad',
  'A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family''s financial future.',
  'https://image.tmdb.org/t/p/original/zzWGRw277MNoCs3zhyG3YmYQsXv.jpg',
  'https://www.youtube.com/watch?v=HhesaQXLuRY',
  'SERIES',
  1,
  'Bryan Cranston, Aaron Paul, Anna Gunn, RJ Mitte',
  'English, Spanish',
  2008,
  'TV-MA',
  'Crime, Drama, Thriller',
  1,
  CURRENT_TIMESTAMP
);

-- Squid Game
INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'Squid Game',
  'Hundreds of cash-strapped players accept a strange invitation to compete in children''s games. Inside, a tempting prize awaits with deadly high stakes.',
  'https://image.tmdb.org/t/p/original/oaGvjB0DvdhXhOAuADfHb261ZHa.jpg',
  'https://www.youtube.com/watch?v=oqxAJKy0ii4',
  'SERIES',
  1,
  'Lee Jung-jae, Park Hae-soo, Wi Ha-joon, Jung Ho-yeon',
  'Korean, English',
  2021,
  'TV-MA',
  'Thriller, Drama, Action',
  1,
  CURRENT_TIMESTAMP
);

-- The Crown
INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'The Crown',
  'Follows the political rivalries and romance of Queen Elizabeth II''s reign and the events that shaped the second half of the 20th century.',
  'https://image.tmdb.org/t/p/original/1M876KPjulVwppEpldhdc8V4o68.jpg',
  'https://www.youtube.com/watch?v=JWtnJjn6ng0',
  'SERIES',
  1,
  'Claire Foy, Olivia Colman, Imelda Staunton, Matt Smith',
  'English',
  2016,
  'TV-MA',
  'Drama, History, Romance',
  1,
  CURRENT_TIMESTAMP
);

-- Popular Series category
INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'Money Heist',
  'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.',
  'https://image.tmdb.org/t/p/original/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg',
  'https://www.youtube.com/watch?v=htqXL94Rza4',
  'SERIES',
  2,
  'Ursula Corbero, Alvaro Morte, Itziar Ituno, Pedro Alonso',
  'Spanish, English',
  2017,
  'TV-MA',
  'Crime, Drama, Thriller, Action',
  0,
  CURRENT_TIMESTAMP
);

INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'Wednesday',
  'Follows Wednesday Addams'' years as a student, when she attempts to master her emerging psychic ability, thwart a killing spree, and solve the mystery.',
  'https://image.tmdb.org/t/p/original/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg',
  'https://www.youtube.com/watch?v=Di310WS8zLk',
  'SERIES',
  2,
  'Jenna Ortega, Gwendoline Christie, Riki Lindhome, Jamie McShane',
  'English',
  2022,
  'TV-14',
  'Comedy, Crime, Fantasy, Mystery',
  0,
  CURRENT_TIMESTAMP
);

INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'Ozark',
  'A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.',
  'https://image.tmdb.org/t/p/original/pCGyPVrI9Fxw6XIvcRtfgUPMt14.jpg',
  'https://www.youtube.com/watch?v=5hAXVqrljbs',
  'SERIES',
  2,
  'Jason Bateman, Laura Linney, Julia Garner, Sofia Hublitz',
  'English',
  2017,
  'TV-MA',
  'Crime, Drama, Thriller',
  0,
  CURRENT_TIMESTAMP
);

INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'Narcos',
  'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country.',
  'https://image.tmdb.org/t/p/original/rTh4K5uw9HypmpGslcKd4QfHl93.jpg',
  'https://www.youtube.com/watch?v=xl8zdCY-abw',
  'SERIES',
  2,
  'Wagner Moura, Boyd Holbrook, Pedro Pascal, Joanna Christie',
  'English, Spanish',
  2015,
  'TV-MA',
  'Crime, Drama, Action, Thriller',
  0,
  CURRENT_TIMESTAMP
);

INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'The Witcher',
  'Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.',
  'https://image.tmdb.org/t/p/original/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg',
  'https://www.youtube.com/watch?v=ndl1W4ltcmg',
  'SERIES',
  2,
  'Henry Cavill, Anya Chalotra, Freya Allan, Joey Batey',
  'English',
  2019,
  'TV-MA',
  'Action, Adventure, Drama, Fantasy',
  0,
  CURRENT_TIMESTAMP
);

-- Romantic category
INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'Bridgerton',
  'Wealth, lust, and betrayal set against the backdrop of Regency-era England, seen through the eyes of the powerful Bridgerton family.',
  'https://image.tmdb.org/t/p/original/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg',
  'https://www.youtube.com/watch?v=gpv7ayf_tyE',
  'SERIES',
  6,
  'Phoebe Dynevor, Rege-Jean Page, Jonathan Bailey, Nicola Coughlan',
  'English',
  2020,
  'TV-MA',
  'Drama, Romance',
  0,
  CURRENT_TIMESTAMP
);

INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'Emily in Paris',
  'A young American woman from the Midwest is hired by a marketing firm in Paris to provide an American perspective on things.',
  'https://image.tmdb.org/t/p/original/A2DPETATV3hxTTSMqALGEz2deMk.jpg',
  'https://www.youtube.com/watch?v=jDo2gXogjU8',
  'SERIES',
  6,
  'Lily Collins, Philippine Leroy-Beaulieu, Ashley Park, Lucas Bravo',
  'English, French',
  2020,
  'TV-MA',
  'Comedy, Drama, Romance',
  0,
  CURRENT_TIMESTAMP
);

INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'Virgin River',
  'A nurse practitioner moves from Los Angeles to a remote Northern California town and is surprised by what she finds.',
  'https://image.tmdb.org/t/p/original/9nuD0js3XnuGG7HMEP3AzxL9X8L.jpg',
  'https://www.youtube.com/watch?v=sNVW7VB4qNI',
  'SERIES',
  6,
  'Alexandra Breckenridge, Martin Henderson, Colin Lawrence, Jenny Cooper',
  'English',
  2019,
  'TV-14',
  'Drama, Romance',
  0,
  CURRENT_TIMESTAMP
);

INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'The Notebook',
  'A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.',
  'https://image.tmdb.org/t/p/original/qom1SZSENdmHFNZBXbtJAU0WTlC.jpg',
  'https://www.youtube.com/watch?v=yDJIcYE0RA0',
  'MOVIE',
  6,
  'Ryan Gosling, Rachel McAdams, James Garner, Gena Rowlands',
  'English',
  2004,
  'PG-13',
  'Drama, Romance',
  0,
  CURRENT_TIMESTAMP
);

INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'To All the Boys I''ve Loved Before',
  'A teenage girl''s secret love letters are exposed and wreak havoc on her love life.',
  'https://image.tmdb.org/t/p/original/6iyKMrdcs3woTMZOytYPp3a7gMW.jpg',
  'https://www.youtube.com/watch?v=555oiY9RWM4',
  'MOVIE',
  6,
  'Lana Condor, Noah Centineo, Janel Parrish, Anna Cathcart',
  'English',
  2018,
  'TV-14',
  'Comedy, Drama, Romance',
  0,
  CURRENT_TIMESTAMP
);

-- Comedy category
INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'The Office',
  'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
  'https://image.tmdb.org/t/p/original/7DJKHzAi83BmQrWLrYYOqcoKfhR.jpg',
  'https://www.youtube.com/watch?v=LHOtME2DL4g',
  'SERIES',
  7,
  'Steve Carell, Rainn Wilson, John Krasinski, Jenna Fischer',
  'English',
  2005,
  'TV-14',
  'Comedy',
  0,
  CURRENT_TIMESTAMP
);

INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'Brooklyn Nine-Nine',
  'Jake Peralta, an immature but talented NYPD detective in Brooklyn''s 99th Precinct, comes into immediate conflict with his new commanding officer.',
  'https://image.tmdb.org/t/p/original/hgRMSOt7a1cwPe5hH0wEVEn4p3Y.jpg',
  'https://www.youtube.com/watch?v=sEOuJ4z5aTc',
  'SERIES',
  7,
  'Andy Samberg, Stephanie Beatriz, Terry Crews, Melissa Fumero',
  'English',
  2013,
  'TV-14',
  'Comedy, Crime',
  0,
  CURRENT_TIMESTAMP
);

INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'Friends',
  'Follows the personal and professional lives of six twenty to thirty year-old friends living in the Manhattan area.',
  'https://image.tmdb.org/t/p/original/l0qVZIpXtIo7km9u5Yqh0nKPOr5.jpg',
  'https://www.youtube.com/watch?v=IEEbUzffzrk',
  'SERIES',
  7,
  'Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry, David Schwimmer',
  'English',
  1994,
  'TV-PG',
  'Comedy, Romance',
  0,
  CURRENT_TIMESTAMP
);

INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'Schitt''s Creek',
  'A wealthy family is forced to rebuild their lives in a small town after losing their fortune.',
  'https://image.tmdb.org/t/p/original/iRlVAVDyb2bT5e5L4TgLMgf7h4E.jpg',
  'https://www.youtube.com/watch?v=W0uWS6CnC2o',
  'SERIES',
  7,
  'Eugene Levy, Catherine O''Hara, Dan Levy, Annie Murphy',
  'English',
  2015,
  'TV-14',
  'Comedy',
  0,
  CURRENT_TIMESTAMP
);

INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'The Good Place',
  'A woman is mistakenly sent to the Good Place instead of the Bad Place, and tries to become a better person.',
  'https://image.tmdb.org/t/p/original/dyzJEaRuBV8hbE2zzlujwMEd5n.jpg',
  'https://www.youtube.com/watch?v=RfBgT5djaQw',
  'SERIES',
  7,
  'Kristen Bell, Ted Danson, William Jackson Harper, Jameela Jamil',
  'English',
  2016,
  'TV-PG',
  'Comedy, Drama, Fantasy',
  0,
  CURRENT_TIMESTAMP
);

INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'Never Have I Ever',
  'The complicated life of a modern-day first-generation Indian American teenage girl, inspired by Mindy Kaling''s own childhood.',
  'https://image.tmdb.org/t/p/original/3NTAbAiao4JLzFQw6YxP1YZppM8.jpg',
  'https://www.youtube.com/watch?v=HyOCCCbxwMo',
  'SERIES',
  7,
  'Maitreyi Ramakrishnan, Poorna Jagannathan, Richa Moorjani, Jaren Lewison',
  'English',
  2020,
  'TV-14',
  'Comedy, Drama, Romance',
  0,
  CURRENT_TIMESTAMP
);

-- Action & Thriller
INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'Vikings',
  'Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore.',
  'https://image.tmdb.org/t/p/original/aq2yEMgRQBPfRkrO0Repo2qhUAT.jpg',
  'https://www.youtube.com/watch?v=9GrlqzP4CE0',
  'SERIES',
  5,
  'Travis Fimmel, Katheryn Winnick, Clive Standen, Gustaf Skarsgard',
  'English',
  2013,
  'TV-MA',
  'Action, Adventure, Drama, History',
  0,
  CURRENT_TIMESTAMP
);

INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'The Last Kingdom',
  'As Alfred the Great defends his kingdom from Norse invaders, Uhtred, born a Saxon but raised by Vikings, seeks to claim his ancestral birthright.',
  'https://image.tmdb.org/t/p/original/8eJf0hxgIhE6QSxbtuNCekTddy1.jpg',
  'https://www.youtube.com/watch?v=nveTvpGWyv8',
  'SERIES',
  5,
  'Alexander Dreymon, David Dawson, Emily Cox, Ian Hart',
  'English',
  2015,
  'TV-MA',
  'Action, Drama, History',
  0,
  CURRENT_TIMESTAMP
);

INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'Extraction',
  'Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he''s enlisted to rescue the kidnapped son of an imprisoned international crime lord.',
  'https://image.tmdb.org/t/p/original/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg',
  'https://www.youtube.com/watch?v=L6P3nI6VnlY',
  'MOVIE',
  5,
  'Chris Hemsworth, Rudhraksh Jaiswal, Randeep Hooda, Golshifteh Farahani',
  'English, Hindi, Bengali',
  2020,
  'R',
  'Action, Thriller',
  0,
  CURRENT_TIMESTAMP
);

INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'The Gray Man',
  'When the CIA''s most skilled mercenary, whose true identity is known to none, accidentally uncovers dark agency secrets, a psychopathic former colleague puts a bounty on his head.',
  'https://image.tmdb.org/t/p/original/8PuVeLAXxSVHq0aYdbPO3cPkkC9.jpg',
  'https://www.youtube.com/watch?v=BmllggGO4pM',
  'MOVIE',
  5,
  'Ryan Gosling, Chris Evans, Ana de Armas, Billy Bob Thornton',
  'English',
  2022,
  'PG-13',
  'Action, Thriller',
  0,
  CURRENT_TIMESTAMP
);

INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'Cobra Kai',
  'Decades after their 1984 All Valley Karate Tournament bout, a middle-aged Daniel LaRusso and Johnny Lawrence find themselves martial-arts rivals again.',
  'https://image.tmdb.org/t/p/original/irwQcdjwtjLnaA0iErabab9PrmG.jpg',
  'https://www.youtube.com/watch?v=xCwwxNbtK6Y',
  'SERIES',
  5,
  'Ralph Macchio, William Zabka, Courtney Henggeler, Xolo Mariduena',
  'English',
  2018,
  'TV-14',
  'Action, Comedy, Drama',
  0,
  CURRENT_TIMESTAMP
);

-- Crime & Drama
INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'You',
  'A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.',
  'https://image.tmdb.org/t/p/original/7bgiLqMjRDLpPHADlw4v6yXv1Y2.jpg',
  'https://www.youtube.com/watch?v=ga1m0wjzscU',
  'SERIES',
  3,
  'Penn Badgley, Victoria Pedretti, Elizabeth Lail, Ambyr Childers',
  'English',
  2018,
  'TV-MA',
  'Crime, Drama, Thriller, Romance',
  0,
  CURRENT_TIMESTAMP
);

INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'Dark',
  'A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.',
  'https://image.tmdb.org/t/p/original/5LoHuHWA4H8jElFlZDvsmU2n63b.jpg',
  'https://www.youtube.com/watch?v=rrwycJ08PSA',
  'SERIES',
  3,
  'Louis Hofmann, Oliver Masucci, Jordis Triebel, Maja Schone',
  'German, English',
  2017,
  'TV-MA',
  'Crime, Drama, Mystery, Thriller',
  0,
  CURRENT_TIMESTAMP
);

INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'Mindhunter',
  'In the late 1970s, two FBI agents broaden the realm of criminal science by delving into the psychology of murder.',
  'https://image.tmdb.org/t/p/original/8MfgyFHf7XEboZJPZXCIDqqiz6e.jpg',
  'https://www.youtube.com/watch?v=oFlKiTwhd38',
  'SERIES',
  3,
  'Jonathan Groff, Holt McCallany, Anna Torv, Hannah Gross',
  'English',
  2017,
  'TV-MA',
  'Crime, Drama, Thriller',
  0,
  CURRENT_TIMESTAMP
);

INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'Behind Her Eyes',
  'A single mother enters a world of twisted mind games when she begins an affair with her psychiatrist boss while secretly befriending his wife.',
  'https://image.tmdb.org/t/p/original/dTlbVzcqt7FsUNUKdufVqy5qLLM.jpg',
  'https://www.youtube.com/watch?v=4t7APHJXiEY',
  'SERIES',
  3,
  'Simona Brown, Tom Bateman, Eve Hewson, Robert Aramayo',
  'English',
  2021,
  'TV-MA',
  'Drama, Mystery, Thriller, Romance',
  0,
  CURRENT_TIMESTAMP
);

-- Sci-Fi & Fantasy
INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'Black Mirror',
  'An anthology series exploring a twisted, high-tech multiverse where humanity''s greatest innovations and darkest instincts collide.',
  'https://image.tmdb.org/t/p/original/5UaYsGZOFhjFDwQh6GuLjjA1WlF.jpg',
  'https://www.youtube.com/watch?v=jDiYGjp5iFg',
  'SERIES',
  4,
  'Daniel Kaluuya, Bryce Dallas Howard, Jon Hamm, Miley Cyrus',
  'English',
  2011,
  'TV-MA',
  'Drama, Sci-Fi, Thriller',
  0,
  CURRENT_TIMESTAMP
);

INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'Altered Carbon',
  'In a future where consciousness can be transferred to different bodies, a prisoner returns to life in a new body and must solve a murder.',
  'https://image.tmdb.org/t/p/original/8RKBHHRqOMOLh5g88288kILD1VR.jpg',
  'https://www.youtube.com/watch?v=dhFM8akm9a4',
  'SERIES',
  4,
  'Joel Kinnaman, Anthony Mackie, James Purefoy, Martha Higareda',
  'English',
  2018,
  'TV-MA',
  'Action, Drama, Sci-Fi',
  0,
  CURRENT_TIMESTAMP
);

INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'The Umbrella Academy',
  'A family of former child heroes, now grown apart, must reunite to continue to protect the world.',
  'https://image.tmdb.org/t/p/original/mE3zzMkpP8yqlkzdjPsQmJHceoe.jpg',
  'https://www.youtube.com/watch?v=0DAmWHxeoKw',
  'SERIES',
  4,
  'Elliot Page, Tom Hopper, David Castaneda, Emmy Raver-Lampman',
  'English',
  2019,
  'TV-14',
  'Action, Adventure, Comedy, Fantasy',
  0,
  CURRENT_TIMESTAMP
);

INSERT INTO titles (name, description, thumbnail_url, video_url, type, category_id, "cast", languages, release_year, rating, genre, featured, created_at)
VALUES (
  'Shadow and Bone',
  'Dark forces conspire against orphan mapmaker Alina Starkov when she unleashes an extraordinary power that could change the fate of her war-torn world.',
  'https://image.tmdb.org/t/p/original/oLFCc5oanpKCiAWICAIzm3HNnCP.jpg',
  'https://www.youtube.com/watch?v=b8kQrIBPXSw',
  'SERIES',
  4,
  'Jessie Mei Li, Archie Renaux, Freddy Carter, Amita Suman',
  'English',
  2021,
  'TV-14',
  'Action, Adventure, Drama, Fantasy, Romance',
  0,
  CURRENT_TIMESTAMP
);
