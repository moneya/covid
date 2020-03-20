<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 8/15/2019
 * Time: 9:36 AM
 */

namespace Modules\System\Traits;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Modules\System\Repositories\FileRepository;

trait SystemRepositoryTrait
{
    /**
     * @return self
     */
    public static function init()
    {
        $class = get_called_class();

        $object = app($class);

        if(!app()->has($class)){
            app()->instance($class, $object);
        }

        return $object;
    }

    /**
     * @param Model $model
     * @return self
     */
    public static function initFromModel(Model $model)
    {
        return app(get_called_class(), ['model' => $model]);
    }

    /**
     * @param string $request_file_key
     * @return array
     */
    protected function autoSaveFileFromRequest($request_file_key = 'image')
    {
        if (request()->hasFile($request_file_key)) {
            return $this->doFileUpload(request()->file($request_file_key));
        }

        return null;
    }

    protected function doFileUpload(UploadedFile $uploadedFile)
    {
        $filename = time() . '_' . rand(0, 10) . '_.' . $uploadedFile->clientExtension();

        $path = FileRepository::init()->saveFileAs($uploadedFile, $filename);

        return [
            'url' => url('/storage' . $path),
            'filename' => $filename,
            'path' => $path
        ];
    }

}