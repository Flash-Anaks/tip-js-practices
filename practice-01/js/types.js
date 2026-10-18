"use strict";

// 1. Строка + число
console.log('1. "8" + 2 =', "8" + 2);
console.log("   Тип:", typeof ("8" + 2));

// 2. Строка - число
console.log('2. "8" - 2 =', "8" - 2);
console.log("   Тип:", typeof ("8" - 2));

// 3. Явное преобразование строки в число
console.log('3. Number("8") + 2 =', Number("8") + 2);
console.log("   Тип:", typeof (Number("8") + 2));

// 4. Сравнение строк
console.log('4. "12" > "3" =', "12" > "3");
console.log("   Тип:", typeof ("12" > "3"));

// 5. Строгое сравнение
console.log('5. 12 === "12" =', 12 === "12");
console.log("   Тип:", typeof (12 === "12"));

// 6. Преобразование пустой строки
console.log('6. Number("") =', Number(""));
console.log("   Тип:", typeof Number(""));

// 7. Преобразование текста в число
console.log('7. Number("text") =', Number("text"));
console.log("   Тип:", typeof Number("text"));

// 8. Логическое преобразование строки
console.log('8. Boolean("false") =', Boolean("false"));
console.log("   Тип:", typeof Boolean("false"));

// 9. Тип значения null
console.log("9. typeof null =", typeof null);
console.log("   Тип результата:", typeof (typeof null));

// 10. Тип значения NaN
console.log("10. typeof NaN =", typeof NaN);
console.log("    Тип результата:", typeof (typeof NaN));
