var myFullpage = new fullpage('#fullpage', {
    verticalCentered: false,
    navigation: true,
    navigationTooltips: ['boot', 'Page 2', 'Any text!'],
    showActiveTooltip: true,
    // fixedElements: '#head',
    onLeave:function(index,nextIndex ,direction ){
        //离开第一屏
        if(index.index===0){
            $('.img1').removeClass('imgAni1');
            $('.img2').removeClass('imgAni2');
            $('.img3').removeClass('imgAni3');
        }
    },
    afterLoad: function (anchorLink, origin) {
        // 当到第一屏时候
        if (origin.index === 0) {
            $('.img1').addClass('imgAni1');
            $('.img2').addClass('imgAni2');
            $('.img3').addClass('imgAni3');
        }
    },

});
$(function () {
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
    })
})
