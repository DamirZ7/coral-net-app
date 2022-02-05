const carBrand = [
    {
        id: 1,
        title: 'TOYOTA',
        value: '010',
        img: require('./images/Toyota_1.jpg')
    },
    {
        id: 2,
        title: 'NISSAN',
        value: '011',
        img: require('./images/Nissan_1.jpg')
    },
    {
        id: 3,
        title: 'MITSUBISHI',
        value: '012',
        img: require('./images/MMC_logo41.png')
    },
    {
        id: 4,
        title: 'MAZDA',
        value: '013',
        img: require('./images/Mazda_1.jpg')
    },
    {
        id: 5,
        title: 'ISUZU',
        value: '014',
        img: require('./images/Isuzu_1.jpg')
    },
    {
        id: 6,
        title: 'HONDA',
        value: '015',
        img: require('./images/Honda_1.jpg')
    },
    {
        id: 7,
        title: 'DAIHATSU',
        value: '016',
        img: require('./images/Daihatsu_1.jpg')
    },
    {
        id: 8,
        title: 'SUBARU',
        value: '017',
        img: require('./images/V_C_300dpi.png')
    },
    {
        id: 9,
        title: 'SUZUKI',
        value: '018',
        img: require('./images/Suzuki_1.jpg')
    },
    {
        id: 10,
        title: 'MITSUOKA',
        value: '019',
        img: require('./images/mitsuoka.png')
    },
    {
        id: 11,
        title: 'LEXUS',
        value: '020',
        img: require('./images/Lexus_1.jpg')
    },
    {
        id: 12,
        title: 'HINO',
        value: '021',
        img: require('./images/Hino_1.jpg')
    },
    {
        id: 13,
        title: 'NISSAN DIESEL',
        value: '022',
        img: require('./images/Nissan_1.jpg')
    },
    {
        id: 14,
        title: 'MITSUBISHI FUSO',
        value: '023',
        img: require('./images/MMC_logo41.png')
    },
    {
        id: 15,
        title: 'AMG',
        value: '051',
        img: require('./images/amg1.jpg')
    },
    {
        id: 16,
        title: 'BMW',
        value: '052',
        img: require('./images/BMW_1.jpg')
    },
    {
        id: 17,
        title: 'BMW ALPINA',
        value: '053',
        img: require('./images/Alpina_1.jpg')
    },
    {
        id: 18,
        title: 'AUDI',
        value: '054',
        img: require('./images/Audi_1.jpg')
    },
    {
        id: 19,
        title: 'YES!',
        value: '055',
        img: require('./images/Yes-Logo.jpeg')
    },
    {
        id: 20,
        title: 'OPEL',
        value: '056',
        img: require('./images/Opel_1.jpg')
    },
    {
        id: 21,
        title: 'SMART',
        value: '057',
        img: require('./images/Smart_1.jpg')
    },
    {
        id: 22,
        title: 'VOLKSWAGEN',
        value: '058',
        img: require('./images/Volkswagen_1.jpg')
    },
    {
        id: 23,
        title: 'BRABUS',
        value: '059',
        img: require('./images/Brabus.jpeg')
    },
    {
        id: 24,
        title: 'MERCEDES BENZ',
        value: '060',
        img: require('./images/Mercedes_1.jpg')
    },
    {
        id: 25,
        title: 'PORSHE',
        value: '061',
        img: require('./images/Porsche_1.jpg')
    },
    {
        id: 26,
        title: 'MAYBACH',
        value: '062',
        img: require('./images/Maybach_1.jpg')
    },
    {
        id: 27,
        title: 'RUF',
        value: '063',
        img: require('./images/ruf.jpg')
    },
    {
        id: 28,
        title: 'MINI',
        value: '064',
        img: require('./images/Mini_1.jpg')
    },
    {
        id: 29,
        title: 'SAAB',
        value: '071',
        img: require('./images/Saab_1.jpg')
    },
    {
        id: 30,
        title: 'VOLVO',
        value: '072',
        img: require('./images/Volvo_Logos_.jpg')
    },
    {
        id: 31,
        title: 'CITROEN',
        value: '081',
        img: require('./images/Citroen_logo.jpg')
    },
    {
        id: 32,
        title: 'PEUGEOT',
        value: '82',
        img: require('./images/Peugeot_1.jpg')
    },
    {
        id: 33,
        title: 'RENAULT',
        value: '083',
        img: require('./images/Renault_1.jpg')
    },
    {
        id: 34,
        title: 'AMC',
        value: '091',
        img: require('./images/amc.jpg')
    },
    {
        id: 35,
        title: 'GMC',
        value: '092',
        img: require('./images/GMC_1.jpg')
    },
    {
        id: 36,
        title: 'WINNEBAGO',
        value: '093',
        img: require('./images/winnebago-1-logo.png')
    },
    {
        id: 37,
        title: 'OLDSMOBILE',
        value: '094',
        img: require('./images/Oldsmobile_logo.jpg')
    },
    {
        id: 38,
        title: 'CADILLAC',
        value: '095',
        img: require('./images/Cadillac_log.jpg')
    },
    {
        id: 39,
        title: 'CHRYSLER',
        value: '096',
        img: require('./images/Chrysler_11.jpg')
    },
    {
        id: 40,
        title: 'SATURN',
        value: '097',
        img: require('./images/saturn.jpg')
    },
    {
        id: 41,
        title: 'SALEEN',
        value: '098',
        img: require('./images/saleen-logo.png')
    },
    {
        id: 42,
        title: 'CHEVROLET',
        value: '099',
        img: require('./images/Chevrolet_1.jpg')
    },
    {
        id: 43,
        title: 'DODGE',
        value: '100',
        img: require('./images/Dodge_1.jpg')
    },
    {
        id: 44,
        title: 'HUMMER',
        value: '101',
        img: require('./images/Hummer_1.jpg')
    },
    {
        id: 45,
        title: 'BUICK',
        value: '102',
        img: require('./images/buick-logo.png')
    },
    {
        id: 46,
        title: 'FORD',
        value: '103',
        img: require('./images/Ford_1.jpg')
    },
    {
        id: 47,
        title: 'PLYMOUTH',
        value: '104',
        img: require('./images/plymouth-logo.png')
    },
    {
        id: 48,
        title: 'PONTIAC',
        value: '105',
        img: require('./images/Pontiac-Logo.png')
    },
    {
        id: 49,
        title: 'MERCURY',
        value: '106',
        img: require('./images/mercury.jpg')
    },
    {
        id: 50,
        title: 'LINCOLN',
        value: '107',
        img: require('./images/Linkoln_1.jpg')
    },
    {
        id: 51,
        title: 'JEEP',
        value: '108',
        img: require('./images/Jeep_1.jpg')
    },
    {
        id: 52,
        title: 'BL',
        value: '111',
        img: require('./images/bl.png')
    },
    {
        id: 53,
        title: 'MG',
        value: '112',
        img: require('./images/mg.png')
    },
    {
        id: 54,
        title: 'TVR',
        value: '113',
        img: require('./images/tvr.png')
    },
    {
        id: 55,
        title: 'ASTONMARTIN',
        value: '114',
        img: require('./images/Aston_Martin1.jpg')
    },
    {
        id: 56,
        title: 'WOLSELEY',
        value: '115',
        img: require('./images/wolseley.png')
    },
    {
        id: 57,
        title: 'WESTFIELD',
        value: '116',
        img: require('./images/westfield.jpg')
    },
    {
        id: 58,
        title: 'AUSTIN',
        value: '117',
        img: require('./images/austin.png')
    },
    {
        id: 59,
        title: 'CATERHAM',
        value: '118',
        img: require('./images/caterham.png')
    },
    {
        id: 60,
        title: 'JAGUAR',
        value: '119',
        img: require('./images/Jaguar_1.jpg')
    },
    {
        id: 61,
        title: 'DAIMLER',
        value: '120',
        img: require('./images/Daimler.png')
    },
    {
        id: 62,
        title: 'TRIUMPH',
        value: '121',
        img: require('./images/triumph.png')
    },
    {
        id: 63,
        title: 'VANDEN PLAS',
        value: '122',
        img: require('./images/vp.png')
    },
    {
        id: 64,
        title: 'PANTHER',
        value: '123',
        img: require('./images/panter.png')
    },
    {
        id: 65,
        title: 'HEALEY',
        value: '124',
        img: require('./images/Austin_Healey_Logo.jpg')
    },
    {
        id: 66,
        title: 'BENTLEY',
        value: '125',
        img: require('./images/Bentley_1.jpg')
    },
    {
        id: 67,
        title: 'MARCOS',
        value: '126',
        img: require('./images/marcos.jpeg')
    },
    {
        id: 68,
        title: 'MORGAN',
        value: '127',
        img: require('./images/morgan.jpg')
    },
    {
        id: 69,
        title: 'MORRIS',
        value: '128',
        img: require('./images/morris.png')
    },
    {
        id: 70,
        title: 'RILEY',
        value: '129',
        img: require('./images/riley.png')
    },
    {
        id: 71,
        title: 'LAND ROVER',
        value: '130',
        img: require('./images/Land_Rover_1.jpg')
    },
    {
        id: 72,
        title: 'LOTUS',
        value: '131',
        img: require('./images/Lotus_1.jpg')
    },
    {
        id: 73,
        title: 'ROVER',
        value: '132',
        img: require('./images/Rover1.png')
    },
    {
        id: 74,
        title: 'ROLLS ROYCE',
        value: '133',
        img: require('./images/RolsRoyce_1.jpg')
    },
    {
        id: 75,
        title: 'BIRKIN',
        value: '141',
        img: require('./images/birkin.jpeg')
    },
    {
        id: 76,
        title: 'AUTOBIANCHI',
        value: '151',
        img: require('./images/autobianchi.jpg')
    },
    {
        id: 77,
        title: 'ALFA ROMEO',
        value: '152',
        img: require('./images/Alfa_Romeo_1.jpg')
    },
    {
        id: 78,
        title: 'INNOCENTI',
        value: '153',
        img: require('./images/innocenti.png')
    },
    {
        id: 79,
        title: 'DETOMASO',
        value: '154',
        img: require('./images/detomasso.jpg')
    },
    {
        id: 80,
        title: 'FIAT',
        value: '155',
        img: require('./images/Fiat_11.jpg')
    },
    {
        id: 81,
        title: 'FERRARI',
        value: '156',
        img: require('./images/Ferrari_1.jpg')
    },
    {
        id: 82,
        title: 'BUGATTI',
        value: '157',
        img: require('./images/bugatti.png')
    },
    {
        id: 83,
        title: 'MASERATI',
        value: '158',
        img: require('./images/Maserati_1.jpg')
    },
    {
        id: 84,
        title: 'LANCIA',
        value: '159',
        img: require('./images/Lancia_1.jpg')
    },
    {
        id: 85,
        title: 'LAMBORGHINI',
        value: '160',
        img: require('./images/Lamborghini_.jpg')
    },
    {
        id: 86,
        title: 'DONKERVOORT',
        value: '171',
        img: require('./images/donkervoort.png')
    },
    {
        id: 87,
        title: 'GM DEW',
        value: '181',
        img: require('./images/Gm_logo21.png')
    },
    {
        id: 88,
        title: 'GM MATIZ',
        value: '182',
        img: require('./images/Gm_logo21.png')
    },
    {
        id: 89,
        title: 'KIA',
        value: '183',
        img: require('./images/kia.jpg')
    },
    {
        id: 90,
        title: 'SSANG YONG',
        value: '184',
        img: require('./images/ssangyong-logo.png')
    },
    {
        id: 91,
        title: 'HYUNDAI',
        value: '185',
        img: require('./images/hyundai.jpg')
    },
    {
        id: 92,
        title: 'LADA',
        value: '191',
        img: require('./images/lada-logo.png')
    },
    {
        id: 93,
        title: 'TD',
        value: '201',
        img: require('./images/td.jpeg')
    },
    {
        id: 94,
        title: 'REVERSE IMPORT',
        value: '901',
        img: require('./images/Lucra_1.jpg')
    },
    {
        id: 95,
        title: 'OTHERS',
        value: '999',
        img: require('./images/Lucra_1.jpg')
    },
]

export default carBrand