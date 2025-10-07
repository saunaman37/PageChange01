const frame = document.getElementById('contentFrame');
const loader = document.getElementById('loader');
const buttons = Array.from(document.querySelectorAll('.tab-btn'));

// ページ名とHTMLパスのマッピング
const PAGE_MAP = {
  A: './pages/html/A.html',
  B: './pages/html/B.html',
  C: './pages/html/C.html',
  D: './pages/html/D.html',
};

// ボタン切り替え
function setActive(name) {
  buttons.forEach((b) => b.classList.toggle('active', b.dataset.page === name));
}

// ローディング表示
function showLoader(show) {
  loader.hidden = !show;
}

// iframe切り替え
function go(name, push = true) {
  const safe = PAGE_MAP[name] ? name : 'A';
  if (push) location.hash = safe;
  setActive(safe);
  showLoader(true);
  frame.src = PAGE_MAP[safe];
}

// iframe読み込み完了時
frame.addEventListener('load', () => showLoader(false));

// クリックイベント
buttons.forEach((btn) =>
  btn.addEventListener('click', () => go(btn.dataset.page))
);

// ハッシュ変更対応
window.addEventListener('hashchange', () => {
  const name = (location.hash || '#A').slice(1);
  go(name, false);
});

// 初期表示
document.addEventListener('DOMContentLoaded', () => {
  const initial = (location.hash || '#A').slice(1);
  go(initial);
});
