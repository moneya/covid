<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static Flight()
 * @method static static Person()
 * @method static static Place()
 */
final class CaseMapSourceTypes extends Enum
{
    const Flight =   'flight';
    const Person =   'person';
    const Place = 'place';
}
