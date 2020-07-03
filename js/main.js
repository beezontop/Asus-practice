$(document).ready(function () {
    function windowSize() {
        if ($(window).width() <768) {

            // device width : ~767 (sm) *手機板(窄版)
            $('#slide-img1 img').attr('src', 'https://picsum.photos/id/5/426/460.jpg');
            $('#slide-img2 img').attr('src', 'https://picsum.photos/id/8/426/460.jpg');
            $('#slide-img3 img').attr('src', 'https://picsum.photos/id/96/426/460.jpg');
            $('#AD img').attr('src', 'https://picsum.photos/id/482/1080/1170.jpg');
            $('#news-item-wrap').removeClass('row');

        } else if($(window).width()>1199){

            // device width : 1200~ *電腦 (全展開式導覽列 | recommend -> 橫幅 )
            $('#slide-img1 img').attr('src', 'https://picsum.photos/id/5/2000/720.jpg');
            $('#slide-img2 img').attr('src', 'https://picsum.photos/id/8/2000/720.jpg');
            $('#slide-img3 img').attr('src', 'https://picsum.photos/id/96/2000/720.jpg');
            $('#AD img').attr('src', 'https://picsum.photos/id/482/2000/720.jpg');
            $('body').removeClass('move-right');
            $('#news-item-wrap').addClass('row');

        }else if (767 < $(window).width() < 1200) {

            //  device width : 768~1199  (md) 平板(調整slider,AD大小->橫幅 && 展開col)
            $('#slide-img1 img').attr('src', 'https://picsum.photos/id/5/2000/720.jpg');
            $('#slide-img2 img').attr('src', 'https://picsum.photos/id/8/2000/720.jpg');
            $('#slide-img3 img').attr('src', 'https://picsum.photos/id/96/2000/720.jpg');
            $('#AD img').attr('src', 'https://picsum.photos/id/482/2000/720.jpg');
            $('#news-item-wrap').addClass('row');

        } 
    };
    $(window).resize(function() {
        windowSize();
    });
    windowSize();

    $('#nav-btn').click(function(e){

        $('body').toggleClass('move-right');
        
    });

});

