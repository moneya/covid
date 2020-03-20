<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 29 Dec 2019
 * Time: 4:46 PM
 */

namespace Modules\Tags\Traits;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphToMany;
use Modules\Tags\Models\Tag;
use Modules\Tags\Repositories\TagRepository;


trait HasTags
{

    /**
     * @return MorphToMany
     */
    public function tags()
    {
        return $this->morphToMany(Tag::class,'taggable', 'taggables');
    }

    public function addTag(...$tags)
    {
        if(empty($tags)) return ;

        foreach ($tags as $tagName){
            $tag = TagRepository::init()->getTag($tagName);

            $this->tags()->save($tag);
        }
    }

    public function removeTag(...$tags)
    {
        if(empty($tags)) return ;

        $tag_ids = TagRepository::init()->fetchQuery()->whereIn('name', $tags)->pluck('id')->toArray();

        $this->tags()->detach($tag_ids);
    }

    public function hasTag($tag)
    {
        return $this->tags()->where('name', $tag)->exists();
    }

    public function hasTags(...$tags)
    {
        return $this->tags()->whereIn('name', $tags)->exists();

    }

    public function tagAsFeatured(bool $featured)
    {
        if($featured){
            if(!$this->hasTag('$___featured')) $this->addTag('$___featured');
        } else {
            $this->removeTag('$___featured');
        }
    }

    public function isTaggedAsFeatured()
    {
        return $this->hasTag('$___featured');
    }


}