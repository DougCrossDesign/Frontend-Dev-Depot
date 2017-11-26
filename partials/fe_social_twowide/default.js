 $('.social-feed-twowide .sf-button').on('click', function(e) {
  var selectedItem = $(this).attr('href');
    $('.social-feed-twowide').find('.sf-item, .sf-button').removeClass('sf-active');
    $($(this)).addClass('sf-active');
    $(selectedItem).addClass('sf-active');
    return false;
});