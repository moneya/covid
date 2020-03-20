<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 27 Nov 2019
 * Time: 12:22 AM
 */

namespace Modules\Scrud\Kernel\Actions;


use Modules\Scrud\Kernel\ScrudAction;
use Modules\Scrud\Kernel\ScrudService;

class Edit extends ScrudAction
{
    protected $middleware = 'auth';
    protected $required_request_params = [
        'model'
    ];

    public function makePermissionLabel()
    {
        return class_basename($this->scrudModel->getModel()) . ": Access to form to update record data.";
    }

    /**
     * @param $key
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View|\Modules\System\Http\Resources\BaseApiResource
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     * @throws \ReflectionException
     */
    public function getHandler($key)
    {
        $currentScrudModel = ScrudService::getCurrentScrudModel();

        $scrudModel = ScrudService::getCurrentScrudModel();

        $this->boot($scrudModel);

        $model = $scrudModel->getModel();

        $record = $currentScrudModel->getModelRepository()->getModelByColumnName($model->getRouteKeyName(), $key);

        if(\request()->expectsJson()) return $currentScrudModel->getModelRepository()::transformAsApiResource($record);

        return view(scrudView('edit'), compact('record'));

    }
}