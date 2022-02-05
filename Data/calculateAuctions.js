const calculateAuctions = [
    {
        id: 1,
        value: 0,
        title: '¥22 000'
    },
    {
        id: 2,
        value: 352,
        title: 'ARAI BAYSIDE'
    },
    {
        id: 3,
        value: 351,
        title: 'ARAI OYAMA'
    },
    {
        id: 4,
        value: 350,
        title: 'ARAI OYAMA V/T'
    },
    {
        id: 5,
        value: 349,
        title: 'ARAI SENDAI'
    },
    {
        id: 6,
        value: 348,
        title: 'BAYAUC'
    },
    {
        id: 7,
        value: 346,
        title: 'CAA CHUBU'
    },
    {
        id: 8,
        value: 345,
        title: 'CAA GIFU'
    },
    {
        id: 9,
        value: 344,
        title: 'CAA TOHOKU'
    },
    {
        id: 10,
        value: 343,
        title: 'CAA TOKYO'
    },
    {
        id: 11,
        value: 342,
        title: 'HAA KOBE'
    },
    {
        id: 12,
        value: 341,
        title: 'HANATEN OSAKA'
    },
    {
        id: 13,
        value: 340,
        title: 'HERO'
    },
    {
        id: 14,
        value: 339,
        title: 'HONDA HOKKAIDO'
    },
    {
        id: 15,
        value: 338,
        title: 'HONDA KANSAI'
    },
    {
        id: 16,
        value: 337,
        title: 'HONDA KYUSHU'
    },
    {
        id: 17,
        value: 336,
        title: 'HONDA NAGOYA'
    },
    {
        id: 18,
        value: 335,
        title: 'HONDA SENDAI'
    },
    {
        id: 19,
        value: 334,
        title: 'HONDA TOKYO'
    },
    {
        id: 20,
        value: 393,
        title: 'HONDA TOKYO GOTENBA'
    },
    {
        id: 21,
        value: 333,
        title: 'IAA OSAKA'
    },
    {
        id: 22,
        value: 384,
        title: 'IPA Fukuoka Nyusatsu'
    },
    {
        id: 23,
        value: 385,
        title: 'IPA Kobe Nyusatsu'
    },
    {
        id: 24,
        value: 353,
        title: 'IPA Tokyo Nyusatsu'
    },
    {
        id: 25,
        value: 332,
        title: 'ISUZU KOBE'
    },
    {
        id: 26,
        value: 331,
        title: 'ISUZU KYUSHU'
    },
    {
        id: 27,
        value: 330,
        title: 'ISUZU MAKUHARI'
    },
    {
        id: 28,
        value: 329,
        title: 'JAA'
    },
    {
        id: 29,
        value: 328,
        title: 'JU AICHI'
    },
    {
        id: 30,
        value: 327,
        title: 'JU AKITA'
    },
    {
        id: 31,
        value: 386,
        title: 'JU AOMORI'
    },
    {
        id: 32,
        value: 326,
        title: 'JU CHIBA'
    },
    {
        id: 33,
        value: 387,
        title: 'JU FUKUI'
    },
    {
        id: 34,
        value: 325,
        title: 'JU FUKUOKA'
    },
    {
        id: 35,
        value: 324,
        title: 'JU FUKUSHIMA'
    },
    {
        id: 36,
        value: 323,
        title: 'JU GIFU'
    },
    {
        id: 37,
        value: 322,
        title: 'JU GUNMA'
    },
    {
        id: 38,
        value: 321,
        title: 'JU HIROSHIMA'
    },
    {
        id: 39,
        value: 320,
        title: 'JU IBARAKI'
    },
    {
        id: 40,
        value: 319,
        title: 'JU ISHIKAWA'
    },
    {
        id: 41,
        value: 318,
        title: 'JU KANAGAWA'
    },
    {
        id: 42,
        value: 317,
        title: 'JU KUMAMOTO'
    },
    {
        id: 43,
        value: 316,
        title: 'JU MIE'
    },
    {
        id: 44,
        value: 315,
        title: 'JU MIYAGI'
    },
    {
        id: 45,
        value: 314,
        title: 'JU MIYAZAKI'
    },
    {
        id: 46,
        value: 313,
        title: 'JU NAGANO'
    },
    {
        id: 47,
        value: 312,
        title: 'JU NARA'
    },
    {
        id: 48,
        value: 311,
        title: 'JU NIIGATA'
    },
    {
        id: 49,
        value: 382,
        title: 'JU OITA'
    },
    {
        id: 50,
        value: 310,
        title: 'JU OKINAWA'
    },
    {
        id: 51,
        value: 309,
        title: 'JU SAITAMA'
    },
    {
        id: 52,
        value: 308,
        title: 'JU SAPPORO'
    },
    {
        id: 53,
        value: 307,
        title: 'JU SHIZUOKA'
    },
    {
        id: 54,
        value: 306,
        title: 'JU TOCHIGI'
    },
    {
        id: 55,
        value: 305,
        title: 'JU TOKYO'
    },
    {
        id: 56,
        value: 304,
        title: 'JU TOYAMA'
    },
    {
        id: 57,
        value: 303,
        title: 'JU YAMAGATA'
    },
    {
        id: 58,
        value: 302,
        title: 'JU YAMAGUCHI'
    },
    {
        id: 59,
        value: 301,
        title: 'JU YAMANASHI'
    },
    {
        id: 60,
        value: 300,
        title: 'KAA'
    },
    {
        id: 61,
        value: 388,
        title: 'KANSAI MATSUBARA AA'
    },
    {
        id: 62,
        value: 299,
        title: 'KCAA FUKUOKA'
    },
    {
        id: 63,
        value: 298,
        title: 'KCAA MINAMIKYUSHU'
    },
    {
        id: 64,
        value: 297,
        title: 'KCAA YAMAGUCHI'
    },
    {
        id: 65,
        value: 296,
        title: 'L-UP FUKUOKA'
    },
    {
        id: 66,
        value: 295,
        title: 'L-UP KOBE'
    },
    {
        id: 67,
        value: 294,
        title: 'L-UP TOKYO'
    },
    {
        id: 68,
        value: 293,
        title: 'LAA KANSAI'
    },
    {
        id: 69,
        value: 292,
        title: 'LAA OKAYAMA'
    },
    {
        id: 70,
        value: 291,
        title: 'LAA SHIKOKU'
    },
    {
        id: 71,
        value: 266,
        title: 'LUM FUKUOKA'
    },
    {
        id: 72,
        value: 265,
        title: 'JALUM KOBEA'
    },
    {
        id: 73,
        value: 264,
        title: 'LUM NAGOYA'
    },
    {
        id: 137,
        value: 263,
        title: 'LUM SAPPORO'
    },
    {
        id: 74,
        value: 262,
        title: 'LUM TOKYO'
    },
    {
        id: 75,
        value: 389,
        title: 'LUM TOKYO NASU'
    },
    {
        id: 76,
        value: 390,
        title: 'LUM TOKYO NODA'
    },
    {
        id: 77,
        value: 391,
        title: 'LUM TOKYO SAYAMA'
    },
    {
        id: 78,
        value: 347,
        title: 'MIRIVE (BCN)'
    },
    {
        id: 79,
        value: 290,
        title: 'NAA FUKUOKA'
    },
    {
        id: 80,
        value: 289,
        title: 'NAA NAGOYA'
    },
    {
        id: 81,
        value: 288,
        title: 'NAA NAGOYA Nyusatsu'
    },
    {
        id: 82,
        value: 287,
        title: 'NAA OSAKA'
    },
    {
        id: 83,
        value: 286,
        title: 'NAA OSAKA Nyusatsu'
    },
    {
        id: 84,
        value: 285,
        title: 'NAA TOKYO'
    },
    {
        id: 85,
        value: 284,
        title: 'NAA TOKYO Nyusatsu'
    },
    {
        id: 86,
        value: 383,
        title: 'NISSAN OSAKA'
    },
    {
        id: 87,
        value: 283,
        title: 'NPS FUKUOKA'
    },
    {
        id: 88,
        value: 282,
        title: 'NPS GIFU'
    },
    {
        id: 89,
        value: 281,
        title: 'NPS OSAKA'
    },
    {
        id: 90,
        value: 280,
        title: 'NPS SENDAI'
    },
    {
        id: 91,
        value: 279,
        title: 'NPS TOCHIGI'
    },
    {
        id: 92,
        value: 278,
        title: 'NPS TOKYO'
    },
    {
        id: 93,
        value: 277,
        title: 'NPS TOMAKOMAI'
    },
    {
        id: 94,
        value: 276,
        title: 'ORIX ATSUGI'
    },
    {
        id: 95,
        value: 275,
        title: 'ORIX FUKUOKA'
    },
    {
        id: 96,
        value: 274,
        title: 'ORIX KOBE'
    },
    {
        id: 97,
        value: 273,
        title: 'ORIX SENDAI'
    },
    {
        id: 98,
        value: 272,
        title: 'SAA HAMAMATSU'
    },
    {
        id: 99,
        value: 271,
        title: 'SAA SAPPORO'
    },
    {
        id: 100,
        value: 270,
        title: 'SLC KOBE'
    },
    {
        id: 101,
        value: 269,
        title: 'SLC KYUSHU'
    },
    {
        id: 102,
        value: 268,
        title: 'SLC NAGOYA'
    },
    {
        id: 103,
        value: 267,
        title: 'SLC TOKYO'
    },
    {
        id: 104,
        value: 261,
        title: 'TAA CHUBU'
    },
    {
        id: 105,
        value: 260,
        title: 'TAA HIROSHIMA'
    },
    {
        id: 106,
        value: 259,
        title: 'TAA HOKKAIDO'
    },
    {
        id: 107,
        value: 354,
        title: 'TAA KANTO'
    },
    {
        id: 108,
        value: 355,
        title: 'TAA KINKI'
    },
    {
        id: 109,
        value: 392,
        title: 'TAA KITA KANTO YARD'
    },
    {
        id: 110,
        value: 356,
        title: 'TAA KYUSHU'
    },
    {
        id: 111,
        value: 357,
        title: 'TAA MINAMIKYUSHU'
    },
    {
        id: 112,
        value: 358,
        title: 'TAA SHIKOKU'
    },
    {
        id: 113,
        value: 359,
        title: 'TAA TOHOKU'
    },
    {
        id: 114,
        value: 360,
        title: 'TAA YOKOHAMA'
    },
    {
        id: 115,
        value: 361,
        title: 'USS FUKUOKA'
    },
    {
        id: 116,
        value: 362,
        title: 'USS GUNMA'
    },
    {
        id: 117,
        value: 363,
        title: 'USS HOKURIKU'
    },
    {
        id: 118,
        value: 364,
        title: 'USS KOBE'
    },
    {
        id: 119,
        value: 365,
        title: 'USS KYUSHU'
    },
    {
        id: 120,
        value: 366,
        title: 'USS NAGOYA'
    },
    {
        id: 121,
        value: 367,
        title: 'USS NIIGATA'
    },
    {
        id: 122,
        value: 368,
        title: 'USS OKAYAMA'
    },
    {
        id: 123,
        value: 369,
        title: 'USS OSAKA'
    },
    {
        id: 124,
        value: 370,
        title: 'USS R NAGOYA'
    },{
        id: 125,
        value: 371,
        title: 'USS SAITAMA'
    },
    {
        id: 126,
        value: 372,
        title: 'USS SAPPORO'
    },
    {
        id: 127,
        value: 373,
        title: 'USS SHIZUOKA'
    },
    {
        id: 128,
        value: 374,
        title: 'USS TOHOKU'
    },
    {
        id: 129,
        value: 375,
        title: 'USS TOKYO'
    },
    {
        id: 130,
        value: 376,
        title: 'USS YOKOHAMA'
    },
    {
        id: 131,
        value: 377,
        title: 'ZERO CHIBA'
    },
    {
        id: 132,
        value: 378,
        title: 'ZERO CHUBU'
    },
    {
        id: 133,
        value: 379,
        title: 'ZERO SENDAI'
    },
    {
        id: 134,
        value: 380,
        title: 'ZERO SHONAN'
    },
    {
        id: 135,
        value: 381,
        title: 'ZIP OSAKA'
    }, 
    {
        id: 136,
        value: 381,
        title: 'ZIP OSAKA'
    }, 
]

export default calculateAuctions