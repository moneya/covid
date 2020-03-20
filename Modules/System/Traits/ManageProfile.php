<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 11 Dec 2019
 * Time: 11:18 AM
 */

namespace Modules\System\Traits;


use Modules\System\Repositories\AnonymousModelRepository;
use Modules\System\Repositories\BaseRepository;

trait ManageProfile
{

    /**
     * @param array $payload
     * @return \Illuminate\Database\Eloquent\Model
     * @throws \Exception
     */
    public function updateProfile(array $payload)
    {
        $upload_fields = request()->allFiles();

        $payload['id'] = $this->id;

        return AnonymousModelRepository::initFromModel($this)
            ->quickSave(
                $payload, function(BaseRepository $repo) use ($upload_fields){

                $uploads = [];

                foreach (array_keys($upload_fields) as $upload_field){
                    $uploads[$upload_field] = $upload_field;
                }

                $repo->doUpload($uploads);
            });
    }

}