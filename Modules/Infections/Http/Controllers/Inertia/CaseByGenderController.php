<?php

namespace Modules\Infections\Http\Controllers\Inertia;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Modules\Infections\Repositories\CaseByGenderRepository;

class CaseByGenderController extends Controller
{
    /**
     * @return mixed
     */
    public function index()
    {
        $reports = CaseByGenderRepository::init()->fetchLatestReport();

        return Inertia::render('caseByGender/Index', [
            'reports' => $reports->map->transform()
        ]);
    }

    public function create()
    {
        return Inertia::render('caseByGender/Create');
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

        CaseByGenderRepository::init()->saveDataSheet($payload);

        flash()->success('Data-sheet has been successfully uploaded!');

        return redirect()->route('app.console.case-by-gender.index');
    }
}
