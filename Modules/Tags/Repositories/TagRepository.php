<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 29 Dec 2019
 * Time: 4:53 PM
 */

namespace Modules\Tags\Repositories;


use Illuminate\Support\Str;
use Modules\System\Repositories\BaseRepository;
use Modules\Tags\Models\Tag;

class TagRepository extends BaseRepository
{
    protected $model_events = [
        'creating'
    ];

    /**
     * TagRepository constructor.
     * @param Tag $tag
     * @throws \Exception
     */
    public function __construct(Tag $tag)
    {
        parent::__construct($tag);
    }

    /**
     * @param $tag_name
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Model|Tag
     */
    public function getTag($tag_name)
    {
        return $this->getModel()->newModelQuery()->firstOrCreate([
            'name' => strtoupper($tag_name)
        ]);
    }

    public function creating_event_handler(Tag $tag)
    {
        $tag->forceFill([
            'slug' => strtolower(str_replace(' ', '-', $tag->name))
        ]);
    }
}