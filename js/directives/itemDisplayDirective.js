angular.module("mainApp").directive("itemDisplayDirective", function() {
  return {
    restrict: "AE"
    , replace: true
    , scope: {
        item: "="
    }
    , templateUrl: "js/directives/itemDisplay.html"
  }
})
