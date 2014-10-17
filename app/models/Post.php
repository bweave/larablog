<?php

class Post extends \Eloquent {

	// Add your validation rules here
	public static $rules = [
		'title' => 'required',
        'excerpt' => 'required',
        'body' => 'required',
	];

	// Don't forget to fill this array
	protected $fillable = [
        'title',
        'excerpt',
        'body',
    ];

}
