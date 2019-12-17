let model = {
    view: {
        currentContent: "",
        mainContent: "",
        mainContentIsGrid: false,
        showTopNavigation: true,
        topNavigationActive: 0,
    },
    data: {
        username: "OleIversen",
        currentUser: 0,
        users: [
            {
                name: "OleIversen",
                rightToChange: true
            }
        ],
        currentCompanyID: 0,
        companies: [
            {
                isFavorite: true,
                name: "Halstensen Holding A/S",
                categories: [
                    "Ship Management",
                ],
                adresses: [
                    {
                        type: "visiting",
                        adress: "Haugen 2",
                        place: "Bekjarvik",
                        postal: "5398"
                    },
                    {
                        type: "postbox",
                        adress: "P.O.Box 103",
                        place: "Bekjarvik",
                        postal: "5399"
                    }
                ],
                place: "BEKKJARVIK",
                country: "NOR",
                groups: [],
                phonePrefix: "47",
                communications: [
                    {
                        type: "phone",
                        number: "55 08 40 00",
                        department: 0,
                    },
                    {
                        type: "phone",
                        number: "55 08 40 02",
                        department: 1,
                    }
                ],
                departments: [
                    "Ship Rescue",
                    "Ship renovation"
                ],
                companyNo: [
                    {
                        type: "IMO",
                        number: "00",
                    },
                    {
                        type: "Enterprise",
                        number: "0345",
                    }
                ]
            },
            {
                isFavorite: false,
                name: "Island Offshore Shipping A/S",
                categories: [
                    "Pirating",
                ],
                adresses: [
                    {
                        type: "visiting",
                        adress: "Bakkenvegen 2",
                        place: "Bekjarvik",
                        postal: "5398"
                    },
                    {
                        type: "postbox",
                        adress: "P.O.Box 370",
                        place: "Ulsteinvik",
                        postal: "5398"
                    }
                ],
                place: "ULSTEINVIK",
                country: "NOR",
                groups: [],
                communications: [
                    {
                        type: "phone",
                        number: "70 00 86 00",
                        department: 103,
                    },
                ],
                departments: [
                    "Whales R Us",
                    "Kraken Unleashed"
                ],
                companyNo: [
                    {
                        type: "IMO",
                        number: "00",
                    },
                    {
                        type: "Enterprise",
                        number: "0345",
                    }
                ]
            },

            {
                isFavorite: false,
                name: "Østensjø Rederi A/S",
                categories: [
                    "Ship Retailer",
                ],
                adresses: [
                    {
                        type: "visiting",
                        adress: "Bakkenvegen 2",
                        place: "Bekjarvik",
                        postal: "5398"
                    },
                    {
                        type: "postbox",
                        adress: "P.O.Box 394",
                        place: "Bekjarvik",
                        postal: "5398"
                    }
                ],
                place: "HAUGESUND",
                country: "NOR",
                groups: [],
                communications: [
                    {
                        type: "Email",
                        number: "post@ostensjo.no",
                        department: 483,
                    }
                ],
                departments: [
                    "fdsf",
                    "fsdfss"
                ],
                companyNo: [
                    {
                        type: "IMO",
                        number: "072984072",
                    },
                    {
                        type: "Enterprise",
                        number: "980844072",
                    }
                ]
            },
            {
                isFavorite: true,
                name: "Woller, Jan Milton",
                categories: [
                    "Ship Decorator",
                ],
                adresses: [
                    {
                        type: "visiting",
                        adress: "Skovfyrvej 4, Tornby",
                        place: "Hirtshals",
                        postal: "9850"
                    },
                    {
                        type: "postbox",
                        adress: "P.O.Box 103",
                        place: "Skovfyrvej 4, Tornby",
                        postal: "9850"
                    }
                ],
                place: "HIRTSHALS",
                country: "DNK",
                groups: [],
                communications: [
                    {
                        type: "phone",
                        number: "98 97 70 92",
                        department: 207,
                    }
                ],
                departments: [
                    "fdsf",
                    "fsdfss"
                ],
                companyNo: [
                    {
                        type: "IMO",
                        number: "00",
                    },
                    {
                        type: "Enterprise",
                        number: "0345",
                    }
                ]
            },

        ],
        contacts: [
            {
                name: "Elvis Presley",
                companys: [],
                relation: "Idol",
                email: "ElvisP@outlook.com",
                groups: "Heaven",
                stilling: "",
                department: "",
                privateAdress: "",
                number: "91140237",
                picture: "img.png",
                isFavorite: true,
            },
        ],
        fleet: [
            {
                name: "Anne Catharina",
                isFavorite: false,
                shipIMO: 'IMO 8134956',
                GT: 702,
                MDWT: '',
                built: 1985,
                callsign: "LM9999",
                fishID: "V-L205",
                flag: "NOR",
                role: "MO",
                companies: [
                    {
                        type: "",
                        companyID: 0,
                    }
                ],
                type: "fishing"
            },
            {
                name: "Embla",
                isFavorite: false,
                shipIMO: 'IMO 6437812',
                GT: 2506,
                MDWT: 3480,
                built: 2005,
                callsign: "LANT7",
                fishID: "V-555",
                flag: "NIS",
                role: "MO",
                companies: [
                    {
                        type: "",
                        companyID: 0,
                    }
                ],
                type: "typeOf"
            },
            {
                name: "Froya",
                isFavorite: true,
                shipIMO: 'IMO 2639478',
                GT: 2506,
                MDWT: 3486,
                built: 2005,
                callsign: "LANS7",
                fishID: "",
                flag: "NIS",
                role: "MO",
                companies: [
                    {
                        type: "",
                        companyID: 0,
                    }
                ],
                type: "typeOf"
            },
            {
                name: "Gerda",
                isFavorite: false,
                shipIMO: 'IMO 5267183',
                GT: 2474,
                MDWT: 3450,
                built: 2004,
                callsign: "LATH7",
                fishID: "",
                flag: "NIS",
                role: "MO",
                companies: [
                    {
                        type: "",
                        companyID: 0,
                    }
                ],
                type: "typeOf"
            },
            {
                name: "Iduna",
                isFavorite: true,
                shipIMO: 'IMO 8293561',
                GT: 2198,
                MDWT: 2645,
                built: 1975,
                callsign: "LAZB4",
                fishID: "",
                flag: "NIS",
                role: "MO",
                companies: [
                    {
                        type: "",
                        companyID: 0,
                    }
                ],
                type: "typeOf"
            }
        ]
    }
}