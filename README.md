#Для Yandex.Money 
автор Алексей Курза

##Примечание
Имел смелость всю клиентскую логику страницы - `index.js` из корня проекта вынести в папку `/frontend`

Webpack собирает `bundle.js` и `style.css`, кладет в корень.
`Index.html` подключает эти 2 файла.

##Для разработки
запустить в консоли `npm install`

собрать проект `webpack`

собрать проект с минимизированным bundle.js `NODE_ENV=production webpack`