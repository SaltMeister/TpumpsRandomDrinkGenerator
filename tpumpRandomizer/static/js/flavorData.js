const flavors = {
  "1": { "name": "strawberry", "extraPrice": 0, "themes": ["fruity"], "id": "1" },
  "2": { "name": "mango", "extraPrice": 0, "themes": ["fruity"], "id": "2" },
  "3": { "name": "peach", "extraPrice": 0, "themes": ["fruity"], "id": "3" },
  "4": { "name": "passion fruit", "extraPrice": 0, "themes": ["fruity"], "id": "4" },
  "5": { "name": "tangerine", "extraPrice": 0, "themes": ["fruity", "sour"], "id": "5" },
  "6": { "name": "blackberry", "extraPrice": 0, "themes": ["fruity"], "id": "6" },
  "7": { "name": "cherry", "extraPrice": 0, "themes": ["fruity"], "id": "7" },
  "8": { "name": "coffee", "extraPrice": 0, "themes": ["rich"], "id": "8" },
  "9": { "name": "lychee", "extraPrice": 0, "themes": ["fruity", "floral"], "id": "9" },
  "10": { "name": "kiwi", "extraPrice": 0, "themes": ["fruity", "sour"], "id": "10" },
  "11": { "name": "caramel", "extraPrice": 0, "themes": ["dessert", "rich"], "id": "11" },
  "12": { "name": "blueberry", "extraPrice": 0, "themes": ["fruity"], "id": "12" },
  "13": { "name": "watermelon", "extraPrice": 0, "themes": ["fruity"], "id": "13" },
  "14": { "name": "green apple", "extraPrice": 0, "themes": ["fruity", "sour"], "id": "14" },
  "15": { "name": "honey", "extraPrice": 0, "themes": ["unique", "sweet"], "id": "15" },
  "16": { "name": "coconut", "extraPrice": 0, "themes": ["unique", "tropical"], "id": "16" },
  "17": { "name": "french toast", "extraPrice": 0, "themes": ["dessert", "rich"], "id": "17" },
  "18": { "name": "lemon", "extraPrice": 0, "themes": ["fruity", "sour"], "id": "18" },
  "19": { "name": "macadamia nut", "extraPrice": 0, "themes": ["nutty"], "id": "19" },
  "20": { "name": "guava", "extraPrice": 0, "themes": ["fruity"], "id": "20" },
  "21": { "name": "banana", "extraPrice": 0, "themes": ["fruity"], "id": "21" },
  "22": { "name": "butterscotch", "extraPrice": 0, "themes": ["dessert", "sweet"], "id": "22" },
  "23": { "name": "chocolate", "extraPrice": 0, "themes": ["dessert", "rich"], "id": "23" },
  "24": { "name": "pineapple", "extraPrice": 0, "themes": ["fruity", "tropical"], "id": "24" },
  "25": { "name": "plum", "extraPrice": 0, "themes": ["fruity"], "id": "25" },
  "26": { "name": "cinnamon", "extraPrice": 0, "themes": ["spiced", "rich"], "id": "26" },
  "27": { "name": "vanilla", "extraPrice": 0, "themes": ["dessert", "rich"], "id": "27" },
  "28": { "name": "salted caramel", "extraPrice": 0, "themes": ["dessert", "rich", "sweet"], "id": "28" },
  "29": { "name": "brown sugar", "extraPrice": 0, "themes": ["dessert", "sweet"], "id": "29" },
  "30": { "name": "raspberry", "extraPrice": 0, "themes": ["fruity", "sour"], "id": "30" },
  "31": { "name": "marshmallow", "extraPrice": 0, "themes": ["dessert", "sweet"], "id": "31" },
  "32": { "name": "lavender", "extraPrice": 0, "themes": ["floral"], "id": "32" },
  "33": { "name": "almond", "extraPrice": 0, "themes": ["nutty"], "id": "33" },
  "34": { "name": "hazelnut", "extraPrice": 0, "themes": ["nutty"], "id": "34" },
  "35": { "name": "pomegranate", "extraPrice": 0, "themes": ["fruity"], "id": "35" },
  "36": { "name": "pumpkin spice", "extraPrice": 0, "themes": ["spiced", "rich"], "id": "36" },
  "37": { "name": "peppermint", "extraPrice": 0, "themes": ["spiced", "cool"], "id": "37" },
  "38": { "name": "almond roca", "extraPrice": 0, "themes": ["nutty", "sweet"], "id": "38" },
  "39": { "name": "chocolate chip cookie dough", "extraPrice": 0, "themes": ["dessert", "rich"], "id": "39" },
  "40": { "name": "taro", "extraPrice": 1, "themes": ["nutty", "sweet"], "id": "40" },
  "41": { "name": "honeydew", "extraPrice": 1, "themes": ["dessert", "rich"], "id": "41" }
}

const filterList = ["All", "Fruity", "Sweet", "Sour", "Dessert", "Nutty", "Spiced", "Rich"];


// Chat gpt gods
// given the following flavors, can you generate a JSON object that has index keys starting from 1 to the last flavor in the list.

// For each index in the list, let it hold an object that has the name of the flavor, an extraPrice value that is 0, and a set that contains the groupings for the flavors based on themes like (fruity, sour, floral). The each flavor can have multiple flavor themes associated with it.

// strawberry, mango, peach, passion fruit, tangerine, blackberry, cherry, coffee, lychee, kiwi, caramel, blueberry, watermelon, green apple, honey, coconut, 
// french toast, lemon, macadamia nut, guava, banana, butterscotch, chocolate, pineapple, plum, cinnamon, vanilla, salted caramel, brown sugar, 
//  raspberry, marshmallow, lavender, almond, hazelnut, pomegranate, pumpkin spice, peppermint, almond roca, chocolate chip cookie dough