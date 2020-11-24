// TITLES, DEVELOPER, SONG NAME, COMPOSER, ALBUM

let metadata = [
  ["Sly 2: Band of Thieves", "Sucker Punch (2004)", "Paris (Sly in Paris)", "Peter McConnell", "Sly 2: Band of Thieves Soundtrack"],
  ["Minecraft", "Mojang Studios (2011)", "Dry Hands", "Daniel Rosenfeld (C418)", "Minecraft - Volume Alpha"],
  ["Bugsnax", "Young Horses (2020)", "Sunrise over Snaxtooth Island", "Seth Parker", "Bugsnax - Original Soundtrack"],
  ["Journey", "thatgamecompany (2012)", "I Was Born for This", "Austin Winsory", "Journey"],
  ["Celeste", "Matt Makes Games (2018)", "First Steps", "Lena Raine", "Celeste Original Soundtrack"],
  ["Crash Bandicoot", "Naughty Dog (1996)", "Map", "Josh Mancell", "Crash Bandicoot Soundtrack"],
  ["The Last of Us", "Naughty Dog (2013)", "The Last of Us", "Gustavo Santaolalla", "The Last of Us"],
  ["Nier: Automata", "PlatinumGames (2017)", "City Ruins (Shade)", "Keiichi Okabe", "NieR: Automata Original Soundtrack"],
  ["Wii Sports", "Nintendo (2006)", "Title Screen", "Kazumi Totaka", "Wii Sports Original Soundtrack"],
  ["Undertale", "Toby Fox (2015)", "Snowdin Town", "Toby Fox", "UNDERTALE Soundtrack"],
  ["Kingdom Hearts 2", "Square Enix (2005)", "The 13th Reflection", "Yoko Shimomura", "KINGDOM HEARTS Original Soundtrack COMPLETE"]
];

// BODY: FIRST PARAGRAPH, SECOND PARAGRAPH

let descriptions = [
  ["Sly 2: Band of Thieves is the second installment in Sucker Punch's 'Sly Cooper' series, a stealth platformer on the PlayStation 2. Sly 2 continues the story of Sly Cooper, an anthropomorphic raccoon that comes from a bloodline of 'master thieves' throughout history, and his friends, Murray and Bentley. After defeating his archenemy Clockwerk in the first installment, Sly hears that a new criminal gang known as the Klaww Gang has been collecting the mechanical body parts of Clockwerk, repurposing them for their own criminal activities. Sly and the gang embark on a quest to secure his bloodline's safety and finally put Clockwerk to rest.", "Sly 2's soundtrack was composed by Peter McConnell, an American musician who is also known for his work at LucasArts and his future continuing work at Sucker Punch. We selected 'Paris (Sly in Paris)', which is one of the most iconic songs in the Sly franchise, known for its deep baseline and Pink Panther-esque style. The song also has a 'tiptoe-y' melody that's played intermittently throughout the song--this melody is used to signify Sly's presence in the level, and is also replicated throughout several other themes in the soundtrack."],

  ["Minecraft is a sandbox game developed by Mojang that was released on November 18, 2011. In the game, players explore a blocky 3D generated world with infinite terrain. The objective is to discover and extract raw materials, craft tools and items, and build structures of earthworks. In survival mode, players can choose between cooperating or competing against other players while fighting mobs. In creative mode, players have unlimited resources and can fly around to build the creation of their dreams.", "The music and sound effects of Minecraft were produced by German musician Daniel Rosenfeld, better known as C418. The music of Minecraft has been described as ambient and dream like. For many players, the soundtrack brings a sense of nostalgia, childhood, and exploration. 'Dry Hands' is a mellow and somber track that people have described as the saddest song in the soundtrack. The heavy piano tones make this track one of the classics in the Minecraft soundtrack."],

  ["Bugsnax is an adventure video game developed by game studio Young Horses that was released on November 12, 2020. The game was unveiled as part of the Sony's PlayStation 5 reveal event on June 11, 2020. The player controls a newspaper reporter as they explore the mysterious Snaktooth Island inhabited by creatures called Bugsnax who are half bug and half snack. The player must also try to find and capture different species of Bugsnax using various contraptions. Once captured, the Bugsnax can be fed to the local Grumpuses, which transforms their bodies based on the properties of whatever Bugsnak they eat.", "On November 12, 2020, Young Horses released the entire soundtrack to Bugsnax on the studio's YouTube channel. The soundtrack was produced by Seth Parker. 'Sunrise over Snaxtooth Island' plays when the player first arrives on Snaktooth Island. As dawn breaks, the player goes through a tutorial to learn the mechanics of the game with the song playing. The track builds excitement as the player first starts their adventure on Snaktooth Island against the backdrop of the sunrise."],

  ["Journey is an indie adventure game developed by thatgamecompany and Santa Monica Studio, released in 2012. You take control of a nameless agender individual with a simple goal: reach the faraway mountain's summit. As you traverse through sunken cities, vast deserts and underwater ruins, you realize that the civilization you descended from has long since collapsed, and you are one of the few survivors that must reach the summit like so many of your ancestors did. There is no spoken dialogue, combat or UI in Journey; the only abilities you have are gliding, running and emitting a chirp/note. However, each individual playthrough is different in Journey--you have the chance to meet another person embarking on the same journey, yet the only way you communicate is through chirping at each other.", "Journey is composed by Austin Wintory, who had previously collaborated with thatgamecompany on Flow. The track 'I Was Born for This' features vocals from Armenian artist Lisbeth Scott, giving a chilling yet satisfying conclusion to the game's dramatic journey. The song plays during the credits scene of the game, which finally ends with you returning to your origin to begin your Journey once again. Through its strong visuals and compelling story, Journey has the player experience a wide range of emotions, from sadness and grief to joy and elation. Whether you're completely alone or you have a buddy to tag along with, Journey is a gaming experience that you'd be hard pressed to find anything like."],

  ["Celeste is a platforming video game by Canadian video game developers Maddy Thorson and Noel Berry, with art by the Brazilian studio MiniBoss. The game was released in January 2018 for PC, Nintendo Switch, PlayStation 4, and Xbox One. The player controls a girl named Madeline as she makes her way up a mountain while avoiding various deadly obstacles. Madeline also must battle against a dark reflection of herself, named Badeline, who discourages her from finishing the climb. Celeste was widely acclaimed upon release.", "The soundtrack was composed and produced by Lena Raine and was nominated for Best Score/Music at The Game Awards 2018. 'First Steps' plays at the beginning of the game as the player starts their adventure as Madeline to the top of the mountain. This track is cinematic and hypes up the player with various synths to prepare for the journey ahead of them. It brings upon a sense of excitement for the adventure ahead."],

  ["You'd be hard pressed to find someone that doesn't know about Crash Bandicoot. Crash Bandicoot is a 1996 platformer developed by Naughty Dog and led by its original founders, Jason Rubin and Andy Gavin. Crash Bandicoot was Naughty Dog's first huge success and was published by Sony Computer Entertainment, which started a long, close relationship between Naughty Dog and Sony. The game has you take control of a mutated bandicoot named Crash as he journeys to prevent antagonists Doctor Neo Cortex and Nitrus Brio's plans for world domination and save his girlfriend Tawna. The game was highly praised for its pseudo-3D graphics and visual style; the game sold over 6 million units, ranking eighth on the list of the Playstation's best selling games.", "The soundtrack for Crash Bandicoot was composed by Josh Mancell, member of the music production company Mutato Muzika. Josh Mancell was selected and advised by the founder of Mutato Muzika, Mark Mothersbaugh, to compose the soundtrack, which was described as 'simple but off-kilter', which perfectly encapsulates the style of the Crash Bandicoot soundtrack. Off the success of Josh Mancell's composition, he was selected to compose the soundtracks for the next two Crash Bandicoot titles and the Jak & Daxter trilogy that Naughty Dog would later develop."],

  ["The Last of Us is a 2013 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. The player controls Joel, a smuggler tasked with escorting a teenage girl, Ellie, across a post-apocalyptic United States. They must defend themselves against hostile humans and cannibalistic creatures infected by a mutated fungus. Following its announcement in 2011, the game was widely anticipated and became one of the best-selling video games. The Last of Us sold over 1.3 million units in its first week and 17 million by April 2018. The game has also won multiple awards from publications, critics, and game award ceremonies.", "The soundtrack for The Last of Us was composed by musician Gustavo Santaolalla. Santaolalla was excited to compose the music because of the game's focus on the characters and story. He aimed to make the soundtrack emotional instead of scary. The Last of Us theme song consists primarily of chords played by a ronroco or charango, a small Andean stringed instrument of the lute family. It begins eerily but progresses with percussion to depict the game's adventure style and vastness of the environment that the player will experience."],

  ["Nier: Automata is a 2017 action hack-and-slash RPG developed by PlatinumGames, directed by Yoko Taro and published by Square Enix. The game is a sequel to the 2010 game Nier, a spinoff of the cult series Drakengard. The game is set in the far future, where alien-created machines and human-produced androids engage in a proxy war over control of the earth. Automata has multiple playthroughs, focused around the strife of a combat android named 2B, her scanner companion 9S, and a rogue android A2. The game is notable for its blended gameplay with side-scrolling, bullet hell, open-world and top-down sections. Nier: Automata was highly praised for its story, themes of will and purpose, gameplay and its core overarching question: why do we kill?", "Nier:Automata's soundtrack was composed by Keiichi Okabe, who previously worked on the soundtracks for the original Nier and Drakengard 3. The soundtrack can be best described as melancholy and solemn as the player travels through desolate wastelands and vine-ridden city ruins. Instead of composing a single track for each area, Okabe developed different tracks (quiet, medium, dynamic) that seamlessly play depending on the situation that the player is in. City Ruins (Shade) plays in the second playthrough of the game, where the environment has drastically changed. The song retains the melody of an earlier track, City Ruins (Rays of Light), but features vocals from Emi Evans with a thundering soldier-type percussion. The song plays as a lead-up to key plot events as the proxy war between robots and androids escalates."],

  ["Wii Sports is a 2006 sports video game developed and published by Nintendo for the Wii video game console. The game is a collection of five sports simulations, designed to demonstrate the motion-sensing capabilities of the Wii Remote. The sports included are tennis, baseball, bowling, golf, and boxing. Players use the Wii Remote to mimic actions performed in real-life sports, such as swinging a tennis racket. The game also features training and fitness modes that monitor players' progress in the sports.", "The Wii Sports Theme plays upon loading the game on the title screen. The simple and upbeat feeling of the track makes this song easily recognizable to anyone who has played Wii Sports before. This track has also been remixed and memeified with the rising popularity of Vine. It is iconic as a representation of Gen Z'ers and the popularity of the Wii console."],

  ["Undertale is a role-playing video game created by indie developer Toby Fox and was released on September 15, 2015. The player controls a human child through a top-down perspective and they explore an underground world filled with towns and caves. They will encounter numerous puzzles and combat monsters on their journey. Undertale employs a bullet and turn-based hybrid combat system. The game reveals a complex lore with different routes in which the player can also be a pacifist and choose to not fight any monsters. Equally, the player can choose the genocide route and choose to kill all the monsters. Undertale received critical acclaim garnering a massive fanbase and was quickly considered a cult video game by numerous publications.", "The soundtrack of Undertale was composed by its developer Toby Fox with FL Studio. The soundtrack has also been widely praised by games press and fans as it reinforces some of the game's most defining moments. The player can feel the intensity of a battle and the sweetness of a tender moment. The melodies are reminiscent of pixelated and classic arcade games with its synths. Each track is also notably different as Toby Fox took inspiration from different genres like rock and swing. 'Snowdin Town' plates in the town of Snowdin and shares the same melody as other songs in the soundtrack. The song is whimsical to match the winter village atmosphere of the setting. It is upbeat and festive; the tune of this friendly town is sure to fill you up with determination."],

  ["Kingdom Hearts II is a 2005 action RPG developed and published by Square Enix, and directed by Tetsuya Nomura. The game is the third in order of release. The game takes place one year after the events of the previous game, where you play as Sora as he tries to reunite with his friends and defeat the villainous group known as 'Organization XIII'. Since Kingdom Hearts is a collaboration between Disney Interactive and Square Enix, the game showcases a large cast of Disney characters. The game has been repeatedly put on lists of the greatest video games of all time, with the game being praised for its story, music, in-depth combat and game systems. The Final Mix edition was released in Japan exclusively with additional combat encounters, enemies and music.", "Nearly all of the music in the Kingdom Hearts series, which comprises 17 releases (games and media included) is composed by Yoko Shimomura, who has also worked with Square Enix to compose for Final Fantasy XIV. The 13th Reflection plays during five specific boss fights, with Sora facing off against 'absent silhouettes', or phantoms, of five Organization XIII members who were killed in Chain of Memories. The track prominently features trumpet, organ and piano, which are instruments always used in tracks relating to Organization XIII. This track also only is available in the Final Mix version, since the Absent Silhouette fights were only available in that edition. The 13th Reflection is definitely one of the best tracks in Kingdom Hearts II, which already has tons of other similarly outstanding songs in its soundtrack."],
]

//controls audio for player
var audio = document.getElementById("myaudio");
audio.volume = 1.0;

$("#sly2").click(function() {
  console.log("sly2 clicked");
  $(".box-art").css("width", "40px");
  $("#sly2").css('width', "210px"); //expands image
  $("#soundArt").attr("src","./soundtrack-art/sly2.png"); //changes soundtrack image
  $("#songName").text(metadata[0][2]); //changes song name
  $("#composer").text(metadata[0][3]); //changes composer
  $("#album").text(metadata[0][4]); //changes album name
  $("#audiosource").attr("src","./songs/sly2-paris.mp3"); //changes song
  audio.load(); //loads in song, ready to play
  $("#descArt").attr("src","./box-art/sly2.jpg"); //changes box art image
  $("#header").text(metadata[0][0]); //changes header
  $("#subhead").text("Developed by: " + metadata[0][1]); //changes developed by
  $("#body1").text(descriptions[0][0]); //changes first paragraph
  $("#body2").text(descriptions[0][1]); //changes second paragraph
});

$("#minecraft").click(function() {
  console.log("minecraft clicked");
  $(".box-art").css("width", "40px");
  $("#minecraft").css('width', "210px");
  $("#soundArt").attr("src","./soundtrack-art/minecraft.jpg");
  $("#songName").text(metadata[1][2]);
  $("#composer").text(metadata[1][3]);
  $("#album").text(metadata[1][4]);
  $("#audiosource").attr("src","./songs/minecraft-dryhands.mp3");
  audio.load();
  $("#descArt").attr("src","./box-art/minecraft.jpg");
  $("#header").text(metadata[1][0]);
  $("#subhead").text("Developed by: " + metadata[1][1]);
  $("#body1").text(descriptions[1][0]);
  $("#body2").text(descriptions[1][1]);
});

$("#bugsnax").click(function() {
  console.log("bugsnax clicked");
  $(".box-art").css("width", "40px");
  $("#bugsnax").css('width', "230px");
  $("#soundArt").attr("src","./soundtrack-art/bugsnax.jpg");
  $("#songName").text(metadata[2][2]);
  $("#composer").text(metadata[2][3]);
  $("#album").text(metadata[2][4]);
  $("#audiosource").attr("src","./songs/bugsnax-sunrise.mp3");
  audio.load();
  $("#descArt").attr("src","./box-art/bugsnax.jpg");
  $("#header").text(metadata[2][0]);
  $("#subhead").text("Developed by: " + metadata[2][1]);
  $("#body1").text(descriptions[2][0]);
  $("#body2").text(descriptions[2][1]);
});

$("#journey").click(function() {
  console.log("journey clicked");
  $(".box-art").css("width", "40px");
  $("#journey").css('width', "260px");
  $("#soundArt").attr("src","./soundtrack-art/journey.jpg");
  $("#songName").text(metadata[3][2]);
  $("#composer").text(metadata[3][3]);
  $("#album").text(metadata[3][4]);
  $("#audiosource").attr("src","./songs/journey-iwasbornforthis.mp3");
  audio.load();
  $("#descArt").attr("src","./box-art/journey.jpg");
  $("#header").text(metadata[3][0]);
  $("#subhead").text("Developed by: " + metadata[3][1]);
  $("#body1").text(descriptions[3][0]);
  $("#body2").text(descriptions[3][1]);
});

$("#celeste").click(function() {
  console.log("celeste clicked");
  $(".box-art").css("width", "40px");
  $("#celeste").css('width', "170px");
  $("#soundArt").attr("src","./soundtrack-art/celeste.jpg");
  $("#songName").text(metadata[4][2]);
  $("#composer").text(metadata[4][3]);
  $("#album").text(metadata[4][4]);
  $("#audiosource").attr("src","./songs/celeste-firststeps.mp3");
  audio.load();
  $("#descArt").attr("src","./box-art/celeste.png");
  $("#header").text(metadata[4][0]);
  $("#subhead").text("Developed by: " + metadata[4][1]);
  $("#body1").text(descriptions[4][0]);
  $("#body2").text(descriptions[4][1]);
});

$("#crashbandicoot").click(function() {
  console.log("crashbandicoot clicked");
  $(".box-art").css("width", "40px");
  $("#crashbandicoot").css('width', "300px");
  $("#soundArt").attr("src","./soundtrack-art/crashbandicoot.jpg");
  $("#songName").text(metadata[5][2]);
  $("#composer").text(metadata[5][3]);
  $("#album").text(metadata[5][4]);
  $("#audiosource").attr("src","./songs/crashbandicoot-map.mp3");
  audio.load();
  $("#descArt").attr("src","./box-art/crashbandicoot.png");
  $("#header").text(metadata[5][0]);
  $("#subhead").text("Developed by: " + metadata[5][1]);
  $("#body1").text(descriptions[5][0]);
  $("#body2").text(descriptions[5][1]);
});

$("#lastofus").click(function() {
  console.log("lastofus clicked");
  $(".box-art").css("width", "40px");
  $("#lastofus").css('width', "250px");
  $("#soundArt").attr("src","./soundtrack-art/lastofus.jpg");
  $("#songName").text(metadata[6][2]);
  $("#composer").text(metadata[6][3]);
  $("#album").text(metadata[6][4]);
  $("#audiosource").attr("src","./songs/lastofus.mp3");
  audio.load();
  $("#descArt").attr("src","./box-art/lastofus.jpg");
  $("#header").text(metadata[6][0]);
  $("#subhead").text("Developed by: " + metadata[6][1]);
  $("#body1").text(descriptions[6][0]);
  $("#body2").text(descriptions[6][1]);
});

$("#nier").click(function() {
  console.log("nier clicked");
  $(".box-art").css("width", "40px");
  $("#nier").css('width', "240px");
  $("#soundArt").attr("src","./soundtrack-art/nier.jpg");
  $("#songName").text(metadata[7][2]);
  $("#composer").text(metadata[7][3]);
  $("#album").text(metadata[7][4]);
  $("#audiosource").attr("src","./songs/nier-cityruins.mp3");
  audio.load();
  $("#descArt").attr("src","./box-art/nier.jpg");
  $("#header").text(metadata[7][0]);
  $("#subhead").text("Developed by: " + metadata[7][1]);
  $("#body1").text(descriptions[7][0]);
  $("#body2").text(descriptions[7][1]);
});

$("#wiisports").click(function() {
  console.log("wiisports clicked");
  $(".box-art").css("width", "40px");
  $("#wiisports").css('width', "350px");
  $("#soundArt").attr("src","./soundtrack-art/wiisports.png");
  $("#songName").text(metadata[8][2]);
  $("#composer").text(metadata[8][3]);
  $("#album").text(metadata[8][4]);
  $("#audiosource").attr("src","./songs/wiisports.mp3");
  audio.load();
  $("#descArt").attr("src","./box-art/wiisports.jpg");
  $("#header").text(metadata[8][0]);
  $("#subhead").text("Developed by: " + metadata[8][1]);
  $("#body1").text(descriptions[8][0]);
  $("#body2").text(descriptions[8][1]);
});

$("#undertale").click(function() {
  console.log("undertale clicked");
  $(".box-art").css("width", "40px");
  $("#undertale").css('width', "300px");
  $("#soundArt").attr("src","./soundtrack-art/undertale.jpg");
  $("#songName").text(metadata[9][2]);
  $("#composer").text(metadata[9][3]);
  $("#album").text(metadata[9][4]);
  $("#audiosource").attr("src","./songs/undertale-snowdin.mp3");
  audio.load();
  $("#descArt").attr("src","./box-art/undertale.jpg");
  $("#header").text(metadata[9][0]);
  $("#subhead").text("Developed by: " + metadata[9][1]);
  $("#body1").text(descriptions[9][0]);
  $("#body2").text(descriptions[9][1]);
});

$("#kingdomhearts").click(function() {
  console.log("kingdomhearts clicked");
  $(".box-art").css("width", "40px");
  $("#kingdomhearts").css('width', "210px");
  $("#soundArt").attr("src","./soundtrack-art/kingdomhearts.png");
  $("#songName").text(metadata[10][2]);
  $("#composer").text(metadata[10][3]);
  $("#album").text(metadata[10][4]);
  $("#audiosource").attr("src","./songs/kh2-13reflection.mp3");
  audio.load();
  $("#descArt").attr("src","./box-art/kingdomhearts.jpg");
  $("#header").text(metadata[10][0]);
  $("#subhead").text("Developed by: " + metadata[10][1]);
  $("#body1").text(descriptions[10][0]);
  $("#body2").text(descriptions[10][1]);
});
