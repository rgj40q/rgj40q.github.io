

// key: word stem
// values: ULD#, english translation
// ULD is http://www.frathwiki.com/Universal_Language_Dictionary
var dict = [
["ri",203,"x1 becomes, begins to be, acquires the quality of x2"],
["li",204,"x1 causes, induces to be/happen x2"],
["ða",241,"x1 is probable, possible (maybe, perhaps)"],
["ʃa",3228,"x1 repeats (again, once more, re-) "],
["pa",3235,"x1 begins, commences, starts"],
["ta",3236,"x1 continues, keep on being"],
["sa",612,"x1 is female"],
["va",614,"x1 is male"],
["fa",3238,"x1 ends, concludes, finishes"],
["ka",3239,"x1 ceases, stops, quits"],
["xa",,"x1 resumes, continues after break"],
["da",3206,"x1 is current, present, now, in the moment"],
["za",3242,"x1 is eternal, always, at all times"],
["ma",3209,"x1 is former, ex-, in the past"],
["ŋa",,"x1 is future, in the future"],
["maluda",3201,"x1 is the past time"],
["daluda",3202,"x1 is the present time"],
["ŋaluda",3203,"x1 is the future time"],
["ðaɣuʒi",208,"x1 can, is able to x2"],
["nali",171,"x1 is because of, due to x2"],
["nabuki",305,"x1 is a child of x2"],
["vazoma",307,"x1 is a boy "],
["sazoma",309,"x1 is a girl "],
["valola",314,"x1 is a man, adult male person"],
["salola",316,"x1 is a woman, adult female person"],
["vabuki",322,"x1 is a father of x2"],
["sabuki",324,"x1 is a mother of x2"],
["valuzi",354,"x1 is a brother of x2"],
["saluzi",357,"x1 is a sister of x2"],
["rinu",205,"x1 makes, renders x2 x3; x1 imparts quality x3 to x2"],
["meninu",3032,"x1 brings x2 at x3; x1 causes x2 to come along with one toward a place x3"],
["vagaʒi",330,"x1 is a grandfather of x2"],
["sagaʒi",335,"x1 is a grandmother of x2"],
["vaŋapi",340,"x1 is an uncle of x2"],
["saŋapi",345,"x1 is an aunt of x2"],
["vanabuki",350,"x1 is a son of x2"],
["sanabuki",352,"x1 is a daughter of x2"],
["vasazi",361,"x1 is a husband of x2"],
["sasazi",362,"x1 is a wife of x2"],
["vazebi",390,"x1 is a king of x2"],
["sazebi",391,"x1 is a queen of x2"],
["rizeða",626,"x1 dies"],
["rizeðali",627,"x1 kills x2"],
["rinira",665,"x1 wakes up, becomes awake"],
["ŋagabeza",1004,"x1 is a plant of grain, cereal"],
["nepabeza",1030,"x1 is an apple tree of genus Malus"],
["fudabeza",1031,"x1 is a banana plant of genus Musa"],
["muzabeza",1035,"x1 is a mandarin, tangerine tree of sp. Citrus reticulata"],
["gogabeza",1037,"x1 is an orange tree of Citrus sinensis / related spp."],
["lababeza",1076,"x1 is a rice plant of sp. Oryza sativa"],
["mapabeza",1078,"x1 is a wheat plant of sp. Triticum aestivum"],
["fiɣabeza",1080,"x1 is a bean, lima, snap plant of genus Phaseolus or similar"],
["fubabeza",1094,"x1 is a potato plant of sp. Solanum tuberosum"],
["keʃabeza",1098,"x1 is a tomato plant of genus Lycopersicon"],
["nakaxe",1682,"x1 is a prize, award from x2 to x3 for x4"],
["lagi",1732,"x1 lacks, is without x2"],
["kasaʒi",1733,"x1 loses, cease having x2"],
["nunafe",1755,"x1 is a price, cost which x2 paid for x3 to x4"],
["nuvevu",1761,"x1 lends x3 to x2"],
["rigali",1917,"x2 likes, enjoys, derive pleasure from x1"],
["nidapu",2045,"x1 teaches (someone) x2 (something) x3"],
["tamaʃi",2052,"x1 remembers x2"],
["kamaʃi",2053,"x1 forgets x2"],
["rabali",,"x1 changes, makes x2 different"],
["meŋali",,"x1 increases, makes x2 greater in quantity"],
["dirali",,"x1 decreases, makes x2 lesser in quantity"],
["segali",,"x1 gathers, collects, brings x2 together"],
["tazinu",,"x1 returns, send x2 back to previous place/condition x3"],
["liði",101,"x1 is from, moving out of or away from x2"],
["tefi",102,"x1 is to, towards, at, moving toward x2"],
["tudi",103,"x1 is at, in the same location as x2"],
["lobi",110,"x1 is in, located inside of x2"],
["noxi",150,"x1 is with, accompanied by, furnished with x2"],
["θami",172,"x1 is by means of, via, per, with, using, through instrumentality of x2"],
["foli",174,"x1 is for, to benefit, destined for, for the purpose of x2"],
["gixi",178,"x1 is of, belonging to, associated with x2 (genitive)"],
["muli",180,"x1 is compared to x2"],
["ŋeɣi",201,"x1 is x2 (am, are, be)"],
["dora",202,"x1 exists"],
["ɣuʒi",206,"x1 does, performs, engages in specified activity x2"],
["saʒi",207,"x1 has, possesses, is furnished with x2"],
["siði",209,"x1 should, ought to, is expected/advised to x2"],
["ʒuri",2710,"x1 is as much as, to the same degree as x2"],
["faʒi",111,"x1 is outside of, exterior to x2"],
["voði",120,"x1 is above, over x2"],
["ŋasi",121,"x1 is under, below, beneath x2"],
["leʃi",130,"x1 is in front of, ahead of, before (spatially) x2"],
["goʒi",131,"x1 is behind, in back of, to the rear of x2"],
["muxi",140,"x1 is before, prior to, earlier than x2"],
["θimi",141,"x1 is during x2"],
["keði",142,"x1 is after, later than, in the future of x2"],
["lagi",151,"x1 is without, not with x2"],
["peti",160,"x1 is around, encircling, surrounding x2"],
["keni",161,"x1 is between, among x2"],
["meʒi",162,"x1 is beyond, farther than, exceeding x2"],
["θeni",163,"x1 is near, close to x2"],
["ʃomi",164,"x1 is on, resting on, touching the top or other surface of x2"],
["tesi",165,"x1 is across, at the other side of, to the other side of x2"],
["ŋuɣi",166,"x1 is through x2"],
["kazi",170,"x1 is about, pertaining to, on the topic of x2"],
["ðazi",173,"x1 is except for, apart from, excluding x2; x1 is excluded from x2"],
["zevi",175,"x1 is for, in exchange for x2"],
["kafi",176,"x1 is instead of, rather than x2"],
["ʒuxi",177,"x1 is like, similar to x2"],
["mazi",179,"x1 is of x2 (contains the measured quantity: 'two liters of water')"],
["ŋiva",240,"x1 is same (also, too)"],
["ðeza",243,"x1 is alone, unique, exclusive (only, exclusively, solely)"],
["rufa",301,"x1 is a human being, person, any living member of Homo sapiens"],
["xeʃa",303,"x1 is a baby"],
["zoma",,"x1 is a kid"],
["buki",,"x1 is a parent of x2"],
["luzi",,"x1 is a sibling of x2"],
["ʃidi",374,"x1 is a friend of x2"],
["ʃazi",500,"x1 is a body of x2"],
["vari",501,"x1 is a head of x2"],
["vabi",502,"x1 is a neck of x2"],
["ðasi",503,"x1 is a back, rear portion of torso of x2"],
["gari",504,"x1 is a chest, upper front of torso of x2"],
["duŋi",510,"x1 is a face of x2"],
["geʃi",514,"x1 is an ear of x2"],
["faŋi",515,"x1 is an eye of x2"],
["xumi",520,"x1 is a nose of x2"],
["xizi",521,"x1 is a mouth of x2"],
["vaʃi",522,"x1 is a lip of x2"],
["kadi",523,"x1 is a tongue of x2"],
["topi",524,"x1 is a tooth of x2"],
["gozi",531,"x1 is an arm, shoulder to hand of x2"],
["vodi",534,"x1 is a hand of x2"],
["ðuki",535,"x1 is a finger of x2"],
["ɣiŋi",540,"x1 is a leg of x2"],
["ɣagi",542,"x1 is a foot of x2"],
["reti",543,"x1 is a toe of x2"],
["zaði",557,"x1 is a buttock of x2"],
["maki",560,"x1 is a bone of x2"],
["zasi",572,"x1 is a heart, blood-pumping organ of x2"],
["loða",660,"x1 sleeps"],
["busa",701,"x1 walks"],
["ðala",702,"x1 runs"],
["dili",720,"x1 eats x2"],
["laɣi",721,"x1 drinks x2"],
["ðeʒa",731,"x1 stands"],
["xaʃa",733,"x1 sits, is in a sitting position"],
["neva",737,"x1 lies, reclines horizontally"],
["resa",740,"x1 cries, weeps"],
["ŋofi",810,"x1 sees x2"],
["zeʒa",820,"x1 lights, emits light, visible electro-magnetic radiation"],
["zeka",860,"x1 sounds, emits sound, audible waves in the air"],
["θomi",861,"x1 hears x2"],
["dema",1112,"x1 is a sky"],
["ŋola",1126,"x1 is the moon"],
["guzo",1128,"it rains"],
["ðaka",1133,"x1 is the sun"],
["boki",1200,"x1 is a tool, utensil, implement for x2"],
["siga",1302,"x1 is a basket"],
["voɣa",1308,"x1 is a cup, small bowl with handle"],
["mota",1341,"x1 is a bed"],
["pinu",1734,"x1 gives x2 to x3"],
["mavi",1736,"x1 gets, acquires, gains, obtains x2"],
["zetu",1738,"x1 takes x2 from x3"],
["nafe",1750,"x1 buys, purchases x2 from x3 for x4"],
["ʃele",1751,"x1 sells x2 to x3 for x4"],
["povi",1905,"x1 is good for x2; x2 considers x1 good"],
["kaʃi",1906,"x1 is bad for x2; x2 considers x1 bad"],
["ɣupi",1943,"x1 is true for x2; x2 considers x1 true"],
["rimi",1945,"x1 is false, untrue for x2; x2 considers x1 false"],
["ðaɣi",1947,"x1 is right, correct for x2; x2 considers x1 right, correct"],
["fafi",1949,"x1 is wrong, incorrect for x2; x2 considers x1 wrong, incorrect"],
["pegi",1971,"x1 is kind, sort, type, variety of x2"],
["tapi",2030,"x1 wants, wishes, desires x2"],
["soɣi",2040,"x1 understands, comprehends x2"],
["maʃi",2041,"x1 knows x2"],
["naka",2080,"x1 is happy"],
["diva",2081,"x1 is sad, unhappy, melancholy"],
["ðiru",2155,"x1 helps, assists, aids x2 in x3"],
["kiðu",2224,"x1 says, tells, expresses in words x2 to x3"],
["neða",2289,"x1 is a word"],
["peŋi",2402,"x1 is same as x2, x1 is identical to x2"],
["noŋi",2408,"x1 is different from x2"],
["gubi",2660,"x1 is a part of x2"],
["nedi",2661,"x1 is a piece of, a part broken/cut/separated from x2"],
["dasa",2685,"x1 is full, filled"],
["boga",2686,"x1 is empty"],
["taka",2721,"x1 is extreme (very, much, to a large degree, with great intensity)"],
["ðiʒa",2724,"x1 is little (to a small degree, with almost no intensity)"],
["ŋaza",2730,"x1 is close to the highest degree (almost, nearly)"],
["ɣola",2803,"x1 is big, large, of much size"],
["teʒa",2804,"x1 is small, of little size"],
["kuʒa",2901,"x1 is directed up"],
["xina",2902,"x1 is directed down"],
["ɣuni",3001,"x1 goes to x2"],
["meni",3002,"x1 comes to x2; x1 arrives at x2"],
["muŋu",3012,"x1 puts x2 at x3; x1 causes item x2 to be located at place x3"],
["pika",3038,"x1 flies; moves through the air"],
["biba",3261,"x1 is last, final, after all others"],
["θabi",3263,"x1 follows x2 in turn; x1 is next, comes immediately after x2"],
["rura",3283,"x1 is a day, daytime as opposed to night, diurnal period "],
["dera",3284,"x1 is a night "],
["ʃana",3301,"x1 is water "],
["ŋusa",3330,"x1 is dirt, earth (tangible), soil"],
["ɣiɣa",3333,"x1 is rock, stone "],
["vita",3345,"x1 is wood (the substance)"],
["niɣi",3727,"x1 cuts x2"],
["mali",3749,"x1 hits, strikes x2"],
["suba",3821,"x1 burns, is on fire"],
["ŋodi",3932,"x1 is easy for x2"],
["kaki",3933,"x1 is difficult, hard for x2"],
["fili",3970,"x1 uses, utilizes x2"],
["lola",312,"x1 is an adult"],
["tami",320,"x1 is a member of a family x2"],
["gaʒi",,"x1 is a grandparent of x2"],
["ŋapi",,"x1 is an uncle/aunt of x2"],
["sazi",,"x1 is a spouse of x2"],
["θuði",370,"x1 is a leader of x2"],
["mefi",371,"x1 is a member of group/organization x2"],
["kebi",372,"x1 is a master of x2; x1 commands (slaves, animals etc) x2"],
["feɣi",373,"x1 is a slave of x2"],
["mini",375,"x1 is an enemy of x2"],
["zebi",,"x1 is a king/queen of x2"],
["xixi",392,"x1 is a chief, leader of a tribe x2"],
["deɣi",400,"x1 is a member of a group x2 (multiple things or persons sharing a location or activity) "],
["ruxi",445,"x1 is a member of a tribe x2 (group of families living in proximity and having the same chief) "],
["ŋati",460,"x1 is a member of a team x2"],
["ripi",505,"x1 is an abdomen of x2"],
["ɣosi",511,"x1 is a forehead of x2"],
["loʃi",512,"x1 is a cheek, side of face below eye of x2"],
["zimi",513,"x1 is a chin of x2"],
["miði",517,"x1 is hair, a strand of fibrous material growing from the body of x2"],
["ŋupi",518,"x1 is hair of x2; x1 is the hairs atop x2's head thought of as a collective entity"],
["geði",519,"x1 is a beard of x2"],
["bipi",525,"x1 is a throat of x2"],
["taŋi",530,"x1 is a shoulder of x2"],
["ðori",532,"x1 is an elbow of x2"],
["θaʃi",533,"x1 is a wrist of x2"],
["ɣaɣi",536,"x1 is a thumb of x2"],
["ŋeti",537,"x1 is a fist of x2"],
["madi",538,"x1 is a nail, fingernail of x2"],
["feŋi",539,"x1 is a palm of hand of x2"],
["pasi",541,"x1 is a knee of x2"],
["remi",544,"x1 is a heel of x2"],
["bafi",550,"x1 is a breast of, a mound of flesh culminating in a nipple on a woman x2"],
["zixi",551,"x1 is a waist of x2"],
["ðomi",552,"x1 is a hip of x2"],
["ʃapi",553,"x1 is a navel of x2"],
["dafi",562,"x1 is a spine, backbone of x2"],
["ŋuti",565,"x1 is a blood of x2"],
["laxi",566,"x1 is feces, excrement of x2"],
["θani",567,"x1 is a sweat, perspiration of x2"],
["vuni",568,"x1 is a tear, teardrop of x2"],
["ʒuði",569,"x1 is an urine of x2"],
["veti",571,"x1 is a brain of x2"],
["duli",573,"x1 is intestines, gut(s), viscera of x2"],
["ʒegi",577,"x1 is a flesh of x2"],
["diti",578,"x1 is a muscle of x2"],
["kifi",580,"x1 is a skin of x2"],
["tegi",581,"x1 is a stomach of x2"],
["pofi",582,"x1 is a vein of x2"],
["baŋi",590,"x1 is an egg of x2"],
["ʒagi",591,"x1 is a shell of (snail, clam, tortoise etc.) x2"],
["ɣali",594,"x1 is a tail of x2"],
["ðudi",595,"x1 is a wing of (bird etc.) x2"],
["ðugi",603,"x1 gives birth to x2"],
["tuba",620,"x1 is alive, lives"],
["puda",621,"x1 is alive, lives"],
["zeða",625,"x1 is dead"],
["θira",630,"x1 is healthy"],
["roma",631,"x1 is sick, ill"],
["ɣoka",632,"x1 is wounded (body or body part)"],
["θopa",635,"x1 has fever"],
["pira",640,"x1 is fat, obese"],
["miza",641,"x1 is skinny, thin (bodily)"],
["peza",645,"x1 is naked, nude"],
["fiza",650,"x1 is tired, weary"],
["kepa",652,"x1 is drunk, inebriated"],
["soði",662,"x1 dreams about x2"],
["nira",664,"x1 is awake"],
["feda",703,"x1 jumps, leaps"],
["ŋuŋa",704,"x1 climbs"],
["ðeŋa",705,"x1 crawls"],
["luʒa",706,"x1 swims"],
["zoɣi",710,"x1 breathes x2"],
["giʒi",722,"x1 bites x2"],
["ʃuli",723,"x1 spits x2 (saliva if not mentioned)"],
["ʃugi",724,"x1 swallows x2 (saliva if not mentioned)"],
["nala",725,"x1 vomits"],
["bisa",735,"x1 squats"],
["foʃa",741,"x1 cries out, shouts, yells"],
["ɣoma",743,"x1 laughs"],
["ŋoza",744,"x1 smiles"],
["zada",746,"x1 dances"],
["lufi",750,"x1 touches x2"],
["seni",751,"x1 catches, seizes x2 in the hands"],
["xani",752,"x1 holds, grasps x2"],
["pami",753,"x1 throws x2"],
["kuti",754,"x1 kicks x2"],
["lipi",761,"x1 kisses x2"],
["miki",762,"x1 copulates, has sex with x2"],
["kava",771,"x1 shaves, scrapes off beard-hairs with a blade"],
["fuði",781,"x1 hunts, pursues x2 with intent to capture and/or devour"],
["ruzi",782,"x1 fights, combats x2"],
["tuzi",811,"x1 look at x2 (intentionally and attentively see)"],
["gibi",813,"x1 conceals, hides x2"],
["gefi",814,"x1 reveals, discloses x2"],
["θixi",815,"x1 shows, displays x2"],
["fofi",821,"x1 is a shadow of x2"],
["gora",822,"x1 shines, radiates light"],
["leti",823,"x1 is a picture, image of x2"],
["ʒuza",824,"x1 is bright, with much light present"],
["geda",825,"x1 is dark, dim, with little light present"],
["suka",830,"x1 is a color"],
["θona",831,"x1 is black"],
["lexa",832,"x1 is gray, grey"],
["faxa",833,"x1 is white"],
["saɣa",835,"x1 is red"],
["nula",839,"x1 is yellow"],
["tisa",841,"x1 is green"],
["feba",843,"x1 is blue"],
["goba",847,"x1 is brown"],
["ʒiva",851,"x1 is beautiful"],
["ʒuŋa",852,"x1 is ugly"],
["pima",862,"x1 is silent"],
["ʃaba",863,"x1 is soft, contra-loud, of little sonic intensity"],
["kuba",864,"x1 is loud, of much sonic intensity"],
["xida",870,"x1 is a flavor, taste"],
["ɣoʒi",871,"x1 tastes, perceives the flavor of x2"],
["ʒiʃa",872,"x1 is delicious, tasty"],
["ʒeka",873,"x1 is sour"],
["lusa",874,"x1 is sweet"],
["neʃa",875,"x1 is bitter"],
["gona",876,"x1 is a smell, odor, aroma"],
["xeta",877,"x1 stinks, emits an unpleasant odor"],
["ŋeʒi",878,"x1 smells, perceives the odor/aroma of x2"],
["rezi",880,"x1 feels, perceives x2 with the tactile sense"],
["boda",881,"x1 feels pain"],
["riga",882,"x1 feels pleasure"],
["zesa",891,"x1 is a heat, warmth"],
["θeʒa",892,"x1 is cold"],
["xama",893,"x1 is cool"],
["pola",894,"x1 is warm"],
["zuma",895,"x1 is hot"],
["ʒoʒa",904,"x1 is an animal"],
["ɣisa",905,"x1 is an insect"],
["ðifa",910,"x1 is an ant, insect of family Formicidae"],
["θoxa",920,"x1 is a bee, member of genus Apis"],
["ɣira",921,"x1 is a butterfly"],
["gexa",923,"x1 is a fly, small winged insect"],
["zuba",924,"x1 is a mosquito"],
["ʒuma",932,"x1 is a snake, reptile of suborder Serpentes or Ophidia"],
["fiva",934,"x1 is a turtle, reptile of order Testudinata"],
["xoma",940,"x1 is a fish"],
["zufa",945,"x1 is a frog, web-footed tailless leaping amphibian"],
["ʒeʃa",948,"x1 is a spider"],
["xeɣa",950,"x1 is a cow/bull, cattle, bovine animal of either sex"],
["beða",951,"x1 is a donkey, ass, Equus asinus"],
["fata",953,"x1 is a goat, animal of genus Capra"],
["pera",954,"x1 is a horse, Equus caballus"],
["taga",955,"x1 is a pig, mammal of family Suidae"],
["sifa",956,"x1 is a sheep, Ovis aries"],
["viʒa",960,"x1 is a bear, animal of Ursidae family"],
["ŋika",961,"x1 is a deer, animal of family Cervidae"],
["loza",962,"x1 is a lion, Felis leo"],
["ʒaɣa",963,"x1 is a tiger, Felis tigris"],
["feza",964,"x1 is a fox, member of genus Vulpes"],
["goka",965,"x1 is a wolf, Canis lupus"],
["ðusa",966,"x1 is a monkey, small primate"],
["seɣa",967,"x1 is a rabbit, animal of family Leporidae"],
["piʃa",970,"x1 is a squirrel, rodent of family Sciuridae"],
["ʃaka",971,"x1 is a mouse"],
["pifa",975,"x1 is a dog, Canis familiaris"],
["luta",977,"x1 is a cat, Felis catus"],
["zota",980,"x1 is a bird, egg-laying feathered animal with wings"],
["xuda",981,"x1 is a chicken"],
["ðiza",982,"x1 is a duck"],
["naza",983,"x1 is a turkey, Meleagris gallopavo"],
["bala",993,"x1 is wild, feral, untamed"],
["ŋiʃi",995,"x1 is a nest, den, lair, self-made house of animal x2"],
["beza",1000,"x1 is a plant, a vegetable life-form"],
["θala",1001,"x1 is a tree"],
["tela",1002,"x1 is a bush, shrub"],
["maʒa",1003,"x1 is a grass, monocotyledonous plant of family Gramineae"],
["ŋaga",,"x1 is a seed of grain, cereal"],
["xefa",1006,"x1 is a weed, unwanted plant"],
["ɣuʃa",1010,"x1 is a garden"],
["kasi",1011,"x1 plants x2; x1 puts seeds of x2 in soil"],
["bovi",1012,"x1 harvests, reaps x2"],
["viva",1022,"x1 is a flower"],
["vezi",1023,"x1 is a fruit of x2"],
["naʒi",1024,"x1 is a leaf of x2"],
["nesi",1025,"x1 is a nut, hard-shelled fruit/seed with separable shell and kernel of x2"],
["zati",1027,"x1 is a root of (a plant) x2"],
["xuzi",1028,"x1 is a seed of x2"],
["nepa",,"x1 is an apple fruit of genus Malus"],
["fuda",,"x1 is a banana fruit of genus Musa"],
["muza",,"x1 is a mandarin, tangerine fruit of sp. Citrus reticulata"],
["goga",,"x1 is an orange fruit of Citrus sinensis / related spp."],
["bosa",1067,"x1 is a mint, plant of family Labiatae"],
["laba",,"x1 is a rice seed of sp. Oryza sativa"],
["mapa",,"x1 is a wheat seed of sp. Triticum aestivum"],
["fiɣa",,"x1 is a bean, lima, snap seed of genus Phaseolus or similar"],
["fuba",,"x1 is a potato tuber of sp. Solanum tuberosum"],
["moŋi",,"x1 is a tuber of plant x2"],
["keʃa",,"x1 is a tomato berry of genus Lycopersicon"],
["xova",1101,"x1 is a world"],
["ŋuða",1110,"x1 is an earth, terra firma contrasted with sea and heaven"],
["θila",1111,"x1 is a sea, ocean"],
["dima",1120,"x1 is a weather"],
["bota",1121,"x1 is a cloud"],
["pilo",1125,"lightning"],
["poba",1131,"x1 is a star"],
["sepo",1132,"storm "],
["saro",1134,"thunder "],
["mogo",1137,"it is windy"],
["bila",1161,"x1 is a beach, shore "],
["puɣa",1162,"x1 is a cave"],
["buza",1164,"x1 is a desert"],
["ŋaba",1165,"x1 is a field, unbroken expanse of land"],
["ɣixa",1166,"x1 is a forest"],
["ɣoŋa",1167,"x1 is a hill, smaller than a mountain"],
["ðeba",1168,"x1 is an island"],
["gupa",1169,"x1 is a lake"],
["riɣa",1170,"x1 is a mountain"],
["nada",1171,"x1 is a river"],
["foða",1173,"x1 is a valley"],
["niʒa",1202,"x1 is a knife"],
["kaða",1205,"x1 is a saw (tool)"],
["ɣeza",1206,"x1 is scissors"],
["defa",1209,"x1 is a spear, lance"],
["θafa",1210,"x1 is a sword"],
["ɣeða",1211,"x1 is a shield"],
["puva",1212,"x1 is an arrow, sharp-tipped shaft shot from a bow"],
["ŋara",1213,"x1 is a bow for arrows"],
["doka",1215,"x1 is a gun, ballistic weapon"],
["ŋala",1218,"x1 is a cage"],
["nuʒa",1219,"x1 is a fence, outdoor barrier supported by posts"],
["liʃa",1220,"x1 is a hook"],
["fefa",1221,"x1 is a net"],
["dona",1222,"x1 is a screen, mesh"],
["miʃa",1223,"x1 is a trap"],
["tima",1227,"x1 is a fork, instrument with 2+ prongs for picking up something"],
["ɣega",1228,"x1 is a hammer"],
["vika",1230,"x1 is a spoon"],
["ɣexa",1240,"x1 is a wire, long thread-like piece of metal"],
["fuɣa",1244,"x1 is a brush"],
["θora",1245,"x1 is a comb"],
["kusa",1246,"x1 is a button (e.g. on a shirt)"],
["ðixa",1247,"x1 is a chain, connected series of rings or links"],
["zapa",1252,"x1 is a cover, thing put onto or extended over something else"],
["pura",1256,"x1 is a candle"],
["suʒa",1257,"x1 is a lamp"],
["deda",1259,"x1 is a mirror"],
["gosa",1269,"x1 is a pipe, a hard tube for transporting liquid"],
["tiʃa",1281,"x1 is a coin"],
["nasi",1286,"x1 is a key, metal device for operating lock x2"],
["ʃuva",1290,"x1 is a lock, device for securing doors"],
["bega",1291,"x1 is a machine, device with moving parts"],
["tova",1300,"x1 is a container"],
["lila",1303,"x1 is a bottle"],
["ɣafa",1304,"x1 is a bowl, deep round dish"],
["vava",1305,"x1 is a box, rigid rectangular receptacle"],
["zava",1306,"x1 is a bucket, pail"],
["mela",1307,"x1 is a can, presealed metal container, tin"],
["ŋeŋa",1310,"x1 is a jar, jug, big wide-mouthed bottle"],
["sopa",1314,"x1 is a pot, deep round vessel"],
["toma",1315,"x1 is a sack, bag"],
["koza",1342,"x1 is a chair, furniture for one person to sit on"],
["ʒosa",1346,"x1 is a table, piece of furniture with flat top"],
["giza",1404,"x1 is a leather, prepared hide"],
["θuna",1410,"x1 is a needle"],
["θaga",1415,"x1 is a thread"],
["vega",1416,"x1 is a string, thicker than thread and thinner than rope"],
["fika",1417,"x1 is a rope"],
["supi",1420,"x1 sews x2"],
["ðepi",1425,"x1 wears, has a garment x2 on the body"],
["taɣa",1430,"x1 is a hat"],
["ŋoka",1441,"x1 is a belt"],
["zuʒa",1442,"x1 is a glove"],
["bika",1450,"x1 is a coat, heavy outer garment with sleeves"],
["ŋona",1452,"x1 is a dress, a garment that combines bodice and skirt"],
["vema",1453,"x1 is a shirt"],
["fiba",1460,"x1 is pants, trousers"],
["guna",1470,"x1 is a shoe"],
["ŋaʃa",1481,"x1 is a pocket"],
["saka",1485,"x1 is a blanket, large piece of soft material used as a cover"],
["musa",1487,"x1 is a rug"],
["guma",1501,"x1 is a building, edifice, structure with walls and roof"],
["puʒa",1510,"x1 is a roof"],
["kira",1513,"x1 is a wall"],
["rafa",1514,"x1 is a window"],
["viza",1515,"x1 is a door"],
["ʃeða",1520,"x1 is a fireplace, hearth"],
["sava",1530,"x1 is a room, a distinct segment of a building"],
["sosa",1535,"x1 is a kitchen"],
["sela",1550,"x1 is a house, a free-standing man-made dwelling-building"],
["ʃuði",1556,"x1 resides, dwells, lives in x2"],
["vila",1557,"x1 is a camp, bivouac, temporary shelter"],
["fiʒa",1570,"x1 is a school"],
["siva",1580,"x1 is a store, shop, boutique"],
["lava",1590,"x1 is a bridge"],
["sida",1593,"x1 is a board"],
["zoða",1594,"x1 is a brick, hard clay block"],
["tiga",1595,"x1 is a farm"],
["ɣeva",1596,"x1 is a park, public outdoor area"],
["duza",1598,"x1 is a market, place of many sellers, usually outdoors or semi-enclosed"],
["fota",1622,"x1 is a tax"],
["fada",1631,"x1 is an army"],
["xosi",1635,"x1 is in war with x2"],
["keŋa",1650,"x1 is a law, a rule enforced by a government"],
["ziva",1654,"x1 is a crime, an illegal act"],
["suɣi",1670,"x1 controls x2"],
["poŋu",1671,"x1 permits, allows, lets (someone) x3 to do (something) x2"],
["bagu",1672,"x1 prohibits, forbids (someone) x3 to do (something) x2"],
["ŋeba",1675,"x1 is a rule, regulation"],
["tuɣa",1678,"x1 is free (at liberty)"],
["zine",1680,"x1 punishes x2 for x3 with x4"],
["kaxe",1681,"x1 rewards x2 for x3 with x4"],
["guge",1701,"x1 exchanges, trades, swaps x2 with x3 for x4"],
["ŋema",1705,"x1 is money"],
["difa",1709,"x1 is a company, a business organization, firm"],
["seza",1715,"x1 is rich, wealthy"],
["vida",1716,"x1 is poor, impoverished"],
["ŋaxi",1731,"x1 keeps, retains, goes on having x2"],
["moʒi",1735,"x1 provides, supplies, furnishes x2"],
["ʃozu",1739,"x1 steals, takes x2 in a criminal way from x3"],
["kova",1756,"x1 is cheap, inexpensive"],
["ʃima",1757,"x1 is expensive, costly"],
["vevu",1760,"x1 borrows x2 from x3"],
["vefa",1784,"x1 is greedy"],
["toki",1795,"x1 is a job, employment of x2"],
["ɣiba",1802,"x1 is magic, sorcery"],
["diɣa",1810,"x1 is god, diety"],
["tara",1831,"x1 is a ghost, manifestation of dead person's soul"],
["zaga",1840,"x1 is heaven"],
["vura",1850,"x1 is holy, sacred"],
["viɣi",1901,"x1 has an opinion about x2; x1 considers, thinks x2"],
["raki",1909,"x1 is suitable, proper, fit, fitting, appropriate to x2"],
["vuxi",1910,"x1 is fair, just, equitable to x2"],
["tobi",1920,"x1 prefers, favors x2"],
["dabi",1925,"x1 believes in, accept as true x2"],
["gura",1935,"x1 is simple"],
["ʃexa",1937,"x1 is complex"],
["ʒoza",1939,"x1 is clear, plain, easy to see/understand"],
["zeza",1951,"x1 is real, actual"],
["lasa",1953,"x1 is imaginary"],
["guʒi",1962,"x1 is a chief, main, primary, principal of x2"],
["ɣoʃa",1964,"x1 is normal, ordinary, usual"],
["vaða",1965,"x1 is strange, weird, unusual, peculiar"],
["mibi",1980,"x1 seeks, searches for, looks for x2"],
["belu",1984,"x1 chooses, picks out, selects x2 from x3"],
["pubi",2002,"x1 thinks x2"],
["kina",2005,"x1 is intelligent"],
["dara",2006,"x1 is stupid, unintelligent"],
["nimi",2023,"x1 is important to x2"],
["xagi",2027,"x1 considers, ponders, contemplates, thinks about (intensively) x2"],
["mani",2031,"x1 has a desire, longing of x2"],
["ridi",2033,"x1 intends, measn to, does deliberately, has x2 as a purpose"],
["fuŋi",2039,"x1 notices, observes x2"],
["dapu",2044,"x1 learns x2 from x3"],
["muða",2055,"x1 is an idea, concept, thought-bundle"],
["fupi",2060,"x1 feels, experiences an emotion, sentiment x2"],
["masa",2063,"x1 is upset, agitated"],
["fava",2064,"x1 is angry"],
["θuxa",2065,"x1 is boring, tedious"],
["kipi",2067,"x1 loves x2"],
["bevi",2068,"x1 hates x2"],
["vuɣa",2071,"x1 is brave"],
["nora",2072,"x1 is cowardly"],
["θepi",2073,"x1 fears, is afraid of x2"],
["ʒeɣi",2075,"x1 hopes for x2"],
["riʃa",2076,"x1 worries, feels anxiety"],
["ʃora",2107,"x1 is funny, comical"],
["ŋida",2108,"x1 is wise"],
["soga",2109,"x1 is foolish"],
["siʃa",2116,"x1 is cautious, prudent, careful"],
["ɣaŋu",2120,"x1 forgives, pardons x2 for x3"],
["lari",2122,"x1 guards, monitors, watches over x2"],
["θuŋi",2123,"x1 guides, leads x2"],
["ŋaŋa",2126,"x1 is lonely, feels undesirable solitude"],
["ruga",2129,"x1 is nice, kind, affable"],
["rapi",2131,"x1 is pity, feels compassion toward, feels sorry for x2"],
["siŋi",2132,"x1 pretends, acts, feigns x2"],
["poʒi",2133,"x1 deserves, merits, is worthy of x2"],
["latu",2134,"x1 revenges x2 for x3 (retribution, getting even)"],
["mixi",2137,"x1 serves, provides service to x2"],
["ɣati",2138,"x1 surprises, startles x2"],
["tani",2141,"x1 trusts x2"],
["ðuɣi",2143,"x1 tricks x2 (chicanery)"],
["refu",2150,"x1 agrees with x2 on x3"],
["ʃiʃu",2153,"x1 protects, defends x2 from x3"],
["meði",2154,"x1 attacks x2"],
["xuri",2156,"x1 interferes, hinders x2"],
["ðoga",2202,"x1 is a language, the verbal communication technique of a people"],
["rumi",2204,"x1 is a meaning, semantic content of (a word) x2"],
["puku",2205,"x1 is a message, batch of transmitted information from x2 to x3"],
["ðuti",2210,"x1 admits, confesses x2"],
["ʒifu",2212,"x1 asks, inquires x2 from x3"],
["rani",2213,"x1 call, summons x2"],
["ʒoŋu",2217,"x1 discusses, talks about x2 with x3"],
["zamu",2221,"x1 lies, utters a known falsehood to x2 about x3"],
["gudu",2223,"x1 requests, asks for x2 from x3"],
["vuki",2225,"x1 speaks, talks to x2"],
["meku",2227,"x1 thanks, expresses gratitude toward x2 for x3"],
["xasu",2228,"x1 warns x2 about x3"],
["nidu",2229,"x1 debates, argues, discusses the pros and cons of x2 with x3"],
["ɣari",2240,"x1 reads x2"],
["ʒomi",2241,"x1 writes x2"],
["roða",2248,"x1 is a book"],
["xiga",2250,"x1 is a page, one side of a sheet of paper in a book"],
["soŋu",2261,"x1 is a letter, a message written and mailed from x2 to x3"],
["reʃa",2265,"x1 is a pen, writing tool that uses ink"],
["ʒaʃu",2272,"x1 answers, replies x2 to a question or argument x3"],
["xedu",2280,"x1 questions, queries x2 about x3"],
["luŋa",2283,"x1 is a map, drawing of planet's surface"],
["rovi",2285,"x1 is a voice of x2"],
["kugi",2293,"x1 is a name of x2"],
["ʒada",2297,"x1 is a secret"],
["loŋa",2300,"x1 plays, recreates, frolics"],
["nuta",2315,"x1 is a music"],
["noki",2317,"x1 sings x2"],
["ʒofa",2320,"x1 is a bell"],
["ʃeba",2321,"x1 is a drum, hollow musical instrument beaten with sticks or hands"],
["ðeda",2322,"x1 is a guitar"],
["kiɣa",2323,"x1 is a horn, makes noise when blown"],
["ʒuka",2324,"x1 is a piano"],
["giri",2343,"x1 is a story about x2"],
["seta",2355,"x1 is a game, a rule-governed system of competitive amusement"],
["leʒa",2365,"x1 is a ball, spheroidal plaything"],
["taʒu",2366,"x1 wins, triumphs in a competition x2 with x3"],
["faɣu",2367,"x1 loses, is defeated in a competition x2 with x3"],
["rasi",2404,"x1 is equal to x2"],
["ɣeli",2406,"x1 is similar to x2"],
["raba",2412,"x1 changes, becomes different, varies"],
["raru",2424,"x1 seems, appears to be, gives the impression of x2 to x3"],
["puðu",2426,"x1 resembles x2 to x3"],
["foʒi",2600,"x1 is a quantity, amount, number, magnitude of x2"],
["fega",2601,"x1 is a number, numeral, a word or symbol indicating quantity"],
["suti",2620,"x1 adds, appends itself, joins so as to cause an increase to x2"],
["teɣi",2621,"x1 subtracts, removes itself from x2"],
["meŋa",2622,"x1 increases, becomes greater in quantity"],
["dira",2623,"x1 decreases, becomes or makes lesser in quantity"],
["kexi",2662,"x1 is a section, segment, a part somehow different/separated from others of x2"],
["xazi",2665,"x1 is a bundle, bunch, group of things tied or grouped together of x2"],
["nota",2681,"x1 is dense, of much density, concentrated, thick, intense"],
["fama",2682,"x1 is rarefied, tenuous, diffuse, dilute, sparse, wispy"],
["novi",2731,"x1 is sufficient for x2 (=> enough, sufficiently)"],
["posi",2732,"x1 is excessive for x2 (=> too much, excessively)"],
["funi",2733,"x1 is insufficient for x2 (=> too little, insufficiently)"],
["beka",2802,"x1 is huge, enormous, gigantic"],
["fona",2805,"x1 is tiny, minuscule"],
["sefa",2807,"x1 expands, grows, becomes larger"],
["xepa",2808,"x1 shrinks, contracts, becomes smaller"],
["ʒiɣi",2811,"x1 is far from x2; at / to a great distance"],
["ɣeri",2812,"x1 is near to x2; at / to a little distance"],
["boni",2816,"x1 is a place, location of x2"],
["ðuxa",2821,"x1 is long, of much length"],
["ɣuda",2822,"x1 is short, of little length"],
["fixa",2826,"x1 is wide, broad, of big space between objects"],
["dava",2827,"x1 is narrow, of little width, of small space between objects"],
["ʒoða",2831,"x1 is thick, fat, large from one surface to the opposite surface"],
["zuga",2832,"x1 is thin, slender, small from one surface to the opposite surface"],
["fima",2836,"x1 is high, tall, of much height"],
["ruða",2837,"x1 is low, short, not tall, of little height"],
["θita",2841,"x1 is deep, profound, of much depth"],
["gaga",2842,"x1 is shallow, of little depth"],
["tozi",2853,"x1 is a space, room for x2"],
["ʃogi",2860,"x1 is a front of x2"],
["suzi",2861,"x1 is a rear, back part of x2"],
["θiŋi",2862,"x1 is a side, flank, lateral area of x2"],
["lumi",2863,"x1 is a middle, center of x2"],
["ʒoni",2864,"x1 is a top, peak of x2"],
["xopi",2865,"x1 is a bottom of x2"],
["nili",2866,"x1 is an edge of x2"],
["fosi",2870,"x1 finds, discovers the location of x2"],
["ʃuri",2871,"x1 misplaces, loses, becomes unable to find x2"],
["ŋeri",2900,"x1 is a direction, orientation of motion of x2"],
["ðola",2903,"x1 is right, right-hand"],
["deza",2904,"x1 is left, left-hand"],
["giŋa",2920,"x1 is away from this or that place"],
["θupa",2921,"x1 is back to previous place / condition"],
["neɣi",2930,"x1 is a source, origin of x2"],
["foxi",2931,"x1 is a route, path, course of x2"],
["gaʃa",2941,"x1 is a city"],
["ðuŋa",2942,"x1 is a village"],
["ŋaɣi",2950,"x1 is apart from x2"],
["pomi",2951,"x1 is together with x2"],
["ʒola",2952,"x1 is alone"],
["ʃira",3000,"x1 travels"],
["vebi",3003,"x1 leaves, departs, goes away from x2"],
["ðimi",3010,"x1 sends, causes x2 to go, dispatches, transmits"],
["ŋeni",3014,"x1 drives, impels, propels x2"],
["roxu",3030,"x1 aims x2 at x3; x1 points, directs x2 toward x3"],
["ʃifu",3031,"x1 avoids, evades, keeps away from x3"],
["vaɣi",3033,"x1 captures, seizes x2"],
["leði",3034,"x1 carries, moves x2 while supporting"],
["kuŋi",3036,"x1 enters, goes into x2"],
["sega",3039,"x1 gathers, comes together"],
["lidi",3042,"x1 reaches, extends as far as x2"],
["xuʃa",3044,"x1 remains, stays"],
["sexi",3046,"x1 retrieves, fetches x2"],
["tazi",3047,"x1 returns, goes back to previous place/condition x2"],
["gisi",3048,"x1 rides x2; x1 sits/perches in/on a vehicle/horse x2 and travels"],
["luxi",3052,"x1 turns, sends x2 in a different direction; x1 diverts x2"],
["sona",3053,"x1 turns, rotates, revolves"],
["xusi",3073,"x1 is on a journey, trip, voyage to x2"],
["ɣima",3106,"x1 is a boat"],
["roka",3114,"x1 is a cart, carriage, wagon, wheeled vehicle not self-propelled"],
["dena",3118,"x1 is a car, automobile, wheeled motor vehicle"],
["ðata",3136,"x1 is a road"],
["ŋiɣa",3138,"x1 is a street"],
["giɣi",3154,"x1 is a motor, engine of x2"],
["godi",3156,"x1 is a wheel of x2"],
["luda",3200,"x1 is a time, the dimension/continuum of past-present-future"],
["tena",3204,"x1 was//happened long ago, in the far past"],
["bapa",3205,"x1 was/happened recently, in the near past"],
["rixa",3207,"x1 will be/happen soon, in the near future"],
["ɣiða",3208,"x1 will be/happen eventually, in the far future"],
["zona",3212,"x1 is young, of little age, having existed/lived for a brief time"],
["ʃuza",3213,"x1 is old, of much age, having existed/lived for a long time"],
["soʒa",3214,"x1 is new, novel, recent, having been known for a brief time"],
["gana",3215,"x1 is old, of long standing, having been known for a long time"],
["keka",3225,"x1 is frequent (=> often)"],
["roŋa",3226,"x1 is rare (=> seldom)"],
["ʒiba",3231,"x1 is long, of much duration"],
["zema",3232,"x1 is short, brief, of little duration"],
["pupa",3237,"x1 pauses, hesitates, suspends temporarily"],
["mera",3241,"x1 is a moment, an instant"],
["geɣa",3245,"x1 is prior to the time mentioned (=> already)"],
["gapa",3246,"x1 is/happens until the time mentioned (=> still, yet)"],
["puma",3250,"x1 is early, premature"],
["soza",3252,"x1 is late, tardy"],
["doza",3254,"x1 rushes, hurries, hastens"],
["ðaxi",3255,"x1 waits for, awaits x2"],
["deta",3257,"x1 is quick, rapid, swift, with much speed"],
["vora",3258,"x1 is slow, with little speed"]
]

