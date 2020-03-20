@extends('backend::layout.app')

@php

    $crud_permissions = \Modules\Crud\Facades\CrudService::getCrudPermissions();
    $role_permissions = $role->getAllPermissions()->pluck('name')->toArray();

@endphp

@section('app')

    <form action="{{route('backend.crud.access-control.roles.permissions.save',
    ['role' => $role->id])}}" method="post">
        @csrf

        @foreach($crud_permissions->chunk(3) as $chunk)
            <div class="row mb-3">
                @foreach($chunk as $crud_title => $permissions)

                    @if(count($permissions) > 0)

                        <div class="col-sm-4">
                            <div class="card shadow">
                                <div class="card-header border-0">
                                    <div class="row align-items-center">
                                        <div class="col">
                                            <h3 class="mb-0">{{$crud_title}}</h3>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-body">
                                    @foreach($permissions as $key => $label)
                                        <div class="custom-control custom-control-alternative custom-checkbox mb-3">
                                            <input class="custom-control-input" id="{{$key}}"
                                                   name="permissions[]"
                                                   value="{{$key}}"
                                                   {{in_array($key, $role_permissions) ? 'checked' : ''}}
                                                   type="checkbox">
                                            <label class="custom-control-label" for="{{$key}}">
                                                {{$label}}
                                            </label>
                                        </div>
                                    @endforeach
                                </div>

                            </div>

                        </div>

                    @endif

                @endforeach
            </div>
        @endforeach

        <hr>

        <div class="row">
            <div class="col-12">
                <button type="submit" class="btn btn-primary btn-sm">Submit</button>
            </div>
        </div>

    </form>

@endsection

@section('app-header')

    <div class="row">
        <div class="col-12">
            <a href="{{route('backend.crud.access-control.roles.index')}}" class="btn btn-outline-neutral">Back to list</a>
        </div>
    </div>

@endsection