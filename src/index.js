<<<<<<< HEAD
import 'core-js/features/map';
import 'core-js/features/set';
=======

>>>>>>> first commit
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vk-connect';
import App from './App';
<<<<<<< HEAD
// import registerServiceWorker from './sw';

=======
import registerServiceWorker from './sw';
import jQuery from 'jquery';
>>>>>>> first commit
// Init VK  Mini App
connect.send('VKWebAppInit');

// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT
// registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));
