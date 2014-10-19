<?php

Route::get('/', function()
{
	return View::make('hello');
});

Route::resource('posts', 'PostsController');

Route::group(array('prefix' => 'service'), function() {

    Route::resource('authenticate', 'SessionsController', ['only' => ['index', 'store']]);

});
