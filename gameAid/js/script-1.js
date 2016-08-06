// VARIABLES - globals
var actGame = '';
var table = '';
var actGameMinis = '';
var minis_all = gameData_ref.slice();
// READY - for jquery
$(document).ready(function() {
  //document.documentElement.addEventListener('DOMAttrModified', function(e){ ?????
  //alert(document.body.contains(document.getElementById('mini_pool')));
  
  // INITIALIZE
  minis_all = sortByAttribute(minis_all,['game','set', 'subset', 'mini_name']);
  createMenuItems();
  createJQXTrees();
  // INITIALIZE - jqxtree
  $('div[id^="jqxTree-"]').jqxTree({ hasThreeStates: true, checkboxes: true });
  // INITIALIZE - datatable
  table = $('.table-minis').DataTable({
    data: actGameMinis,
    dom:'lrtp',
    scrollY: '60vh',
    scrollCollapse: true,
    paging: false,
    columns: [
      { "mData": "player" },
      { "mData": "mini_name" },
      { "mData": "set" },
      { "mData": "subset" }
    ],
    order: [
      [0, "asc"],
      [2, "asc"],
      [3, "asc"],
      [1, "asc"]],
    columnDefs: [{
      title: 'Player',
      targets: [0],
      orderData: [0, 2, 1]
    }, {
      title: 'Mini',
      targets: [1]
    }, {
      title: 'From',
      render: function(data,type,row){
        return data + ' - ' + row.subset;
      },
      targets: [2],
      orderData: [2, 1, 0]
    }, {
      visible: false,
      targets: [3]
    }]
  });
  // INITIALIZE - sidr
  $('.menu-toggle').sidr({
    'displace':false,
    onOpen: function(){
      $('body').css('background','#bfbfbf');
    },
    onClose: function(){
      $('body').css('background','#fafafa');
    }
  });
  // MODAL - when modal becomes visible
  $('#myModal').on('shown.bs.modal', function (e) {
    table.columns.adjust().draw();
  });
  $("#myModal").on('show.bs.modal', function () {
    $(this).show();
    setModalMaxHeight(this);
  });
  $(document).bind("click", function () {
    $.sidr('close', 'sidr');
  });
  // CARDS - when cards are shown
  $('#mini_pool').on('show',function(){
      alert('here me');
      //    $('div[id^="jqxTree-"]').jqxTree('collapseAll');
      //    $('div[id^="jqxTree-"]').jqxTree('expandAll');
  });
  // RESIZE - window
  $(window).resize(function() {
    if ($('.modal.in').length != 0) {
      setModalMaxHeight($('.modal.in'));
    }
  });
  // CLICK - sidr menu items
  $('#sidr li').on('click',function(e){
    var id = $(this).attr('id');
    id = id.replace(/menu-item-/g,'');
    id = id.replace(/_/g,' ');
    actGame = id;
    $('.actGame').html(actGame);
    actGameMinis = $.grep(minis_all, function (o) { return o.game == actGame; });
    // HIDE - initText
    $('.initText').addClass('hidden');
    // SHOW jqxTree_{actGame}
    $('div[id^="jqxTree-"]').addClass('hidden');
    $('div#jqxTree-' + actGame.replace(/\s/g, '_')).removeClass('hidden');
//    $('div#jqxTree-' + actGame.replace(/\s/g, '_')).jqxTree('collapseAll');
//    $('div#jqxTree-' + actGame.replace(/\s/g, '_')).jqxTree('expandAll');
  });
  // CLICK - secondary buttons (player, minis, randomize, redo it)
  $('.btn').on('click', function (e) {
    this.blur();
    e.preventDefault();
    var id = $(this).attr('id');
    if (id=='btn_randomize'){
      clickRandomize(this,e);
//      var minis = actGameMinis.slice();
//      minis = shuffle(minis);
//      table.clear().rows.add(minis).draw(false);
//      $('#myModal').modal({show: true, backdrop:'static'});
    } else {
      if (id=='btn_players'){$('.card').removeClass('active');$('#mini_num').addClass('active');};
      if (id=='btn_minis'){$('.card').removeClass('active');$('#mini_pool').addClass('active');};
    };
  });
  // CLICK - jqxTree label
  $('.jqx-tree').on('itemClick', function (event) {
    alert('here1');
    var args = event.args;
    var temp = $(this).attr('id');
    var item = $('#' + temp).jqxTree('getItem', args.element);
    var label = item.label;
    alert(label);
  });
  // CLICK - jqxTree checkbox
  $('div[id^="jqxTree-"]').on('checkChange', function (event) {
    clickCheckbox(this, event);
  });
  // DATA ENTRY - data entry
  $('input[type="number"]').on('propertychange change click keyup input paste', function (event) {
    var p = $('#formGroupPlayersInput').val();
    var s = $('#formGroupMinisInput').val();
    if (p == '') { p = 0; };
    if (s == '') { s = 0; };
    $('#formGroupMinisTotal').val(p*s);
  });
});
// FUNCTIONS
function createMenuItems() {
  $('#sidr menu-items').html('');
  var gamesMap = {};
  for (var i = 0; i < minis_all.length; i++) {
    var value = minis_all[i].game;
    gamesMap[value] = "";
  }
  var games = Object.keys(gamesMap);
  games = games.sort();
  
  var linkNo = 0;
  for (i in games) {
    linkNo++;
    var game = games[i];
    var xGame = game.replace(/\s/g, '_');
    var xClass = "";
    $('#sidr #menu-items').append('<li id="menu-item-' + xGame + '"><a href="#">' + game + '</a></li>');
  }
}
function createJQXTrees() {
  $('#jqxTrees').html('');
  var oldGame = '';
  var oldSet = '';
  var oldSubset = '';
  for (iM in minis_all) {
    var item = minis_all[iM];
    var game = item.game;
    var xGame = game.replace(/\s/g, '_');
    var set = item.set;
    var xSet = set.replace(/\s/g, '_');
    var subset = item.subset;
    var xSubset = subset.replace(/\s/g, '_');
    var mini_name = item.mini_name;
    var xMini_name = mini_name.replace(/\s/g, '_');
    if (oldGame != xGame) {
      $('#jqxTrees').append('<div id="jqxTree-' + xGame + '" class="hidden">');
      $('#jqxTree-' + xGame).append('<ul id="setList-' + xGame +'" class="tree-minis-' + xGame + '">');
      oldGame = xGame;
      oldSet = '';
      oldSubset = '';
    }
    if (oldSet != xSet) {
      $('#jqxTree-' + xGame + ' #setList-' + xGame).append('<li id="set-' + xSet + '" item-checked="true" item-expanded="true" class="set"><a href="#">' + set + '</a>');
      $('#jqxTree-' + xGame + ' #set-' + xSet).append('<ul id="subsetList-' + xSet + '"></ul>');
      oldSet = xSet;
      oldSubset = '';
    }
    if (oldSubset != xSubset) {
      $('#jqxTree-' + xGame + ' #setList-' + xGame + ' #subsetList-' + xSet).append('<li id="subset-' + xSubset + '" class="subset"><a href="#">' + subset + '</a>');
      $('#jqxTree-' + xGame + ' #subsetList-' + xSet + ' #subset-' + xSubset).append('<ul id="miniList-' + xSubset + '"></ul>');
      oldSubset = xSubset;
    }
    var temp1 = '#jqxTree-' + xGame + ' #miniList-' + xSubset;
    var temp2 = '<li id="mini-' + xMini_name + '" class="mini"><a href="#">' + mini_name + '</a></li>';
    //		alert(temp1 + " :: " + temp2);
    $('#jqxTree-' + xGame + ' #subsetList-' + xSet + ' #subset-' + xSubset + ' #miniList-' + xSubset).append('<li id="mini-' + xMini_name + '" class="mini"><a href="#">' + mini_name + '</a></li>');
    //		alert(mini_name + " :: " + game + " :: " + set + " :: " + subset);
  }
}
function setModalMaxHeight(element) {
  this.$element     = $(element);  
  this.$content     = this.$element.find('.modal-content');
  var borderWidth   = this.$content.outerHeight() - this.$content.innerHeight();
  var dialogMargin  = $(window).width() < 768 ? 20 : 60;
  var contentHeight = $(window).height() - (dialogMargin + borderWidth);
  var headerHeight  = this.$element.find('.modal-header').outerHeight() || 0;
  var footerHeight  = this.$element.find('.modal-footer').outerHeight() || 0;
  var maxHeight     = contentHeight - (headerHeight + footerHeight);

  this.$content.css({
    'overflow': 'hidden'
  });

  this.$element
    .find('.modal-body').css({
    'max-height': maxHeight,
    'overflow-y': 'auto'
  });
}
function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
  return a;
}
function pad(str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}
function clickRandomize(thisItem, thisEvent) {
//  $(thisItem).blur();
  //alert('here1')
  var p = $('#formGroupPlayersInput').val();
  var s = $('#formGroupMinisInput').val();
  var tm = $('#formGroupMinisTotal').val();
  var valid = true;
  var err = [];
  var modalOpen = $('#myModal').hasClass('in');
  if (modalOpen == false) {
    /* ERRORS and VALIDATIONS */
    if (actGame == '') {
      valid = false;
      err.push('You must select a game from the gameAid menu');
    }
    if (p == '' || isNaN(p) == true || p == 0) {
      p = 0;
      valid = false;
      err.push('Players must be a number and greater than 0');
    };
    if (s == '' || isNaN(s) == true || s == 0) {
      s = 0;
      valid = false;
      err.push('Survivors must be a number and greater than 0');
    };
    //	if (tm == '' || isNaN(tm) == true || tm == 0 && p != 0 && s != 0) {
    //		valid = false;
    //		err.push('Total number of minis must be a number and greater than 0');
    //	}
    if (tm > actGameMinis.length && actGame != '') {
      valid = false;
      err.push('Total (' + tm + ') is too high, you only have ' + actGameMinis.length + ' minis');
    }
  }
  if (!valid) {
    $('.modal-title').html('Error');
    $('#modal-body').removeClass('hidden');
    $('#modal-body').html('The following error(s) need to be resolved to continue<ul class="modal-errors"></ul>');
    $('#modal-table').addClass('hidden');
    $('.modal-footer #btn_randomize').addClass('hidden');
    for (i1 in err) {
      $('.modal-errors').append('<li class="modal-error">' + err[i1] + '</li>');
    }
  } else {
    var minis = actGameMinis.slice();
    minis = $.grep(minis, function (o) { return (o.game == actGame, o.use == true); });
    minis = shuffle(minis);
    minis = minis.slice(0, tm);

    var num = 0;
    for (var ip = 0; ip < p;ip++){
      for (var is = 0; is < s; is++) {
        minis[num].player = pad((ip+1),2);
        num++;
      }
    }
    $('.modal-title').html(actGame + ' Results');
    $('#modal-body').addClass('hidden');
    $('#modal-table').removeClass('hidden');
    $('.modal-footer #btn_randomize').removeClass('hidden');
    table.clear().rows.add(minis).draw(false);
  };
  $('#myModal').modal({ backdrop: 'static' });
}
function clickCheckbox(thisItem, thisEvent) {
  var args = thisEvent.args;
  var element = args.element;
  var checked = args.checked;
  var temp = $(thisItem).attr('id');
  var item = $('#' + temp).jqxTree('getItem', args.element);
  var label = item.label;
  var xLabel = label.replace(/\s/g,'_');
  var xGame = actGame.replace(/\s/g,'_');
  var subset = $('#jqxTree-' + xGame + ' li#mini-' + xLabel).closest('li.subset').attr('id');
  var set = $('#jqxTree-' + xGame + ' li#mini-' + xLabel).closest('li.set').attr('id');
  if (typeof set == 'string' && typeof subset == 'string') {
    set = set.replace(/set-/, '').replace(/_/g, ' ');
    subset = subset.replace(/subset-/, '').replace(/_/g, ' ');
    for (var i = 0; i < actGameMinis.length; i++) {
      var o = actGameMinis[i];
      if (o.game == actGame && o.set == set && o.subset == subset && o.mini_name == label) {
        o.use = checked;
        break;
      }
    }
  }
}
function rawOutput(minis) {
  var temp = '';
  var mini = '';
  $('ul.minis_activeGame').html('');
  for (var i = 0; i < minis.length; i++) {
    mini = minis[i];
    temp = '<li>' + mini.mini_name + ' :: ' + mini.game + ' :: ' + mini.set + ' :: ' + mini.subset + ' :: ' + mini.own + ' :: ' + mini.use + '</li>';
    $('ul.minis_activeGame').append(temp);
  };
}
function sortByAttribute(array, attrs) {
  // If we get an invalid argument
  if (!Array.isArray(array)) return array;
  attrs = 'string' == typeof attrs ? [attrs] : attrs;
  // Generate array of predicate-objects contains
  // property getter, and descending indicator
  let predicates = attrs.map(function(pred) {
    let descending = pred.charAt(0) === '-' ? -1 : 1;
    pred = pred.replace(/^-/, '');
    return {
      getter: function(o) { return o[pred]; },
      descend: descending
    };
  });
  // Schwartzian transform idiom implementation
  // also known as known as decorate-sort-undecorate
  return array.map(function(item) {
    return {
      src: item,
      compareValues: predicates.map(function(predicate) {
        return predicate.getter(item);
      })
    };
  }).sort(function(o1, o2) {
    let i = -1, result = 0;
    while (++i < predicates.length) {
      if (o1.compareValues[i] < o2.compareValues[i]) result = -1;
      if (o1.compareValues[i] > o2.compareValues[i]) result = 1;
      if (result *= predicates[i].descend) break;
    }
    return result;
  }).map(function (item) {
    return item.src;
  });
}