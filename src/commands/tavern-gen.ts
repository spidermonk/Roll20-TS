export class TavernGen {
    public static handleCommand(commands: string[]): void {
        sendChat('GM', _.sample(this.taverns));
    }

    private static readonly taverns = ['9 Horse Hitch', '10 Bed Inn', 'Aerie of the Eagles', 'Alchemist’s Alembic', 'Ales \'n Beds', 'Alehouse of the Serpents', 'The Alicorn',
        'Amulet and Wineskin', 'The Antidote', 'Atlastabeer!', 'The Axe and Compass', 'Axehandle Ale', 'Baalzepub', 'Badger and Harp', 'Badger Head', 'Bag and Flagon',
        'Banjo and Zigzag', 'Bar of Kings', 'Barf Bag', 'Bartie\'s Food and Brew', 'Basque and Feijoa', 'Battle Axe Inn', 'Bed-And-Boarmeat', 'Bedry', 'Beast’s Head',
        'Beefy Stu\'s Beefy Stews', 'Beehive', 'Beer Guzzler', 'Behir and the Beholder', 'Belching Boar', 'Belle', 'Belly Buster',
        'Bent Elbows', 'Bibbo’s Pub', 'Biers  ', 'Big Boy', 'Big Red Dog', 'Blabbering Kobold', 'Black Barrels', 'Black and Blue Unicorn',
        'Black Boar', 'Black Hole', 'Black Pearl  ', 'Black Swan  ', 'Black Wednesday', 'Blind Basilisk', 'Blind Eye  ', 'Blind Marksman', 'Blood of the Vine  ',
        'Blue Bear', 'Blue Bladesman', 'Blue Duck', 'Blue Lantern  ', 'Blue Parrot Inn', 'Boar and Spear', 'Boar\'s Bristles', 'Boar\'s Chase', 'Boar\'s Head Inn',
        'Boar\'s Rest', 'Bob\'s Place', 'Bog and Barrel', 'Boil and Youth', 'Booze-up', 'Bottomless Cask', 'Bowl\'s Rim', 'Broken Arrow', 'Broken Bow', 'Broken Cane',
        'Broken Drum', 'Broken Fist', 'Broken Kender Arms  ', 'Bucket', 'Buffalo\'s Beard', 'Bull and Finch', 'Bullet and Barrel', 'Bullseye Tavern',
        'Bunch o\' Grapes', 'Bunk House', 'Burly Beholder', 'Burning Corpse', 'Buxom Wench', 'Cafe of Broken Dreams', 'Candi Bar', 'Cardinal\'s Error', 'Caritas',
        'Cat and Fiddle', 'Cat and Mouse', 'Cat\'s Claw Inn', 'Cavern', 'Cesspit', 'Chicken\'s Rest', 'Chipped Chalice', 'Citadel ', 'Clan of the White Wind',
        'Cloak and Dagger', 'Cloven Hoof', 'Cock and Hen', 'Colored Noun', 'Come on Inn', 'Cow\'s Horn', 'Creative Marquee', 'Creative Marquis',
        'Crippled Griffon', 'Crazy Cleric', 'Crazy Monk', 'Crimson Chord', 'Crooked Corner', 'Crossed Daggers', 'Crossed Swords', 'Crow\'s Heart', 'Crow\'s Nest',
        'Cup and Mug', 'Dancing Elephant', 'Dancing Giant', 'Dancing Kobold', 'Dancing Pig', 'Darkroot', 'Dave\'s Hideously Dangerous Animal Emporium', 'Days End Inn', 'Dead Elf',
        'Dead Eye Moon', 'Dead Fish', 'Dead Kings', 'Dead Man\'s Bluff', 'Dead Mime', 'Dead Parrot Inn', 'Deadly Minister\'s Hall', 'Deepwater', 'Demon and Hawk',
        'Derrin\'s Divine Brews', 'Desert’s Jewel', 'Devil and Deva', 'Dew Drop Inn', 'Dirty Dog', 'Dirty Dwarf', 'Dirty Laundry', 'Divine Delights', 'Doan Goe Inn',
        'Doctoris Inn', 'Dog and Thrush', 'Dog\'s Bollocks', 'Donnybrook', 'Dracolich  ', 'Dragon and Flagon', 'Dragon Skulls  ', 'Dragons\'s Bar',
        'Dragon\'s Breath', 'Dragon\'s Claw', 'Dragon\'s Codpiece', 'Dragon\'s Hoarde', 'Dragon’s Jaw', 'Dragon\'s Lair', 'Dragon\'s Spittoon', 'Dreaming Dragon',
        'Dreaming Elf', 'Driest Bone', 'Drift On Inn', 'Drinker', 'Drinking Druid', 'Drinking Ogre', 'Dripping Man', 'Drowned Rat', 'Drunken Boar', 'Drunken Cow ',
        'Drunken Demon', 'Drunken Dog', 'Drunken Dragon', 'Drunken Dwarf', 'Drunken Mephit', 'Drunken Monkey', 'Drunken Owlbear  ', 'Drunken Sailor', 'Drunken Stogg', 'Dry Stout',
        'Duke\'s', 'Dungeon and Dragon  ', 'Duplicate Chant', 'Durien\'s Dazzlin\' Darlins', 'Dustbin of Death', 'Dwarf\'s Axe', 'Dwarf\'s Keg', 'Dwarven Egg', 'Eagle',
        'Easing the Badger', 'Eastern Delights', 'Ebon Flow', 'Effervescence', 'Efreeti\'s Wish', 'Eights and Aces', 'Elegant Book', 'Elegant Chant Hall',
        'Elegant Prayer Tavern', 'Elf’s Ears', 'Elf\'s Ultimatum', 'Elswer\'s  ', 'Elven Nations', 'Empty Pocket', 'End of the Road', 'End of the World', 'Ent Tent',
        'Ergon’t Taps', 'Erics Erotic Dancers', 'Ever-full Jugs', 'Eye of the Beholder', 'Eye of the Specter', 'Fallen Man', 'Farlanghn\'s Rest', 'Fat Dragon Inn',
        'Fat Jack\'s', 'Fawning Orc', 'Feetal\'s Gizzard', 'Fermented Drunkard', 'Fiery Clap', 'Fig and Gristle', 'Fire Mountain Brewery', 'Fired Demon', 'Fireplace',
        'Fisherman\'s Friend', 'Flabby Troll', 'Flame', 'Flaming Snake', 'Flaming Squirrel', 'Flask and Sword', 'Flying Fish', 'Flying Monk Tavern', 'Friends of the Queen',
        'Forester\'s', 'Foresthome Rest', 'Forsaken Souls', 'Fox and Hound', 'Fox Hole', 'Fox\'s Tail', 'Frog and Duck', 'Frog and Peach', 'Frogleg Inn', 'Frogs Eggs  ',
        'Frost Bite', 'Frosted Flagon', 'Frosty Mug', 'Frozen Axe', 'Full Bottle Inn', 'Full Moon Tavern', 'Full Tankard', 'Fumbling Ogre', 'Furious Llama',
        'Gaff and Slasher', 'Geezul\'s Place', 'Gelded Ranger', 'Giant\'s Nose', 'Gina’s', 'Glaring Goblin', 'Gnoll\'s Belly', 'Goat\'s Blood', 'Goat\'s Head',
        'Gob\'s  ', 'Goblins Armpit', 'Golden Chain', 'Golden Dragon Inn', 'Golden Grain', 'Golden Gryphon', 'Golden Hammer', 'Golden Lady', 'Golden Perch',
        'Golden Schooner', 'Golden Stool', 'Good Night Inn', 'Gory\'s Tavern', 'Gray Wizard', 'Great Black Axe', 'Greasy Squeal', 'Great Arm Inn of the',
        'Green Dragon  ', 'Green Griffon', 'Green Man', 'Greyhound', 'Grig’s Fiddle', 'Grik’s', 'Grimy Cauldron', 'Gritty McDuff\'s', 'Grizzly Cave',
        'Grobo\'s Grotto', 'Grog Barrel', 'Grumbling Dwarf', 'Guest\'s Dormitory  ', 'Guinea Pig', 'Guts ‘n Glory', 'Gutted Pig', 'Halflings\' Revenge', 'Half-way Inn',
        'Hall of Narwhals', 'Hammer and Anvil', 'Hammer, Anvil, and Stirrup', 'Hamster\'s Folly', 'Hanging Cat', 'Hanging Man', 'Happy Dwarf', 'Happy Harpy Tavern',
        'Happy Hooker', 'Happy Lich', 'Happy Orc  ', 'Happy Puppy', 'Happy Saturday\'s', 'Happyfeet  ', 'Harlot’s Galleon', 'Harpoon Louie\'s', 'Harpy\'s Hideaway', 'Harvester’s Gate',
        'Hatchet Jack\'s', 'Haudhla\'s', 'Head On Inn', 'Hearthstone Arms', 'Heart of Oak', 'Heaves', 'Helix', 'Hen and Apple', 'Herald’s Rest  ', 'Here\'s Sin in Your Eye',
        'Hide Away', 'Highlighted Eye', 'Hillshire Farm', 'Hilltop Hideaway', 'Hobbit\'s Armpit', 'Hobgoblin\'s Fist', 'Hole in the Wall', 'Honest Barrister',
        'Hops Skip & Jump', 'Horn and Haunch', 'Horn and Hounds', 'Horny Halfling', 'Horse and Hound', 'Horwrath\'s Haven', 'House of Cards', 'Hungry Tree',
        'I Can\'t Believe It\'s Not Stolen', 'Icarus Descending', 'Ice Dragon House', 'Imps Intestine', 'Indigo Incubus', 'Inn of the Eagles',
        'Inn of the Welcome Wench', 'Iron Fist', 'Ivy Bush', 'Jade Terrorist', 'Jane & Tonnig’s  ', 'Joe\'s',
        'Joker\'s Maniacal Frogleg and Nosewart Cafe', 'Just Ale  ', 'Karnov\'s Bar and Grill', 'Kettles Inn', 'Khaki Garter', 'Kibbles n\' Bits\' Inn', 'King\'s Coin',
        'King\'s Rest', 'King\'s Spellbook', 'King\'s Throne', 'Klatchian\'s Head', 'Knife in the Back', 'Knight\'s Tournament', 'Knotted Beard', 'Knyte Lyfe  ',
        'Kraken', 'Kraken’s Throat', 'Kraun\'s', 'Krazy Kobold', 'Labyrinth', 'L’auberge du cochon siffleur  ', 'Lascivious Fairy', 'Last Book  ', 'Last Call  ', 'Last Chance Inn',
        'Last Port Tavern', 'Laughing Cat', 'Laughing Cow', 'Laughing Dragon', 'Laughing Earl', 'Laughing Fox', 'Laughing Judge', 'Laughing Minotaur',
        'Laurence\'s Mug-house', 'Lazy Lamprey', 'Lazy Oak', 'Leaping Lizardman', 'Lecherous Virgin', 'Liar’s Lye', 'Library  ', 'Lich’s Tomb  ', 'Lion and Lantern', 'Lion\'s Den',
        'Lonely Haystack', 'Lonely Unicorn', 'Lonely Wanderer Inn of the', 'Looter\'s  ', 'Lost Wayfarer', 'Lotus', 'Lunar Night', 'Mad Fiddler  ', 'Maggot\'s Rest',
        'Malenthiyas Hearth', 'Mangy Dog', 'Manicured Mouse', 'Marbled Lady   [see The Nicked Bits below}', 'Marty’s Tavern', 'Master and Aubergine', 'Mead Market',
        'Mended Drum', 'Mermaid’s Flagon  ', 'Mermaid\'s Smile', 'Merry Wizard', 'Millway’s', 'Momma\'s', 'Monk and Eggplant', 'Mountain Home Inn', 'Mousehole',
        'Mug o\' Ale', 'Mulled Apple', 'Murdered Priest', 'Musty Moldan\'s Mighty Morsels', 'Hag\'s Head', 'Nanny\'s Arms', 'Naughty Damsel', 'New Cup',
        'New Sword Hall', 'Nicked Bits   [see The Marbled Lady above]', 'Night Candle Inn', 'Nomadic Revery', 'Nonnovyer Buisiness', 'Noisy Bed Inn', 'Northern Road',
        'Nothing\'s Free House', 'Nymph’s Grove Tavern', 'Oarhouse', 'Octopus Club', 'Oiled Spleen', 'Ol\' Bacon and Eggs', 'Old Flying Penguin', 'Old Lantern',
        'Old Man and the Smee', 'Old Rubin\'s', 'Olde Fox Decieved', 'One-eyed Jack’s', 'One-legged Man', 'Only Bar in the Multiverse Without a Convenient Back Door',
        'Only Port in a Storm Inn', 'Open Book  ', 'Old Grant\'s Ale-house', 'Orange Ogre', 'Orc\'s Armpit', 'Orc\'s Head Inn', 'Orc\'s Toenail  ', 'Orc’s Pride',
        'Organ and Poinsettia', 'Over the Wall  ', 'Paladin and Angel', 'Pay Up Front', 'Peacock Alley', 'Peddler and Cleric', 'Perfumed \'Possum', 'Pig and Pie',
        'Pig and Whistle  ', 'Pink Dragon', 'Pink Lady Inn', 'Pipe and Tobacco', 'Pistol & Whip', 'Plaid Chameleon', 'Plastered Imbecile', 'Playful Party Place',
        'Pleasure Palace', 'Port in a Storm', 'Pot Belly', 'Prancing Pony  ', 'Pub-Pub', 'Puke Bucket', 'Priest and Horse', 'Puking Unicorn', 'Punchin’ Pete’s Palace',
        'Purple Bucket', 'Purple Penguin Pub', 'Puzzle and Egg', 'Queens Head  ', 'Quene\'s Hed', 'Quincy\'s', 'Raging Dire Cow', 'Raging Flea', 'Rain Cloud', 'Rain Song',
        'Rampaging Rabbit', 'Rampant Dragon', 'Ram’s Horn', 'Ram\'s Lord\'s Tavern', 'Randy Stoat', 'Ranger\'s Lookout', 'Rasvi & Vijay\'s Stop and Eat', 'Rats Nest',
        'Razorback Inn', 'Realm’s Tavern', 'Red Barrel Brewery', 'Red Crow', 'Red Dragon', 'Red Dwarf', 'Red Lantern', 'Red Rogue', 'Red Sky Inn', 'Refuge from the Storm',
        'Rick’s', 'Rifle and Whip', 'Ripped Kitty', 'Road Kill Café', 'Road to Araby', 'Roadwarden’s Rest', 'Roamer\'s Pillow', 'Robber\'s Inn', 'Rock Rock Rock  ', 'Rolling Meadows',
        'Rooster and Spheres', 'Rose and Crown', 'Rose Gem', 'Rotgut Room', 'Rouge Rogue  ', 'Royal Pockets', 'Ruby Blade', 'Ruby Lips', 'Rusty Blade',
        'Rusty Grog  ', 'Rusty Justicar', 'Rusty Nail', 'Rusty Vampire', 'Safe Haven', 'Safe House  ', 'Sahuagen and Lady', 'Sailor\'s Delight', 'Salty Dog', 'Saltsail’s',
        'Satyr and Stiletto', 'Sauce Bucket', 'Scheister\'s Casino, Inn, and Mortuary  ', 'Sea Barrel', 'Sea Dog', 'Seabreeze Inn', 'Seatin\' \'N Eatin\'', 'Seven Priests', 'Severed Arms',
        'Sexist Pig', 'Screaming Demon', 'Shallow Swamp', 'Shining Gem', 'Ship\'s Wheel', 'Shipyard', 'Short Neck Clam Town Inn and Tavern', 'Shot in the Dark',
        'Sign of the Cringing Eunuch', 'Sign of the Golden Orange', 'Sign of the Jester', 'Sign of the Northward Gull', 'Sign of the Sign  ', 'Sign of the Talon', 'Silver Axe',
        'Silver Cypher  ', 'Silver Oak Inn', 'Silver Snail', 'Singing Boar', 'Site of the Harvest', 'Six Flags over Mead', 'Skull-Dragon Inn  ', 'Slade\'s', 'Slap and Tickle',
        'Slaughtered Cabbage', 'Slaughtered Lamb  ', 'Sleep Here', 'Sleeping Demon', 'Sleepy Halfling', 'Slippery Eel', 'Sloppy Salamander', 'Slugfest',
        'Slumbering Serpent', 'Smiling Orc', 'Smithy\'s Armpit', 'Snake Pit', 'Snake\'s Foot', 'Snoring Troll', 'Solar Night', 'Song Bird', 'Sottish Gnome',
        'Spend the Knight Inn', 'Spit and the Fire', 'Splintered Ego Tavern', 'Spread - eagled Bugbear', 'Squalid Claw', 'The Stalwart Mother', 'Sterling Hook', 'Step Right Inn',
        'Stinking Cow', 'Stinking Boar Inn', 'Stinky Tuna', 'Stowaway', 'Strange Brew', 'Strangled Cat', 'Strong Drink', 'Student\'s Hideaway  ', 'Stumble on Inn', 'Stump',
        'Stumpy Bob\'s House of Beer', 'Succubus', 'Sundown', 'Supply in the Sky  ', 'Surly Goat', 'Svirfneblin\'s Ear', 'Swagger and Swivel', 'Swashbuckler\'s Luck', 'Sword\'s Sleep',
        'Tattered Crown', 'Tavern', 'Tavern of the Blushing Barmaids', 'Tavern of Ever-full Jugs', 'Tavern on the Edge  ', 'Ted’s Beer and Bathhouse', 'Temple of Gruumsh', 'Thank God It’s Open',
        'Thiefs Knot', 'Thirsty Vampire', 'Thirsty Whale', 'This Ain\'t Your Daddy\'s Bar', 'Three Eye Tavern', 'Three Gables', 'Three Happy Mice', 'Three Lions', 'Three Sheets',
        'Three Swords', 'Thug and Succubus', 'Thunderbird Club', 'Thurston\'s Brass Tankard', 'Time’s Grave', 'Tipsy McStagger’s', 'Tipsy Tarrasque', 'Tipsy Troll Tavern', 'Tired Dog',
        'Tired Traveller', 'Toad & Turtle', 'Toss - It - Back  ', 'Tower Tavern', 'Townhouse', 'Treadwell’s Beer and Sausage', 'Tree With Antlers', 'Trog Scent Tavern',
        'Troll Breath Repository', 'Troll Slayer Tavern', 'Troll’s Head Inn', 'Trough  ', 'Turkey Cove Sleep and Eat', 'Twin Left Feet', 'Twisted Boot', 'Two - Fingered Troll',
        'Two Halfling\'s Inn', 'Two Steeple Inn  ', 'The Ulcer', 'Valabar\'s', 'Van Smack\'s Tavern and Inn', 'Victorious Egret', 'Vincent\'s Gin - Palace', 'Violet Vein',
        'Violent Dog', 'Violent Priestess Hall', 'Virgin and Nightmare', 'Voluptuous Elf', 'Vulgar Unicorn', 'Wagonhouse', 'Wagon Wheel', 'Wand and the Stein',
        'Wandering Mistrel', 'Wandering Serpent Inn', 'Wanton Wench', 'Warm Socks', 'Watchman\'s Light', 'Way Out Inn', 'Wayfarer\'s Home', 'Wayfarer\'s Lay',
        'Weary Wanderer', 'Weasels Warble', 'Weigh Inn', 'Well Worn Wench Inn of the', 'We\'re Not Hostel', 'Wet Dog', 'Whirling Dervish', 'Whisper and Boil', 'Whistling Oyster',
        'Whistling Pig', 'White Hand', 'White Hart', 'White Roc Inn', 'White Spear', 'White Tree', 'Whiteblade’s Winery', 'Whompers', 'Widowers Den', 'Wig and Thistle',
        'Wild Chessman', 'Wild Side', 'Wiley Winnint', 'Willowbee\'s Brewery', 'Willow', 'Wine of Heaven', 'Wistful Wyvern', 'Wizard\'s Tower',
        'Wobblin’ Will’s Wide World of Whiskey', 'Wobbling Goblin', 'Wobbly Boot', 'Wolfhound', 'Wolf\'s Den', 'Wooden Pillow', 'Woolystonecrafters Inn', 'World of Wines',
        'World\'s End Inn', 'Worn Cudgel', 'Wrong Bar', 'Yawning Dog', 'Yawing Portal', 'Ye Granny’s Ale', 'Yellow Necromancer'];
}