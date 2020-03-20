@php
    /** @var \Modules\Scrud\Kernel\ScrudModel $scrudModel */
    /** @var \Modules\Scrud\Kernel\ScrudField $field */
    /** @var \Modules\Scrud\Kernel\ScrudModel $use_scrud_model */

@endphp

@php

/**
$key ==> the field name (i.e. db column name)
*/

$control_type = $field->getControlType();
$record = isset($record) ? $record : null;

    $using_related = isset($using_related) ? $using_related : false;

    $use_scrud_model = $using_related ? $parentScrudModel : $scrudModel;

    $record = isset($record) ? $record : null;
    $query = isset($query) ? $query : null;

@endphp

@switch($control_type)

    @case('date')
    <input type="text" name="{{$key}}" id="{{$key}}"
           value="{{$record ? $use_scrud_model->getScrudValue($record, $key, $relationship ?? null, $parentModel ?? null) : null}}"
           data-date-format="yyyy-mm-d"
           class="form-control form-control-sm form-control-alternative datepicker">
    @break

    @case('checkbox')

    @foreach($field->getControlOptions() as $k => $field_option)

        <div class="custom-control custom-checkbox mb-3">
            <input name="{{$key}}" class="custom-control-input"
                   {{$record && $use_scrud_model->hasScrudValue($record, $key, $k, $relationship ?? null, $parentModel ?? null) ? 'checked' : ''}}
                   id="{{$k}}" type="checkbox" value="{{$k}}">
            <label class="custom-control-label" for="{{$k}}">{{$field_option}}</label>
        </div>

    @endforeach

    @break

    @case('radio')

    @foreach($field->getControlOptions() as $k => $field_option)

        <div class="custom-control custom-radio mb-3">
            <input name="{{$key}}" class="custom-control-input"
                   {{$record && $use_scrud_model->hasScrudValue($record, $key, $k, $relationship ?? null, $parentModel ?? null) ? 'checked' : ''}}
                   id="{{$k}}" type="radio" value="{{$k}}">
            <label class="custom-control-label" for="{{$k}}">{{$field_option}}</label>
        </div>

    @endforeach

    @break

    @default
    <input type="{{$control_type}}" name="{{$key}}" id="{{$key}}"
           value="{{$record ? $use_scrud_model->getScrudValue($record, $key, $relationship ?? null, $parentModel ?? null) : null}}"
           class="form-control form-control-sm form-control-alternative">
@endswitch
