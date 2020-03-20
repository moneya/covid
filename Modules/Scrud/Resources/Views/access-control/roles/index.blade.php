@extends('backend::layout.app')

@php

$roles = \Spatie\Permission\Models\Role::all();

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
                               href="">
                                Add New...
                            </a>
                        </div>
                    </div>
                </div>

                @if($roles->count() > 0)

                    <div class="table-responsive">
                        <!-- Projects table -->
                        <table class="table align-items-center table-flush">
                            <thead class="thead-light">
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($roles as $role)
                                <tr>
                                    <td>
                                        {{$loop->iteration}}
                                    </td>

                                    <td>
                                        {{$role->name}}
                                    </td>
                                    <td>
                                        <a href="{{route('backend.crud.access-control.roles.permissions.index', ['role' => $role->id])}}"
                                           class="btn btn-sm btn-secondary">
                                            Permissions
                                        </a>
                                    </td>

                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>

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


@endsection