import { Plant } from "./classes/plants";

export const sample_plants: Plant[] = [
    {
        id: 0,
        name: "Lucky bamboo",
        scientificName: "Dracaena sanderiana",
        price: 9.99,
        description: "A small, easy-to-care-for houseplant with upright stems and bright green leaves. It thrives in water or well-draining soil and prefers medium to low light. Also known as ribbon plant or friendship bamboo.",
        inStock: true,
        category: ["houseplant"],
        water: 110,
        toxicity: true,
        humidity: "High humidity",
        temperature: "20-28",
        sunlight: "Partial sun",
        toughness: "High",
        tips: ["Is known for being undemanding", "Overwatering should be avoided to prevent root rot", "Can adjust to low light conditions"],
        promotion: false,
        rating: 4.7,
        bestseller: false,
        indoor: true,
        outdoor: false,
        maintenance: "Weekly",
        expierience: "Beginner",
        space: "Medium Space (e.g. Windowsill)",
        purpose: "Decoration",
        petfriendly: false,
        allergyfriendly: true,
        imageUrl: ["/ Dracaena_sanderiana1.png", "/ Dracaena_sanderiana2.png", "/ Dracaena_sanderiana3.png"],
        nickname: "",
        size: NaN,
        age: NaN,
        pinned: false,
        timeBetweenSessions: 10080,
        waterTime: new Date(Date.now() + 60 * 1000),
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        wateramount: 0
    },
    {
        id: 1,
        name: "Weeping fig",
        scientificName: "Ficus benjamina",
        price: 11.99,
        description: "To be added",
        inStock: true,
        category: ["houseplant", "tree"],
        water: 20,
        toxicity: true,
        humidity: "High humidity",
        temperature: "20-35",
        sunlight: "Partial to full sun",
        toughness: "High",
        tips: ["People with allergies should avoid this plant", "One of the most popular houseplants"],
        promotion: false,
        rating: 4.4,
        bestseller: true,
        indoor: true,
        outdoor: false,
        maintenance: "Weekly",
        expierience: "Intermediate",
        space: "Large Space (e.g. large Room)",
        purpose: "Decoration",
        petfriendly: false,
        allergyfriendly: false,
        imageUrl: ["/Ficus_benjamina1.png", "/Ficus_benjamina1.png", "/Ficus_benjamina1.png"],
        nickname: "",
        size: 0,
        age: 0,
        pinned: true,
        timeBetweenSessions: 1440,
        waterTime: new Date(Date.now() + 60 * 1000),
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        wateramount: 0
    },
    {
        id: 2,
        name: "Sweet basil",
        scientificName: "Ocimum basilicum",
        price: 5.99,
        description: "A tender, aromatic herb native to tropical regions. It features bright green, oval-shaped leaves with a distinct, slightly peppery fragrance. Sweet basil thrives in warm temperatures, partial sun, and moist but well-draining soil. Widely used in culinary applications, fresh basil leaves add a wonderful flavor to tomato dishes, pesto, salads, and many other recipes. Beyond its culinary uses, basil is also considered easy to grow indoors, making it a popular choice for home gardeners and kitchens.",
        inStock: true,
        category: ["Herb", "houseplant"],
        water: 15,
        toxicity: false,
        humidity: "Medium humidity",
        temperature: "20-38",
        sunlight: "Partial sun",
        toughness: "Medium",
        tips: ["The leaves can be eaten (fresh or dried)", "O"],
        promotion: false,
        rating: 4.6,
        bestseller: false,
        indoor: true,
        outdoor: true,
        maintenance: "Weekly",
        expierience: "Beginner",
        space: "Medium Space (e.g. Windowsill)",
        purpose: "Food (e.g. herbs or vegetables",
        petfriendly: true,
        allergyfriendly: true,
        imageUrl: ["/Ocimum_basilicum1.png", "/Ocimum_basilicum2.png", "/Ocimum_basilicum3.png"],
        nickname: "",
        size: 0,
        age: 0,
        pinned: false,
        timeBetweenSessions: 10080,
        waterTime: new Date(Date.now() + 60 * 1000),
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        wateramount: 0
    },
    {
        id: 3,
        name: "Jade plant",
        scientificName: "Crassula ovata",
        price: 9.99,
        description: "A popular succulent plant prized for its attractive, glossy leaves and ease of care. The thick, oval-shaped leaves store water, giving the plant a plump and resilient appearance. Jade plants come in various shapes and sizes, depending on pruning and cultivation. They prefer bright, indirect sunlight and well-draining soil, making them suitable for sunny windowsills. Water them moderately, allowing the soil to dry out completely between waterings. Jade plants are generally low-maintenance and can tolerate some neglect, making them ideal for beginner plant owners. They are believed to bring good luck and fortune, contributing to their nicknames Lucky plant and Money tree.",
        inStock: true,
        category: ["succulent", "houseplant"],
        water: 50,
        toxicity: true,
        humidity: "",
        temperature: "15-25",
        sunlight: "Partial sun",
        toughness: "High",
        tips: ["Crassula ovata can purify air and absorb harmful gases."],
        promotion: false,
        rating: 4.1,
        bestseller: false,
        indoor: true,
        outdoor: false,
        maintenance: "Weekly",
        expierience: "Beginner",
        space: "Medium Space (e.g. Windowsill)",
        purpose: "Decoration",
        petfriendly: false,
        allergyfriendly: true,
        imageUrl: ["/Crassula_ovata1.png", "/Crassula_ovata2.png", "/Crassula_ovata3.png"],
        nickname: "",
        size: 0,
        age: 0,
        pinned: false,
        timeBetweenSessions: 10080,
        waterTime: new Date(Date.now() + 60 * 1000),
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        wateramount: 0
    },
    {
        id: 4,
        name: "Mexican snow ball",
        scientificName: "Echeveria elegans",
        price: 7.99,
        description: "A beautiful succulent with pale green-blue, rosette-shaped leaves. Known for its low-maintenance needs, it thrives in bright sunlight and infrequent watering.",
        inStock: true,
        category: ["succulent"],
        water: 10,
        toxicity: false,
        humidity: "low humidity",
        temperature: "20-38",
        sunlight: "Direkt Sunlight",
        toughness: "High",
        tips: ["Can survive a complete desiccation"],
        promotion: true,
        rating: 4.7,
        bestseller: false,
        indoor: true,
        outdoor: true,
        maintenance: "Minimal",
        expierience: "Beginner",
        space: "Small space (e.g. small desk)",
        purpose: "Decoration",
        petfriendly: true,
        allergyfriendly: true,
        imageUrl: ["/Echeveria_elegans1.png", "/Echeveria_elegans2.png", "/Echeveria_elegans3.png"],
        nickname: "",
        size: NaN,
        age: NaN,
        pinned: false,
        timeBetweenSessions: 1440,
        waterTime: new Date(Date.now() + 60 * 1000),
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        wateramount: 0
    },
    {
        id: 5,
        name: "green sansevieria",
        scientificName: "Sansevieria trifasciata Laurentii",
        price: 19.99,
        description: "Easy care succulent with upright sword-shaped leaves. Air purifying and tolerates low light.",
        inStock: true,
        category: ["succulent"],
        water: 20,
        toxicity: true,
        humidity: "high humidity",
        temperature: "26-35",
        sunlight: "Partial to full sun",
        toughness: "Medium",
        tips: [],
        promotion: false,
        rating: 3.9,
        bestseller: true,
        indoor: true,
        outdoor: true,
        maintenance: "Monthly",
        expierience: "Beginner",
        space: "Medium Space (e.g. Windowsill)",
        purpose: "Air purification",
        petfriendly: false,
        allergyfriendly: true,
        imageUrl: ["/Sansevieria_trifasciata_Laurentii1.png", "/Sansevieria_trifasciata_Laurentii2.png", "/Sansevieria_trifasciata_Laurentii3.png"],
        nickname: "",
        size: NaN,
        age: NaN,
        pinned: false,
        timeBetweenSessions: 43200,
        waterTime: new Date(Date.now() + 60 * 1000),
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        wateramount: 0
    },
    {
        id: 6,
        name: "English ivy",
        scientificName: "Hedera helix",
        price: 3.99,
        description: " A climbing vine with lobed, dark green leaves. It is known for its ability to grow in various conditions and its use as a ground cover or ornamental plant.",
        inStock: true,
        category: ["houseplant"],
        water: 30,
        toxicity: true,
        humidity: "High humidity",
        temperature: "25-30",
        sunlight: "Full sun",
        toughness: "Medium",
        tips: [],
        promotion: false,
        rating: 3.5,
        bestseller: false,
        indoor: true,
        outdoor: true,
        maintenance: "Monthly",
        expierience: "Beginner",
        space: "Medium Space (e.g. Windowsill)",
        purpose: "Decoration",
        petfriendly: false,
        allergyfriendly: false,
        imageUrl: ["/Hedra_helix1.png","/Hedra_helix2.png","/Hedra_helix3.png"],
        nickname: "",
        size: NaN,
        age: NaN,
        pinned: false,
        timeBetweenSessions: 43200,
        waterTime: new Date(Date.now() + 60 * 1000),
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        wateramount: 0
    },
    {
        id: 7,
        name: "Moth orchids",
        scientificName: "phalaenopsis orchid",
        price: 19.99,
        description: "Popular orchid with long-lasting, colorful blooms. Prefers bright, indirect sunlight and enjoys moderate humidity. Water when roots turn silvery-white. Easy to care for with beautiful flowers.",
        inStock: true,
        category: ["orchid", ""],
        water: 30,
        toxicity: false,
        humidity: "Medium humidity",
        temperature: "15-25",
        sunlight: "Indirect sun",
        toughness: "Medium",
        tips: ["", "O"],
        promotion: false,
        rating: 4.7,
        bestseller: false,
        indoor: true,
        outdoor: false,
        maintenance: "Weekly",
        expierience: "Beginner",
        space: "Medium Space (e.g. Windowsill)",
        purpose: "Decoration",
        petfriendly: true,
        allergyfriendly: true,
        imageUrl: ["/phalaenopsis_orchid1.png", "/phalaenopsis_orchid2.png", "/phalaenopsis_orchid3.png"],
        nickname: "",
        size: NaN,
        age: NaN,
        pinned: false,
        timeBetweenSessions: 10080,
        waterTime: new Date(Date.now() + 60 * 1000),
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        wateramount: 0
    },
    {
        id: 8,
        name: "Fiddle-leaf fig",
        scientificName: "Ficus lyrata",
        price: 7.99,
        description: "Large houseplant with big, glossy violin-shaped leaves. Needs bright, indirect sunlight and consistent watering (avoid overwatering). Known for its air-purifying properties but can be fussy and requires medium humidity.",
        inStock: true,
        category: ["Ficus", "houseplant"],
        water: 30,
        toxicity: true,
        humidity: "Medium humidity",
        temperature: "20-38",
        sunlight: "Indirect to partial sun",
        toughness: "Low",
        tips: ["Leaves are shaped like a violin", "O"],
        promotion: false,
        rating: 4.5,
        bestseller: true,
        indoor: true,
        outdoor: false,
        maintenance: "Weekly",
        expierience: "Intermediate",
        space: "Large Space (e.g. large Room)",
        purpose: "Decoration",
        petfriendly: false,
        allergyfriendly: false,
        imageUrl: ["/Ficus_lyrata1.png", "public/Ficus_lyrata2.png", "public/Ficus_lyrata3.png"],
        nickname: "",
        size: NaN,
        age: NaN,
        pinned: false,
        timeBetweenSessions: 720,
        waterTime: new Date(Date.now() + 60 * 1000),
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        wateramount: 0
    },
    {
        id: 9,
        name: "Swiss cheese plant",
        scientificName: "Monstera deliciosa",
        price: 17.99,
        description: "A climbing vine known for its large, glossy leaves with dramatic splits and holes. Enjoys bright, indirect sunlight and moderate watering (avoid soggy soil). Easy to care for with beautiful, unique foliage",
        inStock: true,
        category: ["Herb", "Vine"],
        water: 80,
        toxicity: true,
        humidity: "Medium",
        temperature: "20-41",
        sunlight: "Partial sun",
        toughness: "Medium",
        tips: ["", "O"],
        promotion: true,
        rating: 4.9,
        bestseller: true,
        indoor: true,
        outdoor: false,
        maintenance: "Weekly",
        expierience: "Beginner",
        space: "Large Space (e.g. large Room)",
        purpose: "Decoration",
        petfriendly: false,
        allergyfriendly: true,
        imageUrl: ["/Monstera_deliciosa1.png", "public/Monstera_deliciosa2.png", "public/Monstera_deliciosa3.png"],
        nickname: "",
        size: NaN,
        age: NaN,
        pinned: false,
        timeBetweenSessions: 1440,
        waterTime: new Date(Date.now() + 60 * 1000),
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        wateramount: 0
    },
    {
        id: 10,
        name: "Orchid",
        scientificName: "Orchidaceae",
        price: 18.99,
        description: "To be added",
        inStock: true,
        category: ["flower"],
        water: 30,
        toxicity: false,
        humidity: "high humidity",
        temperature: "20-30",
        sunlight: "Partial sun",
        toughness: "Medium",
        tips: [],
        promotion: false,
        rating: 4.7,
        bestseller: true,
        indoor: true,
        outdoor: true,
        maintenance: "Daily",
        expierience: "Intermediate",
        space: "Medium Space (e.g. Windowsill)",
        purpose: "Decoration",
        petfriendly: true,
        allergyfriendly: true,
        imageUrl: ["/Lavandula1.png", "/Lavandula2.png", "/Lavandula3.png"],
        nickname: "",
        size: NaN,
        age: NaN,
        pinned: false,
        timeBetweenSessions: 1440,
        waterTime: new Date(Date.now() + 60 * 1000),
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        wateramount: 0
    },
    {
        id: 11,
        name: "Spider plant",
        scientificName: "Chlorophytum comosum",
        price: 8.99,
        description: "Easy, air-purifying houseplant with long, arching leaves and baby spiderettes.",
        inStock: true,
        category: ["houseplant"],
        water: 50,
        toxicity: false,
        humidity: "Medium humidity",
        temperature: "20-38",
        sunlight: "Partial sun",
        toughness: "Medium",
        tips: ["Purifies air"],
        promotion: false,
        rating: 4.3,
        bestseller: false,
        indoor: true,
        outdoor: false,
        maintenance: "Weekly",
        expierience: "Beginner",
        space: "Medium Space (e.g. Windowsill)",
        purpose: "Air purification",
        petfriendly: true,
        allergyfriendly: true,
        imageUrl: ["/Chlorophytum_comosum1.png", "/Chlorophytum_comosum2.png", "/Chlorophytum_comosum3.png"],
        nickname: "",
        size: NaN,
        age: NaN,
        pinned: false,
        timeBetweenSessions: 720,
        waterTime: new Date(Date.now() + 60 * 1000),
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        wateramount: 0
    },
    {
        id: 12,
        name: "Bodhi Cactus",
        scientificName: "Bodhi religo",
        price: 5.99,
        description: "Fast-draining, nutrient-rich potting mix specially formulated for cacti and succulents.  Promotes healthy growth and optimal drainage.",
        inStock: true,
        category: ["cactus"],
        water: 5,
        toxicity: false,
        humidity: "Medium humidity",
        temperature: "20-45",
        sunlight: "Full sun",
        toughness: "High",
        tips: ["Use with cacti and succulents only", "Follow watering instructions based on specific plant", "May cause harm to your pets"],
        promotion: false,
        rating: 4.0,
        bestseller: false,
        indoor: true,
        outdoor: false,
        maintenance: "Minimal",
        expierience: "Beginner",
        space: "Small space (e.g. small desk)",
        purpose: "Decoration",
        petfriendly: false,
        allergyfriendly: true,
        imageUrl: ["/Bodhi_religo1.png"],

        nickname: "",
        size: NaN,
        age: NaN,
        pinned: false,
        timeBetweenSessions: 10080,
        waterTime: new Date(Date.now() + 60 * 1000),
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        wateramount: 0
    },

    {
        id: 13,
        name: "Snake plant",
        scientificName: "Sansevieria trifasciata",
        price: 6.99,
        description: "Upright, sword-like succulent with air-purifying properties. Easy to care for, tolerates low light and infrequent watering.",
        inStock: true,
        category: ["succulent", ""],
        water: 10,
        toxicity: true,
        humidity: "Low",
        temperature: "20-41",
        sunlight: "Direkt sun",
        toughness: "High",
        tips: ["", "O"],
        promotion: false,
        rating: 3.7,
        bestseller: false,
        indoor: true,
        outdoor: false,
        maintenance: "Minimal",
        expierience: "Beginner",
        space: "Medium space (e.g. windowsill)",
        purpose: "Air purification",
        petfriendly: false,
        allergyfriendly: true,
        imageUrl: ["/Sansevieria_trifasciata1.png", "/Sansevieria_trifasciata2.png", "public/Sansevieria_trifasciata3.png"],

        nickname: "",
        size: NaN,
        age: NaN,
        pinned: false,
        timeBetweenSessions: 10080,
        waterTime: new Date(Date.now() + 60 * 1000),
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        wateramount: 0
    },

    {
        id: 14,
        name: "Golden barrel cactus",
        scientificName: "Echinocactus grusonii",
        price: 10.99,
        description: "A popular houseplant due to its unique shape and ease of care. It is a slow-growing cactus that can eventually reach up to 3 feet in diameter. The cactus has a spherical body that is covered in sharp spines. The spines are arranged in spirals, giving the cactus a textured appearance. The golden barrel cactus blooms in the spring or summer, producing small yellow flowers.",
        inStock: true,
        category: ["Cactus"],
        water: 5,
        toxicity: true,
        humidity: "Low",
        temperature: "20-38",
        sunlight: "Direkt sun",
        toughness: "High",
        tips: ["Not toxic but may cause harm to your pets"],
        promotion: true,
        rating: 5.0,
        bestseller: true,
        indoor: true,
        outdoor: true,
        maintenance: "Minimal",
        expierience: "Beginner",
        space: "Small space (e.g. small desk)",
        purpose: "Decoration",
        petfriendly: false,
        allergyfriendly: true,
        imageUrl: ["/chinocactus_grusonii1.png", "/chinocactus_grusonii2.png", "/chinocactus_grusonii3.png"],

        nickname: "",
        size: NaN,
        age: NaN,
        pinned: false,
        timeBetweenSessions: 10080,
        waterTime: new Date(Date.now() + 60 * 1000),
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        wateramount: 0
    },

];