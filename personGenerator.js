const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    womenNameJson: `{
        "count": 10,
        "list": {
            "id_1": "Анна",
            "id_2": "Ольга",
            "id_3": "Марина",
            "id_4": "Наталья",
            "id_5": "Жанна",
            "id_6": "Инна",
            "id_7": "Ирина",
            "id_8": "Татьяна",
            "id_9": "Галина",
            "id_10": "Евлампия"
        }
    }`,

    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Программист",
            "id_2": "Слесарь",
            "id_3": "Токарь",
            "id_4": "Инженер",
            "id_5": "Грузчик",
            "id_6": "Электрик",
            "id_7": "Сантехник",
            "id_8": "Шахтер",
            "id_9": "Летчик",
            "id_10": "Сварщик"
        }
    }`,

    professionWomenJson: `{
        "count": 10,
        "list": {     
            "id_1": "Бухгалтер",
            "id_2": "Швея",
            "id_3": "Косметолог",
            "id_4": "Секретарь",
            "id_5": "Сиделка",
            "id_6": "Уборщица",
            "id_7": "Актриса",
            "id_8": "Визажист",
            "id_9": "Парикмахер",
            "id_10": "Медсестра"
        }
    }`,

    month30Json: `{
        "count": 4,
        "list": {     
            "id_1": "Апреля",
            "id_2": "Июня",
            "id_3": "Сентября",
            "id_4": "Ноября"
        }
    }`,

    month31Json: `{
        "count": 7,
        "list": {     
            "id_1": "Января",
            "id_2": "Марта",
            "id_3": "Мая",
            "id_4": "Июля",
            "id_5": "Августа",
            "id_6": "Октяря",
            "id_7": "Декабря"
        }
    }`,

    

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function () {
        return this.randomIntNumber() ? this.GENDER_MALE : this.GENDER_FEMALE 
    },


    randomFirstName: function() {
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        }
        else {
            return this.randomValue(this.womenNameJson);
        }

    },


    randomPatronymic: function () {
        const suffix1 = ['ович', 'овна'];
        const suffix2 = ['евич', 'евна'];
        const suffix3 = ['ич', 'ична'];
        const suffix4 = ['йлович', 'йловна'];

        const maleNames = JSON.parse (this.firstNameMaleJson).list;

        this.person.patronymic = this.randomValue(this.firstNameMaleJson);
    

        if (this.person.patronymic === maleNames.id_7) {
            if (this.person.gender=== this.GENDER_MALE) {
                
                return this.person.patronymic + suffix4[0];
            }
            else {
                
                return this.person.patronymic + suffix4[1];
            }
            
        }
        if (this.person.patronymic === maleNames.id_6) {
            if (this.person.gender=== this.GENDER_MALE) {

                return this.person.patronymic + suffix3[0];
            }
            else {
                return this.person.patronymic + suffix3[1];
            }
           
        }

        if (this.person.patronymic === maleNames.id_5 || this.person.patronymic === maleNames.id_10) {
            if (this.person.gender===this.GENDER_MALE) {

                return this.person.patronymic + suffix2[0];
            }
            else {
                return this.person.patronymic + suffix2[1];
            }
            
        }
        else {
            if (this.person.gender === this.GENDER_MALE) {
                return this.person.patronymic + suffix1[0];
            }
            else {
                return this.person.patronymic + suffix1[1];
            }
            
        }
    },


     randomSurname: function() {

        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        }
        else {
            return `${this.randomValue(this.surnameJson)}а`;
        }

    },


    randomBirthYear: function () {
        if (Math.floor(Math.random() * 3) == 0) {
            year = this.randomIntNumber(1950, 2000);
            month = this.randomValue(this.month31Json);
            day = this.randomIntNumber(31, 1);
        } else 
        if (Math.floor(Math.random() * 3) == 1) {
            year = this.randomIntNumber(1950, 2000);
            month = this.randomValue(this.month30Json);
            day = this.randomIntNumber(30, 1);
        } 
        birthday = day + ' ' + month + ' ' + year + " Года рождения"; 
        return birthday;

    },


    randomProfession: function () {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue (this.professionMaleJson);
        }
        else {
            return this.randomValue (this.professionWomenJson);
        }
    },


    getPerson: function () {
        this.person = {};// this.person.gender = this.randomGender();
        this.person.gender = this.randomGender();       //пол
        this.person.firstName = this.randomFirstName(); //имя
        this.person.patronymic = this.randomPatronymic();//отчество
        this.person.surName = this.randomSurname();     //фамилия
        this.person.birthYear = this.randomBirthYear(); //год
        this.person.profession = this.randomProfession();//профессия

        return this.person;
    },
};
//console.log(personGenerator.getPerson());
