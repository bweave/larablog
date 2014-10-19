<?php

class SessionsController extends \BaseController {

	/**
	 * Logs a user in
	 *
	 * @return Response
	 */
	public function store()
	{
		$creds = [
            'email' =>  Input::get('email'),
            'password' =>  Input::get('password')
        ];

        if ( Auth::attempt($creds) ) {
            return Response::json(['user' => Auth::user()->toArray()], 202);
        }else{
            return Response::json(['flash' => 'Check your credentials and try again.'], 401);
        }
	}

	/**
	 * Logs a user out
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function index()
	{
		Auth::logout();
        return Response::json(['flash' => 'Logout Successful'], 200);
	}

}
