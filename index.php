<!DOCTYPE html>
<html lang="ru" prefix="og: http://ogp.me/ns#">
<head>
  <meta charset="UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width">

  <title>TEST APP</title>
  <meta name="description" content="TEST APP">
  <meta property="og:title" content="TEST APP"/>
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="TEST APP"/>
  <meta property="og:description" content="TEST APP">

  <link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed&display=swap" rel="stylesheet">
  <link href="/build/css/main.css" rel="stylesheet">
</head>
<body>

<header class="header">
  <div class="container">
    <div class="header__wrapper">
      <h1 class="header__title">Test app</h1>
    </div>
  </div>
</header>

<main>
  <section class="photo">
    <div class="container">
      <div class="photo__wrapper" id="photo"></div>
    </div>
  </section>
</main>


<footer class="footer">
  <div class="container">
    <div class="footer__wrapper">
      <div class="footer__copyright">
        © 2018-2019
      </div>
    </div>
  </div>
</footer>

<div class="modal-bg " data-close="true">
  <div class="modal">
    <div class="modal__close" data-close="true"></div>
    <div class="modal__content">
      <div class="modal__img">
        <div class="modal__img-item"></div>
      </div>
      <div class="modal__comment"></div>
      <form action="#" method="post" class="form modal__form" id="form-comment">
        <input type="text" aria-label="Ваше имя" name="name" placeholder="Ваше имя"
               class="form__input modal__form-input">
        <input type="text" aria-label="Ваш комментарий" name="comment" placeholder="Ваш комментарий"
               class="form__input modal__form-input">
        <button type="submit" class="button button_blue">Оставить комментарий</button>
        <input type="hidden" id="modal-photo-id">
      </form>
    </div>
  </div>
</div>

<script src="/build/js/main.js" defer></script>
</body>
</html>
