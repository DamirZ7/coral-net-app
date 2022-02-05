const RU = {
    id: 1,
    title: 'RU',
    flag: require('../languages/img/rf.png'),
    values: {
        signinScreen: {
            signIn: 'ВОЙТИ',
            registration: 'Регистрация',
            showPass: 'Показать пароль',
            enterEmail: 'Введите Email',
            enterPass: 'Введите пароль',
            repeatPass: 'Повторите пароль',
            emailPassEnterErr: 'Введите Email и пароль',
            phoneNum: 'Номер телефона',
            login: 'Логин',
            passValidErr: 'Пароли не совпадают',
            serverErr: 'Ошибка на сервере',
            wrongEmailOrPass: 'Не верный Email или пароль',
            enter: 'Вход',
            regAlert1: 'Пользователь с таким Email уже существует',
            regAlert2: 'Регистрация пройдена, данные для входа отправлены на указанный Email',
            regErr: 'Ошибка',
            allFormErr1: 'Заполните все поля',
            allFormErr2: 'Проверьте все поля',
        },
        homeScreen: {
            home: 'Главная',
            auctions: 'Аукционы',
            autoSearch: 'Автоматический поиск',
            instagram: 'Мы в Instagram',
            aboutUs: 'О нас',
            calculator: 'Калькулятор стоимости',
            questions: 'Частые вопросы',
        },
        auctionScreen: {
            selectBrand: 'Выберите марку автомобиля',
            search: 'Поиск',
        },
        modelScreen: {
            selectModel: 'Выберите модель',
            search: 'Поиск',
        },
        settingsScreen: {
            params: 'Параметры поиска',
            engine: 'Двигатель',
            selectEngine: 'Выберите объем двигателя',
            year: 'Год',
            yearStart: 'от',
            yearEnd: 'до',
            range: 'Пробег',
            rangeStart: 'от',
            rangeEnd: 'до',
            inspect: 'Осмотр',
            selectInspect: 'Выбрать',
            rate: 'Оценка',
            selectRate: 'Выбрать',
            color: 'Цвет',
            colorBase: 'Основной',
            colorAlt: 'Альтернативный',
            modalHead: 'Выберите и нажмите Ok',
            ok: 'Ok',
            cancel: 'Отмена',
            loading: 'Идет поиск ...',
            searchErr: 'Ничего не найдено, измените параметры поиска',
            newSearch: 'Начать поиск'
        },
        followScreen: {
            autoSearch: 'Автоматический поиск',
            newReq: 'Новый поисковой запрос'
        }, 
        followOneScreen: {
            searchResult: 'Результаты поиска',
            year: 'Год',
            price: 'Стартовая цена',
            rate: 'Оценка',
            range: 'Пробег',
            inspection: 'Осмотр',
            carBody: 'Кузов',
            engine: 'Двигатель',
            color: 'Цвет',
            lotNum: 'Лот',
            complect: 'Комплектация',
            options: 'Опции',
            auction: 'Аукцион',
            loading: 'Идет поиск ...',
            searchErr: 'Ничего не найдено, измените параметры поиска',
        },
        selectedCarScreen: {
            selectedCar: 'Побродная информация',
            dataErr: 'Произошла ошибка',
            sendMailCompl: 'Лот отправлен, Ваш менеджер свяжется с вами в ближайшее время',
            sendMailErr: 'Произошла ошибка при отправке, попородуйте еще раз',
            serverErr: 'Ошибка на сервере',
            aucList: 'Аукционный лист',
            year: 'Год',
            price: 'Стартовая цена',
            lotNum: 'Номер лота',
            rate: 'Оценка',
            inspect: 'Осмотр',
            range: 'Пробег',
            carBody: 'Кузов',
            color: 'Цвет',
            complect: 'Комплектация',
            auction: 'Аукцион',
            aucDate: 'Дата аукциона',
            engine: 'Объем двигателя',
            fuel: 'Топливо',
            history: 'История',
            options: 'Опции',
            inform: 'Информация',
            sendMail: 'Отправить менеджеру'
        },
        aboutusScreen: {
            aboutUs: 'О нас',
            aboutCompany: 'О компании',
            text1: 'Coral Network - ведущая торговая компания, базирующаяся в Осаке, втором по величине деловом центре Японии.',
            text2: `Наш опыт заключается в продаже высококачественных товаров, произведенных в Японии, от брокера на аукционе подержанных автомобилей в Японии до поставщика новых автомобилей, лодок и хозяйственных товаров.
            \nМы предлагаем нашим клиентам прямой доступ к японским автомобильным аукционам, японскому рынку автохимии и товаров для дома. На протяжении многих лет мы оттачивали наши навыки экспорта и доставки, гарантируя, что наши клиенты получают беспрепятственный и удовлетворительный опыт покупки товаров из Японии. \n\nХорошо обученный персонал Coral Network понимает потребности клиентов, может свободно общаться практически на всех основных мировых языках и поэтому обеспечивает лучшее и чрезвычайно вежливое обслуживание. Гибкие методы оплаты и бесперебойная быстрая доставка заказанных автомобилей и товаров ежедневно вносят свой вклад в наше надежное имя в мировой торговой индустрии.`,
            mission: 'Наша Миссия',
            text3: `Видение Coral Network - помогать профессиональным брокерам, автосалонам и частным лицам со всего мира в поиске автомобилей, лодок и химических товаров высшего качества японского производства. \n\nCoral Network всегда стремится к построению долгосрочных отношений с клиентами по всему миру, уделяя особое внимание предоставлению отличных и исключительных услуг, поставке товаров Made in Japan в хорошем состоянии, подержанных автомобилей японского рынка, новых автомобилей и лодок и других товаров по честным разумным ценам в сочетании с быстрой доставкой.`,
            text4: `Мы поставляем нашим клиентам в Азии, Океании, Европе и Африке подержанные автомобили высокого качества по самым низким ценам. \n\nДоступ к аукционам по всей Японии. Coral Net более двух десятилетий экспортирует высококачественные подержанные и новые автомобили в ряд стран Европы, Новой Зеландии, Сингапура, России, Австралии, Ямайки, Мальдивских островов, Маврикия, Кипра, Ботсваны, Суринама, Кении, Танзании, Уганда, Замбия, Зимбабве, Антигуа и Барбуда, Сент-Винсент и Гренадины, Тринидад и Тобаго, Южная Африка, ОАЭ, Нидерланды, Великобритания и многие другие.`,
            lang: 'Доступные языки',
            langText: `Русский,\n\nАнглийский,\n\nЯпонский,\n\nИспанский\n`,
            contact: 'Контакты',
            contactText: ` Головной офис:\n
Tel.: +81 72 72 61 200\n
Fax: +81 72 72 61 202\n\n
Департамент продаж:\n
E-mail: info@coral-net.jp\n
WhatsApp: +81 80 1119 2255\n
WhatsApp: +81 345 78 00 66\n
WhatsApp: +81 645 60 52 88\n\n
Департамент логистики:\n
E-mail: logistic@coral-net.jp\n`,
        },
        faqsScreen: {
            faqs: 'Частые вопросы',
            howToBuy: 'Как покупать',
            text1: 'Регистрация и поиск',
            text2: 'Зарегистрируйтесь на нашем сайте auc.coral-net.jp и найдите нужный автомобиль, наш менеджер свяжется с вами по E-mail или WhatsApp и ответит на все ваши вопросы, произведет расчеты и покажет предложения.',
            text3: 'Депозит',
            text4: 'Залог подлежит 100% возврату. Независимо от результата аукциона, мы не касаемся вашего аукционного депозита. Вы можете использовать его для другого аукциона, применить возврат, включить в общую стоимость автомобиля или использовать его для оплаты другого автомобиля. все зависит от вас! Сумма депозита составляет 1500 долларов США для автомобилей стоимостью менее 20 000 долларов США. Для автомобилей стоимостью более 20 000 долларов США необходимая сумма залога должна составлять 10% от ожидаемой стоимости автомобиля. Его нужно отправить TT-переводом из любого местного банка.',
            text5: 'Размещение ставки и результаты',
            text6: 'После получения депозита с вами проконсультируют, как выбирать лоты, делать ставки, использовать статистику продаж и т.д.',
            text7: 'Полная оплата автомобиля',
            text8: 'Когда ставка выиграна, вам будет отправлен счет на оплату. Оплата должна быть отправлена ​​в течении 3-5 рабочих дней после покупки через TT-перевод. Как только ваш платеж поступит на наш счет, менеджер по логистике свяжется с вами и соберет все необходимые данные, чтобы организовать отправку вашего автомобиля в страну назначения.',
            payment: 'Вопросы оплаты',
            text9: 'Как мне произвести оплату?',
            text10: `В настоящее время мы принимаем только банковские переводы (T/T). Мы не принимаем кредитные или дебетовые карты и другие способы оплаты.\nПримечание. Плата за перевод оплачивается клиентом.`,
            text11: 'Куда нужно отправить депозит?',
            text12: 'Детали будут отправлены по запросу вашим личным помощником.',
            text13: 'В какой валюте можно произвести оплату?',
            text14: 'Вы можете отправить нам оплату в долларах США, японских йенах или евро.',
            text15: 'Вы принимаете аккредитив?',
            text16: 'Мы принимаем только банковские переводы и не принимаем аккредитивы.',
            text17: 'Какие условия оплаты?',
            text18: 'Перед отправкой автомобиль должен быть оплачен на 100%. При покупке автомобиля на аукционах полная оплата требуется в течение 3-5 рабочих дней, включая дату покупки.',
            text19: 'Есть ли возможность кредитования?',
            text20: 'Нет, мы отправим ваш автомобиль только после того, как банк подтвердит вашу полную оплату.',
            shiping: 'Оформление и доставка',
            text21: 'Сколько стоит морская доставка?',
            text22: 'Морские перевозки могут быть изменены в зависимости от цен на нефть и обменных курсов валют. Это также зависит от сезона, размера транспортного средства, типа перевозки, будь то контейнер 20-40 футов для нескольких транспортных средств или RORO в случае только одного. Вы всегда МОЖЕТЕ проконсультироваться о наилучшем и наиболее разумном способе доставки вашего автомобиля перед покупкой.',
            text23: 'Гарантирована ли доставка?',
            text24: 'Стоимость страховки не включена в окончательную цену, но груз может быть застрахован за дополнительную плату.',
            text25: 'Сколько времени нужно судну, чтобы прибыть в порт?',
            text26: 'Это зависит от порта назначения. Как правило, после отправки из Японии доставка в далекие порты занимает около трех-пяти недель. У нас есть связи с несколькими судоходными компаниями.',
            text27: 'Когда моя машина будет отправлена?',
            text28: 'Ваш автомобиль отправляется на отгрузку, как только вы вносите платеж в соответствии с ранее согласованными условиями оплаты.',
            text29: 'Информируются ли клиенты о процессе отгрузки?',
            text30: 'Да, Coral-Network всегда информирует своих клиентов о доставке автомобилей и отправке документов.',
            text31: 'Какие документы я получу?',
            text32: `BL (Landing Bill of Landing - заверенная копия или оригинал)\nСчет-фактура / Счет\nЭкспортный сертификат (перевод на английский только при необходимости за дополнительную плату)`,
        },
        calcScreen: {
            calc: 'Калькулятор стоимости',
            carType1: 'Целый автомобиль',
            carType2: 'Распил легковой',
            carType3: 'Распил рамный',
            carType4: 'Конструктор легковой',
            carType5: 'Конструктор джип, микроавтобус',
            carType6: 'Запчасти на палете',
            fuel1: 'Бензин (гибрид включительно)',
            fuel2: 'Дизельное топливо',
            fuel3: 'Электричество',
            carOld1: 'Меньше 3 лет',
            carOld2: 'От 3 до 5 лет',
            carOld3: 'От 5 до 7 лет',
            carOld4: 'Больше 7 лет',
            aucPrice: 'Цена на аукционе, ¥',
            inputPrice: 'Введите цену',
            auc: 'Аукцион',
            selectAuc: 'Выберите аукцион',
            aucModal: 'Выберите аукцион и нажмите Ok',
            serviceType: 'Тип услуги',
            fuelType: 'Тип топлива',
            engine: `Обьем двигателя,\nсм.куб`,
            selectEngine: 'Введите обьем',
            hp: 'Мощность в л.с.',
            inputHp: 'Введите мощность',
            carYear: 'Возраст автомобиля',
            calculate: 'Рассчитать',
        },
        calcResultScreen: {
            calcRes: 'Результаты расчета',
            calcErr: 'Ошибка, повторите запрос',
            finishPrice: 'Итоговая стоимость во Владивостоке',
            rub: 'рублей',
            japanCosts: 'Расходы по Японии',
            aucPrice: 'Цена на аукционе',
            jap: 'йен',
            fob: 'FOB Тояма',
            vladivostokShip: 'Доставка до Владивостока',
            cf: 'Итого C&F Владивосток',
            custom: 'Таможенные платежи',
            svh: 'Услуги по таможенному оформлению, СВХ, СБКТС',
            glonas: 'Установка оборудования Эра-Глонас',
            util: 'Утилизационный сбор',
            duty: 'Таможенная пошлина',
            fullCustom: 'Итого таможенные платежи',
            fraght: 'Распил / фрахт',
            usd: 'долларов',
        }

    }
}

export default RU