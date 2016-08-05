var actGame = 'no game selected';
var table = '';
var actGameMinis = '';

$(document).ready(function() {
  $('.actGame').html(actGame);
  createMenuItems();
  
  table = $('.table-minis').DataTable({
    data: actGameMinis,
    dom:'lrtip',
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
  })
  $("#myModal").on('show.bs.modal', function () {
    $(this).show();
    setModalMaxHeight(this);
  });
  $(window).resize(function() {
    if ($('.modal.in').length != 0) {
      setModalMaxHeight($('.modal.in'));
    }
  });
  $(document).bind("click", function () {
    $.sidr('close', 'sidr');
  });
  $('#sidr li').on('click',function(e){
    var id = $(this).attr('id');
    id = id.replace(/menu-item-/g,'');
    id = id.replace(/_/g,' ');
    actGame = id;
    $('.actGame').html(actGame);
    actGameMinis = $.grep(gameData_ref, function (o) { return o.game == actGame; });
  });
  $('.secondary .btn').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('id');
    if (id=='btn_randomize'){
      table.clear().rows.add(actGameMinis).draw(false);
      $('#myModal').modal({show: true, backdrop:'static'});
    } else {
      $('.card').removeClass('active');
      if (id=='btn_players'){$('#mini_num').addClass('active');};
      if (id=='btn_minis'){$('#mini_pool').addClass('active');};
    };
  });
});
function createMenuItems() {
  $('#sidr menu-items').html('');
  var gamesMap = {};
  for (var i = 0; i < gameData_ref.length; i++) {
    var value = gameData_ref[i].game;
    gamesMap[value] = "";
  }
  var games = Object.keys(gamesMap);
  
  var linkNo = 0;
  for (i in games) {
    linkNo++;
    var game = games[i];
    var xGame = game.replace(/\s/g, '_');
    var xClass = "";
    $('#sidr #menu-items').append('<li id="menu-item-' + xGame + '"><a href="#">' + game + '</a></li>');
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