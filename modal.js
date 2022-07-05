function modalWindow() {

    // ここで、HTML上にあるモーダル開閉用のクラスを全て取得
    const modalOpenBtn = document.querySelectorAll('.js-modalOpen');
    const modalCloseBtn = document.querySelectorAll('.js-modalClose');
  
    // 取得したモーダルを開くボタン一個一個に対しforEachで処理
    modalOpenBtn.forEach((elm) => {
      // ボタンがクリックされたら
      elm.addEventListener('click', () => {
        // ボタンに付与されているaria-controlsの値を取得し、それと同じidが付与されているモーダルウィンドウを取得する
        let targetId = elm.getAttribute('aria-controls');
        let target = document.getElementById(targetId);
  
        // モーダルが非表示だった場合
        if (target.getAttribute('aria-hidden') === 'true') {
          // ボタンのaria-expanded属性を変更し、対応するモーダルが開いたと設定する
          elm.setAttribute('aria-expanded', 'true');
          // モーダルのaria-hidden属性を変更し、モーダルが開いたと設定する
          target.setAttribute('aria-hidden', 'false');
          // 現在のスクロール位置を取得した後、bodyを固定させる
          const scrollY = window.scrollY;
          document.body.style.position = 'fixed';
          document.body.style.top = -scrollY + 'px';
          document.body.style.left = '0';
          document.body.style.right = '0';
        }
      });
    });
  
    // 取得したモーダルを閉じるボタン一個一個に対しforEachで処理
    modalCloseBtn.forEach((elm) => {
      // ボタンがクリックされたら
      elm.addEventListener('click', () => {
        // ボタンに付与されているaria-controlsの値を取得し、それと同じidが付与されているモーダルウィンドウを取得する
        let targetId = elm.getAttribute('aria-controls');
        let target = document.getElementById(targetId);
  
        // モーダルが表示されている場合
        if (target.getAttribute('aria-hidden') === 'false') {
          // 開くボタンクリック時に設定されたbodyのtopを取得し、bodyの固定を解除
          const scrollY = document.body.style.top;
          document.body.style.position = '';
          document.body.style.top = '';
          document.body.style.left = '';
          document.body.style.right = '';
          // スクロール位置をモーダルを開いた時と同じ位置に戻す
          window.scrollTo(0, parseInt(scrollY || '0') * -1);
          // ボタンのaria-expanded属性を変更し、対応するモーダルが閉じたと設定する
          elm.setAttribute('aria-expanded', 'false');
          // モーダルのaria-hidden属性を変更し、モーダルが閉じたと設定する
          target.setAttribute('aria-hidden', 'true');
        }
      });
    });
  };
  
  modalWindow();