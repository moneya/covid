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
                            <h3 class="mb-0">{{$pageTitle}}</h3>
                        </div>
                        <div class="col text-right">
                            <a class="btn btn-sm btn-primary"
                            href="{{route($scrudModel->getUriRouteName('create'))}}">
                                Add New...
                            </a>
                        </div>
                    </div>
                </div>

                @if($records->count() > 0)

                    <div class="table-responsive">
                        <!-- Projects table -->
                        <table class="table align-items-center table-flush">
                            <thead class="thead-light">
                            <tr>
                                <th>#</th>
                                @foreach($scrudModel->getScrudFieldsByOperation() as $field)

                                <th scope="col">
                                    {{$field->getLabel()}}
                                </th>
                                @endforeach
                                <th> </th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($records as $record)
                                <tr>
                                    <td>
                                        {{$loop->iteration}}
                                    </td>
                                    @foreach($scrudModel->getScrudFieldsByOperation() as $field)
                                        <td scope="col">
                                            {!! $scrudModel->getScrudValue($record, $field->getField()) !!}
                                        </td>
                                    @endforeach
                                    <td>
                                        <div class="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle btn-sm" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Actions
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                @if($scrudModel->hasRelatedScruds())
                                                        @foreach($scrudModel->getRelatedScrudMenus($record->id) as $menu)
                                                        <a class="dropdown-item"
                                                           href="{{$menu['link']}}">
                                                            {{$menu['title']}}
                                                        </a>
                                                        @endforeach
                                                <div class="dropdown-divider"></div>
                                                @endif
                                                    <a class="dropdown-item"
                                                       href="{{route($scrudModel->getUriRouteName('show'),
                                                   ['model' => $record->id])}}">
                                                        View Record
                                                    </a>
                                                <a class="dropdown-item"
                                                   href="{{route($scrudModel->getUriRouteName('edit'),
                                                   ['model' => $record->id])}}">
                                                    Edit Record
                                                </a>
                                                <form action="{{route($scrudModel->getUriRouteName('delete'))}}"
                                                      method="post" class="dropdown-item">
                                                    @csrf
                                                    <input type="hidden" name="id" value="{{$record->id}}">
                                                    <button class="btn btn-sm btn-danger btn-block" type="submit"
                                                            onclick="return confirm('Are you sure?')">Delete record</button>
                                                </form>
                                            </div>
                                        </div>
                                    </td>

                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>

                    @if($records instanceof \Illuminate\Pagination\LengthAwarePaginator)
                        <div class="row">
                            <div class="col-12">
                                {!! $records->links() !!}
                            </div>
                        </div>
                    @endif

                @else

                    <div class="card-body">
                        <p class="card-title text-center text-warning">No Data Available.</p>
                    </div>

                @endif

            </div>
        </div>

    </div>

@endsection

@section('app-header')

    @if($parentScrudModel)
        <div class="card shadow">
            <div class="card-header border-0">
                <div class="row align-items-center">
                    <div class="col">
                        <h3 class="mb-0">{{\Illuminate\Support\Str::singular($parentScrudModel->getScrudMenuTitle())}} &mdash; Details</h3>
                    </div>
                    <div class="col text-right">

                    </div>
                </div>
            </div>

            <div class="card-body">

                <div class="row">
                    @foreach($parentScrudModel->getScrudableFields() as $column => $scrudableField)
                    <div class="col-sm-6">
                        <div class="form-group row">
                            <label for="" class="form-control-label col-6">{{$scrudableField['label']}}:</label>
                            <div class="col-6">
                                {{$parentModel->$column}}
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>

            </div>

        </div>
    @endif


@endsection