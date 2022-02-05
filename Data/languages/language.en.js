const EN = {
    id: 2,
    title: 'EN',
    flag: require('../languages/img/us.jpg'),
    values: {
        signinScreen: {
            signIn: 'SIGN IN',
            registration: 'Registration',
            showPass: 'Show password',
            enterEmail: 'Enter Email',
            enterPass: 'Enter password',
            repeatPass: 'Repeat password',
            emailPassEnterErr: 'Enter Email and password',
            phoneNum: 'Phone number',
            login: 'Login',
            passValidErr: 'Password mismatch',
            serverErr: 'Server error',
            wrongEmailOrPass: 'Incorrect email or password',
            enter: 'Enter',
            regAlert1: 'User with this Email already exists',
            regAlert2: 'Registration completed, login details sent to the specified Email',
            regErr: 'Error',
            allFormErr1: 'Fill in all the fields',
            allFormErr2: 'Check all fields',
        },
        homeScreen: {
            home: 'Home',
            auctions: 'Auction',
            autoSearch: 'Automatic search',
            instagram: 'Our Instagram',
            aboutUs: 'About Us',
            calculator: 'Cost calculator',
            questions: 'FAQS',
        },
        auctionScreen: {
            selectBrand: 'Choose a car brand',
            search: 'Search',
        },
        modelScreen: {
            selectModel: 'Choose a model',
            search: 'Search',
        },
        settingsScreen: {
            params: 'Search options',
            engine: 'Engine',
            selectEngine: 'Select',
            year: 'Year',
            yearStart: 'start',
            yearEnd: 'end',
            range: 'ODO',
            rangeStart: 'start',
            rangeEnd: 'end',
            inspect: 'Inspection',
            selectInspect: 'Select',
            rate: 'Score',
            selectRate: 'Select',
            color: 'Color',
            colorBase: 'Base',
            colorAlt: 'Alternative',
            modalHead: 'Select and click Ok',
            ok: 'Ok',
            cancel: 'Cancel',
            loading: 'Loading ...',
            searchErr: 'Nothing found, change your search options',
            newSearch: 'Start searching'
        },
        followScreen: {
            autoSearch: 'Automatic search',
            newReq: 'New search'
        },
        followOneScreen: {
            searchResult: 'Searching results',
            year: 'Year',
            price: 'Start price',
            rate: 'Score',
            range: 'ODO',
            inspection: 'Inspection',
            carBody: 'Make',
            engine: 'Engine',
            color: 'Color',
            lotNum: 'Lot',
            complect: 'Grade',
            options: 'Options',
            auction: 'Location',
            loading: 'Loading ...',
            searchErr: 'Nothing found, change your search options',
        },
        selectedCarScreen: {
            selectedCar: 'Full information',
            dataErr: 'Error',
            sendMailCompl: 'Lot has been sent, your manager will contact you shortly',
            sendMailErr: 'Sending error, please try again',
            serverErr: 'Server error',
            aucList: 'Auction sheet',
            year: 'Year',
            price: 'Start price',
            lotNum: 'Lot',
            rate: 'Score',
            inspect: 'Inspection',
            range: 'ODO',
            carBody: 'Make',
            color: 'Color',
            complect: 'Grade',
            auction: 'Location',
            aucDate: 'Auction date',
            engine: 'Engine',
            fuel: 'Fuel',
            history: 'History',
            options: 'Options',
            inform: 'Information',
            sendMail: 'Send to manager'
        },
        aboutusScreen: {
            aboutUs: 'About us',
            aboutCompany: 'COMPANY PROFILE',
            text1: 'Coral Network is a leading trading company based in Osaka, second biggest business center of Japan.',
            text2: `Our expertise lies in selling high quality made in Japan goods starting from Japan Used Cars Auctions Broker to the Supplier of the Brand new Cars, Boats and Household Goods.
            \nWe offer our clients a direct access to Japanese car auctions, Japan Car Care and Household goods market. Through many years we have polished our export and delivery skills, ensuring that our customers get a smooth and satisfying experience of buying goods from Japan. \n\nA well-trained personnel of Coral Network understands the needs of the customers, can communicate fluently and natively in almost all basic world spoken languages and therefore provide the best and extremely courteous service. Flexible payment methods and smooth swift shipping process of ordered vehicles and goods contributes every day to our trusted name in a global trading industry.`,
            mission: 'OUR MISSION',
            text3: `The vision of Coral Network is to assist professional brokers, car dealers, and individuals from all parts of the world in finding the best quality Japan made cars, Boats and Chemical goods providing an ultimate service and fast delivery to any country on the earth. \n\nCoral Network always aims to build long lasting relationship with customers around the world by focusing on providing a great and exceptional service, supplying Made in Japan goods Good conditioned used Japanese market cars, Brand new cars and Boats and other goods at honest reasonable prices combined with a fast delivery.`,
            text4: `We have been supplying our clients in Asia, Oceania, Europe and Africa with high quality used vehicle at the lowest prices. \n\nHaving access to auctions through out Japan. Coral Net has been exporting high quality second hand and Brand New vehicles for more than two decades to a number of countries in Europe, New Zealand, Singapore, Russia, Australia, Jamaica, Maldives, Mauritius, Cyprus, Botswana, Suriname, Kenya, Tanzania, Uganda, Zambia, Zimbabwe, Antigua and Barbuda, St Vincent and Grenadines, Trinidad and Tobago, South Africa, UAE, Netherlands, UK and many others.`,
            lang: 'SUPPORTED LANGUAGES',
            langText: `Japanese,\n\nEnglish,\n\nRussian,\n\nSpanish.\n`,
            contact: 'CONTACT INFO',
            contactText: `Head Office:\n
Tel.: +81 72 72 61 200\n
Fax: +81 72 72 61 202\n\n
Sales Department:\n
E-mail: info@coral-net.jp\n
WhatsApp: +81 80 1119 2255\n
WhatsApp: +81 345 78 00 66\n
WhatsApp: +81 645 60 52 88\n\n
Logistic Department:\n
E-mail: logistic@coral-net.jp\n `,
        },
        faqsScreen: {
            faqs: 'FAQS',
            howToBuy: 'HOW TO BUY',
            text1: 'REGISTER AND SEARCH',
            text2: 'Register on our webisite auc.coral-net.jp and search for the car you want, our manager will contact you via E-mail or WhatsApp and answer all your questions, make calculations and show offers.',
            text3: 'MAKE DEPOSIT',
            text4: 'The deposits are 100% Refundable No matter what the result of the auction is, we won’t touch your auction deposit. You can use it for another auction, apply a refund, include in total cost of car or use it to pay for another car. it is all up to you! Deposit amount is 1500USD for cars with cost less than 20.000USD. For cars with cost more than 20.000USD, required deposit amount should be 10% from expected cost of car. It should be sent via TT-transfer from any local bank.',
            text5: 'PLACE THE BID AND WAIT FOR RESULT',
            text6: 'After receiving a deposit, you will be consulted how to chose lots, make bids, use sales statistics etc. Once your bid is set, we will make bidding in live auction for you and update you once we have results.',
            text7: 'SEND PAYMENT FOR A VEHICLE',
            text8: 'When the bid is won, you will be sent Invoice for a payment. Payment should be sent during 3-5 working days after buying date via TT-transfer. Once your payment reaches our account, logistics manager will contact you and collect all necessary data in order to organize shipment of your car to your country of destination.',
            payment: 'PAYMENT INFORMATION',
            text9: 'How do I make a payment?',
            text10: `We currently only accept bank transfers (T/T) only. We do not accept credit or debit cards and other methods of payments.\nNote: Transfer charges are the client’s responsibility.`,
            text11: 'Where should the deposit be sent?',
            text12: 'The details will be sent upon request by your personal assistant.',
            text13: 'Do you take foreign currency?',
            text14: 'You may send us payment in USD, JPY or EURO.',
            text15: 'Do you accept LC?',
            text16: 'We only take bank transfers and do not accept LC.',
            text17: 'What are the payment terms?',
            text18: 'The vehicle should be 100% paid before the shipment. When the vehicle is purchased from the auctions full payment is required within 3-5 working days including the purchase date.',
            text19: 'Do you offer credit?',
            text20: 'No, we will only send your vehicle once the bank has confirmed your full payment.',
            shiping: 'SHIPPING & HANDLING',
            text21: 'How much is shipping by sea?',
            text22: 'Shipping by sea is subject to change in relation to oil prices and currency exchange rates. It also depends on the season, the size of the vehicle, the type of shipment, whether it is a container 20-40 feet for several vehicles or a RORO in case of just one. You CAN always consult the best and most reasonable way of shipping of your vehicle before making a purchase.',
            text23: 'Is shipping guaranteed?',
            text24: 'The cost of insurance is not included in the final price, but the shipment can be insured at the additional customer’s cost.',
            text25: 'How long does it take to arrive to the port?',
            text26: 'It depends on the port of destination. In general, it takes the shipments about three or five weeks in faraway ports once it has left Japan. We have connections with several shipping companies.',
            text27: 'When will my car be shipped?',
            text28: 'Your car is sent for shipment as soon as you make the first payment based on the payment terms decided earlier.',
            text29: 'Are the customers informed about the shipment process?',
            text30: 'Yes, Coral-Network always keep its customers informed and updated about the shipment of vehicle and dispatching of documents.',
            text31: 'What documents will I receive?',
            text32: `BL (Bill of Landing – surrendered copy or original)\nInvoice / Bill\nExport certificate (translated to English only if necessary at additional cost)`,
        },
        calcScreen: {
            calc: 'Cost calculator',
            carType1: 'Whole car',
            carType2: 'Sawing passenger',
            carType3: 'Frame saw cut',
            carType4: 'Passenger constructor',
            carType5: 'Constructor jeep, minibus',
            carType6: 'Spare parts on a pallet',
            fuel1: 'Gasoline (hybrid inclusive)',
            fuel2: 'Diesel',
            fuel3: 'Electricity',
            carOld1: 'Less than 3 years old',
            carOld2: '3 to 5 years',
            carOld3: '5 to 7 years',
            carOld4: 'Over 7 years',
            aucPrice: 'Auction price, ¥',
            inputPrice: 'Enter price',
            auc: 'Auction',
            selectAuc: 'select an auction',
            aucModal: 'Select an auction and click Ok',
            serviceType: 'Service type',
            fuelType: 'Fuel type',
            engine: `Engine, cc`,
            selectEngine: 'Enter cc',
            hp: 'Horsepower',
            inputHp: 'Enter HP',
            carYear: 'Vehicle age',
            calculate: 'Calculate',
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

export default EN