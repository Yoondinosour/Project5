$(function () {
  $(window).on({
    mousemove: function (e) {
      /* console.log(
                  `브라우저 X좌표:${e.clientX},
                  브라우저 Y좌표:${e.clientY},
                  요소의 X좌표:${e.offsetX},
                  요소의 Y좌표:${e.offsetY},
                  페이지 X좌표:${e.pageX},
                  페이지 Y좌표:${e.pageY},
                  디바이스 X좌표:${e.screenX},
                  디바이스 Y좌표:${e.screenY},`
              ); */

      /* $('.cursor').css({left: e.clientX-25 , top: e.clientY-25}) */

      let pageX = e.pageX;
      let pageY = e.pageY;

      let standardX = $(window).width() / 2 - pageX;
      let standardY = $(window).height() / 2 - pageY;

      $(".main-move .move-bg-1").attr({
        style:
          "transform:translate(" +
          standardX / 200 +
          "px ," +
          standardY / 200 +
          "px)",
      });
      $(".main-move .move-bg-2").attr({
        style:
          "transform:translate(" +
          standardX / 160 +
          "px ," +
          standardY / 160 +
          "px)",
      });
      $(".main-move .move-bg-3").attr({
        style:
          "transform:translate(" +
          standardX / 120 +
          "px ," +
          standardY / 120 +
          "px)",
      });
      $(".main-move .move-bg-4").attr({
        style:
          "transform:translate(" +
          standardX / 80 +
          "px ," +
          standardY / 80 +
          "px)",
      });
      $(".main-move .move-bg-5").attr({
        style:
          "transform:translate(" +
          standardX / 40 +
          "px ," +
          standardY / 40 +
          "px)",
      });
    },
  });
});
