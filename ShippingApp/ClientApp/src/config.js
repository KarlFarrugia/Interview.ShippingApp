import Cargo4You from "./Pages/Cargo4You";

export const LANGUAGES = [
    {id: "en", name: "English"},
    {id: "mt", name: "Malti"}
];

export const COURIERS = [
    {link: "/Cargo4You", name: "Cargo4You"},
    {link: "/ShipFaster", name: "ShipFaster"},
    {link: "/MaltaShip", name: "MaltaShip"}
];

export const COURIER_CONFIGURATIONS = {
    Cargo4You: {
        Validations: {
            Weight: {
                Min: 0,
                Max: 20
            },
            Dimensions: {
                Min: 0,
                Max: 2000
            }
        },
        Price: {
            Weight: {
                Less_Than_2kg: 15,
                Between_2kg_and_15kg: 18,
                Between_15kg_and_20kg: 35
            },
            Dimensions: {
                Less_Than_1000cm3: 10,
                More_Than_1000cm3_Less_Than_2000cm3: 20
            }
        }
    },
    ShipFaster: {
        Validations: {
            Weight: {
                Min: 10,
                Max: 30
            },
            Dimensions: {
                Min: 0,
                Max: 1700
            }
        },
        Price: {
            Weight: {
                Between_10kg_and_15kg: 16.50,
                Between_15kg_and_25kg: 36.50,
                Over_25kg: 40,
                Per_kg_over_25: 0.417
            },
            Dimensions: {
                Less_Than_1000cm3: 11.99,
                More_Than_1000cm3_Less_Than_1700cm3: 21.99
            }
        }
    },
    MaltaShip: {
        Validations: {
            Weight: {
                Min: 10,
                Max: -1
            },
            Dimensions: {
                Min: 500,
                Max: -1
            }
        },
        Price: {
            Weight: {
                Between_10kg_and_20kg: 16.99,
                Between_20kg_and_30kg: 33.99,
                Over_30kg: 43.99,
                Per_kg_over_30: 0.41 //Assuming over 25kg was a typo
            },
            Dimensions: {
                Less_Than_1000cm3: 9.5,
                More_Than_1000cm3_Less_Than_2000cm3: 19.50,
                More_Than_2000cm3_Less_Than_5000cm3: 48.50,
                More_Than_5000cm3: 147.50
            }
        }
    }
};