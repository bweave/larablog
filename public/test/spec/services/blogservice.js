'use strict';

describe('Service: blogService', function () {
  var httpBackend, mockBlogResource;

  // load the service's module
  beforeEach(module('jsApp'));

  beforeEach(function () {
    inject(function ($injector) {
      httpBackend = $injector.get('$httpBackend');
      mockBlogResource = $injector.get('blogService');
    });
  });

  it('should call query() and return an array of posts', inject(function () {
    httpBackend.expectGET('http://localhost:8000/posts')
    .respond([
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
    }]);

    var result = mockBlogResource.query();

    httpBackend.flush();

    expect(result.length).toEqual(2);
    expect(result[0].id).toEqual(31);
  }));

});
