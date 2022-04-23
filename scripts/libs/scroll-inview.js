let targets = document.querySelectorAll('.main-title, .sub-title, .fade, .about__img, .strength__img, .menu__img'); // ターゲット要素を取得（ アニメーションさせたい要素を入れる ）

// スクロールイベントを実行
window.addEventListener('scroll', function () {
    // 以下スクロールした時の処理
    let scroll = window.scrollY;    // スクロール量を取得( 「 window.scrollY 」　document(html)の上端を起点とした垂直方向のスクロールをピクセル数で取得 )
    let windowHeight = window.innerHeight; // 画面の高さを取得( 「 window.innerHeight 」　現在のブラウザの表示領域の高さ )

    for (let target of targets) { // ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す。→ for文の反復処理

        let targetPos = target.getBoundingClientRect().top + scroll; // ターゲット要素の位置を取得( 「 getBoundingClientRect() 」　ブラウザ表示領域の左上を起点としたターゲット要素の位置を示し、これに「 scroll 」を足すと、document(html)からのターゲット要素の位置が取得できる。 ）

        // アニメーションさせたい(ターゲット)要素が画面内に入る = 「スクロール量がターゲット位置を超えたら」という条件で、「 スクロール量 > ターゲット要素の位置 」
        
        if (scroll > targetPos - windowHeight) { // スクロール量 > ターゲット要素の位置 
            target.classList.add('inview')   // inviewを加える
        }
    }
})


// アニメーションさせたい（ターゲット）要素の位置は、「 targetPos - windowHeight 」となっているが、
// これは「 targetPos (documentからターゲット要素の位置) 」から「 windowHeight（ブラウザの表示領域の高さ）」を引くことで、
// ターゲット要素が画面内に入った分のスクロール位置が計算できるため。