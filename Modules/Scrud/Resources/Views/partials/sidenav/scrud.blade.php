<!-- Divider -->
<hr class="my-3">
<!-- Heading -->
<h6 class="navbar-heading text-muted">Manage Data</h6>
<!-- Navigation -->
<ul class="navbar-nav mb-md-3">
    @foreach(\Modules\Scrud\Kernel\ScrudService::init()->getScrudMenus() as $menu)
        <li class="nav-item">
            <a class="nav-link" href="{{$menu['link']}}">
                <i class="ni ni-bullet-list-67"></i> {{$menu['title']}}
            </a>
        </li>
    @endforeach
</ul>