<?php

namespace Modules\Infections\Http\Controllers\Inertia;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Modules\Infections\Repositories\SituationReportRepository;
use Modules\System\Models\State;

class SituationReportController extends Controller
{
    public function index()
    {
        $reports = SituationReportRepository::init()->fetchLatestReport();

        return Inertia::render('situationReport/Index', [
            'reports' => $reports->map->transform()
        ]);
    }

    public function create()
    {
        $states = State::all();

        return Inertia::render('situationReport/Create', [
            'states' => $states
        ]);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function save(Request $request)
    {
        $this->validate($request, [
            'date' => 'required'
        ]);

        $payload = $request->all();

        SituationReportRepository::init()->saveDataSheet($payload);

        flash()->success('Data-sheet has been successfully uploaded!');

        return redirect()->route('app.console.situation-reports.index');
    }
}
