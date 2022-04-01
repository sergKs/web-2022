<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ProductController extends Controller
{
    private $products = [
        [
            'id' => 1,
            'name' => 'Комкующийся наполнитель Van Cat Pine, 10 кг',
            'price' => 300
        ],
        [
            'id' => 2,
            'name' => 'Комкующийся наполнитель Van Cat Pine, 10 кг',
            'price' => 500
        ],
        [
            'id' => 3,
            'name' => 'Комкующийся наполнитель Van Cat Pine, 10 кг',
            'price' => 200
        ]
    ];

    public function list()
    {
        return $this->products;
    }

    public function info($id)
    {
        $product = $this->findProduct($id);

        if ($product === null) {
            throw new NotFoundHttpException('Товар не найден.');
        }

        return $product;
    }

    public function add(Request $request)
    {
        $product = [
            'id' => $request->get('id'),
            'name' => $request->get('name'),
            'price' => $request->get('price')
        ];

        $this->products[] = $product;

        return $this->products;
    }

    public function delete($id)
    {
        foreach ($this->products as $index => $product) {
            if ($product['id'] == $id) {
                unset($this->products[$index]);
            }
        }

        return $this->products;
    }

    /**
     * Возвращает товар по ID, иначе null.
     * @param $id
     * @return array|null
     */
    protected function findProduct($id)
    {
        foreach ($this->products as $product) {
            if ($product['id'] == $id) {
                return $product;
            }
        }

        return null;
    }
}
