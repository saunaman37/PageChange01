const frame = document.getElementById('contentFrame');
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

// iframe切り替え
function changePages(name) {
  const safe = PAGE_MAP[name] ? name : 'A';
  setActive(safe);
  frame.src = PAGE_MAP[safe];
}

// クリックイベント
buttons.forEach((btn) =>
  btn.addEventListener('click', () => changePages(btn.dataset.page))
);

// 初期表示
document.addEventListener('DOMContentLoaded', () => {
  changePages('A');
});
