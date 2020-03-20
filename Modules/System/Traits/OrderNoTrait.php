<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 6/13/2019
 * Time: 10:23 AM
 */

namespace Modules\System\Traits;


use Illuminate\Support\Collection;

trait OrderNoTrait
{

    /**
     * @param $order_number
     * @param Collection|null $collection
     * @return $this
     */
    public function setOrderNumber($order_number, Collection $collection = null)
    {

        $this->update([
            'order_no' => $order_number
        ]);

        if($collection){
            $total_slots = $collection->where('order_no', '>=', $order_number)
                ->sortBy('order_no')
                ->pluck(['id', 'order_no']);
        } else {
            $total_slots = self::where('order_no', '>=', $order_number)
                ->orderBy('order_no')
                ->get(['id','order_no']);
        }

        foreach ($total_slots as $slot){
            if(($slot['order_no'] >= $order_number) && ($slot['id'] != $this->id)){
                self::where('id', $slot['id'])->update([
                    'order_no' => $slot['order_no'] + 1
                ]);
            }
        }

        return $this;
    }

}