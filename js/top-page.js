// 汎用フェード処理
function setupFade(className) {
  const targets = document.querySelectorAll(`.${className}`);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // 1回だけ発火
      }
    });
  }, {
    threshold: 0.1
  });

  targets.forEach(target => observer.observe(target));
}

// フェードアップ
setupFade('fade-up');

// フェードダウン
setupFade('fade-down');
