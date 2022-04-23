class MobileMenu {

    // constructorメソッドでclassで作成されたオブジェクトの初期化　→　コンストラクタはデータを管理し、インスタンスを生成する時に実行したい処理や設定を追加するための機能
    constructor() {
        this.DOM = {}; // thisのDOMをオブジェクトリテラルで初期化
        this.DOM.btn = document.querySelector('.mobile-menu__btn');
        this.DOM.cover = document.querySelector('.mobile-menu__cover'); // モバイルメニューを開いた時、#containerにカバーをかける
        this.DOM.container = document.querySelector('#global-container');

        // モバイルメニュー部分
        this.DOM.home = document.querySelector('.mobile-menu-home');
        this.DOM.about = document.querySelector('.mobile-menu-about');
        this.DOM.menu = document.querySelector('.mobile-menu-menu');
        this.DOM.information = document.querySelector('.mobile-menu-information');
        this.DOM.access = document.querySelector('.mobile-menu-access');



        // ボタンに対してイベントの登録 → プライベートメソッドの「_toggle」をaddEventListenerに渡す。また、MobileMenuに登録されている_toggleメソッドを使用しているので、「this._toggle」にする。さらに_toggleメソッドでthisを使っており、Mobile Menuの中の要素にアクセスしているため、「this._toggle.bind(this)」としてthisを束縛する。
        this.DOM.btn.addEventListener('click', this._toggle.bind(this)); // 「.mobile-menu__btn (ハンバーガーメニュー)」の部分をクリックした時に、toggleで.menu-openをつけ外しができるようにする。
        this.DOM.cover.addEventListener('click', this._toggle.bind(this)); // 「.mobile-menu__cover'(mobile-menuが開いた時に、#containerが暗くなる部分)」にもtoggleで.menu-openをつけ外しができるようにする。
        
        this.DOM.home.addEventListener('click', this._toggle.bind(this));
        this.DOM.about.addEventListener('click', this._toggle.bind(this));
        this.DOM.menu.addEventListener('click', this._toggle.bind(this));
        this.DOM.information.addEventListener('click', this._toggle.bind(this));
        this.DOM.access.addEventListener('click', this._toggle.bind(this));
    }



    // プライベートメソッド
    _toggle() {
        // toggle内で、#grobal-containerの要素(classList)に対して、クリックされるたびに「.menu-open」というクラスをつけたり消したりする処理。
        this.DOM.container.classList.toggle('menu-open');
    }
}



// newでインスタンス化（オブジェクトの生成）　→　クラスから生成したオブジェクトのことをインスタンスと呼ぶ。
new MobileMenu();