<?php

namespace Modules\System\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use Modules\System\Http\Resources\LgaResource;
use Modules\System\Models\Lga;

class SystemController extends Controller
{
    public function fetchLga(Request $request)
    {
        $lgas = Lga::orderBy('lga_name')->get();

        return LgaResource::collection($lgas);

    }
}
