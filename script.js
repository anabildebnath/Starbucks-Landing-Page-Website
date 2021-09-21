function imgselector(anything) {
  document.querySelector(".starbucks").src = anything;
}

function changecolor(color){
    const circle= document.querySelector('.circle');
    circle.style.background=color;
}

exports.default = series(scssTask, jsTask, broserSyncServe, watchTask);
exports.build = series(scssTask,jsTask);
