(function() {
  'use strict';

  angular.module('api.users', [])
  .factory('UserService', function() {
    let UserService = {};
    let users = [
      {
        id: '1',
        name: 'Mike',
        role: 'Designer',
        location: 'New York',
      },
      {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'London',
      },
      {
        id: '3',
        name: 'Julia',
        role: 'Product Owner',
        location: 'Berlin',
      }
    ];

    UserService.all = function() {
      return users;
    };

    UserService.findById = function(id) {
      return users.find(function(user) {
        return user.id === id;
      });
    };

    return UserService;
  });
})();
