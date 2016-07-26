$(document).ready(function(){
  document.body.addEventListener('touchstart', function () { /*...空函数即可*/});
  if($(".u-mainnav").length > 0){
    $(".u-mainnav li>a").bind("click", function (){

      if ($(this).siblings("ul").length > 0){
        $(this).parent().toggleClass("unfold");
      }else {
        $(".u-mainnav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
      }
    });
  }
  if($(".u-menu-select").length > 0){
    $(".u-menu-select li>a").bind("click", function (){

      if ($(this).siblings("ul").length > 0){
        $(this).parent().toggleClass("unfold");
      }else {
        //$(".u-menu-select").find(".active").removeClass("active");
        //$(this).parent().addClass("active");
      }
    });
  }
});
