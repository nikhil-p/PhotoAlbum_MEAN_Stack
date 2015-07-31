/**
 * Created by nikhil.pasupukuntla on 7/29/2015.
 */
angular.module('AddPhotoCtrl', []).controller('AddPhotoController', function ($scope) {
    $scope.photoCategories = ['Family', 'Friends', 'Personal', 'Other'];
    $scope.save = function () {
        PhotoAlbum.create(angular.toJson($scope.photo));
        console.log("Iam coming here....");

    }
});