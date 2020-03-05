>npm start - запуск с devServer
>
>npm run dev - в режиме разработки, без devServer, выкинет в папку dist
>
>npm run build - в продакшн

 
Структура проекта:
---
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
    + index.html  
    
* **.eslintrc**
* **.gitingore**
* **.htaccess** `(Включает кэширование в браузере)`
* **package.json** `(Содержит в себе названия плагинов для установки)`
* **package-lock.json** 
* **postcss.config.js** `(Конфиг для postcss)`
* **README.md** `(Инструкция)`
* **robots.txt** `(Отключена индексация)`
* **webpack.config.js** `(Конфиг Webpacka)`
