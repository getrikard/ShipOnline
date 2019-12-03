let model = {
    view: {
        currentContent: ""
    },
    data: {
        username: "OleIversen",
        currentCompanyID: 0,
        companies: [
            {
                isFavorite: true,
                name: "Ågrimsen Holding A/S",
                categories: [
                    "Shipmanagement"
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
                        adress: "P.O.Box 103",
                        place: "Bekjarvik",
                        postal: "5398"
                    }
                ],
                place: "BEKKJARVIK",
                country: "NOR",
                groups: [],
                communications: [
                    {
                        type: "phone",
                        number: "000",
                        department: "fmsdfs"
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
            }
        ],
        contacts: [
            {
                name: "",
                company: "",
                stilling: "",
                department: "",
                privateAdress: "",
                tlf: "0",
                picture: "img.png"
            }
        ],
        fleet: [
            {
                isFavorite: true,
                name: "fsd",
                GT: 123,
                MDWT: 11,
                built: 1999,
                callsign: "SKO",
                fishID: "V-555",
                flag: "NOR",
                role: "MO",
                companyID: 0,
                type: "fishing"
            }
        ]
    }
}