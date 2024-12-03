const flavors = {
  "1": { "name": "strawberry", "color": "#E3170A", "extraPrice": 0, "themes": ["fruity"], "id": "1" },
  "2": { "name": "mango", "color": "#FFA500", "extraPrice": 0, "themes": ["fruity"], "id": "2" },
  "3": { "name": "peach", "color": "#FFB07C", "extraPrice": 0, "themes": ["fruity"], "id": "3" },
  "4": { "name": "passion fruit", "color": "#8B008B", "extraPrice": 0, "themes": ["fruity"], "id": "4" },
  "5": { "name": "tangerine", "color": "#FF6347", "extraPrice": 0, "themes": ["fruity", "sour"], "id": "5" },
  "6": { "name": "blackberry", "color": "#4B0082 ", "extraPrice": 0, "themes": ["fruity"], "id": "6" },
  "7": { "name": "cherry", "color": "#C41E3A ", "extraPrice": 0, "themes": ["fruity"], "id": "7" },
  "8": { "name": "coffee", "color": "#6F4E37 ", "extraPrice": 0, "themes": ["rich"], "id": "8" },
  "9": { "name": "lychee", "color": "#E96A88 ", "extraPrice": 0, "themes": ["fruity", "floral"], "id": "9" },
  "10": { "name": "kiwi", "color": "#77DD77", "extraPrice": 0, "themes": ["fruity", "sour"], "id": "10" },
  "11": { "name": "caramel", "color": "#C68E17 ", "extraPrice": 0, "themes": ["dessert", "rich"], "id": "11" },
  "12": { "name": "blueberry", "color": "#5D3FD3 ", "extraPrice": 0, "themes": ["fruity"], "id": "12" },
  "13": { "name": "watermelon", "color": "#FF4D4D ", "extraPrice": 0, "themes": ["fruity"], "id": "13" },
  "14": { "name": "green apple", "color": "#66CDAA ", "extraPrice": 0, "themes": ["fruity", "sour"], "id": "14" },
  "15": { "name": "honey", "color": "#FFCC33 ", "extraPrice": 0, "themes": ["unique", "sweet"], "id": "15" },
  "16": { "name": "coconut", "color": "#F5F5DC ", "extraPrice": 0, "themes": ["unique", "tropical"], "id": "16" },
  "17": { "name": "french toast", "color": "#C19A6B ", "extraPrice": 0, "themes": ["dessert", "rich"], "id": "17" },
  "18": { "name": "lemon", "color": "#FFD700 ", "extraPrice": 0, "themes": ["fruity", "sour"], "id": "18" },
  "19": { "name": "macadamia nut", "color": "#D2B48C ", "extraPrice": 0, "themes": ["nutty"], "id": "19" },
  "20": { "name": "guava", "color": "#FF7F50 ", "extraPrice": 0, "themes": ["fruity"], "id": "20" },
  "21": { "name": "banana", "color": "#FFE135 ", "extraPrice": 0, "themes": ["fruity"], "id": "21" },
  "22": { "name": "butterscotch", "color": "#E49B0F ", "extraPrice": 0, "themes": ["dessert", "sweet"], "id": "22" },
  "23": { "name": "chocolate", "color": "#8B4513 ", "extraPrice": 0, "themes": ["dessert", "rich"], "id": "23" },
  "24": { "name": "pineapple", "color": "#FFD700 ", "extraPrice": 0, "themes": ["fruity", "tropical"], "id": "24" },
  "25": { "name": "plum", "color": "#8E4585 ", "extraPrice": 0, "themes": ["fruity"], "id": "25" },
  "26": { "name": "cinnamon", "color": "#D2691E ", "extraPrice": 0, "themes": ["spiced", "rich"], "id": "26" },
  "27": { "name": "vanilla", "color": "#F3E5AB ", "extraPrice": 0, "themes": ["dessert", "rich"], "id": "27" },
  "28": { "name": "salted caramel", "color": "#A0522D", "extraPrice": 0, "themes": ["dessert", "rich", "sweet"], "id": "28" },
  "29": { "name": "brown sugar", "color": "#B5651D ", "extraPrice": 0, "themes": ["dessert", "sweet"], "id": "29" },
  "30": { "name": "raspberry", "color": "#E30B5D ", "extraPrice": 0, "themes": ["fruity", "sour"], "id": "30" },
  "31": { "name": "marshmallow", "color": "#FFF8DC ", "extraPrice": 0, "themes": ["dessert", "sweet"], "id": "31" },
  "32": { "name": "lavender", "color": "#E6E6FA ", "extraPrice": 0, "themes": ["floral"], "id": "32" },
  "33": { "name": "almond", "color": "#D2B48C ", "extraPrice": 0, "themes": ["nutty"], "id": "33" },
  "34": { "name": "hazelnut", "color": "#9E774C ", "extraPrice": 0, "themes": ["nutty"], "id": "34" },
  "35": { "name": "pomegranate", "color": "#DC143C ", "extraPrice": 0, "themes": ["fruity"], "id": "35" },
  "36": { "name": "pumpkin spice", "color": "#FF7518 ", "extraPrice": 0, "themes": ["spiced", "rich"], "id": "36" },
  "37": { "name": "peppermint", "color": "#3EB489 ", "extraPrice": 0, "themes": ["spiced", "cool"], "id": "37" },
  "38": { "name": "almond roca", "color": "#A77B5C", "extraPrice": 0, "themes": ["nutty", "sweet"], "id": "38" },
  "39": { "name": "chocolate chip cookie dough", "color": "#D2B48C ", "extraPrice": 0, "themes": ["dessert", "rich"], "id": "39" },
  "40": { "name": "taro", "color": "#D3C3E6 ", "extraPrice": 1, "themes": ["nutty", "sweet"], "id": "40" },
  "41": { "name": "honeydew", "color": "#F0FFF0", "extraPrice": 1, "themes": ["dessert", "rich"], "id": "41" }
}

const filterList = ["All", "Fruity", "Sweet", "Sour", "Dessert", "Nutty", "Spiced", "Rich"];


// Chat gpt gods
// given the following flavors, can you generate a JSON object that has index keys starting from 1 to the last flavor in the list.

// For each index in the list, let it hold an object that has the name of the flavor, an extraPrice value that is 0, and a set that contains the groupings for the flavors based on themes like (fruity, sour, floral). The each flavor can have multiple flavor themes associated with it.

//  strawberry, mango, peach, passion fruit, tangerine, blackberry, cherry, coffee, lychee, kiwi, caramel, blueberry, watermelon, green apple, honey, coconut, 
//  french toast, lemon, macadamia nut, guava, banana, butterscotch, chocolate, pineapple, plum, cinnamon, vanilla, salted caramel, brown sugar, 
//  raspberry, marshmallow, lavender, almond, hazelnut, pomegranate, pumpkin spice, peppermint, almond roca, chocolate chip cookie dough, taro, honeydew