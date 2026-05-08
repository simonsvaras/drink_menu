export type Badge = "novinka" | "ostra" | "velmi_ostra";
export type Subcategory = "spritz" | "classic" | "tropical" | "tocene" | "lahvove" | "bile_vino" | "cervene_vino" | "sekty" | "striky";

export type DrinkMenuItem = {
    id: number;
    name: string;
    price: number;
    price2?: number;
    description: string;
    volume?: string;
    badges?: Badge[];
    subcategory?: Subcategory;
};

export const drinkMenu: DrinkMenuItem[] = [
    {
        id: 101,
        name: "Vodka Soda Malina",
        price: 85,
        description: "Vodka, malinový sirup, soda",
        subcategory: "spritz",
    },
    {
        id: 102,
        name: "Skinny Bitch",
        price: 75,
        description: "Vodka, limetka, soda",
        subcategory: "spritz",
    },
    {
        id: 103,
        name: "Jahodové Bellini",
        price: 75,
        description: "Prosecco, jahodová, mátová a citronová šťáva, soda",
        subcategory: "spritz",
    },
    {
        id: 104,
        name: "Aperol Spritz",
        price: 115,
        description: "Aperol, prosecco, soda",
        subcategory: "spritz",
    },
    {
        id: 105,
        name: "Danger Tea",
        price: 149,
        description: "Cointreau, White rum, ledový čaj, broskvová a mango šťáva",
        subcategory: "tropical",
    },
    {
        id: 106,
        name: "Mojito",
        price: 125,
        description: "Havana rum, limetka, máta, třtinový cukr, soda",
        subcategory: "classic",
    },
    {
        id: 107,
        name: "Cuba Libre",
        price: 99,
        description: "Havana rum, coca cola, limetka",
        subcategory: "classic",
    },
    {
        id: 108,
        name: "Ach...",
        price: 99,
        description: "Cointreau, jablečná šťáva, broskvový sirup, soda",
        subcategory: "spritz",
    },
    {
        id: 109,
        name: "Cosmopolitan",
        price: 119,
        description: "Cointreau, brusinková a limet. šťáva, soda",
        subcategory: "classic",
    },
    {
        id: 110,
        name: "Jelen na pomerančích",
        price: 99,
        description: "Jagermeister, pomerančový a citronový sirup, soda",
        subcategory: "spritz",
    },
    {
        id: 111,
        name: "Pornstar Martini",
        price: 119,
        description: "vodka, vanilia, maracuja",
        subcategory: "classic",
    },
    {
        id: 112,
        name: "Jahodové Daiqiri",
        price: 109,
        description: "Havana rum, limetka, jahodový sirup",
        subcategory: "classic",
    },
    {
        id: 113,
        name: "Sex on the Beach",
        price: 99,
        description: "Vodka, pomerančová šťáva, broskvový sirup, grenadina",
        subcategory: "classic",
    },
    {
        id: 114,
        name: "Pina Colada",
        price: 109,
        description: "White rum, ananas. šťáva, kokos. sirup, smetana",
        subcategory: "tropical",
    },
    {
        id: 115,
        name: "Mai Tai",
        price: 109,
        description: "white rum, Amaretto, mandlový sirup, ananas. džus",
        subcategory: "tropical",
    },
    {
        id: 116,
        name: "Hu - Hu",
        price: 99,
        description: "white rum, Pisang Ambon, kokosový sirup, anansový džus",
        subcategory: "tropical",
    },
    {
        id: 117,
        name: "limoncello spritz",
        price: 99,
        description: "white rum, Pisang Ambon, kokosový sirup, anansový džus",
        subcategory: "spritz",
    },
];

export const nealkoDrinkMenu: DrinkMenuItem[] = [
    {
        id: 201,
        name: "Aperol Spritz",
        price: 79,
        description: "Orange spritz, tonic, soda",
    },
    {
        id: 202,
        name: "Woo Woo",
        price: 79,
        description: "brusinkový džus, tonic, soda, broskvová a pomerančová šťáva, grenadina",
    },
    {
        id: 203,
        name: "Amerikano Coctail",
        price: 89,
        description: "Bitter a Triple Sec Curacao sirup, soda, pomerančová šťáva, grenadina",
    },
    {
        id: 204,
        name: "Cramberry Cream",
        price: 89,
        description: "brusinkový a jabl. džus, limetková šťáva, kokosový sirup, zázvor, grenadina",
    },
    {
        id: 205,
        name: "Sex on the Beach",
        price: 79,
        description: "pomerančová šťáva, broskvový sirup, grenadina",
    },
    {
        id: 206,
        name: "Pina Colada",
        price: 89,
        description: "ananasová šťáva, kokos. sirup, smetana",
    },
    {
        id: 207,
        name: "Mojito",
        price: 99,
        description: "limetka, máta, třtinový cukr, soda",
    },
    {
        id: 208,
        name: "Mai-Tai",
        price: 89,
        description: "ananasová šťáva, mandlový sirup, limetka",
    },
];

export const limonadaMenu: DrinkMenuItem[] = [
    {
        id: 301,
        name: "Malinovka",
        price: 65,
        price2: 55,
        description: "",
    },
    {
        id: 302,
        name: "Malinovo - pomerančová",
        price: 65,
        price2: 55,
        description: "",
    },
    {
        id: 303,
        name: "Mátová",
        price: 60,
        price2: 50,
        description: "",
    },
    {
        id: 304,
        name: "Višňovo - mátová",
        price: 60,
        price2: 50,
        description: "",
    },
    {
        id: 305,
        name: "Ledový čaj Mango",
        price: 65,
        price2: 55,
        description: "",
    },
];

export const kavaMenu: DrinkMenuItem[] = [
    { id: 401, name: "Espresso", volume: "30 ml", price: 55, description: "" },
    { id: 402, name: "Lungo", volume: "140 ml", price: 55, description: "" },
    { id: 403, name: "Espresso Macchiato", price: 59, description: "" },
    { id: 404, name: "Cappuccino", volume: "200 ml", price: 65, description: "" },
    { id: 405, name: "Latté Macchiato", volume: "240 ml", price: 69, description: "" },
    { id: 406, name: "Ledová káva", volume: "180 ml", price: 69, description: "" },
];

export const tepleNapojeMenu: DrinkMenuItem[] = [
    { id: 501, name: "Čaj sáčkový", volume: "350 ml", price: 49, description: "ovocný, černý, zelený" },
    { id: 502, name: "Grog", volume: "250 ml", price: 69, description: "rum, griotka" },
];

export const pivoMenu: DrinkMenuItem[] = [
    { id: 601, name: "Radegast 10°", volume: "0,5 l", price: 49, description: "", subcategory: "tocene" },
    { id: 602, name: "Radegast 10°", volume: "0,3 l", price: 35, description: "", subcategory: "tocene" },
    { id: 603, name: "Radegast 12°", volume: "0,5 l", price: 59, description: "", subcategory: "tocene" },
    { id: 604, name: "Radegast 12°", volume: "0,3 l", price: 44, description: "", subcategory: "tocene" },
    { id: 605, name: "Prazdroj 12°", volume: "0,5 l", price: 59, description: "", subcategory: "lahvove" },
    { id: 606, name: "Birell nealko", volume: "0,5 l", price: 49, description: "Světlý, Pomelo Grep/Mango (plech)", subcategory: "lahvove" },
    { id: 608, name: "Frisco", volume: "0,33 l", price: 49, description: "", subcategory: "lahvove" },
];

export const vinoMenu: DrinkMenuItem[] = [
    { id: 701, name: "Sauvignon", price: 25, price2: 115, description: "suché", subcategory: "bile_vino" },
    { id: 703, name: "Rulandské šedé", price: 25, price2: 115, description: "polosladké", subcategory: "bile_vino" },
    { id: 705, name: "Pálava", price: 29, price2: 135, description: "sladké", subcategory: "bile_vino" },
    { id: 707, name: "J.P. Chenet – Merlot", price: 29, price2: 135, description: "červené, suché", subcategory: "cervene_vino" },
    { id: 711, name: "Prosecco", price: 29, price2: 135, description: "", subcategory: "bile_vino" },
    { id: 712, name: "Vinný střik", volume: "2 dl", price: 35, description: "víno, soda", subcategory: "striky" },
    { id: 713, name: "Vinný střik spritz", volume: "2 dl", price: 69, description: "víno, soda, meloun / růže", subcategory: "striky" },
    { id: 714, name: "Prosecco střik MIMOSA", volume: "2,2 dl", price: 69, description: "pomeranč", subcategory: "striky" },
    { id: 715, name: "Prosecco střik mango", volume: "2,2 dl", price: 69, description: "", subcategory: "striky" },
];

export const alkoMichaneNapojeMenu: DrinkMenuItem[] = [
    { id: 807, name: "Cointreau Spritz", price: 89, description: "Cointreau, pom. a citr. šťáva, soda" },
    { id: 801, name: "Morgan & Cola", price: 75, description: "džbánek 4× 290 Kč, kýbl 10× 700 Kč" },
    { id: 802, name: "Vodka s džusem", price: 75, description: "džbánek 4× 290 Kč, kýbl 10× 700 Kč" },
    { id: 803, name: "Gin (Pink) & Tonic", price: 75, description: "" },
    { id: 804, name: "Létající jelen", volume: "8 cl", price: 49, description: "Jagermaister & Red Bull" },
    { id: 805, name: "Cupito", volume: "4 cl", price: 49, description: "Cointreau, ovocná šťáva, třešnička" },
    { id: 806, name: "Včelka", volume: "8 cl", price: 55, description: "Metaxa honey, Red Bull tropical" },
];

export const lahvoveNapojeMenu: DrinkMenuItem[] = [
    { id: 901, name: "Coca Cola", volume: "3,3 dl", price: 49, description: "Normal, Zero" },
    { id: 902, name: "Fanta, Sprite", volume: "3,3 dl", price: 49, description: "" },
    { id: 903, name: "Tonic", volume: "2,5 dl", price: 49, description: "classic, pink, ginger" },
    { id: 904, name: "Mattoni", volume: "3 dl", price: 39, description: "Perlivá, Jemně Perlivá" },
    { id: 905, name: "Aquila neperlivá", volume: "3 dl", price: 39, description: "" },
    { id: 906, name: "Red Bull", volume: "2,5 dl", price: 59, description: "Normal, Tropical" },
];

export const rozlevaneNapojeMenu: DrinkMenuItem[] = [
    { id: 1001, name: "Džus", volume: "1 dl", price: 13, description: "Pomeranč, Jablko, Brusinka, Hruška" },
    { id: 1002, name: "Džbánek Vody", volume: "5 dl", price: 25, description: "Neperlivá, Soda" },
];

export const horkeNapojeMenu: DrinkMenuItem[] = [
    { id: 1101, name: "Horký Aperol", volume: "2,5 dl", price: 89, description: "víno, pomeranč. šťáva, Aperol" },
    { id: 1102, name: "Svařené víno červené", price: 69, description: "" },
    { id: 1103, name: "Horká hruška", volume: "2,5 dl", price: 65, description: "hrušková šťáva, skořice" },
    { id: 1104, name: "Jablko se skořicí", price: 65, description: "jablečná šťáva se skořicí" },
    { id: 1105, name: "Horký zázvor s pomerančem", price: 65, description: "zázvorová a pomerančová šťáva, zázvor, skořice, citron" },
];

export type DrinkCategoryKey = "drinky" | "nealko_drinky" | "limonady" | "kava" | "teple_napoje" | "piva" | "vina" | "alko_michane_napoje" | "lahvove_napoje" | "rozlevane_napoje" | "horke_napoje";

export const drinkCategoryLabels: Record<DrinkCategoryKey, string> = {
    drinky: "Drinky",
    nealko_drinky: "Nealko Drinky",
    limonady: "Limonády",
    kava: "Káva",
    teple_napoje: "Teplé nápoje",
    piva: "Piva",
    vina: "Vína",
    alko_michane_napoje: "Alkoholické míchané nápoje",
    lahvove_napoje: "Lahvové nápoje",
    rozlevane_napoje: "Rozlévané nápoje",
    horke_napoje: "Horké nápoje",
};

export const drinkCategoryOrder: DrinkCategoryKey[] = [
    "drinky",
    "nealko_drinky",
    "limonady",
    "kava",
    "teple_napoje",
    "piva",
    "vina",
    "alko_michane_napoje",
    "lahvove_napoje",
    "rozlevane_napoje",
    "horke_napoje",
];

export const drinkDataByCategory: Record<DrinkCategoryKey, DrinkMenuItem[]> = {
    drinky: drinkMenu,
    nealko_drinky: nealkoDrinkMenu,
    limonady: limonadaMenu,
    kava: kavaMenu,
    teple_napoje: tepleNapojeMenu,
    piva: pivoMenu,
    vina: vinoMenu,
    alko_michane_napoje: alkoMichaneNapojeMenu,
    lahvove_napoje: lahvoveNapojeMenu,
    rozlevane_napoje: rozlevaneNapojeMenu,
    horke_napoje: horkeNapojeMenu,
};
