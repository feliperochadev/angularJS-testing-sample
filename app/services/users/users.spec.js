describe('Users factory', function() {
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
  const singleUser = {
    id: '2',
    name: 'Bob',
    role: 'Developer',
    location: 'London',
  };

  beforeEach(angular.mock.module('api.users'));

  beforeEach(inject(function(_UserService_) {
    UserService = _UserService_;
  }));

  it('should exist', function() {
    expect(UserService).toBeDefined();
  });

  describe('.all()', function() {
    it('should exist', function() {
      expect(UserService.all).toBeDefined();
    });

    it('should return a hard-coded list of users', function() {
      expect(UserService.all()).toEqual(users);
    });
  });

  describe('.findById()', function() {
    it('should exist', function() {
      expect(UserService.findById).toBeDefined();
    });

    it('should return one user object if it exists', function() {
      expect(UserService.findById('2')).toEqual(singleUser);
    });

    it('should return undefined if the user cannot be found', function() {
      expect(UserService.findById('ABC')).not.toBeDefined();
    });
  });
});
