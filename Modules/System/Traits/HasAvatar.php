<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 6/13/2019
 * Time: 10:23 AM
 */

namespace Modules\System\Traits;



trait HasAvatar
{

    public function getAvatar($avatar_column_name = 'image')
    {
        return $this->$avatar_column_name ?? config('system.image_placeholder');
    }

    public function getUploadConfigByColumn($column = 'image')
    {
        return $this->metadata[$column] ?? null;
    }

    public function getAvatarStoragePath($column_name = 'image')
    {
        return $this->getUploadConfigByColumn($column_name)['path'] ?? null;
    }
}