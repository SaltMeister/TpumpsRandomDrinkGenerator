const flavors = {
  "1": { "name": "strawberry", "extraPrice": 0, "themes": ["fruity"] },
  "2": { "name": "mango", "extraPrice": 0, "themes": ["fruity"] },
  "3": { "name": "peach", "extraPrice": 0, "themes": ["fruity"] },
  "4": { "name": "passion fruit", "extraPrice": 0, "themes": ["fruity"] },
  "5": { "name": "tangerine", "extraPrice": 0, "themes": ["fruity", "sour"] },
  "6": { "name": "blackberry", "extraPrice": 0, "themes": ["fruity"] },
  "7": { "name": "cherry", "extraPrice": 0, "themes": ["fruity"] },
  "8": { "name": "coffee", "extraPrice": 0, "themes": ["rich"] },
  "9": { "name": "lychee", "extraPrice": 0, "themes": ["fruity", "floral"] },
  "10": { "name": "kiwi", "extraPrice": 0, "themes": ["fruity", "sour"] },
  "11": { "name": "caramel", "extraPrice": 0, "themes": ["dessert", "rich"] },
  "12": { "name": "blueberry", "extraPrice": 0, "themes": ["fruity"] },
  "13": { "name": "watermelon", "extraPrice": 0, "themes": ["fruity"] },
  "14": { "name": "green apple", "extraPrice": 0, "themes": ["fruity", "sour"] },
  "15": { "name": "honey", "extraPrice": 0, "themes": ["unique", "sweet"] },
  "16": { "name": "coconut", "extraPrice": 0, "themes": ["unique", "tropical"] },
  "17": { "name": "french toast", "extraPrice": 0, "themes": ["dessert", "rich"] },
  "18": { "name": "lemon", "extraPrice": 0, "themes": ["fruity", "sour"] },
  "19": { "name": "macadamia nut", "extraPrice": 0, "themes": ["nutty"] },
  "20": { "name": "guava", "extraPrice": 0, "themes": ["fruity"] },
  "21": { "name": "banana", "extraPrice": 0, "themes": ["fruity"] },
  "22": { "name": "butterscotch", "extraPrice": 0, "themes": ["dessert", "sweet"] },
  "23": { "name": "chocolate", "extraPrice": 0, "themes": ["dessert", "rich"] },
  "24": { "name": "pineapple", "extraPrice": 0, "themes": ["fruity", "tropical"] },
  "25": { "name": "plum", "extraPrice": 0, "themes": ["fruity"] },
  "26": { "name": "cinnamon", "extraPrice": 0, "themes": ["spiced", "rich"] },
  "27": { "name": "vanilla", "extraPrice": 0, "themes": ["dessert", "rich"] },
  "28": { "name": "salted caramel", "extraPrice": 0, "themes": ["dessert", "rich", "sweet"] },
  "29": { "name": "brown sugar", "extraPrice": 0, "themes": ["dessert", "sweet"] },
  "30": { "name": "raspberry", "extraPrice": 0, "themes": ["fruity", "sour"] },
  "31": { "name": "marshmallow", "extraPrice": 0, "themes": ["dessert", "sweet"] },
  "32": { "name": "lavender", "extraPrice": 0, "themes": ["floral"] },
  "33": { "name": "almond", "extraPrice": 0, "themes": ["nutty"] },
  "34": { "name": "hazelnut", "extraPrice": 0, "themes": ["nutty"] },
  "35": { "name": "pomegranate", "extraPrice": 0, "themes": ["fruity"] },
  "36": { "name": "pumpkin spice", "extraPrice": 0, "themes": ["spiced", "rich"] },
  "37": { "name": "peppermint", "extraPrice": 0, "themes": ["spiced", "cool"] },
  "38": { "name": "almond roca", "extraPrice": 0, "themes": ["nutty", "sweet"] },
  "39": { "name": "chocolate chip cookie dough", "extraPrice": 0, "themes": ["dessert", "rich"] },
  "40": { "name": "taro", "extraPrice": 1, "themes": ["nutty", "sweet"] },
  "41": { "name": "honeydew", "extraPrice": 1, "themes": ["dessert", "rich"] }
}


// Chat gpt gods
// given the following flavors, can you generate a JSON object that has index keys starting from 1 to the last flavor in the list.

// For each index in the list, let it hold an object that has the name of the flavor, an extraPrice value that is 0, and a set that contains the groupings for the flavors based on themes like (fruity, sour, floral). The each flavor can have multiple flavor themes associated with it.

// strawberry, mango, peach, passion fruit, tangerine, blackberry, cherry, coffee, lychee, kiwi, caramel, blueberry, watermelon, green apple, honey, coconut, 
// french toast, lemon, macadamia nut, guava, banana, butterscotch, chocolate, pineapple, plum, cinnamon, vanilla, salted caramel, brown sugar, 
//  raspberry, marshmallow, lavender, almond, hazelnut, pomegranate, pumpkin spice, peppermint, almond roca, chocolate chip cookie dough