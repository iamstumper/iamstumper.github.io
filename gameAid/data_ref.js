// DATA object
var gameData_ref = [
	{ game: "Arcadia Quest", set: "Arcadia Quest", subset: "Core Box", mini_name: "Diva", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Arcadia Quest", set: "Arcadia Quest", subset: "Core Box", mini_name: "Greensleeves", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Arcadia Quest", set: "Arcadia Quest", subset: "Core Box", mini_name: "Grom", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Arcadia Quest", set: "Arcadia Quest", subset: "Core Box", mini_name: "Hobsbawm", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Arcadia Quest", set: "Arcadia Quest", subset: "Core Box", mini_name: "Johan", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Arcadia Quest", set: "Arcadia Quest", subset: "Core Box", mini_name: "Kanga", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Arcadia Quest", set: "Arcadia Quest", subset: "Core Box", mini_name: "Maya", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Arcadia Quest", set: "Arcadia Quest", subset: "Core Box", mini_name: "Scarlet", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Arcadia Quest", set: "Arcadia Quest", subset: "Core Box", mini_name: "Seth", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Arcadia Quest", set: "Arcadia Quest", subset: "Core Box", mini_name: "Spike", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Arcadia Quest", set: "Arcadia Quest", subset: "Core Box", mini_name: "Wisp", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Arcadia Quest", set: "Arcadia Quest", subset: "Core Box", mini_name: "Zazu", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Arcadia Quest", set: "Arcadia Quest", subset: "Beyond the Grave", mini_name: "Chaz", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Arcadia Quest", set: "Arcadia Quest", subset: "Beyond the Grave", mini_name: "Darryn", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Arcadia Quest", set: "Arcadia Quest", subset: "Extra", mini_name: "Hassan", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Arcadia Quest", set: "Arcadia Quest", subset: "Extra", mini_name: "Leeroy", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Arcadia Quest", set: "Arcadia Quest", subset: "Extra", mini_name: "McHammer", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Arcadia Quest", set: "Arcadia Quest", subset: "Extra", mini_name: "Nibbles", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Arcadia Quest", set: "Arcadia Quest", subset: "Extra", mini_name: "Yun", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Arcadia Quest", set: "Arcadia Quest", subset: "Extra", mini_name: "Zahra", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Imperial Assault", set: "Imperial Assault", subset: "Core Box", mini_name: "Diala Passil", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 1", subset: "Zombicide", mini_name: "Amy", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 1", subset: "Zombicide", mini_name: "Doug", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 1", subset: "Zombicide", mini_name: "Josh", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 1", subset: "Zombicide", mini_name: "Ned", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 1", subset: "Zombicide", mini_name: "Phil", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 1", subset: "Zombicide", mini_name: "Wanda", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 2", subset: "Prison Outbreak", mini_name: "Belle", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 2", subset: "Prison Outbreak", mini_name: "Grindlock", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 2", subset: "Prison Outbreak", mini_name: "Joshua", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 2", subset: "Prison Outbreak", mini_name: "Kim", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 2", subset: "Prison Outbreak", mini_name: "Shannon", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 2", subset: "Prison Outbreak", mini_name: "Watts", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 2", subset: "Toxic City Mall", mini_name: "Derek", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 2", subset: "Toxic City Mall", mini_name: "Elsa", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 2", subset: "Toxic City Mall", mini_name: "Neema", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 2", subset: "Toxic City Mall", mini_name: "Raoul", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 3", subset: "Angry Neighbors", mini_name: "Adam", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 3", subset: "Angry Neighbors", mini_name: "Jeff", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 3", subset: "Angry Neighbors", mini_name: "Julien", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 3", subset: "Angry Neighbors", mini_name: "Tiff", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 3", subset: "Rue Morgue", mini_name: "Bear", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 3", subset: "Rue Morgue", mini_name: "Cathy", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 3", subset: "Rue Morgue", mini_name: "Dan", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 3", subset: "Rue Morgue", mini_name: "James", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 3", subset: "Rue Morgue", mini_name: "Jane", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 3", subset: "Rue Morgue", mini_name: "Joe", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 3", subset: "Rue Morgue", mini_name: "Laurie", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 3", subset: "Rue Morgue", mini_name: "Louise", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 3", subset: "Rue Morgue", mini_name: "Maddie", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 3", subset: "Rue Morgue", mini_name: "Parker", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 3", subset: "Rue Morgue", mini_name: "Terry", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Season 3", subset: "Rue Morgue", mini_name: "Travis", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Black Plague", subset: "Core Box", mini_name: "Ann", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Black Plague", subset: "Core Box", mini_name: "Baldric", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Black Plague", subset: "Core Box", mini_name: "Clovis", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Black Plague", subset: "Core Box", mini_name: "Nelly", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Black Plague", subset: "Core Box", mini_name: "Samson", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Black Plague", subset: "Core Box", mini_name: "Sylas", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Black Plague", subset: "Hero Box", mini_name: "Arnaud", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Black Plague", subset: "Hero Box", mini_name: "Glynda", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Black Plague", subset: "Hero Box", mini_name: "Julian", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Black Plague", subset: "Hero Box", mini_name: "Sylvia", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Black Plague", subset: "Hero Box", mini_name: "Tucker", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Black Plague", subset: "Wulfsburg", mini_name: "Ariane", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Black Plague", subset: "Wulfsburg", mini_name: "Karl", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Black Plague", subset: "Wulfsburg", mini_name: "Morrigan", mini_type: "hero", own: true, use: true, player: '' },
	{ game: "Zombicide", set: "Black Plague", subset: "Wulfsburg", mini_name: "Theo", mini_type: "hero", own: true, use: true, player: '' }
];