<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 9/9/2019
 * Time: 1:50 PM
 */

namespace Modules\Auth\Repositories;


use App\Enums\Roles;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Modules\Auth\Models\User;
use Modules\System\Repositories\BaseRepository;

class UserRepository extends BaseRepository
{

    protected $model_events = [
        'creating'
    ];

    /**
     * UserRepository constructor.
     * @param User $user
     * @throws \Exception
     */
    public function __construct(User $user)
    {
        parent::__construct($user);
    }

    /**
     * @param array|string $roles
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator|Builder[]|\Illuminate\Database\Eloquent\Collection
     */
    public function getUsersInRole($roles, $limit = null)
    {
        $query = $this->getUsersInRoleQueryBuilder($roles);

        if($limit) return $query->paginate($limit);

        return $query->get();
    }

    /**
     * @param $roles
     * @return Builder
     */
    public function getUsersInRoleQueryBuilder($roles)
    {
        return User::query()->role($roles);
    }

    /**
     * @param array $payload
     * @return \Illuminate\Database\Eloquent\Model|User
     * @throws \Exception
     */
    public function createStoreOwner(array $payload)
    {
        $user = $this->createUser($payload);

        $user->assignRole(Roles::StoreOwner);

        return $user;
    }


    /**
     * @param array $payload
     * @return \Illuminate\Database\Eloquent\Model|User
     * @throws \Exception
     */
    public function createUser(array $payload)
    {
        return $this->initSave($payload)
            ->fillModel(function(User $model, array $data){
                return $model->fill([
                    'email' => $data['email'],
                    'display_name' => $data['display_name'] ?? 'User-' . Str::random(7),
                    'password' => bcrypt($data['password'] ?? '1234567890'),
//                    'person_type' => $data['person_type'] ?? null,
//                    'person_id' => $data['person_id'] ?? null,
                ]);
            })
            ->persist()
            ;
    }

    protected function creating_event_handler(User $user)
    {
        $user->autoFillApiToken();
    }
}