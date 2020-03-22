<?php

namespace Modules\Infections\Http\Controllers\Inertia;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Modules\Infections\Repositories\CaseByNationalityRepository;

class CaseByNationalityController extends Controller
{
    public function index()
    {
        $reports = CaseByNationalityRepository::init()->fetchLatestReport();

        return Inertia::render('caseByNationality/Index', [
            'reports' => $reports->map->transform()
        ]);
    }

    public function create()
    {
        return Inertia::render('caseByNationality/Create');
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

        CaseByNationalityRepository::init()->saveDataSheet($payload);

        flash()->success('Data-sheet has been successfully uploaded!');

        return redirect()->route('app.console.case-by-nationality.index');
    }
}
