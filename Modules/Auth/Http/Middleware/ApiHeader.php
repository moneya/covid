<?php

namespace Modules\Auth\Http\Middleware;

use Closure;
use Illuminate\Support\Str;

class ApiHeader
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(Str::startsWith($request->getPathInfo(), '/api')){

            $request->headers->add([
                'X-Requested-With' => 'XMLHttpRequest',
                'Content-Type' => 'application/json',
            ]);

        }

        return $next($request);
    }
}
