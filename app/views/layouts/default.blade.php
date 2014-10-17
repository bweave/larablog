<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Larablog</title>
    <meta name="viewport" content="width=device-width">

    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"/>
    @yield('css')

</head>
<body ng-app="jsApp">

    @include('layouts/includes/main-nav')

    @yield('content')

    @include('layouts/includes/main-footer')

    @yield('js')

</body>
</html>
