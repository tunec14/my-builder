'use strict';

module.exports = function() {
  $.gulp.task('sprite', function (cb) {
  var spriteData = $.gulp.src('./source/images/*.png') .pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));

  spriteData.img.pipe($.gulp.dest('assets/sprite/images/'));
  spriteData.css.pipe($.gulp.dest('assets/sprite/styles/'));

  cb();
});
};

