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

class Index extends ScrudAction
{
    protected $middleware = 'auth';

    public function makePermissionLabel()
    {
        return class_basename($this->scrudModel->getModel()) . ": Can view list of records.";
    }

    public function getAlias()
    {
        return $this->scrudModel->getScrudMenuTitle();
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Http\Resources\Json\AnonymousResourceCollection|\Illuminate\View\View
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     * @throws \ReflectionException
     */
    public function getHandler()
    {
        $scrudModel = ScrudService::getCurrentScrudModel();

        $this->boot($scrudModel);

        $model = $scrudModel->getModel();

        $records = $scrudModel->getModelRepository()::initFromModel($model)
            ->fetch($scrudModel->fetch_limit);

        if(method_exists($scrudModel, 'onRecordsFetched')){
            $response = $scrudModel->onRecordsFetched($records);

            if($response) return $response;
        }

        if(request()->expectsJson()) {
            return $scrudModel->getModelRepository()::transformAsApiCollectionResponse($records);
        }

        return view(scrudView('index'), compact('records'));
    }
}