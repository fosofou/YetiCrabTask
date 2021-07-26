# YetiCrabTask
# Запуск:
1. Клонируем репозиторий с помощью git clone
2. В корневой папке YetiCrabTask в консоли прописываем npm install 
3. Далее cd client npm install
4. И опять в корневую папку и пишем npm run dev
5. Готово
____

## Описание:

Тестовое задание на должность Javascript разработчика.

## Недостатки:

1.Не смог переписать backend на TypeScript, но сейчас работаю в этом направлении и пытаюсь разобраться.

2.Простая валидация. Ещё она на сервере, можно было бы сделать на фронте

3.Две одинаковые страницы с созданием заявки и редактированием

4.Нет фильтров, принцип как сделать их понял, не успел.
____

## Документация к API:

## Есть простое API:

### Transports
#### 1. GET /api/transport/ Получение всех заявок в аккаунте.
  
#### 2. POST /api/transport/generate Создание новой заявки.

    Body parameters, все параммерты типа string:

    id - номер заявки,
    date - дата получения заявки
    time - время получения
    name_carrier - ФИО перевозчика
    telephone - телефон перевозчика 
    company - компания перевозчика
    ati - ati код сети перевозчика

    
    Success Response
    HTTP Status 201 
    {
    "id":"string",
    "date":"string"
    "time":"string"
    "name_carrier":"string"
    "telephone":"string"
    "company":"string"
    "ati":"string"
    }
    
    
#### 3. GET /api/transport/:id   Получение заявки по её номеру

 ######  id - номер заявки
   
    Success Response:
     {
      "id":"string",
      "date":"string"
      "time":"string"
      "name_carrier":"string"
      "telephone":"string"
      "company":"string"
      "ati":"string"
     }

#### 4. POST /api/transport/:id/update   Измнение заявки

 ######  id - номер заявки. 
 
 ######  Body parameters - всё что нужно для создания заявки
   
    Success Response:
	  Все данные обновленной заявки
     {
      "id":"string",
      "date":"string"
      "time":"string"
      "name_carrier":"string"
      "telephone":"string"
      "company":"string"
      "ati":"string"
     }

   
#### 5. POST  /api/transport:id/delete Удаление заявки

###### id - номер заявки
   
   Success Response
    HTTP Status 200 message:С кайфом удалил
   
### Это все API, которые на данный момент реализованны.



