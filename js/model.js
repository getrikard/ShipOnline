let model = {
    view: {
        currentContent: "",
        mainContent: "",
        mainContentIsGrid: false,
        showTopNavigation: true,
        topNavigationActive: 0,
        showLeftNavigation: true,
        leftNavigationActive: 0,
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
                id: 0,
                isFavorite: true,
                name: "Halstensen Holding A/S",
                categories: [
                    "Ship Management", "Car Transporter", "Freight", "Leisure",
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
                        notes: "",
                    },
                    {
                        type: "email",
                        number: "reno@halstensen.no",
                        department: 1,
                        notes: "",
                    }
                ],
                departments: [
                    "Ship Rescue",
                    "Ship renovation"
                ],
                companyNo: [
                    {
                        type: "IMO",
                        number: "9751445",
                    },
                    {
                        type: "Enterprise",
                        number: "328259",
                    },
                    {
                        type: "Custom",
                        number: '',
                    },
                ]
            },
            {
                id: 1,
                isFavorite: false,
                name: "Island Offshore Shipping A/S",
                categories: [
                    "Pirating", "Cargo", "Cruiser",
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
                phonePrefix: "47",
                communications: [
                    {
                        type: "phone",
                        number: "70 00 86 00",
                        department: 1,
                        notes: "",
                    },
                    {
                        type: "web",
                        number: "www.ios-as.no",
                        department: 2,
                        notes: "",
                    }
                ],
                departments: [
                    "",
                    "Commerce",
                    "PR",
                    "HR",
                ],
                companyNo: [
                    {
                        type: "IMO",
                        number: "1479931",
                    },
                    {
                        type: "Enterprise",
                        number: "03451",
                    },
                    {
                        type: "Custom",
                        number: '',
                    },

                ]
            },

            {
                id: 2,
                isFavorite: false,
                name: "Østensjø Rederi A/S",
                categories: [
                    "Ship Retailer", "Ship Management", "Party Boat"
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
                phonePrefix: "47",
                communications: [
                    {
                        type: "email",
                        number: "post@ostensjo.no",
                        department: 0,
                        notes: "",
                    },
                    {
                        type: "phone",
                        number: "44 33 22 88",
                        department: 0,
                        notes: "",
                    },
                    {
                        type: "phone",
                        number: "44 33 22 75",
                        department: 2,
                        notes: "",
                    },
                    {
                        type: "fax",
                        number: "44 33 22 76",
                        department: 1,
                        notes: "",
                    },
                ],
                departments: [
                    "",
                    "Sales",
                    "Accounting"
                ],
                companyNo: [
                    {
                        type: "IMO",
                        number: "072984072",
                    },
                    {
                        type: "Enterprise",
                        number: "980844072",
                    },
                    {
                        type: "Custom",
                        number: '',
                    },
                ]
            },
            {
                id: 3,
                isFavorite: true,
                name: "Woller, Jan Milton",
                categories: [
                    "Ship Decorator", "Ship Interior Design", "Filler",
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
                phonePrefix: "47",
                communications: [
                    {
                        type: "phone",
                        number: "98 97 70 92",
                        department: 0,
                        notes: "",
                    }
                ],
                departments: [
                    ""
                ],
                companyNo: [
                    {
                        type: "IMO",
                        number: "3579772",
                    },
                    {
                        type: "Enterprise",
                        number: "030074",
                    },
                    {
                        type: "Custom",
                        number: '',
                    },
                ]
            },

        ],
        contacts: [
            {
                name: "Elvis Presley",
                companys: [
                    {
                        compID: 0,
                        stilling: "CEO",
                    },
                    {
                        compID: 2,
                        stilling: "Cook",
                    }
                ],
                relation: "Idol",
                email: "ElvisP@outlook.com",
                groups: "Heaven",
                stilling: ["CEO", "Cook"],
                department: "",
                privateAdress: "",
                number: "91140237",
                picture: "elvis.png",
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