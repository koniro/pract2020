const app = require('./index');
const supertest = require('supertest');
const request = supertest(app);

describe('API', () => {
    it('Сложение с аргументами - числами', () => {
        return request
            .post('/first')
            .send(
                {
                    arg1: 1,
                    arg2: 2,
                    op: "+"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(3);
            });
    });

    it('Сложение с аргументом - строкой', () => {
        return request
            .post('/first')
            .send(
                {
                    arg1: "1",
                    arg2: 2,
                    op: "+"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Ошибка: введите числа');
            });
    });

    it('Вычитание с аргументами - числами', () => {
        return request
            .post('/first')
            .send(
                {
                    arg1: 1,
                    arg2: 2,
                    op: "-"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(-1);
            });
    })

    it('Вычитание с аргументом - строкой', () => {
        return request
            .post('/first')
            .send(
                {
                    arg1: "1",
                    arg2: 2,
                    op: "-"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Ошибка: введите числа');
            });
    })

    it('Умножение с аргументами числами', () => {
        return request
            .post('/first')
            .send(
                {
                    arg1: 1,
                    arg2: 2,
                    op: "*"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(2);
            });
    })

    it('Умножение с аргументом - строкой', () => {
        return request
            .post('/first')
            .send(
                {
                    arg1: "1",
                    arg2: 2,
                    op: "*"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Ошибка: введите числа');
            });
    })

    it('Деление с аргументами - числами', () => {
        return request
            .post('/first')
            .send(
                {
                    arg1: 1,
                    arg2: 2,
                    op: "/"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(0.5);
            });
    })

    it('Деление с аргументом - строкой', () => {
        return request
            .post('/first')
            .send(
                {
                    arg1: "1",
                    arg2: 2,
                    op: "/"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Ошибка: введите числа');
            });
    })

    it('Деление на нуль', () => {
        return request
            .post('/first')
            .send(
                {
                    arg1: 1,
                    arg2: 0,
                    op: "/"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Ошибка, деление на нуль невозможно.');
            });
    })

    it('Степень с аргументами - числами', () => {
        return request
            .post('/first')
            .send(
                {
                    arg1: 1,
                    arg2: 2,
                    op: "**"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(1);
            });
    })

    it('Степень с аргументом - строкой', () => {
        return request
            .post('/first')
            .send(
                {
                    arg1: "1",
                    arg2: 2,
                    op: "**"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Ошибка: введите числа');
            });
    })

    it('Процент с аргументами - числами', () => {
        return request
            .post('/first')
            .send(
                {
                    arg1: 10,
                    arg2: 100,
                    op: "%"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(10);
            });
    })

    it('Процент с аргументом - строкой', () => {
        return request
            .post('/first')
            .send(
                {
                    arg1: "10",
                    arg2: 100,
                    op: "%"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Ошибка: введите числа');
            });
    })

    it('Процент с неположительным значением аргумента(ов)', () => {
        return request
            .post('/first')
            .send(
                {
                    arg1: -10,
                    arg2: 100,
                    op: "%"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Требуется положительное значение');
            });
    })

    it('Проверка на неправильность ввода команды первого маршрута', () => {
        return request
            .post('/first')
            .send(
                {
                    arg1: 10,
                    arg2: 100,
                    op: "а"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Ошибка: неверная команда. + сложение, - вычитание, * умножение, / деление, ** возведение в степень, % взятие процента.');
            });
    })

    it('Корень с аргументом - числом', () => {
        return request
            .post('/second')
            .send(
                {
                    arg: 10,
                    oper: "v"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(3.1622776601683795);
            });
    })

    it('Корень с аргументом - строкой', () => {
        return request
            .post('/second')
            .send(
                {
                    arg: "10",
                    oper: "v"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Ошибка: введите число');
            });
    })

    it('Корень с отрицательным аргументом ', () => {
        return request
            .post('/second')
            .send(
                {
                    arg: -10,
                    oper: "v"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Требуется положительное значение');
            });
    })
    it('Синус с аргументом - числом', () => {
        return request
            .post('/second')
            .send(
                {
                    arg: 10,
                    oper: "sin"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(-0.5440211108893698);
            });
    })

    it('Синус с аргументом - строкой', () => {
        return request
            .post('/second')
            .send(
                {
                    arg: "10",
                    oper: "sin"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Ошибка: введите число');
            });
    })

    it('Косинус с аргументом - числом', () => {
        return request
            .post('/second')
            .send(
                {
                    arg: 10,
                    oper: "cos"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(-0.8390715290764524);
            });
    })

    it('Косинус с аргументом - строкой', () => {
        return request
            .post('/second')
            .send(
                {
                    arg: "10",
                    oper: "cos"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Ошибка: введите число');
            });
    })

    it('Тангенс с аргументом - числом', () => {
        return request
            .post('/second')
            .send(
                {
                    arg: 10,
                    oper: "tg"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(0.6483608274590866);
            });
    })

    it('Тангенс с аргументом - строкой', () => {
        return request
            .post('/second')
            .send(
                {
                    arg: "10",
                    oper: "tg"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Ошибка: введите число');
            });
    })

    it('Котангенс с аргументом- числом', () => {
        return request
            .post('/second')
            .send(
                {
                    arg: 10,
                    oper: "ctg"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(1.5423510453569202);
            });
    })

    it('Котангенс с аргументом - строкой', () => {
        return request
            .post('/second')
            .send(
                {
                    arg: "10",
                    oper: "ctg"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Ошибка: введите число');
            });
    })

    it('Проверка на неправильность ввода команды второго маршрута', () => {
        return request
            .post('/second')
            .send(
                {
                    arg: 10,                   
                    oper: "son"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Ошибка: неверная команда. v вычисление квадратного корня, sin вычисление синуса, cos вычисление косинуса, tg вычисление тангенса, ctg вычисление котангенса.');
            });
    })
});

