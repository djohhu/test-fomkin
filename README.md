Version Gulp: 4.0.0
---
[Документация Gulp на хабре](https://habr.com/ru/post/250569/ )
>НЕ ВНОСИТЬ ИЗМЕНЕНИЯ В ПАПКЕ build
>
>При сборке проекта сначала удаляется папка (если есть) потом создается

    Перед сборкой проекта, нужно установить node.js
    Открыть консоль в папке gulp и прописать комнаду npm install
    После установки не закрывая консоль написать gulp

    Перед выкатом на боевой в консоли вместо gulp нужно написал gulp final
    Он соберет проект и очистит js и css от sourcemaps который помогает во время разработки
  
`ЕСЛИ У ВАС ВОЗНИКЛА ПРОБЛЕМА ПРИ СБОРКЕ, УСТАНОВИТЕ ГЛОБАЛЬНО ЧЕРЕЗ КОНСОЛЬ npm i gulp-cli -g`
 
Структура проекта:
---

+ **files** `(Для документов)`
+ **gulp** `(Для сборки проекта, gulp запускать из этой папки)`
    * gulpfile.babel.js `(Соберет все из папки src в папку build)`
    * package.json `(Содержит в себе названия плагинов для установки)`
* **phpmailer** `(Отправка почты через phpmailer,необязательная папка)`
* **favicon**
+ **src** `(Файлы для сборки)`
    * fonts
    + images  
        + original `(Исходные картинки)`
            * icons `(Иконки сайта)`
            * index `(Основные картинки)`                
    + js
        + vendors (Плагины)
            * jquery.arcticmodal-0.3.min.js `(пример подлючение модального окна в index.php и main.js или см. ниже)`
            * jquery.laze.min.js `(ленивая загрузка фотографий, пример см. ниже)`
            * slick.js `(слайдер)`
        * main.js `(Основной файл, так же подключает папку vendors, пример подключения см. ниже)`
    + scss        
        + abstracts
            * _mixins.scss  `(Часто используемые правила, функции)`
            * _variables.scss `(Переменные)`
        + base
            * _typography.scss `(Базовые стили)`
            * _base.scss `(Базовые классы)`
            * _fonts.scss `(Подключение шрифтов, необязательный файл)`
        + components
           * _close.scss `(Стили для крестика)`
           * _burger.scss `(Стили для бургера)`
           * _alarm.scss `(Стили для "Оповещения о устаревшем браузере")`
           * _modal.scss `(Стили для модалки)`
        + layout          
            * _footer.scss `(Подвал)`
            * _grid.scss `(Сетка)`
            * _header.scss `(Шапка)`           
        + pages
            * _home.scss `(Главная)`
        + vendor
            * slick.css `(Slick Slider)`
            * jquery.arcticmodal-0.3.css `(arcticModal)`
    * main.scss `(Подключает содержимое всех папок)`
+ **tmp-img** `(Временные картинки (Если картинки будет добавлятся через админку, то при разработке, ее аналог помещать в эту папку))`
* **.gitingore**
* **.htaccess** `(Включает кэширование в браузере)`
* **cmsmagazinee**
* **index.php** `(Основной файл)`
* **isalive**
* **README.md** `(Инструкция)`
* **robots.txt** `(Отключена индексация)`
* **send_message(с хостинга).php** `(Отправка писем с хостинга, необязательный файл)`

Пример вызова модального окна:
---
```html
HTML
<a href="#" data-toggle="modal" data-target="*"></a>
// * - класс или индификатор модального окна. Пример: data-target=".simple-modal"

```

Пример модального окна:
---
[Документация](https://arcticlab.ru/arcticmodal/)
```html
HTML
<div style="display: none;">
    <div class="box-modal simple-modal">
        <div class="box-modal-close arcticmodal-close">закрыть</div>
        Пример модального окна
    </div>
</div>
```

Пример подключения ленивой загрузки:
---
[Документация](http://jquery.eisbehr.de/lazy/)
```html
HTML
<img class="lazy" src="loading.gif" data-src="build/images/index/img.jpg" alt=""/>
<div class="lazy" data-src="build/images/index/img.jpg"></div>
```
```javascript
javascript
$('.lazy').lazy({options});
```
Пример подключения js файлов в main.js из папки vendors
---
```javascript
javascript
//= vendors/jquery.arcticmodal-0.3.min.js
```
