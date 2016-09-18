$(document).ready(function () {
  document.body.addEventListener('touchstart', function () { /*...空函数即可*/
  });
  insertMainnav();
  insertToNav();

  if ($(".u-mainnav").length > 0) {
    $(".u-mainnav li>.title").bind("click", function () {
      if ($(this).parent().hasClass("item-menu")) {
        $(this).parent().toggleClass("unfold");
      } else {
        $(".u-mainnav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
      }
    });
  }
  if ($(".u-menu-select").length > 0) {
    $(".u-menu-select li>.title").bind("click", function () {

      if ($(this).siblings("ul").length > 0) {
        $(this).parent().toggleClass("unfold");
      } else {
        //$(".u-menu-select").find(".active").removeClass("active");
        //$(this).parent().addClass("active");
      }
    });
  }

});

function insertMainnav() {
  if ($(".g-mainnav > .u-mainnav").length > 0) {
    var $mainNav = $(".g-mainnav > .u-mainnav")[0];
    var insertMainnav =
      "<ul class='main-menu'>" +
      " <li class='item-menu unfold'>" +
      "   <a class='title' href='javascript:void(0)'>系统管理</a>" +
      "   <ul>" +
      "     <li><a class='title' href='xt-menu-view.html'>菜单管理</a></li>" +
      "     <li><a class='title' href='xt-city-view.html'>城市管理</a></li>" +
      "     <li><a class='title' href='xt-section-view.html'>部门管理</a></li>" +
      "   </ul>" +
      " </li>" +
      " <li class='item-menu unfold'>" +
      "   <a class='title' href='javascript:void(0)'>用户管理</a>" +
      "  <ul>" +
      "    <li><a class='title' href='yh-role-view.html'>角色管理</a></li>" +
      "    <li><a class='title' href='yh-user-view.html'>用户管理</a></li>" +
      "  </ul>" +
      " </li>" +
      " <li class='item-menu unfold'>" +
      "  <a class='title' href='javascript:void(0)'>部门业务</a>" +
      "  <ul>" +
      "    <li><a class='title' href='yw-scene-case-view.html'>策划</a></li>" +
      "    <li><a class='title' href='yw-case-assign-view.html'>工程</a></li>" +
      "    <li><a class='title' href='yw-cashier-view.html'>收银</a></li>" +
      "  </ul>" +
      " </li>" +
      " <li class='item-menu unfold'>" +
      "  <a class='title' href='javascript:void(0)'>仓库系统</a>" +
      "  <ul>" +
      "    <li><a class='title' href='ck-prop-view.html'>道具管理</a></li>" +
      "    <li><a class='title' href='ck-material-view.html'>物料管理</a></li>" +
      "    <li><a class='title' href='ck-unit-view.html'>物料单位</a></li>" +
      "    <li><a class='title' href='ck-sort-view.html'>物料分类</a></li>" +
      "    <li><a class='title' href='ck-accessory-view.html'>辅材管理</a></li>" +
      "  </ul>" +
      " </li>" +
      "</ul>";

    $(insertMainnav).prependTo($mainNav);
    var pathNmae = window.location.pathname;
    var fileName = pathNmae.substring(pathNmae.lastIndexOf('/') + 1, pathNmae.length);
    $($mainNav).find("li.active").removeClass("active");
    $($mainNav).find("li>.title[href='" + fileName + "']").parent().addClass("active");
  }
}
function insertToNav() {
  if ($(".g-topnav > .u-topnav").length > 0) {
    var $topNav = $(".g-topnav > .u-topnav")[0];
    var insertTopnav =
      "<div class='brand-box'>" +
      "   <a class='text' href='javascript:void(0)' " +
      "   onclick=\"$('.g-mainnav').toggleClass('switch-mainnav');$('.g-content').toggleClass('hide-nav');\">订单系统</a>" +
      " </div>" +
      " <div class='nav-box'>" +
      "   <ul class='top-menu'>" +
      "     <li><a >刘强</a></li>" +
      "     <li><a data-toggle='modal' data-target='#modPasswd'>修改密码</a></li>" +
      "     <li><a >退出</a></li>" +
      "   </ul>" +
      " </div>";
    $(insertTopnav).prependTo($topNav);
  }
}
