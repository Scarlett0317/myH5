let $audio = $('audio')[0],
    $playBtn = $('.playBtn');

let runPage,
    interval,
    autoPlay;
let $qz_box = $('.qz_box')
$playBtn.on('click', function() {
    var $this = $(this);
    if ($this.hasClass('move')) {
        //让音频停止 清掉定时器
        $audio.pause();
        $this.removeClass('move');
    } else {
        $this.addClass('move');
    }
});

autoPlay = function(to) {

    clearTimeout(interval);
    interval = setTimeout(function() {
        runPage.go(to);
    }, 5000);

}

runPage = new FullPage({
    id: 'pageContain', // id of contain
    slideTime: 800, // time of slide
    continuous: true, // create an infinite feel with no endpoints
    effect: { // slide effect
        transform: {
            translate: 'Y', // 'X'|'Y'|'XY'|'none'
            scale: [1, 1], // [scalefrom, scaleto]
            rotate: [0, 0] // [rotatefrom, rotateto]
        },
        opacity: [0, 1] // [opacityfrom, opacityto]
    },
    mode: 'wheel,touch',
    easing: 'ease',
});

// interval = setTimeout(function() {
//     runPage.go(runPage.thisPage() + 1);
// }, 5000);