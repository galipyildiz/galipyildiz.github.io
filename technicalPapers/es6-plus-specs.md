# ES6 (ECMAScript 2015) Özellikleri

1.  let ve const
    - **let**: Blok seviyesinde değişken tanımlama.
    ```js
    var x = 10;
    // Here x is 10
    {
      let x = 2;
      // Here x is 2
    }
    // Here x is 10
    ```
    - **const**: Blok seviyesinde sabit tanımlama.
    ```js
    var x = 10;
    // Here x is 10
    {
      const x = 2;
      // Here x is 2
    }
    // Here x is 10
    ```
2.  Arrow Functions

    - Daha kısa ve bağlamı koruyan fonksiyon yazımı.

    ```js
    // ES5
    var x = function (x, y) {
      return x * y;
    };

    // ES6
    const x = (x, y) => x * y;
    ```

    - Yalnızca, işlev tek bir ifadeyse, return anahtar sözcüğünü ve küme parantezlerini atlayabilirsiniz. Bu nedenle bunları her zaman saklamak iyi bir alışkanlık olabilir.

    ```js
    const x = (x, y) => {
      return x * y;
    };
    ```

3.  Template Literals

    - Dinamik string oluşturma, satır içi ifadeler ve çok satırlı stringler için backticks (`) kullanımı.

    ```js
    const name = "John";
    const greeting = `Hello, ${name}!`;
    ```

4.  Object Destructuring

    - Atamaların yıkılması, dizi değerlerinin ve nesne özelliklerinin değişkenlere atanmasını kolaylaştırır.

    ```js
    // Create an Object
    const person = {
      firstName: "John",
      lastName: "Doe",
      age: 50,
      eyeColor: "blue",
    };

    // Destructuring Assignment
    let { firstName, age } = person;
    ```

5.  Array Destructuring

    - Atamaların yıkılması, dizi değerlerinin ve nesne özelliklerinin değişkenlere atanmasını kolaylaştırır.

    ```js
    // Create an Array
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    // Destructuring Assignment
    let [fruit1, fruit2] = fruits;
    ```

6.  Default Parameters
    - Fonksiyon parametrelerine varsayılan değer atama.
    ```js
    const greet = (name = "Guest") => {
      return `Hello, ${name}!`;
    };
    ```
7.  Rest and Spread Operators

    - Rest: Fonksiyon parametrelerini veya dizileri birleştirir.
    - Spread: Dizileri veya objeleri açar.

    ```js
    const numbers = [23, 55, 21, 87, 56];
    let maxValue = Math.max(...numbers);

    const arr = [1, 2, 3];
    const newArr = [...arr, 4, 5];
    ```

8.  Classes

    - Sınıf tabanlı nesne yönelimli programlama.

    ```js
    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }

      greet() {
        return `Hello, my name is ${this.name}.`;
      }
    }

    const john = new Person("John", 30);
    ```

9.  Modules

    - Modüler kod yazımı ve dışa aktarım.

    ```js
    // export.js
    export const pi = 3.14;
    export function add(a, b) {
      return a + b;
    }

    // import.js
    import { pi, add } from "./export.js";
    ```

# ES8 (ECMAScript 2017) Özellikleri

1. Async/Await

   - Asenkron işlemleri daha okunabilir hale getirme.

   ```js
   async function fetchData() {
     const response = await fetch("https://api.example.com/data");
     const data = await response.json();
     return data;
   }
   ```

2. Object.entries() ve Object.values()
   - Bir nesnenin değerlerini veya [anahtar, değer] çiftlerini içeren diziler döndürme.
   ```js
   const obj = { a: 1, b: 2, c: 3 };
   Object.entries(obj); // [['a', 1], ['b', 2], ['c', 3]]
   Object.values(obj); // [1, 2, 3]
   ```

# ES9 (ECMAScript 2018) Özellikleri

1. Rest/Spread Properties

   - Obje yapısında rest ve spread operatörlerinin kullanımı.

   ```js
   const obj = { a: 1, b: 2, c: 3 };
   const { a, ...rest } = obj; // rest = {b: 2, c: 3}

   const newObj = { ...obj, d: 4 }; // {a: 1, b: 2, c: 3, d: 4}
   ```

# ES10 (ECMAScript 2019) ve Sonrası

1. Optional Catch Binding

   - catch bloğunda hata parametresi tanımlama zorunluluğunun kaldırılması.

   ```js
   try {
     // code
   } catch {
     // handle error
   }
   ```

2. Optional Chaining (ES11/2020)

   - Güvenli bir şekilde derinlemesine özelliklere erişim.

   ```js
   const user = { address: { city: "New York" } };
   const city = user?.address?.city; // 'New York'
   ```

3. Nullish Coalescing (ES11/2020)

   - null veya undefined için varsayılan değer atama.

   ```js
   const value = null ?? "default"; // 'default'
   ```

Notes: Bunlar dışında daha bir çok özellik var.