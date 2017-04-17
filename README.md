# Учебная сборка Loftschool ДЗ1

> Сборка работает на gulp версии 4.0. 

#### Для начала работы

1. Клонировать репозиторий
2. cd path/to/...
3. npm install gulpjs/gulp-cli -g
4. npm install
6. gulp

ФИО: Яковлев Дмитрий Сергеевич

1. Генерация спрайтов

	1.1 установил плагин gulp.spritesmith
	1.2 создал таск (gulp/task/sprite.js)
	1.3 gulp/paths/tasks.js : путь к файлу 'sprite.js'
	1.4 gulpfile.js : добавил новую глобальную переменную sprite: require('gulp.spritesmith')
	1.5 добавил название переменной 'sprite' в gulp.task

2. Копирование файлов из папки с исходниками в папку для продакшена.

	2.1 создал таск (gulp/task/copy.fonts.js)
	2.2 copy.fonts.js : таск, который копирует шрифты
	2.3 gulpfile.js : добавил название переменной 'copy:fonts' в gulp.task
	2.4 gulp/paths/tasks.js : путь к файлу 'copy:fonts'
	2.5 gulp/task/watch.js : новая строка 'copy:fonts'


