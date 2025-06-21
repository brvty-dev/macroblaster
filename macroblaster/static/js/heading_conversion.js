document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.share_button').forEach(button => {
    const page = button.getAttribute('data-page');
    if (!page) return;

    button.addEventListener('click', function () {
      fetch(`/convert/${page}`, {
        method: 'POST'
      });
    });
  });
});