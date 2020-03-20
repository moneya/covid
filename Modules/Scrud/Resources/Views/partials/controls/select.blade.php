@php
    /** @var \Modules\Scrud\Kernel\ScrudModel $scrudModel */
    /** @var \Modules\Scrud\Kernel\ScrudField $field */
    /** @var \Modules\Scrud\Kernel\ScrudModel $use_scrud_model */

@endphp

@php

$has_field_options = $field['options'] ?? false;
$using_related = isset($using_related) ? $using_related : false;

    $has_field_options = $field['options'] ?? false;
    $using_related = isset($using_related) ? $using_related : false;

$record = isset($record) ? $record : null;
$query = isset($query) ? $query : null;

@endphp

<select name="{{$key}}" id="{{$key}}" class="form-control form-control-sm">
    <option value="">Choose...</option>
    @foreach($field->getControlOptions() as $k => $option)
        <option value="{{$k}}"

                {{$record && $use_scrud_model->hasScrudValue($record, $key, $k, $relationship ?? null, $parentModel ?? null) ? 'selected' : ''}}

        >
            {{$option}}
        </option>
    @endforeach
</select>