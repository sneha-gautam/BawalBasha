# Bawal Basha - Campus Slang Dictionary
# Run this file and use the menu. Everything is saved in slang.json

import json

FILENAME = "slang.json"

CATEGORIES = [
    "People & Personality",
    "Bakchodi & Chaos",
    "Student Life & Survival",
    "Gossip & Drama",
    "Flirting & Relationships",
]

INTENSITY = {1: "Mild", 2: "Savage", 3: "Unhinged"}

# each word: (term, emoji, meaning, example, category number, intensity)
STARTER = [
    # People & Personality
    ("lafangaa", "🛋️", "Someone who loafs around all day with no work or plan.",
     "Bhai ne 4 saal mein sirf canteen ka samosa aur CR ki biwi ke status dekhe, lafangaa legend 🛋️🫡", 1, 1),
    ("nalla pro max", "📱", "A totally jobless person, upgraded to the max version.",
     "Placement season mein sabki offer aayi, nalla pro max ki sirf Instagram notification aayi 📱💀", 1, 1),
    ("aalsi aatma", "😴", "A super lazy soul who won't leave the bed for anything.",
     "Aalsi aatma 9 baje ka exam 8:55 pe uthi, pajama mein pahunchi aur topper nikli 😴🏆", 1, 1),
    ("kaleshi creature", "🦖", "Someone who starts a fight over the smallest thing.",
     "Kaleshi creature ne bench pe 2 inch jagah ke liye poori class ka civil war shuru kar diya 🦖⚔️", 1, 2),
    ("fuddu fellow", "🤪", "A clueless, easily fooled guy.",
     "Fuddu fellow ne 'free iPhone' wale link pe apna Aadhaar, PAN aur nani ka naam daal diya 🤪📲", 1, 1),
    ("baklol baaz", "🗣️", "Someone who talks nonsense non-stop.",
     "Baklol baaz ne viva mein 40 min bola, examiner ne bola 'beta ab chai pee lo' 🗣️☕", 1, 2),
    ("gandu generation", "🤦", "A whole batch full of useless, annoying people.",
     "Gandu generation ke group project mein PPT ka title slide bana, baaki sab 'will do tonight' 🤦💀", 1, 3),
    ("ullu ka pattha", "🦉", "A fool. Literally 'the owl's child'.",
     "Ullu ka pattha ne exam hall mein calculator ki jagah TV ka remote nikaal liya 🦉📺", 1, 1),
    ("chomu champion", "🏆", "The one who wins gold medals in silly mistakes.",
     "Chomu champion ne 'Submit' ki jagah 'Delete account' daba diya, portal ne bhi taali bajayi 🏆👏", 1, 2),
    ("fattu fakir", "🏃💨", "A scaredy-cat who runs away from every problem.",
     "Fattu fakir ne HOD ko door se dekha aur seedha fire exit se chhalaang maar di 🏃💨🚪", 1, 1),
    ("dhakkan deluxe", "🧠", "Extra-dumb, top-quality foolishness.",
     "Dhakkan deluxe ne lab mein multimeter se apna phone charge karne ki koshish ki 🧠⚡", 1, 2),
    ("gandu gang", "🚨", "A group of useless troublemakers.",
     "Gandu gang ne fest ke din stage ka mic le gaye aur Bigg Boss ki audition shuru kar di 🚨🎤", 1, 3),
    ("ghochu gang", "🐑", "A gang of gullible, clueless friends.",
     "Ghochu gang ne bola 'sir ne kal chhutti di', sir ne attendance li, poori gang ghost ban gayi 🐑👻", 1, 1),
    ("nalayak nawab", "👑", "Useless, but behaves like royalty.",
     "Nalayak nawab ne 'main sab sambhal lunga' bola, phir assignment ki jagah apna selfie jama kar diya 👑🤳", 1, 2),

    # Bakchodi & Chaos
    ("bakchod sabha", "🎪", "A meeting of friends for endless pointless talk.",
     "Raat 2 baje bakchod sabha mein debate: 'agar professor ka WiFi password mil jaye toh kya hoga?' 🎪📶", 2, 1),
    ("bakchodology", "🧪", "The 'science' of timepass and random nonsense.",
     "Bakchodology mein usne thesis likhi: 'Back bench se sone ke 47 tareeke' 🧪😴", 2, 1),
    ("bhasadmaxxing", "📢", "Creating the maximum possible chaos and noise.",
     "Farewell mein bhasadmaxxing level 100: DJ ke saamne professor ne bhi bhangra daal diya 📢🕺", 2, 2),
    ("kaleshology", "🥊", "The study of fights and drama.",
     "Kaleshology ka syllabus: 'kisne mera notes photocopy karke 5 rupay mein bech diya?' 🥊📄", 2, 2),
    ("haramkhor hours", "🌙", "Late night hours when everyone is awake and up to mischief.",
     "Haramkhor hours mein 3 AM pe poori class ne ek saath assignment, Netflix aur existential crisis shuru kiya 🌙🍿", 2, 3),
    ("dimaag ka dahi", "🥣", "Brain turned into curd. Totally mentally fried.",
     "Maths ke paper ke baad dimaag ka dahi: usme se ab lassi bhi nikal rahi hai 🥣🥛", 2, 1),
    ("lafda", "🌪️", "A mess or trouble that someone got into.",
     "Lafda ho gaya: proxy lagane gaya tha, khud ka naam do baar bol diya 🌪️🙈", 2, 1),
    ("sustnami", "🌊", "A giant tsunami of laziness hitting everyone.",
     "Monday 8 AM lecture pe sustnami aayi: poori class bahh gayi, sirf sir bache 🌊🪑", 2, 1),
    ("chuglipanti", "🐍", "Talking about people behind their back.",
     "Chuglipanti ka level: tune jo secret bola, wo college ke Wikipedia pe chhap gaya 🐍📰", 2, 2),

    # Student Life & Survival
    ("jugaadu janta", "🛠️", "Students who find a clever hack for everything.",
     "Jugaadu janta ne lab ka soldering iron se Maggi banayi aur viva mein 'innovation' bol diya 🛠️🍜", 3, 1),
    ("padhakupanti", "🤓", "Acting like a topper and studying too much.",
     "Padhakupanti: exam ke ek din baad bhi library mein baitha hai kyunki 'next sem ka syllabus dekh raha hoon' 🤓📚", 3, 1),
    ("magginomics", "🍜", "The economics of surviving on Maggi.",
     "Magginomics ke hisaab se: 1 packet = 2 din, masala = luxury, anda = IPO 🍜📈", 3, 1),
    ("kangaalcore", "🪙", "Living the broke life with no money left.",
     "Kangaalcore: canteen wale bhaiya ko bola 'udhaar', unhone bola 'beta ab teri photo wall pe lagegi' 🪙🖼️", 3, 1),
    ("jhand jeevan", "🫠", "A messed-up, miserable life.",
     "Backlog + lab file + 62% attendance = jhand jeevan, ab toh sapne mein bhi viva aa raha hai 🫠📉", 3, 2),

    # Gossip & Drama
    ("tea", "☕", "Gossip or juicy news.",
     "Tea hai: kal fest mein DJ ne gaana bajaya aur 3 breakups ek saath ho gaye 😳☕", 4, 1),

    # Flirting & Relationships
    ("tharakistan", "👀", "The land of tharkis, the creepy flirts.",
     "College gate ke bahar poora tharakistan jama hai, sabke haath mein 'Hi' ka copy-paste ready 👀📱", 5, 2),
]


# ---------- saving and loading ----------

def make_starter_dictionary():
    slang = {}
    for term, emoji, meaning, example, category, intensity in STARTER:
        slang[term] = {
            "emoji": emoji,
            "meaning": meaning,
            "example": example,
            "category": CATEGORIES[category - 1],
            "intensity": intensity,
            "likes": 0,
        }
    return slang


def load_dictionary():
    # if the file is missing or broken, start with the starter words
    try:
        with open(FILENAME, "r", encoding="utf-8") as file:
            return json.load(file)
    except (FileNotFoundError, json.JSONDecodeError):
        return make_starter_dictionary()


def save_dictionary():
    with open(FILENAME, "w", encoding="utf-8") as file:
        json.dump(slang, file, indent=2, ensure_ascii=False)


slang = load_dictionary()


# ---------- small helper functions ----------

def clean(text):
    # lowercase and remove extra spaces so "Lafda " and "lafda" match
    return text.strip().lower()


def get_emoji(term):
    # old saved words may not have an emoji, so use a sparkle
    return slang[term].get("emoji") or "✨"


def ask_number(message, low, high):
    while True:
        try:
            number = int(input(message))
        except ValueError:
            print("That is not a number, try again.")
            continue
        if low <= number <= high:
            return number
        print(f"Pick a number from {low} to {high}.")


def pick_category():
    for number, name in enumerate(CATEGORIES, start=1):
        print(f"  {number}. {name}")
    choice = ask_number("Category: ", 1, len(CATEGORIES))
    return CATEGORIES[choice - 1]


def pick_intensity():
    for level, name in INTENSITY.items():
        print(f"  {level}. {name}")
    return ask_number("Intensity: ", 1, 3)


def show_entry(term):
    info = slang[term]
    print(f"\n{term.title()} {get_emoji(term)}")
    print(f"  Meaning   : {info['meaning']}")
    if info.get("example"):
        print(f"  Example   : {info['example']}")
    print(f"  Category  : {info['category']}")
    print(f"  Intensity : {INTENSITY[info['intensity']]}")
    print(f"  Likes     : {info['likes']}")


def show_list(terms):
    if len(terms) == 0:
        print("Nothing here yet.")
        return
    for term in terms:
        info = slang[term]
        level = INTENSITY[info["intensity"]]
        print(f"  {term.title()} {get_emoji(term)} [{level}] likes: {info['likes']} - {info['meaning']}")


# ---------- menu actions ----------

def search_term():
    term = clean(input("Search for a term: "))
    if term == "":
        print("Type something to search.")
        return

    if term in slang:
        show_entry(term)
        return

    # no exact match, so look in the words AND in the meanings (same as the website)
    matches = []
    for key in slang:
        if term in key or term in slang[key]["meaning"].lower():
            matches.append(key)
    matches.sort()

    if matches:
        print(f"'{term}' not found exactly. Did you mean:")
        show_list(matches)
    else:
        print(f"'{term}' is not here yet. You can add it from the menu.")


def add_term():
    term = clean(input("New slang term: "))
    if term == "":
        print("Term can't be empty.")
        return
    if term in slang:
        print(f"'{term}' already exists. Use Edit to change it.")
        return

    emoji = input("Emoji (optional, press Enter to skip): ").strip()
    meaning = input("Meaning: ").strip()
    if meaning == "":
        print("Meaning can't be empty.")
        return
    example = input("Crazy example sentence (optional): ").strip()
    category = pick_category()
    intensity = pick_intensity()

    slang[term] = {
        "emoji": emoji,
        "meaning": meaning,
        "example": example,
        "category": category,
        "intensity": intensity,
        "likes": 0,
    }
    save_dictionary()
    print(f"Added '{term.title()}'.")


def edit_term():
    term = clean(input("Term to edit: "))
    if term not in slang:
        print(f"'{term}' is not in the dictionary.")
        return

    show_entry(term)
    print("\nPress Enter to keep the old value.")

    emoji = input("New emoji: ").strip()
    if emoji:
        slang[term]["emoji"] = emoji

    meaning = input("New meaning: ").strip()
    if meaning:
        slang[term]["meaning"] = meaning

    example = input("New example: ").strip()
    if example:
        slang[term]["example"] = example

    if input("Change category? (y/n): ").strip().lower() == "y":
        slang[term]["category"] = pick_category()

    if input("Change intensity? (y/n): ").strip().lower() == "y":
        slang[term]["intensity"] = pick_intensity()

    save_dictionary()
    print(f"Updated '{term.title()}'.")


def delete_term():
    term = clean(input("Term to delete: "))
    if term not in slang:
        print(f"'{term}' is not in the dictionary.")
        return

    sure = input(f"Delete '{term.title()}'? (y/n): ").strip().lower()
    if sure == "y":
        del slang[term]
        save_dictionary()
        print("Deleted.")
    else:
        print("Cancelled.")


def show_all():
    print(f"\nAll terms ({len(slang)}):")
    for category in CATEGORIES:
        terms = []
        for key in slang:
            if slang[key]["category"] == category:
                terms.append(key)
        terms.sort()
        if terms:
            print(f"\n{category} ({len(terms)})")
            show_list(terms)


def filter_by_category():
    category = pick_category()
    terms = []
    for key in slang:
        if slang[key]["category"] == category:
            terms.append(key)
    terms.sort()
    print(f"\n{category} ({len(terms)}):")
    show_list(terms)


def filter_by_intensity():
    level = pick_intensity()
    terms = []
    for key in slang:
        if slang[key]["intensity"] == level:
            terms.append(key)
    terms.sort()
    print(f"\n{INTENSITY[level]} ({len(terms)}):")
    show_list(terms)


def like_term():
    term = clean(input("Term you like: "))
    if term not in slang:
        print(f"'{term}' is not in the dictionary.")
        return
    slang[term]["likes"] += 1
    save_dictionary()
    print(f"'{term.title()}' now has {slang[term]['likes']} likes.")


def show_top():
    # only words that have at least 1 like, highest first, top 5 (same as Hall of fame)
    ranked = sorted(slang, key=lambda key: (-slang[key]["likes"], key))
    ranked = [key for key in ranked if slang[key]["likes"] > 0]
    print("\nHall of fame - top 5 most liked:")
    if ranked:
        show_list(ranked[:5])
    else:
        print("No votes yet. Like a word first.")


# ---------- main menu ----------

print("🎓 Bawal Basha - Campus Slang Dictionary")

while True:
    print("\n1. Search a term")
    print("2. Add a term")
    print("3. Edit a term")
    print("4. Delete a term")
    print("5. Show all terms")
    print("6. Filter by category")
    print("7. Filter by intensity")
    print("8. Like a term")
    print("9. Top liked terms")
    print("10. Quit")

    choice = input("Pick your move (1-10): ").strip()

    if choice == "1":
        search_term()
    elif choice == "2":
        add_term()
    elif choice == "3":
        edit_term()
    elif choice == "4":
        delete_term()
    elif choice == "5":
        show_all()
    elif choice == "6":
        filter_by_category()
    elif choice == "7":
        filter_by_intensity()
    elif choice == "8":
        like_term()
    elif choice == "9":
        show_top()
    elif choice == "10":
        print("See you! 👋")
        break
    else:
        print("Pick a number from 1 to 10.")