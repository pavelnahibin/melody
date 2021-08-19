$(document).ready(function () {
   var currentFloor = 2;// переменная где хранитсья текущий этаж
   var floorPath = $(".home-image path");// каждый отдельный этаж в SVG
   var counterUp = $(".counter-up");//кнопка увеличения этажа
   var counterDown = $(".counter-down");//кнопка уменьшения этажа

   //функция при наведение мышкой на этаж
   floorPath.on('mouseover', function(){
      floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
      currentFloor = $(this).attr("data-floor");//получаем значение текущего этажа
      $(".counter").text(currentFloor);//записываем значение этажа в счетчик
   });
   
   //функция отслеживания клика по кнопке вверх
   counterUp.on("click", function(){
      if(currentFloor < 18){
         currentFloor++;
         usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});//форматирпование переменной с этажом в вид "02"
         $(".counter").text(usCurrentFloor);//записываем значение этажа в счетчик
         floorPath.removeClass("current-floor");// удаляем активный класс у этажей
         $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");//подсвечиваем текущий этаж
      }
   });

   //функция отслеживания клика по кнопке вниз
   counterDown.on('click', function(){
      if(currentFloor > 2){
         currentFloor--;
         usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});//форматирпование переменной с этажом в вид "02"
         $(".counter").text(usCurrentFloor);//записываем значение этажа в счетчик
         floorPath.removeClass("current-floor");// удаляем активный класс у этажей
         $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");//подсвечиваем текущий этаж
      }
   })
});