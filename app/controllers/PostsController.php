<?php

class PostsController extends \BaseController {

	public function __construct()
    {
        $this->beforeFilter('serviceAuth');
        $this->beforeFilter('serviceCSRF');
    }

    /**
	 * Display a listing of posts
	 *
	 * @return Response
	 */
	public function index()
	{
		$posts = Post::all();

		return Response::json($posts);
	}

	/**
	 * Show the form for creating a new post
	 *
	 * @return Response
	 */
	public function create()
	{
		// this method isn't needed
	}

	/**
	 * Store a newly created post in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$validator = Validator::make($data = Input::only([ 'title', 'excerpt', 'body' ]), Post::$rules);

		if ($validator->fails())
		{
			return Response::json([
                'status' => 'ERR',
                'errors' => $validator->messages(),
                'flash' => ['flashMessage' => 'Uh-oh! Check your input and try again.', 'flashClass' => 'danger']
            ]);
		}

		$post = Post::create($data);

		return Response::json([
            'status' => 'SUCCESS',
            'data' => $post,
            'flash' => ['flashMessage' => 'Post Created Successfully!', 'flashClass' => 'success']
        ]);
	}

	/**
	 * Display the specified post.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$post = Post::findOrFail($id);

		return Response::json($post);
	}

	/**
	 * Show the form for editing the specified post.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$post = Post::find($id);

		return View::make('posts.edit', compact('post'));
	}

	/**
	 * Update the specified post in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$post = Post::findOrFail($id);

		$validator = Validator::make($data = Input::only([ 'title', 'excerpt', 'body' ]), Post::$rules);

		if ($validator->fails())
		{
			return Response::json([
                'status' => 'ERR',
                'errors' => $validator->messages(),
                'flash' => ['flashMessage' => 'Uh-oh! Check your input and try again.', 'flashClass' => 'danger']
            ]);
		}

		$post->update($data);

		return Response::json([
            'status' => 'SUCCESS',
            'data' => $post,
            'flash' => ['flashMessage' => 'Post Updated Successfully!', 'flashClass' => 'success']
        ]);
	}

	/**
	 * Remove the specified post from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
        if (! $post = Post::destroy($id))
        {
            return Response::json([
                'status' => 'ERR',
                'data' => $post,
                'flash' => ['flashMessage' => 'Uh-oh! Couldn not delete the post.', 'flashClass' => 'danger']
            ]);
        }

		return Response::json([
            'status' => 'SUCCESS',
            'data' => $post,
            'flash' => ['flashMessage' => 'Post Created Successfully!', 'flashClass' => 'success']
        ]);
	}

}
