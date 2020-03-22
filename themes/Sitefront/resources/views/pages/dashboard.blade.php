@extends('sitefront::layouts.master')

@section('content')

    <div class="bg-white">
        <div class="container">
            <h6 class="semi-bold m-t-0 p-t-10 p-b-10">Dashboard of the COVID-19 Virus Outbreak in Nigeria</h6>
        </div>
    </div>
    <!-- end -->
    <!-- start of analytics -->
    <div class="container sm-padding-10 p-t-20 p-l-0 p-r-0">
        <div class="row">
            <div class="col-lg-3 col-sm-6 d-flex flex-column">
                @include('sitefront::partials.widgets.confirmed-case-count')
            </div> <!-- end -->

            <div class="col-lg-3 col-sm-6 d-flex flex-column">
                @include('sitefront::partials.widgets.asymptomatic-case-count')
            </div> <!-- end -->

            <div class="col-lg-3 col-sm-6 d-flex flex-column">
                @include('sitefront::partials.widgets.discharged-case-count')
            </div> <!-- end -->

            <div class="col-lg-3 col-sm-6 d-flex flex-column">
                @include('sitefront::partials.widgets.deceased-case-count')
            </div> <!-- end -->

            <!-- end -->
        </div>
    </div>
    <!-- analytics end -->

    <!-- start of analytics -->
    <div class="container sm-padding-10 p-t-20 p-l-0 p-r-0">
        <div class="row">
            <div class="col-lg-6 col-sm-12 d-flex flex-column">
                @include('sitefront::partials.widgets.cases-heat-map')
            </div>

            <div class="col-lg-6 col-sm-12 d-flex flex-column">
                @include('sitefront::partials.widgets.screening-heat-map')
            </div>
            <!-- end -->
        </div>
    </div>

    <!-- start of analytics -->
    <div class="container sm-padding-10 p-t-20 p-l-0 p-r-0">
        <div class="row">

            <div class="col-lg-12 col-sm-12 d-flex flex-column">
                <div class="card social-card share  full-width m-b-10 no-border" data-social="item">
                    <div class="card-header ">
                        <h5 class="text-complete pull-left fs-12">Number of Cases <i
                                    class="fa fa-circle text-complete fs-11"></i></h5>
                        <div class="pull-right small hint-text">
                            Last Updated: March 19, 2020
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="card-description">
                        <div id="stackedchart"></div>
                    </div>
                    <div class="card-footer clearfix">
                        <div class="pull-left">Key</div>
                        <div class="container">
                            <ul class="legend-section">
                            <li class="single-legend"><span style="background-color: #f10075 ;"></span> Screened</li>
                            <li class="single-legend"><span style="background-color: #0168fa ;"></span> Infected</li>
                            </ul>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>


            <!-- end -->
        </div>
    </div>

    <!-- start of analytics -->
    <div class="container sm-padding-10 p-t-20 p-l-0 p-r-0">
        <div class="row">

            <div class="col-lg-8 col-sm-12 d-flex flex-column">
                <div class="card social-card share  full-width m-b-10 no-border" data-social="item">
                    <div class="card-header ">
                        <h5 class="text-complete pull-left fs-12">Cases Reported <i
                                    class="fa fa-circle text-complete fs-11"></i></h5>
                        <div class="pull-right small hint-text">
                            Last Updated: March 19, 2020
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-hover" id="basicTable">
                                <thead>
                                <tr>

                                    <th style="width:1%" class="text-center"></th>
                                    <th style="width:20%">Case</th>
                                    <th style="width:20%">Patient</th>
                                    <th style="width:29%">Infection Source</th>
                                    <th style="width:15%">Country of Origin</th>
                                    <th style="width:15%">Nationality</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td class="v-align-middle">
                                        1
                                    </td>
                                    <td class="v-align-middle ">
                                        <a href="#" class="text-complete bold">100 </a>
                                    </td>
                                    <td class="v-align-middle">
                                        <p>one african man</p>
                                    </td>
                                    <td class="v-align-middle">
                                        <p>Local Transmission</p>
                                    </td>
                                    <td class="v-align-middle">
                                        <p>Italy</p>
                                    </td>
                                    <td class="v-align-middle">
                                        <p>Nigerian</p>
                                    </td>
                                </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
            <!-- end -->


            <div class="col-lg-4 col-sm-12 d-flex flex-column">
                <div class="card social-card share  full-width m-b-10 no-border" data-social="item">
                    <div class="card-header ">
                        <h5 class="text-complete pull-left fs-12">Gender <i
                                    class="fa fa-circle text-complete fs-11"></i></h5>
                        @if($gender_case_statistics->count() > 0)
                        <div class="pull-right small hint-text">
                            Last Updated: {{$gender_case_statistics->first()->published_at->format('jS M, Y')}}
                        </div>
                        @endif
                        <div class="clearfix"></div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-hover" id="basicTable">
                                <thead>
                                <tr>
                                    @foreach($gender_case_statistics as $gender_case_statistic)
                                    <th style="width:40%">{{$gender_case_statistic->gender}}</th>
                                    @endforeach
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    @foreach($gender_case_statistics as $gender_case_statistic)
                                    <td class="v-align-middle ">
                                        {{$gender_case_statistic->overall_cases_count}}
                                    </td>
                                    @endforeach
                                </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
            <!-- end -->

        </div>
    </div>

    <!-- end of all ends -->

@endsection

@section('scripts')

    <script src="/themes/sitefront/assets/js/d3.v3.js"></script>
    <script src="/themes/sitefront/assets/js/jquery.vmap.min.js"></script>
    <script type="text/javascript" src="/themes/sitefront/assets/js/jquery.vmap.nigeria.js" charset="utf-8"></script>

    <script>
        // set up our data series with 50 random data points
        var data, graph, i, max, min, point, random, scales, series, _i, _j, _k, _l, _len, _len1, _len2, _ref;

        data = [[], []];

        random = new Rickshaw.Fixtures.RandomData(12 * 60 * 60);

        for (i = _i = 0; _i < 100; i = ++_i) {
            random.addData(data);
        }

        scales = [];

        _ref = data[1];
        for (_j = 0, _len = _ref.length; _j < _len; _j++) {
            point = _ref[_j];
            point.y *= point.y;
        }

        for (_k = 0, _len1 = data.length; _k < _len1; _k++) {
            series = data[_k];
            min = Number.MAX_VALUE;
            max = Number.MIN_VALUE;
            for (_l = 0, _len2 = series.length; _l < _len2; _l++) {
                point = series[_l];
                min = Math.min(min, point.y);
                max = Math.max(max, point.y);
            }
            if (_k === 0) {
                scales.push(d3.scale.linear().domain([min, max]).nice());
            } else {
                scales.push(d3.scale.pow().domain([min, max]).nice());
            }
        }

        graph = new Rickshaw.Graph({
            element: document.getElementById("stackedchart"),
            renderer: 'line',
            series: [
                {
                    color: '#f10075',
                    data: data[0],
                    name: 'Series A',
                    scale: scales[0]
                }, {
                    color: '#0168fa',
                    data: data[1],
                    name: 'Series B',
                    scale: scales[1]
                }
            ]
        });

        new Rickshaw.Graph.Axis.Y.Scaled({
            element: document.getElementById('axis0'),
            graph: graph,
            orientation: 'left',
            scale: scales[0],
            tickFormat: Rickshaw.Fixtures.Number.formatKMBT
        });

        new Rickshaw.Graph.Axis.Y.Scaled({
            element: document.getElementById('axis1'),
            graph: graph,
            grid: false,
            orientation: 'right',
            scale: scales[1],
            tickFormat: Rickshaw.Fixtures.Number.formatKMBT
        });

        new Rickshaw.Graph.Axis.Time({
            graph: graph
        });

        new Rickshaw.Graph.HoverDetail({
            graph: graph
        });

        graph.render();

        // start of gender over time graph

        // set up our data series with 50 random data points
        var data4, graph, i, max, min, point, random, scales, series, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref;

        data4 = [[], [], []];

        random = new Rickshaw.Fixtures.RandomData(12 * 60 * 60);

        for (i = _i = 0; _i < 100; i = ++_i) {
            random.addData(data4);
        }

        scales = [];

        _ref = data4[1];
        for (_j = 0, _len = _ref.length; _j < _len; _j++) {
            point = _ref[_j];
            point.y *= point.y;
        }

        for (_k = 0, _len1 = data4.length; _k < _len1; _k++) {
            series = data4[_k];
            min = Number.MAX_VALUE;
            max = Number.MIN_VALUE;
            for (_l = 0, _len2 = series.length; _l < _len2; _l++) {
                point = series[_l];
                min = Math.min(min, point.y);
                max = Math.max(max, point.y);
            }
            if (_k === 0) {
                scales.push(d3.scale.linear().domain([min, max]).nice());
            } else {
                scales.push(d3.scale.pow().domain([min, max]).nice());
            }
        }

        graph = new Rickshaw.Graph({
            element: document.getElementById("genderchart"),
            renderer: 'line',
            series: [
                {
                    color: '#f10075',
                    data: data4[0],
                    name: 'Series A',
                    scale: scales[0]
                }, {
                    color: '#0168fa',
                    data: data4[1],
                    name: 'Series B',
                    scale: scales[1]
                }, {
                    color: '#333333',
                    data: data4[2],
                    name: 'Series B',
                    scale: scales[2]
                }
            ]
        });

        new Rickshaw.Graph.Axis.Y.Scaled({
            element: document.getElementById('axis0'),
            graph: graph,
            orientation: 'left',
            scale: scales[0],
            tickFormat: Rickshaw.Fixtures.Number.formatKMBT
        });

        new Rickshaw.Graph.Axis.Y.Scaled({
            element: document.getElementById('axis1'),
            graph: graph,
            grid: false,
            orientation: 'right',
            scale: scales[1],
            tickFormat: Rickshaw.Fixtures.Number.formatKMBT
        });

        new Rickshaw.Graph.Axis.Time({
            graph: graph
        });

        new Rickshaw.Graph.HoverDetail({
            graph: graph
        });

        graph.render();

    </script>

@endsection