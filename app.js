const frame = document.getElementById('contentFrame');
const buttons = Array.from(document.querySelectorAll('.tab-btn'));

// ページ名とHTMLパスのマッピング
const PAGE_MAP = {
  A: './pages/html/A.html',
  B: './pages/html/B.html',
  C: './pages/html/C.html',
  D: './pages/html/D.html',
};

// 実行ボタン色変更
function setActive(name) {
  buttons.forEach((b) => b.classList.toggle('active', b.dataset.page === name));
}

// 左ページの切替（ifame内）
function changePages(name) {
  const nextPage = PAGE_MAP[name] ? name : 'A';
  setActive(nextPage);
  frame.src = PAGE_MAP[nextPage];
}

// クリックイベント
buttons.forEach((btn) =>
  btn.addEventListener('click', () => changePages(btn.dataset.page))
);

// 初期表示
document.addEventListener('DOMContentLoaded', () => {
  changePages('A');
});
