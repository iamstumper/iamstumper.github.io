var games_unique = setGamesUnique();
var game_active = '';
$(document).ready(function(){
	setMenuItems(games_unique);
	//$('ul.navbar-nav a.nav-link').on('click',function(event){
	$('ul.navbar-nav li.nav-item').on('click',function(event){
		clickMenuItem(this);
	});
});

function setGamesUnique(){
	var outputObj={};
	data_ref.map( function( obj ) {
		outputObj[obj.game] = 1;
	});
	var output = Object.keys( outputObj );
	return output;
}
function setMenuItems(games){
	$('ul.navbar-nav').html('');
	var navItemLI = '';
	var navItemA = '';
	
	for(i in games){
		navItemLI = document.createElement('li');
		navItemLI.setAttribute('class','nav-item');
		navItemA = document.createElement('a');
		navItemA.setAttribute('class','nav-link');
		navItemA.setAttribute('href','#');
		navItemA.innerHTML = games[i];
		navItemLI.appendChild(navItemA);
		$('ul.navbar-nav').append(navItemLI);
	}
}
function clickMenuItem(menuItem){
	//$('ul.navbar-nav a.active').removeClass('active');
	$('ul.navbar-nav li.active').removeClass('active');
	$(menuItem).addClass('active');
	game_active = $(menuItem).text();
	$('span.game_active').html(game_active);
	setGameMinis();
}
function setGameMinis(){
	var game_minis = $.grep(data_ref,function(n,i){
		return ( n.game == game_active);
	});
	var mini = '';
	$('ul.game_minis').html('');
	for(i in game_minis){
		mini = game_minis[i];
		$('ul.game_minis').append('<li>' + mini.mini_name + ' :: ' + mini.set + ' :: ' + mini.subset);
	}
}
