<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 29 Nov 2019
 * Time: 7:56 AM
 */

namespace Modules\System\Repositories;


use Modules\System\Models\SystemConfiguration;

class SystemConfigurationRepository extends BaseRepository
{
    /**
     * SystemConfigurationRepository constructor.
     * @param SystemConfiguration $configuration
     * @throws \Exception
     */
    public function __construct(SystemConfiguration $configuration)
    {
        parent::__construct($configuration);
    }

    public function getConfig($config)
    {
        return $this->fetchQuery()->where('key', $config)->first();
    }

    public function getConfigValue($config)
    {
        $config_data = $this->getConfig($config);

        return $config_data->value ?? null;
    }

    public function getVat()
    {
        return $this->getConfigValue(config('system.configurations.vat')) ?? 5;
    }
}