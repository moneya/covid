<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 20/03/2020
 * Time: 12:50 PM
 */

namespace Modules\Infections\Repositories;


use Modules\Infections\Models\Disease;
use Modules\System\Repositories\BaseRepository;

class DiseaseRepository extends BaseRepository
{

    protected $model_events = [
        'creating'
    ];

    /**
     * DiseaseRepository constructor.
     * @param Disease $disease
     * @throws \Exception
     */
    public function __construct(Disease $disease)
    {
        parent::__construct($disease);
    }

    public function getSelectedDisease()
    {
        return $this->getModelById(1);
    }

    public function creating_event_handler(Disease $disease)
    {
        $disease->setSlug($disease->name);
    }
}