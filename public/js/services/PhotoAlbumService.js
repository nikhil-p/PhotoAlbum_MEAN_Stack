angular.module('PhotoAlbumService', []).factory('PhotoAlbum', ['$http', function ($http) {
    return {
        // call to get all nerds
        get: function () {
            return $http.get('/api/getPhotos');
        },
        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create: function (photoData) {
            return $http.post('/api/addPhoto', photoData);
        },

        // call to DELETE a nerd
        delete: function (id) {
            return $http.delete('/api/deletePhoto/' + id);
        }
    }
}]);