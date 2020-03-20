<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 27 Nov 2019
 * Time: 12:22 AM
 */

namespace Modules\Scrud\Kernel\Actions;


use Modules\Scrud\Kernel\ScrudAction;

class Create extends ScrudAction
{
    protected $middleware = 'auth';

    public function makePermissionLabel()
    {
        return class_basename($this->scrudModel->getModel()) . ": Access to form to create new record.";
    }

    public function getHandler()
    {
        return view(scrudView('new'));

    }
}