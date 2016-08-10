


function insert() {
  var mainNav=$(".g-mainnav > .u-mainnav");

  var insertMainnav =
    "<ul class='main-menu'>" +
      "<li class='item-menu unfold'>" +
         "<a class='title' href='javascript:void(0)'>系统管理</a>" +
        "<ul>" +
          "<li><a class='title' href='xt-menu-view.html'>菜单管理</a></li>" +
          "<li><a class='title' href='xt-city-view.html'>城市管理</a></li>" +
          "<li><a class='title' href='xt-section-view.html'>部门管理</a></li>" +
        "</ul>" +
      "</li>" +
      "<li class='item-menu unfold'>" +
        "<a class='title' href='javascript:void(0)'>用户管理</a>" +
        "<ul>" +
          "<li><a class='title' href='yh-role-view.html'>角色管理</a></li>" +
          "<li><a class='title' href='yh-user-view.html'>用户管理</a></li>" +
        "</ul>" +
      "</li>" +
      "<li class='item-menu unfold'>" +
        "<a class='title' href='javascript:void(0)'>部门业务</a>" +
        "<ul>" +
          "<li><a class='title' href='yw-scene-case-view.html'>策划</a></li>" +
          "<li><a class='title' href='yw-scene-case-view.html'>工程</a></li>" +
        "</ul>" +
      "</li>" +
      "<li class='item-menu unfold'>" +
        "<a class='title' href='javascript:void(0)'>仓库系统</a>" +
        "<ul>" +
          "<li><a class='title' href='./ck-prop-view.html'>道具管理</a></li>" +
          "<li><a class='title' href='./ck-material-view.html'>物料管理</a></li>" +
        "</ul>" +
      "</li>" +
    "</ul>";
  console.log(mainNav);
  mainNav.innerHTML(insertMainnav);
}
