<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 2 Oct 2019
 * Time: 7:13 AM
 */

namespace Modules\System\Traits;


trait TransformableModelTrait
{

    /**
     * @param string $transformer
     * @return mixed
     * @throws \Exception
     */
    public function transform($transformer = 'default_transformer')
    {
        if(method_exists($this, $transformer)){
            return $this->$transformer();
        } else {
            throw new \Exception('Transformer method not defined!');
        }
    }

    public function default_transformer()
    {
        return $this->getAttributes();
    }

}