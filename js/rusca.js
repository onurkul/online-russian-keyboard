var car;

function transcrire() {
    car = document.conversion.saisie.value;
    //Küçük Harfler
    car = car.replace(/a/g, "а");
    car = car.replace(/b/g, "б");
    car = car.replace(/v/g, "в");
    car = car.replace(/g/g, "г");
    car = car.replace(/d/g, "д");
    car = car.replace(/е=/g, "ё")
    car = car.replace(/z/g, "з");
    car = car.replace(/j/g, "ж");
    car = car.replace(/i/g, "и");
    car = car.replace(/y/g, "й");
    car = car.replace(/k/g, "к");
    car = car.replace(/l/g, "л");
    car = car.replace(/m/g, "м");
    car = car.replace(/n/g, "н");
    car = car.replace(/o/g, "о");
    car = car.replace(/p/g, "п");
    car = car.replace(/r/g, "р");
    car = car.replace(/s/g, "с");
    car = car.replace(/t/g, "т");
    car = car.replace(/u/g, "у");
    car = car.replace(/f/g, "ф");
    car = car.replace(/c/g, "дж");
    car = car.replace(/ç/g, "ч");
    car = car.replace(/ş/g, "ш");
    car = car.replace(/с=/g, "щ");
    car = car.replace(/ı/g, "ы");
    car = car.replace(/e/g, "е");
    car = car.replace(/е=/g, "э");
    car = car.replace(/у=/g, "ю");
    car = car.replace(/а=/g, "я");
    car = car.replace(/"/g, "ъ");
    car = car.replace(/ъ=/g, "ь");
    car = car.replace(/т=/g, "ц");
    car = car.replace(/h/g, "х");

    //Büyük Harfler
    car = car.replace(/A/g, "А");
    car = car.replace(/B/g, "Б");
    car = car.replace(/V/g, "В");
    car = car.replace(/G/g, "Г");
    car = car.replace(/D/g, "Д");
    car = car.replace(/Э=/g, "Е");
    car = car.replace(/Е=/g, "Ё");
    car = car.replace(/Z/g, "З");
    car = car.replace(/J/g, "Ж");
    car = car.replace(/İ/g, "И");
    car = car.replace(/Y/g, "Й");
    car = car.replace(/K/g, "К");
    car = car.replace(/L/g, "Л");
    car = car.replace(/M/g, "М");
    car = car.replace(/N/g, "Н");
    car = car.replace(/O/g, "О");
    car = car.replace(/P/g, "П");
    car = car.replace(/R/g, "Р");
    car = car.replace(/S/g, "С");
    car = car.replace(/T/g, "Т");
    car = car.replace(/U/g, "У");
    car = car.replace(/F/g, "Ф");
    car = car.replace(/C/g, "ДЖ");
    car = car.replace(/Ç/g, "Ч");
    car = car.replace(/Т=/g, "Ц");
    car = car.replace(/Ş/g, "Ш");
    car = car.replace(/С=/g, "Щ");
    car = car.replace(/С=/g, "Щ");
    car = car.replace(/I/g, "Ы");
    car = car.replace(/E/g, "Е");
    car = car.replace(/Е=/g, "Э");
    car = car.replace(/У=/g, "Ю");
    car = car.replace(/А=/g, "Я");
    car = car.replace(/H/g, "Х");
    car = car.replace(/"/g, "Ъ");
    car = car.replace(/ъ=/g, "Ь");

    startPos = document.conversion.saisie.selectionStart;
    endPos = document.conversion.saisie.selectionEnd;

    beforeLen = document.conversion.saisie.value.length;
    afterLen = car.length;
    adjustment = afterLen - beforeLen;

    document.conversion.saisie.value = car;

    document.conversion.saisie.selectionStart = startPos + adjustment;
    document.conversion.saisie.selectionEnd = endPos + adjustment;

    var obj = document.conversion.saisie;
    obj.focus();
    obj.scrollTop = obj.scrollHeight;
}
