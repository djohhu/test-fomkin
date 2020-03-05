>npm start - запуск с devServer
>
>npm run dev - в режиме разработки, без devServer, выкинет в папку dist
>
>npm run build - в продакшн

 
Структура проекта:
---

+ **gulp** `(Для сборки проекта, gulp запускать из этой папки)`
    * gulpfile.babel.js `(Соберет все из папки src в папку build)`
    * package.json `(Содержит в себе названия плагинов для установки)`
+ **src** `(Файлы для сборки)`                
    + js
        * main.js `(Основной файл)`
    + scss        
        + abstracts
            * _mixins.scss  `(Часто используемые правила, функции)`
            * _variables.scss `(Переменные)`
        + base
            * _typography.scss `(Базовые стили)`
        + components
           * _buttons.scss `(Кнопки)`
           * _form.scss `(Форма)`
           * _modal.scss `(Модальное окно)`
           * _photo.scss `(Фото)`
          
        + layout          
            * _footer.scss `(Подвал)`
            * _grid.scss `(Сетка)`
            * _header.scss `(Шапка)`           
    * main.scss `(Подключает содержимое всех папок)`
* **.gitingore**
* **.htaccess** `(Включает кэширование в браузере)`
* **index.php** `(Основной файл)`
* **README.md** `(Инструкция)`
* **robots.txt** `(Отключена индексация)`
