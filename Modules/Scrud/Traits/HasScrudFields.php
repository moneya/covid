<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 29 Dec 2019
 * Time: 8:03 PM
 */

namespace Modules\Scrud\Traits;


use Illuminate\Database\Eloquent\Model;
use Modules\Scrud\Kernel\ScrudField;

trait HasScrudFields
{
    private $scrud_fields = [];

    protected $scrud_fields_to_ignore = [];
    protected $scrud_fields_to_include = [];

    public function bootScrudFields()
    {
        /** @var Model $model */
        $model = $this->getModel();

        $fields = $model->getFillable();

        $fields = array_merge($fields, $this->scrud_fields_to_include);

        foreach ($fields as $field){

            if(in_array($field, $this->scrud_fields_to_ignore)) continue;

            $scrud_field = ScrudField::initFromField($field);

            $scrud_field = $this->customizeScrudField($scrud_field) ?? $scrud_field;

            $this->scrud_fields[] = $scrud_field;
        }
    }

    public function customizeScrudField(ScrudField $scrudField)
    {
        return $scrudField;
    }

    /**
     * get the fields that are available for CRUD operations.
     * these are the fields that will be generated on the CRUD UI
     */
    public function getScrudFields()
    {
        return collect($this->scrud_fields);
    }

    public function getScrudFieldsByControlType($control_type, $scrud_operation)
    {
        return $this->getScrudFieldsByOperation($scrud_operation)
            ->filter(function (ScrudField $scrudField) use ($control_type){
                return ($scrudField->getControlType() == $control_type);
            })
            ->collect()
            ;
    }

    public function getScrudFieldsByOperation($scrud_operation = 'read')
    {
        return $this->getScrudFields()
            ->filter(function (ScrudField $scrudField) use ($scrud_operation){
                return (in_array($scrud_operation, $scrudField->getScruds()));
            })
            ->collect()
            ;
    }

    public function getScrudUploadFields($crud = 'create')
    {
        return $this->getScrudFieldsByControlType('file', $crud);
    }
}