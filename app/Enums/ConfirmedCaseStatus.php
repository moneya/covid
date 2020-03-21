<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static Quarantined()
 * @method static static Recovered()
 * @method static static Dead()
 * @method static static Discharged()
 */
final class ConfirmedCaseStatus extends Enum
{
    const Quarantined =   'quarantined';
    const Recovered =  'recovered';
    const Dead = 'dead';
    const Discharged = 'discharged';
}
