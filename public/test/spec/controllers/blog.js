'use strict';

describe('Controller: BlogCtrl', function () {
  var rootScope, scope, ctrl, mockBlogService, httpBackend, blogCtrl;

  beforeEach(module('jsApp'));

  beforeEach(inject(
    function($injector) {
      httpBackend = $injector.get('$httpBackend');
      rootScope = $injector.get('$rootScope');
      scope = rootScope.$new();
      mockBlogService = $injector.get('blogService');
      ctrl = $injector.get('$controller');
      blogCtrl = ctrl('BlogCtrl', {
        $scope: scope,
        blogService: mockBlogService
      });

      var mockData = [
      {
        'id': 31,
        'title': 'Porro modi doloremque sunt neque ab vel odio.',
        'body': 'Corporis ut quo porro temporibus nemo earum. In maiores quae impedit est.',
        'created_at': '2014-10-05 15:28:42',
        'updated_at': '2014-10-05 15:28:42'
      },
      {
        'id': 32,
        'title': 'Dolorum nostrum dolores rerum.',
        'body': 'Sed et voluptas ea officia vel non blanditiis et. Laboriosam deserunt excepturi qui ducimus. Quasi laborum aut et vel eligendi. Ut dolore ut deserunt.',
        'created_at': '2014-10-05 15:28:42',
        'updated_at': '2014-10-05 15:28:42'
      }];
      var url = 'http://localhost:8000/posts';
      httpBackend.whenGET(url).respond(mockData);
    })
  );

  it('should set posts on successful query', function() {
    scope.posts = mockBlogService.query();
    httpBackend.flush();

    expect(scope.posts.length).toEqual(2);
  });
});
