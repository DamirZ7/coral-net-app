const carBrand = [
    {
        id: 1,
        title: 'TOYOTA',
        value: 'aj1_1',
        img: require('./images/Toyota_1.jpg')
    },
    {
        id: 2,
        title: 'NISSAN',
        value: 'aj1_2',
        img: require('./images/Nissan_1.jpg')
    },
    {
        id: 3,
        title: 'MAZDA',
        value: 'aj1_3',
        img: require('./images/Mazda_1.jpg')
    },
    {
        id: 4,
        title: 'MITSUBISHI',
        value: 'aj1_4',
        img: require('./images/MMC_logo41.png')
    },
    {
        id: 5,
        title: 'HONDA',
        value: 'aj1_5',
        img: require('./images/Honda_1.jpg')
    },
    {
        id: 6,
        title: 'SUZUKI',
        value: 'aj1_6',
        img: require('./images/Suzuki_1.jpg')
    },
    {
        id: 7,
        title: 'SUBARU',
        value: 'aj1_7',
        img: require('./images/V_C_300dpi.png')
    },
    {
        id: 8,
        title: 'ISUZU',
        value: 'aj1_8',
        img: require('./images/Isuzu_1.jpg')
    },
    {
        id: 9,
        title: 'DAIHATSU',
        value: 'aj1_9',
        img: require('./images/Daihatsu_1.jpg')
    },
    {
        id: 10,
        title: 'MITSUOKA',
        value: 'aj1_10',
        img: require('./images/mitsuoka.png')
    },
    {
        id: 11,
        title: 'LEXUS',
        value: 'aj1_23',
        img: require('./images/Lexus_1.jpg')
    },
    {
        id: 12,
        title: 'ALFAROMEO',
        value: 'aj1_12',
        img: require('./images/Alfa_Romeo_1.jpg')
    },
    {
        id: 13,
        title: 'ASTON MARTIN',
        value: 'aj1_112',
        img: require('./images/Aston_Martin1.jpg')
    },
    {
        id: 14,
        title: 'AUDI',
        value: 'aj1_13',
        img: require('./images/Audi_1.jpg')
    },
    {
        id: 15,
        title: 'BENTLEY',
        value: 'aj1_115',
        img: require('./images/Bentley_1.jpg')
    },
    {
        id: 16,
        title: 'BMW',
        value: 'aj1_14',
        img: require('./images/BMW_1.jpg')
    },
    {
        id: 17,
        title: 'BMW ALPINA',
        value: 'aj1_117',
        img: require('./images/Alpina_1.jpg')
    },
    {
        id: 18,
        title: 'CADILLAC',
        value: 'aj1_119',
        img: require('./images/Cadillac_log.jpg')
    },
    {
        id: 19,
        title: 'CHEVROLET',
        value: 'aj1_121',
        img: require('./images/Chevrolet_1.jpg')
    },
    {
        id: 20,
        title: 'CHRYSLER',
        value: 'aj1_15',
        img: require('./images/Chrysler_11.jpg')
    },
    {
        id: 21,
        title: 'CITROEN',
        value: 'aj1_16',
        img: require('./images/Citroen_logo.jpg')
    },
    {
        id: 22,
        title: 'DODGE',
        value: 'aj1_124',
        img: require('./images/Dodge_1.jpg')
    },
    {
        id: 23,
        title: 'FERRARI',
        value: 'aj1_126',
        img: require('./images/Ferrari_1.jpg')
    },
    {
        id: 24,
        title: 'FIAT',
        value: 'aj1_18',
        img: require('./images/Fiat_11.jpg')
    },
    {
        id: 25,
        title: 'FORD',
        value: 'aj1_19',
        img: require('./images/Ford_1.jpg')
    },
    {
        id: 26,
        title: 'GM',
        value: 'aj1_20',
        img: require('./images/Gm_logo21.png')
    },
    {
        id: 27,
        title: 'GMC',
        value: 'aj1_128',
        img: require('./images/GMC_1.jpg')
    },
    {
        id: 28,
        title: 'HANIX',
        value: 'aj1_339',
        img: require('./images/Hanix1.png')
    },
    {
        id: 29,
        title: 'HINO',
        value: 'aj1_21',
        img: require('./images/Hino_1.jpg')
    },
    {
        id: 30,
        title: 'HITACHI',
        value: 'aj1_340',
        img: require('./images/Hitachi1.png')
    },
    {
        id: 31,
        title: 'HUMMER',
        value: 'aj1_129',
        img: require('./images/Hummer_1.jpg')
    },
    {
        id: 32,
        title: 'ISEKI',
        value: 'aj1_341',
        img: require('./images/5134-iseki_logo.jpg')
    },
    {
        id: 33,
        title: 'JAGUAR',
        value: 'aj1_132',
        img: require('./images/Jaguar_1.jpg')
    },
    {
        id: 34,
        title: 'JEEP',
        value: 'aj1_234',
        img: require('./images/Jeep_1.jpg')
    },
    {
        id: 35,
        title: 'KAWASAKI',
        value: 'aj1_236',
        img: require('./images/Kawasaki.png')
    },
    {
        id: 36,
        title: 'KOBELCO',
        value: 'aj1_342',
        img: require('./images/Kobelco.png')
    },
    {
        id: 37,
        title: 'KOMATSU',
        value: 'aj1_343',
        img: require('./images/Komatsu.png')
    },
    {
        id: 38,
        title: 'KUBOTA',
        value: 'aj1_344',
        img: require('./images/Kubota1.png')
    },
    {
        id: 39,
        title: 'LANCIA',
        value: 'aj1_135',
        img: require('./images/Lancia_1.jpg')
    },
    {
        id: 40,
        title: 'LAND ROVER',
        value: 'aj1_34',
        img: require('./images/Land_Rover_1.jpg')
    },
    {
        id: 41,
        title: 'MASERATI',
        value: 'aj1_137',
        img: require('./images/Maserati_1.jpg')
    },
    {
        id: 42,
        title: 'MAYBACH',
        value: 'aj1_255',
        img: require('./images/Maybach_1.jpg')
    },
    {
        id: 43,
        title: 'MERCEDES BENZ',
        value: 'aj1_24',
        img: require('./images/Mercedes_1.jpg')
    },
    {
        id: 44,
        title: 'MINI',
        value: 'aj1_139',
        img: require('./images/Mini_1.jpg')
    },
    {
        id: 45,
        title: 'OPEL',
        value: 'aj1_25',
        img: require('./images/Opel_1.jpg')
    },
    {
        id: 46,
        title: 'PEUGEOT',
        value: 'aj1_26',
        img: require('./images/Peugeot_1.jpg')
    },
    {
        id: 47,
        title: 'PORSCHE',
        value: 'aj1_148',
        img: require('./images/Porsche_1.jpg')
    },
    {
        id: 48,
        title: 'RENAULT',
        value: 'aj1_27',
        img: require('./images/Renault_1.jpg')
    },
    {
        id: 49,
        title: 'ROLLS ROYCE',
        value: 'aj1_149',
        img: require('./images/RolsRoyce_1.jpg')
    },
    {
        id: 50,
        title: 'ROVER',
        value: 'aj1_28',
        img: require('./images/Rover1.png')
    },
    {
        id: 51,
        title: 'SAAB',
        value: 'aj1_150',
        img: require('./images/Saab_1.jpg')
    },
    {
        id: 52,
        title: 'SMART',
        value: 'aj1_291',
        img: require('./images/Smart_1.jpg')
    },
    {
        id: 53,
        title: 'SUMITOMO',
        value: 'aj1_345',
        img: require('./images/Sumitomo.png')
    },
    {
        id: 54,
        title: 'TADANO',
        value: 'aj1_346',
        img: require('./images/Tadano.png')
    },
    {
        id: 55,
        title: 'TCM',
        value: 'aj1_30',
        img: require('./images/TCM1.png')
    },
    {
        id: 56,
        title: 'VOLKSWAGEN',
        value: 'aj1_31',
        img: require('./images/Volkswagen_1.jpg')
    },
    {
        id: 57,
        title: 'VOLVO',
        value: 'aj1_32',
        img: require('./images/Volvo_Logos_.jpg')
    },
    {
        id: 58,
        title: 'YAMAHA',
        value: 'aj1_326',
        img: require('./images/Yamaha_1.jpg')
    },
    {
        id: 59,
        title: 'YANMAR',
        value: 'aj1_347',
        img: require('./images/Yanmar.png')
    },
    {
        id: 60,
        title: 'OTHERS',
        value: 'aj1_98',
        img: require('./images/Lucra_1.jpg')
    },
    {
        id: 61,
        title: 'ACURA',
        value: 'aj1_11',
        img: require('./images/Acura_1.jpg')
    },
    {
        id: 62,
        title: 'DAIMLER',
        value: 'aj1_17',
        img: require('./images/Daimler.png')
    },
    {
        id: 63,
        title: 'HYUNDAI',
        value: 'aj1_130',
        img: require('./images/Hyunday_1.jpg')
    },
    {
        id: 64,
        title: 'INFINITI',
        value: 'aj1_229',
        img: require('./images/Infiniti_1.jpg')
    },
    {
        id: 65,
        title: 'LAMBORGHINI',
        value: 'aj1_134',
        img: require('./images/Lamborghini_.jpg')
    },
    {
        id: 66,
        title: 'LINCOLN',
        value: 'aj1_35',
        img: require('./images/Linkoln_1.jpg')
    },
    {
        id: 67,
        title: 'LOTUS',
        value: 'aj1_136',
        img: require('./images/Lotus_1.jpg')
    },
]

export default carBrand