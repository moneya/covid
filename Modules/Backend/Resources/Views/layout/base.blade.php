<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{csrf_token()}}" >

    <title>{{config('app.name')}} | Backend</title>
    <!-- Favicon -->
    <link href="/assets/backend/img/brand/favicon.png" rel="icon" type="image/png">

    <!-- Fonts -->
    <link href="" rel="stylesheet">

    <!-- Icons -->
    <link href="/assets/backend/js/plugins/nucleo/css/nucleo.css" rel="stylesheet">
    <link href="/assets/backend/js/plugins/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet">

    <!--  CSS -->
    <link type="text/css" href="/assets/backend/css/argon-dashboard.css" rel="stylesheet">

    @stack('styles')
</head>

<body>

@yield('base')


<!-- Core -->
<script src="/assets/backend/js/plugins/jquery/dist/jquery.min.js"></script>
<script src="/assets/backend/js/plugins/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
<script src="/assets/backend/js/plugins/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>
<!--  JS -->
<script src="/assets/backend/js/argon-dashboard.min.js"></script>

@stack('scripts')

</body>

</html>