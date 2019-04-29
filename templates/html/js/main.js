function bindExpanders() {
  var props = document.querySelectorAll('.js-prop');
  props.forEach(function (prop) {
    prop.addEventListener('click', function (ev) {
      ev.stopPropagation();
      ev.currentTarget.classList.toggle('is-open');
    });
  });
}

window.addEventListener('load', bindExpanders);
