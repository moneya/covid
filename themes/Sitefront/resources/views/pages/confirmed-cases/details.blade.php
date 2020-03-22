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
            <div class="col-lg-12 col-sm-6 d-flex flex-column">
                <div class="card  widget-loader-bar m-b-10">
                    <div class="container-xs-height full-height">
                        <div class="row-xs-height">
                            <div class="col-xs-height col-top">
                                <div class="p-l-20 p-t-10 p-b-10 p-r-20">
                                    {!! $confirmedCase->details !!}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- end -->


        </div>
    </div>

    <!-- end of all ends -->

@endsection

