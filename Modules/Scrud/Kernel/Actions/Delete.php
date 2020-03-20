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

class Delete extends ScrudAction
{
    protected $middleware = 'auth';

    protected $http_verb = 'POST';

    public function makePermissionLabel()
    {
        return class_basename($this->scrudModel->getModel()) . ": Can delete record data.";
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View|\Modules\System\Http\Resources\BaseApiResource
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     * @throws \Exception
     */
    public function postHandler()
    {
        $currentScrudModel = ScrudService::getCurrentScrudModel();

        $scrudModel = ScrudService::getCurrentScrudModel();

        $this->boot($scrudModel);

        $id = \request()->get('id');

        $currentScrudModel->getModelRepository()->deleteById($id);

        flash()->warning('Deleted!');

        return redirect()->back();

    }
}