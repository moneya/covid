<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 29 Dec 2019
 * Time: 8:01 PM
 */

namespace Modules\Scrud\Kernel;


use Illuminate\Support\Str;

class ScrudField
{
    private $field_name;

    protected $scruds;

    protected $label;

    protected $control;

    protected $control_type;

    protected $control_options = [];

    /**
     * ScrudField constructor.
     * @param $field_name
     */
    public function __construct($field_name)
    {
        $this->field_name = $field_name;
    }

    /**
     * @param array $control_options
     * @return ScrudField
     */
    public function setControlOptions(array $control_options = [])
    {
        $this->control_options = $control_options;

        return $this;
    }

    /**
     * @return array
     */
    public function getControlOptions(): array
    {
        return $this->control_options;
    }

    /**
     * @return mixed
     */
    public function getControlType()
    {
        return $this->control_type;
    }

    public function setControlType($type = 'text')
    {
        $this->control_type = $type;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getControl()
    {
        return $this->control;
    }

    public function setControl($control = 'input')
    {
        $this->control = $control;

        return $this;
    }

    public function getField()
    {
        return $this->field_name;
    }

    public function getScruds()
    {
        return $this->scruds;
    }

    public function setScruds(...$scruds)
    {
        if(empty($scruds)){
            $scruds = ['create','read','update','delete','show'];
        }

        $this->scruds = $scruds;

        return $this;
    }

    public function getLabel()
    {
        return $this->label;
    }

    public function setLabel($label = null)
    {
        if(!$label){
            $label = Str::replaceFirst('_', ' ', Str::title($this->field_name));
        }

        $this->label = $label;

        return $this;
    }


    public static function initFromField($field_name)
    {
        return (new self($field_name))
            ->setLabel()
            ->setScruds()
            ->setControl()
            ->setControlType()
            ->setControlOptions()
            ;
    }

}