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

	* установил плагин gulp.spritesmith
	* создал таск (gulp/task/sprite.js)
	* gulp/paths/tasks.js : путь к файлу 'sprite.js'
	* gulpfile.js : добавил новую глобальную переменную sprite: require('gulp.spritesmith')
	* добавил название переменной 'sprite' в gulp.task

2. Копирование файлов из папки с исходниками в папку для продакшена.

	* создал таск (gulp/task/copy.fonts.js)
	* copy.fonts.js : таск, который копирует шрифты
	* gulpfile.js : добавил название переменной 'copy:fonts' в gulp.task
	* gulp/paths/tasks.js : путь к файлу 'copy:fonts'
	* gulp/task/watch.js : новая строка 'copy:fonts'


