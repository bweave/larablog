@extends('layouts.default')

@section('css')
<link rel="stylesheet" href="{{ asset('.tmp/styles/main.css') }}">
@stop

@section('content')

<div class="container">

    <!-- This is where the AngularJS magic happens -->
    <div ui-view></div>

</div>

@stop

@section('js')
<!-- JS LIBS -->
<script src="{{ asset('bower_components/jquery/dist/jquery.js') }}"></script>
<script src="{{ asset('bower_components/angular/angular.js') }}"></script>
<script src="{{ asset('bower_components/angular-resource/angular-resource.js') }}"></script>
<script src="{{ asset('bower_components/angular-cookies/angular-cookies.js') }}"></script>
<script src="{{ asset('bower_components/angular-sanitize/angular-sanitize.js') }}"></script>
<script src="{{ asset('bower_components/angular-animate/angular-animate.js') }}"></script>
<script src="{{ asset('bower_components/angular-touch/angular-touch.js') }}"></script>
<script src="{{ asset('bower_components/angular-route/angular-route.js') }}"></script>
<script src="{{ asset('bower_components/angular-ui-router/release/angular-ui-router.js') }}"></script>
<script src="{{ asset('bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js') }}"></script>

<!-- ANGULAR JS APP -->
<script src="{{ asset('app/scripts/app.js') }}"></script>
<script src="{{ asset('app/scripts/controllers/main.js') }}"></script>
<script src="{{ asset('app/scripts/controllers/about.js') }}"></script>
<script src="{{ asset('app/scripts/services/blogservice.js') }}"></script>
<script src="{{ asset('app/scripts/controllers/posts.js') }}"></script>
<script src="{{ asset('app/scripts/controllers/single.js') }}"></script>
<script src="{{ asset('app/scripts/controllers/blog.js') }}"></script>
<script src="{{ asset('app/scripts/controllers/new.js') }}"></script>
<script src="{{ asset('app/scripts/controllers/edit.js') }}"></script>
@stop
