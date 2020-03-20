<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 27 Nov 2019
 * Time: 12:22 AM
 */

namespace Modules\Scrud\Kernel\Actions;


use Modules\Scrud\Kernel\ScrudAction;
use Modules\Scrud\Kernel\ScrudField;
use Modules\Scrud\Kernel\ScrudService;
use Modules\System\Repositories\BaseRepository;

class Save extends ScrudAction
{
    protected $middleware = 'auth';

    protected $http_verb = 'POST';

    public function makePermissionLabel()
    {
        return class_basename($this->scrudModel->getModel()) . ": Can save/update record data.";
    }

    /**
     * @return \Illuminate\Http\RedirectResponse|\Modules\System\Http\Resources\BaseApiResource
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     * @throws \Exception
     */
    public function postHandler()
    {
        $request = request();
        $scrud_operation = $request->get('scrud');

        $payload = ScrudService::validateScrudRequest($request);

        $scrudModel = ScrudService::getCurrentScrudModel();

        $scrudUploadFields = $scrudModel->getScrudUploadFields($scrud_operation);

        $saved_model = $scrudModel->getModelRepository()
            ->quickSave($payload, function(BaseRepository $repo) use ($scrudUploadFields){

                $uploads = [];

                $scrudUploadFields->each(function (ScrudField $scrudField) use (&$uploads){
                    $uploads[$scrudField->getField()] = $scrudField->getField();
                });

                $repo->doUpload($uploads);
            });

        if($request->expectsJson()) return $scrudModel->getModelRepository()::transformAsApiResource($saved_model);

        flash()->success('Saved!');

        if($request->has('returnUrl')) return redirect()->to($request->get('returnUrl'));

        return redirect()->route($scrudModel->getUriRouteName());

    }
}