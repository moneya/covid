<div class="card social-card share  full-width m-b-10 no-border" data-social="item">
    <div class="card-header ">
        <h5 class="text-complete pull-left fs-12">Screening HeatMap <i
                    class="fa fa-circle text-complete fs-11"></i></h5>
        @if($latest_situation_report->count() > 0)
            <div class="pull-right small hint-text">
                Last Updated: {{$latest_situation_report->first()->published_at->format('jS M, Y')}}
            </div>
        @endif
        <div class="clearfix"></div>
    </div>
    <div class="card-description">
        <div id="vmap2" style="width: 100%; height: 400px;"></div>
    </div>
    <div class="card-footer clearfix">
        <div class="pull-left">Key</div>
        <div class="container">
            <ul class="legend-section">
                <li class="single-legend"><span style="background-color: rgb(255, 255, 229);"></span>
                    None
                </li>
                <li class="single-legend"><span style="background-color: rgb(254, 227, 145);"></span> 1
                    to 5
                </li>
                <li class="single-legend"><span style="background-color: rgb(254, 196, 79);"></span> 6
                    to 50
                </li>
                <li class="single-legend"><span style="background-color: rgb(254, 153, 41);"></span> 51
                    to 100
                </li>
                <li class="single-legend"><span style="background-color: rgb(236, 112, 20);"></span> 101
                    to 200
                </li>
                <li class="single-legend"><span style="background-color: rgb(204, 76, 2);"></span> 201
                    to 500
                </li>
                <li class="single-legend"><span style="background-color: rgb(153, 52, 4);"></span> 501
                    to 1000
                </li>
                <li class="single-legend"><span style="background-color: rgb(102, 37, 6);"></span> 1001
                    to 5000
                </li>
            </ul>
        </div>
        <div class="clearfix"></div>
    </div>
</div>

@push('scripts')

    <script>
        $(document).ready(function () {

            var screeningHeatMapData =  @php echo $screening_heat_map_data @endphp;

            $("#vmap2").vectorMap({
                map: 'nigeria_ng',
                backgroundColor: '#ffffff',
                borderColor: '#333333',
                borderOpacity: 0.25,
                borderWidth: 1,
                // colors: colors,
                enableZoom: true,
                hoverColor: false,
                hoverOpacity: 0.7,
                normalizeFunction: 'linear',
                scaleColors: ['#FEC44F', '#CC4C02'],
                selectedColor: false,
                selectedRegions: null,
                showTooltip: true,
                values: screeningHeatMapData,
                onRegionClick: function (element, code, region) {
                    var message = 'You clicked "'
                        + region
                        + '" which has the code: '
                        + code.toUpperCase();

                    alert(message);
                }
            });
        });
    </script>

@endpush