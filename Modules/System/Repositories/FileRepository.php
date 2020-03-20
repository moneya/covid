<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 4/17/2019
 * Time: 9:17 PM
 */

namespace Modules\System\Repositories;


use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Modules\System\Traits\SystemRepositoryTrait;

class FileRepository
{
    use SystemRepositoryTrait;

    public function saveFile(UploadedFile $file)
    {
        $media_type = $file->getClientMimeType();

        $path = 'media/' . $media_type;

        $file->storePublicly('public/' . $path);

        return $path;
    }

    public function saveFileAs(UploadedFile $file, $saveAs)
    {
        $media_type = $file->getClientMimeType();

        $path = '/media/' . $media_type;

        $file->storePubliclyAs('public/' . $path, $saveAs);

        return $path . '/' . $saveAs;
    }

    public function deleteFile($location)
    {
        Storage::disk('public')->delete($location);
    }

}