angular.module("mainApp").directive("navDirective", function() {
  return {
    restrict: "AE"
    , replace: true
    , templateUrl: "js/directives/navDirective.html"
  }
})