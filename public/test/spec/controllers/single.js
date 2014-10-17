'use strict';

describe('Controller: SingleCtrl', function () {
  var rootScope, scope, ctrl, mockBlogService, httpBackend, blogCtrl, stateParams;

  beforeEach(module('jsApp'));

  beforeEach(inject(
    function($injector) {
      httpBackend = $injector.get('$httpBackend');
      rootScope = $injector.get('$rootScope');
      scope = rootScope.$new();
      mockBlogService = $injector.get('blogService');
      ctrl = $injector.get('$controller');
      stateParams = $injector.get('$stateParams');
      stateParams.id = 31;
      blogCtrl = ctrl('SingleCtrl', {
        $scope: scope,
        $stateParams: stateParams,
        blogService: mockBlogService
      });

      var mockData = {
        'id': 31,
        'title': 'Porro modi doloremque sunt neque ab vel odio.',
        'body': 'Corporis ut quo porro temporibus nemo earum. In maiores quae impedit est.',
        'created_at': '2014-10-05 15:28:42',
        'updated_at': '2014-10-05 15:28:42'
      };
      var url = 'http://localhost:8000/posts/31';
      httpBackend.whenGET(url).respond(mockData);
    })
  );

  it('should set post on successful get', function() {
    scope.post = mockBlogService.get({ id: stateParams.id });

    httpBackend.flush();

    expect(scope.post.id).toEqual(31);
  });
});
