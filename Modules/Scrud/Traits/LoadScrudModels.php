<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 28 Dec 2019
 * Time: 12:38 PM
 */

namespace Modules\Scrud\Traits;


use Illuminate\Support\Str;
use Modules\Scrud\Kernel\ScrudModel;
use Modules\Scrud\Kernel\ScrudService;
use Symfony\Component\Finder\Finder;

trait LoadScrudModels
{
    /**
     * @param $module_slug
     * @param string $module_location
     */
    public function loadModuleScruds($module_slug, $module_location = 'app')
    {
        app()->afterResolving(ScrudService::class, function() use ($module_slug, $module_location){
            $this->loadScrudsFrom(module_path($module_slug, 'Scruds', $module_location));
        });

    }

    /**
     * @param string $path
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function loadScrudsFrom(string $path)
    {
        $configPath = realpath($path);

        if(!file_exists($path)){
            return;
        }

        foreach (Finder::create()->files()->name('*.php')->in($configPath) as $scrud_file) {
            /** @var \SplFileInfo $scrud_file */

            $scrud = $this->resolveScrudFile($scrud_file);

            ScrudService::init()->addScrud($scrud);
        }
    }

    /**
     * @param \SplFileInfo $file
     * @return ScrudModel
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    private function resolveScrudFile(\SplFileInfo $file)
    {
        $full_path = $file->getRealPath();

        $file_namespace = Str::substr($full_path, strlen(base_path()));

        /** @var ScrudModel $class */
        $class = Str::before($file_namespace, '.php');

        $class = str_replace('/','\\', $class);

        $class::singleton();

        return $class::init();
    }

}