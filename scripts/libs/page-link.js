// ページ内リンク
$(function(){
    $('a[href^="#"]').click(function() {
        let speed = 700; // スクロールスピード(ミリ秒)
        let href= $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        
        const mediaQuery = window.matchMedia('(min-width: 960px)')

        // モバイルメニュー用に追加
        let positionS = target.offset().top-150; // スマホ表示の時は、ヘッダーの高さを引いてスクロール
        let position = target.offset().top; // それ以外は通常通りにスクロール


        if (mediaQuery.matches) {
            // pc表示の時 (960px以上)
            $('body,html').animate({scrollTop:position}, speed, 'swing');
        } else {
            // スマホ表示の時 (960px未満)
            $('body,html').animate({scrollTop:positionS}, speed, 'swing');
        }
        return false;
    });
});
