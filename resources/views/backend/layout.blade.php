<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="{{asset('admin/img/icons/icon-48x48.png')}}" />
    <title>Admin</title>
    @vite('resources/css/bootstrap.min.css')
    @vite('resources/css/app.css')
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
</head>

<body>
    <div id="app">
    </div>

    @vite('resources/js/asset/js/jquery-3.6.0.min.js')
    @vite('resources/js/asset/js/main.js')
    @vite('resources/js/backend/backend.js')
</body>
</html>