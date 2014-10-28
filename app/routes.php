<?php

Route::get('/', function()
{
	return View::make('hello');
});

Route::resource('posts', 'PostsController');

Route::group(array('prefix' => 'service'), function() {

    Route::post('authenticate/login', 'SessionsController@login', ['as' => 'login_route']);
    Route::get('authenticate/logout', 'SessionsController@logout', ['as' => 'logout_route']);

});
