var myFullpage = new fullpage('#fullpage', {
    verticalCentered: false,
    navigation: true,
    navigationTooltips: ['boot', 'Page 2', 'Any text!'],
    showActiveTooltip: true,
    // fixedElements: '#head',
    onLeave:function(index,nextIndex ,direction ){
        //离开第一屏
        if(index.index===0){
            $('.img1').animate({left:'-180px'});
            $('.img2').animate({right:'-180px'});
            $('.img3').animate({bottom:'-340px'});
        }
    },
    afterLoad: function (anchorLink, origin) {
        // 当到第一屏时候
        if (origin.index === 0) {
            $('.img1').animate({left:'0px'},1500);
            $('.img2').animate({right:'0px'},1500);
            $('.img3').animate({bottom:'0px'},1500);
        }
    },

});
$(function () {
    // music
    var paus = document.getElementById('audio');
    if (paus.paused) {
        $('#headImg').attr("src", "./imgs/paused.png").removeClass('play');
        paus.pause();
    } else {
        $('#headImg').attr('src', './imgs/play.png').addClass('play');
        paus.play();
    }
    $('#headImg').click(function () {
        var paus = document.getElementById('audio');
        if (paus.paused) {
            $('#headImg').attr("src", "./imgs/play.png");
            $(this).addClass('play');
            paus.play();
        } else {
            $(this).removeClass('play');
            $('#headImg').attr('src', './imgs/paused.png');
            paus.pause();
        }
    });

})
