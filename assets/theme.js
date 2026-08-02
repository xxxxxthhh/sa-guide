/* 主题切换:暗色 ↔ 纸墨(护眼)。偏好以 cookie 记忆(项目约定禁用 localStorage)。
   本脚本以同步方式在 <head> 中加载,确保首帧即应用主题,避免闪烁。 */
(function () {
  var m = document.cookie.match(/(?:^|;\s*)sa-theme=(\w+)/);
  if (m && m[1] === 'sepia') {
    document.documentElement.setAttribute('data-theme', 'sepia');
  }

  function label() {
    return document.documentElement.getAttribute('data-theme') === 'sepia'
      ? '\u{1F319} 暗色'   /* 🌙 暗色 */
      : '\u{1F4DC} 纸墨';  /* 📜 纸墨 */
  }

  document.addEventListener('DOMContentLoaded', function () {
    var b = document.createElement('button');
    b.id = 'theme-toggle';
    b.type = 'button';
    b.setAttribute('aria-label', '切换护眼阅读模式');
    b.textContent = label();
    b.addEventListener('click', function () {
      var sepia = document.documentElement.getAttribute('data-theme') === 'sepia';
      if (sepia) {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', 'sepia');
      }
      document.cookie = 'sa-theme=' + (sepia ? 'dark' : 'sepia') +
        ';path=/;max-age=31536000;SameSite=Lax';
      b.textContent = label();
    });
    document.body.appendChild(b);
  });
})();
