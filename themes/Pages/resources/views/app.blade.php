<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    <meta charset="utf-8" />
    <title>{{config('app.name')}}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" />
    <link rel="apple-touch-icon" href="/themes/pages/pages/ico/60.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/themes/pages/pages/ico/76.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/themes/pages/pages/ico/120.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/themes/pages/pages/ico/152.png">
    <link rel="icon" type="image/x-icon" href="/themes/pages/favicon.ico" />
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-touch-fullscreen" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta content="" name="description" />
    <meta content="" name="author" />
    <link href="/themes/pages/assets/plugins/pace/pace-theme-flash.css" rel="stylesheet" type="text/css" />
    <link href="/themes/pages/assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="/themes/pages/assets/plugins/font-awesome/css/font-awesome.css" rel="stylesheet" type="text/css" />
    <link href="/themes/pages/assets/plugins/jquery-scrollbar/jquery.scrollbar.css" rel="stylesheet" type="text/css" media="screen" />
    <link href="/themes/pages/assets/plugins/select2/css/select2.min.css" rel="stylesheet" type="text/css" media="screen" />
    <link href="/themes/pages/assets/plugins/switchery/css/switchery.min.css" rel="stylesheet" type="text/css" media="screen" />
    <link href="/themes/pages/pages/css/pages-icons.css" rel="stylesheet" type="text/css">
    <link type="text/css" rel="stylesheet" href="/themes/pages/assets/plugins/bootstrap-tag/bootstrap-tagsinput.css">
    <link media="screen" type="text/css" rel="stylesheet" href="/themes/pages/assets/plugins/bootstrap-datepicker/css/datepicker3.css">
    <link media="screen" type="text/css" rel="stylesheet" href="/themes/pages/assets/plugins/summernote/css/summernote.css">
    <link class="main-stylesheet" href="/themes/pages/pages/css/themes/corporate.css" rel="stylesheet" type="text/css" />

    @routes
    <script src="/themes/pages/vendors/script.js"></script>
    <script src="/themes/pages/js/dependencies.js?id={{time()}}" defer></script>

    @stack('styles')
</head>
<body class="fixed-header">
@inertia


@stack('scripts')
</body>
</html>