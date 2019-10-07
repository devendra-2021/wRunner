# Шо ита? [RU]
**wRunner v 1.0.0** - плагин, добавляющий слайдер (бегунок).
Позволяет устанавливать темы, шаг, минимальное и максимальное значение, имеет два вида - одиночное и диапазон. Имеет вертикеальное и горизонтальное положение.
Имеет две реализации - на "чистом" JS и на основе jQuery.

Строение плагина - MVC с пассивным view. Три части программы, две из которых (view и модель) независимы от других. Presenter является связующим слоем, которому известно о двух других слоях. Он передаёт, в случае необходиости, данные в другие слои (через обсервер), хранит методы для добавления внешних обработчиков событий. Над всем стоит надстройка, которая оберегает пользователя от нежелательных изменений в плагин - собирает все три части в один слайдер, связует их, собирает пакет методов для работы с плагином, инициализирует настройки пользователя.

[Демо-страница плагина](https://whitegloom.github.io/wRunner/ "Демо-страница плагина")

[Диаграмма структуры плагина](https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.drawio#RzVhNc5swEP01HNsBBAYfY8dJZ5LOdCaHNL0poBhNATlCNnZ%2FfQVIgCTcYNcfucjSSlq0T4%2B3iy0wz7b3FK6S7yRGqeXa8dYCt5brOp4d8p%2FKsmssQRg0hiXFsVjUGZ7wHySMtrCucYwKZSEjJGV4pRojkucoYooNUkpKddkbSdWnruASGYanCKam9RnHLGmsoRt09m8ILxP5ZGcybWYyKBeLSIoExqTsmcDCAnNKCGt62XaO0go8iUuz727PbHswinI2ZsPDvc9Wv4qHh%2Ffk8TEtF%2B775PmLhHkD07WIWJyW7SQElKzzGFVebAvMygQz9LSCUTVb8kvntoRlKR85vCvcIcrQdu9BnTZ8zhtEMsToji%2BRGxzBGUGZUJyx7PD3p8KW9LD3ZDBQ3Pmydd3BwjsCmUNQMkDaYFT%2BAyjnIkB5EgUBFHBNpBx3AKnJuYByDaCyRhGujFQrJ58GKWAgtaKo4OEgenW0gA8UtJzg2mg5JrEMlFAe31SCz0dRCosCRxyNgkHKTHMPL7TF7GelbV99MXoRSlf1b7f9wU4Och5Us8n15fhFOqwG3b56JDc2h0axkXO0q%2BGBkTWN0MevGo9vidhHRDOvui%2BmAzcpbRSlkOGNetyh6xVP%2BEEwD6Rjkv7eAY0hTZhiVz956Y4mqqM2KUhHDQ6Go5ptbdj%2FQUDzfT0ZATsyBQeR6RjmnpCAshr71AT0gEZA%2F0gCeqHmyL4wAT2TgPxGp4uqnTkWZ8u0bvk5q7aend3ULT%2BpXXfu6nYmjFUL6jas21u5WOM1TyRMpWzBKPmN5iQllFtykvOVszecppoJpniZV7xv8hqYVWkJ8%2BL6RkxkOI6rxwwmNbXuPEUVEKp5baCwbFNYn4vTs6U137hU8loguhkoArg7%2Fs2zD6sTFwCBCtRQuRReNP9PDpJfQb8YFklbNg0prtOXWyGjYwS3L7et%2BJ5fcP2RiuteU3HbwlBwx9dJMVZx26pTOtI%2F786tuMFJOSe44xzAna4yOIyn1%2BDcHkG5UJbXqkNfV%2ByxnPO1etX3Lsy58CDOHVlmKlWmPVb0lCrTuZTogbH8869JQKBr1bEE9HT1PBkB%2BbD7r7FZ3v1jCxZ%2FAQ%3D%3D "Диаграмма структуры плагина")

**В проекте используются:**

* **[Webpack](https://webpack.js.org/ "Webpack")**
* **[Pug](https://pugjs.org/ "Pug")**
* **[Stylus](http://stylus-lang.com/ "Stylus")**
* **[Jasmine](https://jasmine.github.io/ "Jasmine")**
* **[ES Lint](https://eslint.org/ "ES Lint")**

## Внимание
jQuery версия слайдера требует [jQuery](https://jquery.com/ "jQuery"), версией не ниже 3.4.1

# Инструкция

## Создание экземпляра:
**Для JS Native версии:**
Подключить на странице файл **wrunner-native.js**

```
var slider = wRunner([options]);
```

**Для jQuery версии:**
Подключить на странице **jquery**, версией не меньше 3.4.1

Подключить на странице файл **wrunner-jquery.js**

```
$(DOM element).wRunner([options]);
```

*Arguments:*
* **options** - type: object. Properties:
	- **step** - (watch setStep method)
		+ Default: 1
	- **type** - (watch setType method)
		+ Default: "single"
	- **limits** - (watch setLimits method)
		+ Default: {minLimit: 0, maxLimit: 100}
	- **singleValue** - (watch setSingleValue method)
		+ Default: 50
	- **rangeValue** - (watch setRangeValue method)
		+ Default: { minValue: 20, maxValue: 80 }
	- **roots** - (watch setRoots method) **Доступен только в JS Native версии.**
		+ Default: document.body
	- **divisionsCount** - (watch setDivisionsCount method)
		+ Default: 5
	- **valueNoteDisplay** - (watch setValueNoteDisplay method)
		+ Default: true
	- **styles** - (watch setStyles method)
		+ Default: {theme: {value: "default", sign: "theme"}, direction: {value: "horizontal", sign: "direction"}}
	- **onStepUpdate** - (watch onStepUpdate method)
	- **onTypeUpdate** - (watch onTypeUpdate method)
	- **onLimitsUpdate** - (watch onLimitsUpdate method)
	- **onValueUpdate** - (watch onValueUpdate method)
	- **onRootsUpdate** - (watch onRootsUpdate method)
	- **onDivisionsCountUpdate** - (watch onDivisionsCountUpdate method)
	- **onValueNoteDisplayUpdate** - (watch onValueNoteDisplayUpdate method)
	- **onStylesUpdate** - (watch onStylesUpdate method)

## Для работы с исходным кодом
**Развёртывание проекта**
Для установки зависимостей использовать:

```
npm install
```

**Команды npm**

* `npm run build` - разовая сборка проекта;
* `npm run build-watch` - запуск автоматической пересборки;
* `npm run build-live` - запуск сервера;
* `npm test` - запуск тестов;

**Aliases (сокращения):**
Алиасы прописываются в файле package.json (находится в корневом каталоге), в параметре "**_moduleAliases**", и должны начинаться с символа "**@**".
Webpack и Jasmine автоматически подгрузят сокращения.

*Пример:*
```
// Создание сокращения.
// Файл "package.json":
{
	...
	"scripts": { ... },
	"_moduleAliases": {
		"@ИмяСокращения": "./путьДоСокращения",
		"@test": "./test.js"
	},
	...
}
```

## Методы:

### setType method
Меняет тип слайдера.

```
.setType(type)
```

*Arguments:*

* **type** - type: string. Avaible values: reserved in type constants - "single", "range", ... (watch getTypes method).

*Returns:*
**string** - тип слайдера.

*Triggering:*
**onTypeUpdate**, передаёт тоже, что и возвращает.

------------



### setLimits method
Меняет минимально и максимально возможные значения слайдера.

```
.setLimits([options])
```

*Arguments:*

* **options** - type: object. Properties:
	- **minLimit** - type: number. Default - минимальное значение.
	- **maxLimit** - type: number. Default - максимальное значение.

*Note:*
**Если минимальное значение бальше максимального, то они будут поменяны местами.**

*Returns:*
**Object**. Properties:
* **minLimit** - type: number. Минимальное значение слайдера.
* **maxLimit** - type: number. Максимальное значение слайдера.
* **valuesCount** - type: number. Количество допустимых занчений. (максимальное - минимальное)

*Triggering:*
**onLimitsUpdate**, передаёт тоже, что и возвращает.

------------



### setStep method
Меняет шаг слайдера.

```
.setStep(step)
```

*Arguments:*

* **step** - type: number. Avaible values: 1 - infinity.

*Returns:*
**Number** - шаг слайдера

*Triggering:*
**onStepUpdate**, передаёт тоже, что и возвращает.

------------



### setSingleValue method
Меняет значение слайдера для типа "single". Если сменить тип слайдера, значение сохраниется. Можно использовать и тогда, когда тип слайдера иной.

```
.setSingleValue([value])
```

*Arguments:*

* **value** - type: number. Defalut: значение слайдера.

*Note:*
**Если значение слайдера выходит за границы, то оно приравнивается ближайшей границе.**

*Returns:*
+ **Object**. Properties:
	- **value** - type: number. Значение слайдера.
	- **selected** - type:  number. Количество "выделенных" значений (значение - минимальное значение слайдера)

*Triggering:*
**onValueUpdate**, передаёт тоже, что и возвращает.

------------

### setRangeValue method
Меняет значение слайдера для типа "range". Если сменить тип слайдера, значение сохраняется. Можно использовать и тогда, когда тип слайдера иной.

```
.setRangeValue([values])
```

*Argumetns:*
* **values** - type: object. Properties: 
	- **minValue** - type: number. Defaults: текущее меньшее значение. Меньшее значение слайдера
	- **maxValue** - type: number. Defaults: текущее большее значение. Большее значение слайдера

*Notes:*
* **Если значение слайдера выходит за границы, то оно приравнивается ближайшей границе.**
* **Если меньшее значение становится больше, чем большее, то они меняются местами.**


*Returns:*
* **Object**. Properties:
	- **minValue** - type: number. Меньшее значение слайдера.
	- **maxValue** - type: number. Большее значение слайдера.
	- **selected** - type:  number. Количество "выделенных" значений (большее значение - меньшее значение)

*Triggering:*
**onValueUpdate**, передаёт тоже, что и возвращает.

### setValueNoteDisplay method
Меняет отображение показателя значения над бегунком.

```
.setValueNoteDisplay(value)
```

*Arguments:*
* **value** - type: boolean.

*Returns:*
**Boolean** - отображение показателя надбегунком.

*Triggering:*
**onValueNoteDisplayUpdate**, передаёт тоже, что и возвращает.

------------


### setNearestValueViaPercents method
Меняет ближайшее к передаваемому аргументу значение слайдера.

```
.setNearestValueViaPercents(percents)
```

*Arguments:*
* **percents** - type: number. Процентное значение.

*Notes:*
* **Если тип слайдера - "single", то просто изменит его значение.**
* **Новое значение расчитывается путём умножения количества допустимых значений на передаваемое значение.**
* **Ближайшее значение определяется путём сложения меньшего и большего значений и деления результата на 2. Если передаваемое значение меньше этого результата, то меняется меньшее значение, иначе - большее.**

*Examples:*
```
.setLimits({minLimit: 0, maxLimit: 100}); // Минимальное значение: 0, максимальное: 100
.setType("single") // Тип слайдера: "single"
.setSingleValue(50); // Значение слайдера: 50

.setNearestValueViaPercents(75) // Принимая 75, изменит единичное значение слайдера на 75

```
```
.setLimits({minLimit: 0, maxLimit: 100}); // Минимальное значение: 0, максимальное: 100
.setType("single") // Тип слайдера: "range"
.setRangeValue({minValue: 20, maxValue: 80}); // Меньшее значение 20, большее 80

.setNearestValueViaPercents(75) // Принимая 75, ближайшим будет большее значение слайдера, изменит его на 75

```

*Returns:*
**Передаёт управление функциям setSingleValue или setRangeValue (В зависимости от текущего типа слайдера), возвращает результат их работы.**

------------



### setDivisionsCount method
Меняет количество делений под слайдером.

```
.setDivisionsCount(count)
```

*Arguments:*

* **count** - type: number. Avaible values: 0 - infinity.

*Note:*
**Если попытаться установить количество равным 1, то оно будет увеличено до 2.**


*Returns:*
**Number** - количество делений под слайдером

*Triggering:*
**onDivisionsCountUpdate**, передаёт тоже, что и возвращает.

------------



### setRoots method
Менеят корневой элемент слайдера.

```
.setRoots(roots)
```

*Arguments:*

* **roots** - type: DOM element.

*Returns*
**DOM element** - корневой элемент слайдера

*Triggering:*
**onRootsUpdate**, передаёт тоже, что и возвращает.

------------



### setStyles method
Меняет стили слайдера.

```
.setStyles(options)
```

*Arguments:*
* **options** - type: object. Properties:
	- **direction / theme** - type: object. Properties:
		+ **value** - type: string.  Если стиль имеет зарезервированные значения, но нужно использовать одно из них.
		+ **sign** - type: string. Меняет подпись стиля в классе элемента.

*Returns:*
**Object**. Properties:
* **styles** - type: object. Properies:
	- **direction / theme / ...** - type: object. Properties:
		+ **value** - type: string. Значение стиля
		+ **sign** - type: string. Подпись стиля в классе элемента
		+ **oldValue** - type: string. Предыдущее значение стиля

*Triggering:*
**onStylesUpdate**, передаёт тоже, что и возвращает.

*Examples:*
```
.setStyles({theme: {value: "dark", sign: "testTheme"}}) // Изменит значение (название) темы и её подпись в названии класса

.setStyles({theme: {value: "dark"}}) // Изменит значение (название) темы

.setStyles({theme: {sign: "testTheme"}}) // Изменит подпись темы в названии класса
```

```
.setStyles({direction: {value: "horizontal", sign: "testDirection"}}) // Изменит значение положения слайдера и его подпись в названии класса

.setStyles({direction: {value: "San Diego", sign: "testDirection"}}) // Изменения значения не произойдёт, так как параметр "direction" имеет зарезервированные значения. Изменится только подпись положения в названии класса

```

------------



### getType method
Возвращает типы слайдера

```
.getType()
```

*Returns:*

**Object**. Properties:
* **type** - type: string. Текущий тип слайдера.
* **typeConstants** - object. Properties:
	- **singleValue / rangeValue** - type: string. Зарезервированые типы слайдера.

------------



### getStep method
Возвращает текущий шаг слайдера

```
.getStep()
```

*Returns:*
**Number**

------------



### getLimits method
Возвращает текущие минимально и максимально возможные значения слайдера

```
.getLimits()
```

*Returns:*
**Object**. Properties:
* **minLimit** - type: number. Минимальное значение слайдера.
* **maxLimit** - type: number. Максимальное значение слайдера.
* **valuesCount** - type: number. Количество допустимых занчений. (максимальное - минимальное)

------------



### getValue method
Возвращает значение слайдера.

```
.getValue()
```

*Returns:*
* **Если тип слайдера - "single":**
	+ **Object**. Properties:
		- **value** - type: number. Значение слайдера.
		- **selected** - type:  number. Количество "выделенных" значений (значение - минимальное значение слайдера)
* **Если тип слайдера - "range":
	+ **Object**. Properties:
		- **minValue** - type: number. Меньшее значение слайдера.
		- **maxValue** - type: number. Большее значение слайдера.
		- **selected** - type:  number. Количество "выделенных" значений (большее значение - меньшее значение)

------------



### getRoots method
Возвращает текущий корневой элемент слайдера.

```
.getRoots()
```

*Returns*
**DOM element**

------------



### getValueNoteDisplay method
Возвращает отображение показателя значения над бегунком.

```
getValueNoteDisplay()
```

*Returns:*
**Boolean**

------------



### getDivisionsCount method
Возвращает количество делений под слайдером.

```
.getDivisionCount method
```

*Returns:*
**Number**

------------



### getStyles method
Возвращает стили слайдера.

```
.getStyles()
```

*Returns:*
**Object**. Properties:
* **styles** - type: object. Properies:
	- **direction / theme / ...** - type: object. Properties:
		+ **value** - type: string. Значение стиля
		+ **sign** - type: string. Подпись стиля в классе элемента
		+ **oldValue** - type: string. Предыдущее значение стиля
* **styleConstants** - type: object. Properties:
	- **direction / theme / ...** - type: object. Properties:
		+ **horizontalValue / ...** - зарезервированные значения стиля (если они есть)

------------



### onStepUpdate method
Устанавливает функцию-обработчик, вызываемую при обновлении шага слайдера

```
.onStepUpdate(function(step){
	...
})
```

**Передаваемые значения:**
Смотреть *setStep method*

------------



### onTypeUpdate method
Устанавливает функцию-обработчик, вызываемую при обновлении типа слайдера

```
.onTypeUpdate(function(type){
	...
})
```

**Передаваемые значения:**
Смотреть *setType method*

------------



### onLimitsUpdate method
Устанавливает функцию-обработчик, вызываемую при обновлении крайних значений слайдера

```
.onLimitsUpdate(function(limits){
	...
})
```

**Передаваемые значения:**
Смотреть *setLimits method*

------------



### onValueUpdate method
Устанавливает функцию-обработчик, вызываемую при обновлении значений слайдера

```
.onValueUpdate(function(values){
	...
})
```

**Передаваемые значения:**
Смотреть *setValue method*

------------



### onRootsUpdate method
Устанавливает функцию-обработчик, вызываемую при обновлении корневого элемента слайдера

```
.onRootsUpdate(function(roots){
	...
})
```

**Передаваемые значения:**
Смотреть *setRoots method*

------------



### onDivisionsCountUpdate method
Устанавливает функцию-обработчик, вызываемую при изменении количества делений внизу слайдера

```
.onDivisionsCountUpdate(function(count){
	...
})
```

**Передаваемые значения:**
Смотреть *setDivisionsCount method*

------------



### onValueNoteDisplayUpdate method
Устанавливает функцию-обработчик, вызываемую при изменении отображения показателя значения над бегунком

```
.onValueNoteDisplayUpdate(function(value){
	...
})
```

**Передаваемые значения:**
Смотреть *setValueNoteDisplay method*

------------



### onStylesUpdate method
Устанавливает функцию-обработчик, вызываемую при обновлении стилей слайдера

```
.onStylesUpdate(function(styles){
	...
})
```

**Передаваемые значения:**
Смотреть *setStyles method*

------------


## Всё.
**-whiteGloom**