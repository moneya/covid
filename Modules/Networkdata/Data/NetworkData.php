<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 21/03/2020
 * Time: 12:39 PM
 */

namespace Modules\Networkdata\Data;


use Illuminate\Database\Eloquent\Collection;
use Modules\Networkdata\Repositories\CaseMapRepository;
use Modules\Networkdata\Repositories\ConfirmedCaseRepository;

class NetworkData
{
    public function getNetworkData()
    {
        $cases = ConfirmedCaseRepository::init()->fetch();

        $edges = $this->aggregateNetworkEdges($cases);

        $nodes = $this->aggregateNetworkNodes($cases);

        return [
            'nodes' => $nodes,
            'edges' => $edges
        ];
    }


    private function aggregateNetworkNodes($cases)
    {
        $cases_nodes = $cases->map->transform('network_node_transformer')->toArray();

        $case_map_nodes = CaseMapRepository::init()->fetch()->map->transform('network_node_transformer')->toArray();

        return array_merge($case_map_nodes, $cases_nodes);
    }

    private function aggregateNetworkEdges(Collection $cases)
    {
        $transformed_data = $cases->map->transform('network_edge_transformer')->toArray();
        $data = [];

        foreach ($transformed_data as $td){
            if(!empty($td)){
                foreach ($td as $edge){
                    $data[] = $edge;
                }
            }
        }

        return $data;
    }

    /**
     * @return NetworkData
     */
    public static function init()
    {
        return app(self::class);
    }

}