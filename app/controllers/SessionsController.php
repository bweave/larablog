<?php

class SessionsController extends \BaseController {

    /**
	 * Logs a user in
	 *
	 * @return Response
	 */
	public function login()
	{
		$creds = [
            'email' =>  Input::get('email'),
            'password' =>  Input::get('password')
        ];

        if ( Auth::attempt($creds) ) {
            return Response::json([
                'user' => Auth::user()->toArray(),
                'flash' => ['flashMessage' => 'Successfully logged in!', 'flashClass' => 'success']
            ], 200);
        }else{
            return Response::json([
                'flash' => ['flashMessage' => 'Check your credentials and try again.', 'flashClass' => 'danger']
            ], 401);
        }
	}

	/**
	 * Logs a user out
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function logout()
	{
		Auth::logout();
        return Response::json([
            'flash' => ['flashMessage' => 'Successfully logged out.', 'flashClass' => 'success']
        ], 200);
	}

}
