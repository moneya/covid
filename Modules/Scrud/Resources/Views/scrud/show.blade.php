@extends('backend::layout.app')

@php
    /** @var \Modules\Scrud\Kernel\ScrudModel $scrudModel */
    /** @var \Modules\Scrud\Kernel\ScrudField $field */
@endphp

@section('app')

    <div class="row">

        <div class="col-sm-12">
            <div class="card shadow">
                <div class="card-header border-0">
                    <div class="row align-items-center">
                        <div class="col">
                            <h3 class="mb-0">{{$pageTitle}} &mdash; Details</h3>
                        </div>
                        <div class="col text-right">
                            <a class="btn btn-sm btn-secondary"
                               href="/{{$scrudModel->getRouteByAction()->uri()}}">
                                Back to list
                            </a>
                        </div>
                    </div>
                </div>

                <div class="card-body">

                    @foreach($scrudModel->getScrudFieldsByOperation('show') as $field)

                        @php
                            $key = $field->getField();
                        @endphp

                        <div class="row">
                            <div class="col-sm-12 mb-2">
                                <dt>{{$field->getLabel()}}:</dt>
                                <dd>
                                    {!! $scrudModel->getScrudValue($record, $key) !!}
                                </dd>
                            </div>
                        </div>

                    @endforeach

                </div>

            </div>
        </div>

    </div>

@endsection

@section('app-header')


@endsection