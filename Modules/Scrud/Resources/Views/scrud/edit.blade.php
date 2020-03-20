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
                            <h3 class="mb-0">{{$pageTitle}} &mdash; Edit Record</h3>
                        </div>
                        <div class="col text-right">
                            <a class="btn btn-sm btn-secondary"
                               href="{{route('backend.scrud.' . $scrudModel->getScrudSlug() . '.index')}}">
                                Back to list
                            </a>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-12">

                            <form method="post" action="{{route('backend.scrud.' . $scrudModel->getScrudSlug() . '.save')}}">
                                @csrf

                                <input type="hidden" name="scrud" value="update">
                                <input type="hidden" name="id" value="{{$record->id}}">

                                <div class="row">

                                    @foreach($scrudModel->getScrudFieldsByOperation('update') as $field)

                                        @php
                                        $key = $field->getField();
                                        @endphp
                                        <div class="col-sm-12 mb-2">
                                            <div class="form-group">
                                                <label for="{{$field->getField()}}" class="form-control-label">
                                                    {{$field->getLabel()}}:
                                                </label>

                                                @if($field->getControl())

                                                    @includeFirst([
                                                    'scrud::partials.controls.' . $field->getControl(),
                                                    'scrud::partials.controls.input'
                                                    ] ,
                                                    compact('key', 'field'))

                                                @else

                                                    @includeIf('scrud::partials.controls.input', compact('key', 'field'))

                                                @endif

                                            </div>
                                        </div>

                                    @endforeach

                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary btn-sm">Submit</button>
                                        </div>
                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>

@endsection

@section('app-header')


@endsection