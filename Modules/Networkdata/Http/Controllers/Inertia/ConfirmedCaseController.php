<?php

namespace Modules\Networkdata\Http\Controllers\Inertia;

use App\Enums\CaseMapSourceTypes;
use App\Enums\ConfirmedCaseStatus;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Modules\Networkdata\Repositories\ConfirmedCaseRepository;

class ConfirmedCaseController extends Controller
{
    public function index()
    {

        return Inertia::render('networkData/Index', [

        ]);
    }


    public function create()
    {
        $case_statuses = ConfirmedCaseStatus::toArray();
        $case_source_types = CaseMapSourceTypes::toArray();

        return Inertia::render('networkData/Create', [
            'caseStatuses' => $case_statuses,
            'sourceTypes' => $case_source_types
        ]);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     * @throws \Exception
     */
    public function save(Request $request)
    {
        $payload = $this->validate($request, [
            'age' => 'bail|required',
            'status' => 'bail|required',
            'gender' => 'bail|required',
            'details' => 'bail|required',
            'caseMaps' => 'bail|nullable|array',
        ]);

        $case = ConfirmedCaseRepository::init()->addCase($payload['age'],$payload['gender'], $payload['status'], $payload['details']);

        $case->updateCaseMappings($payload['caseMaps']);

        flash()->success('Case has been logged successfully!');

        return redirect()->route('app.console.cases.index');
    }
}
