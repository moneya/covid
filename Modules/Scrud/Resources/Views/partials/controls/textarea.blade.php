@php

    $record = isset($record) ? $record : null;

@endphp

<textarea name="{{$key}}" id="{{$key}}" rows="10"
          class="form-control form-control-sm form-control-alternative">{{$record ? $record->$key : null}}</textarea>