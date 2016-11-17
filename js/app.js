angular.module("mainApp", ["ui.router", "ui.materialize"])
.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider

    .state("home", {
      url: "/",
      templateUrl: "../views/home.html"
    })
    
    .state("bolu", {
      url: "/bolu",
      templateUrl: "../views/bolu.html"
    })

    .state("ferovino", {
      url: "/ferovino",
      templateUrl: "../views/ferovino.html"
    })

    .state("saree", {
      url: "/saree",
      templateUrl: "../views/saree.html"
    })

    .state("about", {
      url: "/about",
      templateUrl: "../views/about.html"
    })

})
