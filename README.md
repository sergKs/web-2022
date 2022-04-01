# Docker

Запустить докер
```
docker-compose up -d
```

Подключиться к контейнеру
```
docker exec -ti web-app bash
```

Создать проект Laravel
```
composer create-project laravel/laravel:^8.0 example-app
```

Очистить кэш Laravel
```
php artisan optimize
```