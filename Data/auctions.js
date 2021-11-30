const auctions = [
    {
        id: 1,
        title: 'AUCNET',
    },
    {
        id: 2,
        title: 'Honda Hokkaido',
    },
    {
        id: 3,
        title: 'Honda Kansai',
    },
    {
        id: 4,
        title: 'Honda Kyushu',
    },
    {
        id: 5,
        title: 'Honda Nagoya',
    },
    {
        id: 6,
        title: 'Honda Sendai',
    },
    {
        id: 7,
        title: 'JU Tokyo',
    },
    {
        id: 8,
        title: 'NISSAN Osaka',
    },
    {
        id: 9,
        title: 'AEP Nyusatsu',
    },
    {
        id: 10,
        title: 'ARAI Kenki',
    },
    {
        id: 11,
        title: 'ARAI Sendai',
    },
    {
        id: 12,
        title: 'CAA Gifu',
    },
    {
        id: 13,
        title: 'CAA Tohoku',
    },
    {
        id: 14,
        title: 'CAA Tokyo',
    },
    {
        id: 15,
        title: 'JU Aomori',
    },
    {
        id: 16,
        title: 'JU Fukui',
    },
    {
        id: 17,
        title: 'JU Mie',
    },
    {
        id: 18,
        title: 'JU Nagano',
    },
    {
        id: 19,
        title: 'JU Saitama',
    },
    {
        id: 20,
        title: 'JU Shizuoka',
    },
    {
        id: 21,
        title: 'JU Yamaguchi',
    },
    {
        id: 22,
        title: 'LUM Fukuoka Nyusatsu',
    },
    {
        id: 23,
        title: 'LUM Nagoya Nyusatsu',
    },
    {
        id: 24,
        title: 'NAA Fukuoka',
    },
    {
        id: 25,
        title: 'NPS Fukuoka Nyusatsu',
    },
    {
        id: 26,
        title: 'NPS Gifu Nyusatsu',
    },
    {
        id: 27,
        title: 'NPS Osaka Nyusatsu',
    },
    {
        id: 28,
        title: 'NPS Oyama',
    },
    {
        id: 29,
        title: 'NPS Sendai Nyusatsu',
    },
    {
        id: 30,
        title: 'NPS Tochigi Nyusatsu',
    },
    {
        id: 31,
        title: 'NPS Tokyo Nyusatsu',
    },
    {
        id: 32,
        title: 'NPS Tomakomai Nyusatsu',
    },
    {
        id: 33,
        title: 'ORIX Fukuoka Nyusatsu',
    },
    {
        id: 34,
        title: 'ORIX Kobe Nyusatsu',
    },
    {
        id: 35,
        title: 'ORIX Sendai Nyusatsu',
    },
    {
        id: 36,
        title: 'SAA Sapporo',
    },
    {
        id: 37,
        title: 'TAA Hiroshima',
    },
    {
        id: 38,
        title: 'TAA Kinki',
    },
    {
        id: 39,
        title: 'TAA Kyushu',
    },
    {
        id: 40,
        title: 'TAA Minami Kyushu',
    },
    {
        id: 41,
        title: 'TAA Shikoku',
    },
    {
        id: 42,
        title: 'USS R-Nagoya',
    },
    {
        id: 43,
        title: 'USS Yokohama',
    },
    {
        id: 44,
        title: 'BAYAUC',
    },
    {
        id: 45,
        title: 'CAA Chubu',
    },
    {
        id: 46,
        title: 'HERO',
    },
    {
        id: 47,
        title: 'IAA Osaka',
    },
    {
        id: 48,
        title: 'Isuzu Tokyo',
    },
    {
        id: 49,
        title: 'JU Akita',
    },
    {
        id: 50,
        title: 'JU Ibaraki',
    },
    {
        id: 51,
        title: 'JU Ishikawa',
    },
    {
        id: 52,
        title: 'JU Kumamoto',
    },
    {
        id: 53,
        title: 'JU Oita',
    },
    {
        id: 54,
        title: 'KCAA Kyoto',
    },
    {
        id: 55,
        title: 'KCAA Minami Kyushu',
    },
    {
        id: 56,
        title: 'LAA Shikoku',
    },
    {
        id: 57,
        title: 'LUM Hokkaido Nyusatsu',
    },
    {
        id: 58,
        title: 'LUM Kobe Nyusatsu',
    },
    {
        id: 59,
        title: 'LUM Tokyo Nyusatsu',
    },
    {
        id: 60,
        title: 'MIRIVE Saitama',
    },
    {
        id: 61,
        title: 'ORIX Atsugi Nyusatsu',
    },
    {
        id: 62,
        title: 'USS Fukuoka',
    },
    {
        id: 63,
        title: 'USS JAA',
    },
    {
        id: 64,
        title: 'USS Kobe',
    },
    {
        id: 65,
        title: 'USS Niigata',
    },
    {
        id: 66,
        title: 'USS Sapporo',
    },
    {
        id: 67,
        title: 'USS Tohoku',
    },
    {
        id: 68,
        title: 'ARAI Oyama',
    },
    {
        id: 69,
        title: 'Isuzu Kyushu',
    },
    {
        id: 70,
        title: 'JU Aichi',
    },
    {
        id: 71,
        title: 'JU Fukushima',
    },
    {
        id: 72,
        title: 'JU Gunma',
    },
    {
        id: 73,
        title: 'JU Hiroshima',
    },
    {
        id: 74,
        title: 'JU Kanagawa',
    },
    {
        id: 75,
        title: 'JU Miyazaki',
    },
    {
        id: 76,
        title: 'JU Toyama',
    },
    {
        id: 77,
        title: 'KCAA Fukuoka',
    },
    {
        id: 78,
        title: 'LUM Hokkaido Nyusatsu',
    },
    {
        id: 79,
        title: 'LUM Kobe Nyusatsu',
    },
    {
        id: 80,
        title: 'MIRIVE Osaka',
    },
    {
        id: 81,
        title: 'NAA Nagoya',
    },
    {
        id: 82,
        title: 'NAA Osaka',
    },
    {
        id: 83,
        title: 'SAA Hamamatsu',
    },
    {
        id: 84,
        title: 'TAA Chubu',
    },
    {
        id: 85,
        title: 'TAA Hokkaido',
    },
    {
        id: 86,
        title: 'TAA Kantou',
    },
    {
        id: 87,
        title: 'TAA Tohoku',
    },
    {
        id: 88,
        title: 'USS Tokyo',
    },
    {
        id: 89,
        title: 'ZERO Chubu',
    },
    {
        id: 90,
        title: 'ZERO Osaka',
    },
    {
        id: 91,
        title: 'ZERO Shonan',
    },
    {
        id: 92,
        title: 'ZIP Osaka',
    },
    {
        id: 93,
        title: 'ARAI Bayside',
    },
    {
        id: 94,
        title: 'Isuzu Kobe',
    },
    {
        id: 95,
        title: 'JU Chiba',
    },
    {
        id: 96,
        title: 'JU Fukuoka',
    },
    {
        id: 97,
        title: 'JU Hokkaido',
    },
    {
        id: 98,
        title: 'JU Miyagi',
    },
    {
        id: 99,
        title: 'JU Niigata',
    },
    {
        id: 100,
        title: 'JU Okinawa',
    },
    {
        id: 101,
        title: 'JU Shimane',
    },
    {
        id: 102,
        title: 'JU Tochigi',
    },
    {
        id: 103,
        title: 'KCAA Yamaguchi',
    },
    {
        id: 104,
        title: 'LAA Okayama',
    },
    {
        id: 105,
        title: 'MIRIVE Aichi',
    },
    {
        id: 106,
        title: 'NAA Tokyo',
    },
    {
        id: 107,
        title: 'USS Nagoya',
    },
    {
        id: 108,
        title: 'USS Osaka',
    },
    {
        id: 109,
        title: 'USS Saitama',
    },
    {
        id: 110,
        title: 'ZERO Chiba',
    },
    {
        id: 111,
        title: 'ZERO Hakata',
    },
    {
        id: 112,
        title: 'ZERO Hokkaido',
    },
    {
        id: 113,
        title: 'ZERO Sendai',
    },
    {
        id: 114,
        title: 'ARAI Oyama VT',
    },
    {
        id: 115,
        title: 'JU Gifu',
    },
    {
        id: 116,
        title: 'JU Nara',
    },
    {
        id: 117,
        title: 'JU Yamagata',
    },
    {
        id: 118,
        title: 'JU Yamanashi',
    },
    {
        id: 119,
        title: 'NAA Nagoya Nyusatsu',
    },
    {
        id: 120,
        title: 'TAA Hyogo',
    },
    {
        id: 121,
        title: 'TAA Yokohama',
    },
    {
        id: 122,
        title: 'USS Gunma',
    },
    {
        id: 123,
        title: 'USS HAA Kobe',
    },
    {
        id: 124,
        title: 'USS Hokuriku',
    },
    {
        id: 125,
        title: 'USS Kyushu',
    },
    {
        id: 126,
        title: 'USS Okayama',
    },
    {
        id: 127,
        title: 'USS Shizuoka',
    },
    {
        id: 128,
        title: 'YANASE and AUCNET',
    },
    {
        id: 129,
        title: 'ZIP Tokyo',
    },
]

export default auctions