$(function() {
  var h = $(window).height();
  $('#wrap').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});
  
//全ての読み込みが完了したら実行ローダー
$(window).load(function () { 
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('#wrap').css('display', 'block');
});

$('.hamburger').click(function () {
    $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
    }
});

//新しいアコーディオン
$(function () {
    $('.ac-parent').on('click', function () {
    $(this).next().slideToggle();
  });
});


$('.youtube').each(function() {
  var iframe = $(this).children('iframe');
  var url = iframe.attr('data-src');
  var id = url.match(/[\/?=]([a-zA-Z0-9_-]{11})[&\?]?/)[1];
  iframe.before('<img src="https://img.youtube.com/vi/'+id+'/sddefault.jpg" />').remove();
  $(this).on('click', function() {
    $(this).siblings('.arrow').fadeOut(400);
    $(this).after('<div class="youtube"><iframe src="https://www.youtube.com/embed/'+id+'?=loop=1&playlist='+id+'&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>').remove();
  });
});
