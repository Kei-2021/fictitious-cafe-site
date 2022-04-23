// スクロールした際の動きを関数でまとめる
function PageTopAnime() {
    let scroll = $(window).scrollTop(); // スクロール値を取得

    if (scroll >= 200) {
        // 200pxスクロールした時
        $('#page-top').removeClass('DownMove'); // DownMoMoveクラスを除去
        $('#page-top').addClass('UpMove'); // UpMoveクラスを追加
    }
    else { // それ以外の場合
        // UpMoveクラスが既に付与されている場合
        if($('#page-top').hasClass('UpMove')) {
            $('#page-top').removeClass('UpMove'); // UpMMoveクラスを除去
            $('#page-top').addClass('DownMove');
        }
    }

    let wH = window.innerHeight; // 画面の高さを取得
    let footerPos = $('#footer').offset().top; // footerの位置を取得

    if (scroll+wH >= (footerPos+10)) {
        // スクロールの値+画面の高さからfooterの位置+10pxを引いた場所を取得
        let pos = (scroll+wH) - footerPos+10
        // #page-topに上記の値をCSSのbottomに直接指定、フッター手前で止まるように
        $('#page-top').css('bottom',pos);
    }
    else { // それ以外の場合
        // UpMoveクラスがついている場合
        if($('#page-top').hasClass('UpMove')) {
            $('#page-top').css('bottom', '10px'); // 下から10pxの位置にページリンクを指定
        }
    }
}


// 画面をスクロールしたら動かしたい場合
$(window).scroll(function () {
    PageTopAnime(); // スクロールした際の動きの関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合
$(window).on('load', function () {
    PageTopAnime(); // スクロールした際の動きの関数を呼ぶ
});

// #page-topをクリックした際の設定
$('#oage-top').click(function () {
    $('body,html').animate({
        scrollTop: 0 // ページトップまでスクロール
    }, 500); // ページトップスクロールの速さ
    return false; // リンク自体の無効化
})