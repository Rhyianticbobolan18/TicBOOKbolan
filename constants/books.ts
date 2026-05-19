import type { ImageSourcePropType } from "react-native";

const ASSET_BASE =
  "https://raw.githubusercontent.com/Rhyianticbobolan18/TicBOOKbolan/12616bb4ab958603d2cc650c8cf75b50d7d8f337";

export type Book = {
  id: string;
  title: string;
  author: string;
  genre: string;
  cover: ImageSourcePropType;
  description: string;
  chapters: Chapter[];
};

export type Chapter = {
  id: string;
  title: string;
  content: string;
};

export const books: Book[] = [
  {
    id: "1",
    title: "The Whispering Woods",
    author: "Akash Sonawane",
    genre: "Dark Fantasy Adventure",
    cover: {
      uri: `${ASSET_BASE}/assets/images/bookcovers/thewhisperingwoods.png`,
    },
    description:
      "Deep within the forgotten forests of Eldergrove lies the TicBOOK, an ancient artifact capable of bringing stories to life. When young librarian Elias Thorne discovers whispers hidden between its pages, he is drawn into a dangerous journey through cursed woods, living maps, and secrets buried beneath centuries of silence.",
    chapters: [
      {
        id: "1",
        title: "The Humming Shelf",
        content:
          "The library breathed at night.\n\nElias Thorne had noticed it years ago, though nobody else ever seemed to hear it. When the final lanterns dimmed and the heavy oak doors locked themselves with a hollow thud, the shelves began to hum softly like distant voices trapped beneath water.\n\nHe moved carefully between the endless rows of books, carrying a brass lantern whose flame danced nervously whenever he approached the oldest wing. Dust floated through the air like pale snow. Somewhere high above, the rafters creaked.\n\nAt the center of the forbidden archive stood a single shelf carved from black cedar. Unlike the others, this shelf contained only one book.\n\nThe TicBOOK.\n\nIts cover looked alive beneath the lantern glow. Veins of silver stretched across the leather surface, pulsing faintly as though a heart beat beneath the spine.\n\nElias swallowed hard.\n\nHis mentor had warned him never to touch it.\n\n'Every story is a door,' Master Corvin once whispered. 'And not every door should be opened.'\n\nBut curiosity had become heavier than fear.\n\nElias reached forward slowly. The moment his fingers brushed the cover, warmth spread through the room. The shelves vibrated. Thousands of pages rustled together like wings.\n\nThen the book opened itself.\n\nBlue fire spilled from the pages.\n\nSymbols crawled across the parchment, rearranging into words he had never learned and yet somehow understood.\n\nThe woods are waking.\n\nA violent gust swept through the archive. Elias stumbled backward as shadows twisted between the shelves. For one terrible second, he thought he saw faces forming inside the darkness.\n\nThen silence returned.\n\nOnly the book remained open.\n\nAnd somewhere far beyond the library walls, something ancient had begun to stir.",
      },
      {
        id: "2",
        title: "Footsteps in the Stacks",
        content:
          "Elias closed the book halfway, but the humming refused to stop.\n\nIt echoed deeper now, vibrating through the wooden floorboards beneath his boots. The lantern flame dimmed until the room was painted in blue shadows.\n\nThen came the footsteps.\n\nSlow.\n\nMeasured.\n\nToo careful to belong to any ordinary visitor.\n\nElias froze behind a shelf, clutching the book against his chest. The sound moved through the archive with impossible patience, never hurried, never uncertain.\n\nSomeone knew exactly where they were going.\n\nThe footsteps stopped nearby.\n\nA voice emerged from the dark.\n\n'You opened it.'\n\nElias recognized the voice instantly.\n\nMaster Corvin stepped into the lantern light, though he looked far older than he had that morning. Deep lines shadowed his face, and his gray coat hung heavily from his shoulders.\n\nFor a moment neither of them spoke.\n\nThen Corvin sighed.\n\n'I hoped the book would stay asleep a little longer.'\n\n'What is it?' Elias asked.\n\nCorvin stared at the TicBOOK with visible fear.\n\n'Not a book,' he answered quietly. 'A prison.'\n\nBefore Elias could reply, the shelves behind them shook violently.\n\nBooks tumbled from the walls.\n\nA low growl echoed from somewhere deep within the archive.\n\nAnd between the collapsing shelves, a pair of glowing eyes opened in the dark.",
      },
      {
        id: "3",
        title: "The Living Map",
        content:
          "The next morning arrived pale and cold.\n\nRain drifted against the library windows while Elias sat beside a fire, staring at the open pages of the TicBOOK.\n\nThe text had changed overnight.\n\nWhat was once blank parchment now displayed a sprawling map of forests, rivers, mountains, and ruined villages. Tiny lights flickered across the page like moving stars.\n\nAt the center pulsed a single red mark.\n\nThe Whispering Woods.\n\nElias touched the map carefully.\n\nThe ink moved beneath his fingertips.\n\nBranches twisted across the parchment, reshaping paths in real time. Rivers bent like living serpents.\n\n'It's changing,' Elias whispered.\n\nMaster Corvin nodded grimly.\n\n'The woods are alive. They respond to the book.'\n\nOutside, thunder rolled through the valley.\n\nCorvin leaned closer to the map.\n\n'Long ago, storytellers sealed something beneath those woods. The TicBOOK was created to keep the seal intact.'\n\n'And if it breaks?'\n\nCorvin hesitated.\n\nThe fire crackled loudly between them.\n\n'Every nightmare ever written becomes real.'\n\nThe room fell silent.\n\nThen the map shifted again.\n\nA new symbol appeared near the edge of the forest.\n\nA small black figure.\n\nMoving toward the library.",
      },
      {
        id: "4",
        title: "Lanterns Beneath the Trees",
        content:
          "Night fell before they reached the forest.\n\nDozens of lanterns hung from the branches overhead, swaying gently despite the absence of wind. Their soft golden light stretched endlessly through the trees like a path left behind by ghosts.\n\nElias tightened his cloak.\n\nThe deeper they walked, the quieter the world became.\n\nNo birds.\n\nNo insects.\n\nOnly whispers.\n\nAt first the voices sounded distant, impossible to understand. But soon Elias began hearing fragments.\n\n'Go back...'\n\n'Leave the book...'\n\n'It remembers you...'\n\nThe final whisper made him stop.\n\nCorvin turned sharply.\n\n'What did you hear?'\n\nElias hesitated.\n\nThe voice had sounded familiar.\n\nLike his mother.\n\nBefore he could answer, one of the lanterns exploded overhead.\n\nThe forest plunged into darkness.\n\nAnd something massive moved between the trees.",
      },
    ],
  },
{
  id: "2",
  title: "The Midnight Library",
  author: "Matt Haig",
  genre: "Philosophical Fiction",
  cover: {
    uri: `${ASSET_BASE}/assets/images/bookcovers/themidnightlibrary.png`,
  },
  description:
    "Between life and death exists a library filled with infinite possibilities. Every shelf contains a version of life shaped by different choices, and every page asks the same haunting question: what makes a life truly worth living?",
  chapters: [
    {
      id: "1",
      title: "Between Moments",
      content:
        "The room appeared without warning.\n\nOne second Nora stood in the freezing rain outside her apartment, and the next she found herself beneath endless rows of green shelves stretching into darkness.\n\nThe air smelled of paper, cedar, and rainwater.\n\nA grandfather clock ticked softly nearby, though its hands never moved past midnight.\n\nAt the center desk sat a woman with silver hair and calm eyes.\n\n'Mrs. Elm?' Nora whispered.\n\nHer old school librarian smiled gently.\n\n'Welcome to the Midnight Library.'\n\nNora stared at the shelves surrounding them.\n\nEvery spine glowed faintly.\n\n'Where am I?'\n\n'Between moments,' Mrs. Elm answered. 'Between life and death. Between regret and possibility.'\n\nA heavy book appeared on the desk.\n\nIts cover was gray and cold beneath Nora’s fingers.\n\n'What is this?'\n\n'Your Book of Regrets.'\n\nThe moment she opened it, the room darkened.\n\nEvery sentence inside carried a memory.\n\nEvery page whispered a different version of what could have been.",
    },
    {
      id: "2",
      title: "The Life Not Taken",
      content:
        "Mrs. Elm pulled a blue book from the shelf.\n\n'Would you like to see what happened if you made a different choice?'\n\nNora hesitated.\n\nThen she nodded.\n\nThe library vanished instantly.\n\nMusic flooded her ears.\n\nShe stood onstage beneath bright white lights while thousands of strangers cheered her name. A guitar hung from her shoulder. The vibration of the crowd shook the floor beneath her boots.\n\nHer brother grinned at her from across the stage.\n\nFor one impossible moment, Nora remembered this life completely.\n\nThe tours.\n\nThe songs.\n\nThe interviews.\n\nThe fame.\n\nAnd yet something felt hollow.\n\nAfter the concert ended, she sat alone in a luxury hotel room staring out at a city she barely recognized.\n\nThe silence felt heavier than loneliness.\n\nA knock came at the door.\n\nHer manager stepped inside.\n\n'You okay?' he asked.\n\nNora forced a smile.\n\nBut deep down she already knew.\n\nEven this perfect version of success carried sadness hidden beneath the surface.",
    },
    {
      id: "3",
      title: "The Shape of Regret",
      content:
        "The library returned around her in a rush of cold air.\n\nNora sat trembling at the desk while Mrs. Elm quietly rearranged stacks of books.\n\n'None of them are perfect,' Nora whispered.\n\nMrs. Elm smiled softly.\n\n'No life is.'\n\nNora looked around at the infinite shelves.\n\n'How many are there?'\n\n'As many as your possibilities.'\n\nA sudden sound echoed through the library.\n\nThunder.\n\nSomewhere in the distance, entire shelves began shaking violently.\n\nMrs. Elm’s expression darkened.\n\n'You don’t have forever, Nora.'\n\nOne by one, lights flickered overhead.\n\nThe library was becoming unstable.\n\nNora picked up another book at random.\n\nThis one smelled faintly of ocean salt.\n\nWhen she opened it, sunlight poured from the pages.",
    },
    {
      id: "4",
      title: "The Deep Blue Current",
      content:
        "Waves crashed against the rocks below the research station.\n\nNora blinked against the sunlight as wind tangled through her hair. She wore a thick wetsuit, and around her neck hung an identification card labeled 'Marine Biologist.'\n\nFor the first time in years, she felt calm.\n\nThe ocean stretched endlessly before her.\n\nA colleague waved from the dock.\n\n'Hurry up! We spotted dolphins near the ridge.'\n\nNora laughed before she could stop herself.\n\nThe sound surprised her.\n\nHours later, she floated beneath the water watching silver fish drift through pillars of blue light. Everything felt quiet and weightless.\n\nBut that evening, sitting alone in her cabin, she noticed photographs scattered across the desk.\n\nA husband.\n\nA child.\n\nBoth gone.\n\nGrief existed here too.\n\nDifferent shape.\n\nDifferent story.\n\nSame ache.\n\nNora closed her eyes.\n\nFor the first time, she began to understand.\n\nPain was not proof of failure.\n\nIt was simply part of being alive.",
    },
  ],
},

{
  id: "3",
  title: "Shadow of the Wind",
  author: "Carlos Ruiz Zafon",
  genre: "Gothic Mystery Thriller",
  cover: {
    uri: `${ASSET_BASE}/assets/images/bookcovers/shadowofthewind.png`,
  },
  description:
    "In the hidden corners of a rain-soaked city, a forgotten novel draws a young reader into a labyrinth of secrets, vanished authors, and dangerous truths buried beneath decades of silence.",
  chapters: [
    {
      id: "1",
      title: "The Forgotten Book",
      content:
        "The Cemetery of Forgotten Books slept beneath the city like a dream no one dared to remember.\n\nDaniel followed his father through narrow corridors lined with towering shelves. Dust drifted through beams of pale morning light.\n\n'This place chooses its readers carefully,' his father whispered.\n\nDaniel stopped before a small black book hidden between crumbling volumes.\n\nShadow of the Wind.\n\nThe title shimmered faintly beneath his fingertips.\n\nThe moment he opened the first page, the world around him seemed to hold its breath.\n\nThe story pulled him inward instantly.\n\nEvery sentence felt alive.\n\nEvery chapter carried the strange sensation that someone, somewhere, was watching him read.",
    },
    {
      id: "2",
      title: "Rain on the Avenue",
      content:
        "Rain painted the city silver.\n\nDaniel hurried beneath flickering street lamps, clutching the book beneath his coat. He could not stop thinking about Julian Carax, the mysterious author whose work seemed to vanish from every bookstore in Barcelona.\n\nAt an old shop near Calle Santa Ana, a bookseller narrowed his eyes the moment Daniel mentioned the name.\n\n'Forget that author,' the man muttered.\n\n'Why?'\n\nThe bookseller leaned closer.\n\n'Because someone has been burning every copy they can find.'\n\nLightning flashed beyond the windows.\n\nDaniel felt cold settle beneath his skin.\n\n'Who would do that?'\n\nThe man hesitated.\n\nThen he whispered a single name.\n\n'Laín Coubert.'",
    },
    {
      id: "3",
      title: "The Man in Black",
      content:
        "Daniel saw him for the first time outside the cathedral.\n\nA tall man dressed entirely in black stood motionless beneath the rain.\n\nHis face looked pale and stretched thin like melted wax.\n\nWhen he smiled, Daniel felt his stomach tighten.\n\n'You have the book,' the stranger said softly.\n\nDaniel stepped backward.\n\n'Who are you?'\n\nThe man tilted his head.\n\n'I am a friend of forgotten stories.'\n\nThunder rolled overhead.\n\nThen the stranger extended a gloved hand.\n\n'Give me the novel, and you may walk away safely.'\n\nDaniel ran.\n\nBehind him, footsteps echoed calmly through the rain.",
    },
    {
      id: "4",
      title: "Ashes and Ink",
      content:
        "The apartment smelled of old paper and cigarettes.\n\nFermín Romero de Torres poured coffee into cracked porcelain cups while Daniel spread newspaper clippings across the table.\n\nEvery article carried the same pattern.\n\nDisappearances.\n\nFires.\n\nBroken families.\n\nAnd always the name Julian Carax hidden somewhere beneath the surface.\n\nFermín lit a cigarette nervously.\n\n'Books are dangerous things, my friend,' he said. 'Especially the ones people are desperate to erase.'\n\nOutside, church bells echoed across the rooftops.\n\nDaniel stared at the novel resting beside him.\n\nIts pages seemed darker now.\n\nAlmost alive.\n\nSomewhere beyond the apartment walls, someone was still searching for it.",
    },
  ],
},

{
  id: "4",
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  genre: "Classic Literary Drama",
  cover: {
    uri: `${ASSET_BASE}/assets/images/bookcovers/thegreatgatsby.png`,
  },
  description:
    "On the glittering shores of Long Island, wealth and illusion intertwine beneath endless parties and fading dreams. Behind the music and champagne lies a story of longing, obsession, and the impossible pursuit of the past.",
  chapters: [
    {
      id: "1",
      title: "Green Light",
      content:
        "The bay shimmered beneath the summer night.\n\nNick stood quietly beside the dock while distant jazz music drifted across the water from Gatsby’s mansion.\n\nAt the far end of the shoreline, a single green light burned softly through the darkness.\n\nGatsby stood alone watching it.\n\nHis hand stretched forward slightly, trembling as though reaching toward something invisible.\n\nNick almost called out to him.\n\nBut something about the moment felt sacred.\n\nThe wind carried the scent of salt and champagne.\n\nThen Gatsby lowered his hand.\n\nAnd the light continued glowing beyond the water like a promise too distant to touch.",
    },
    {
      id: "2",
      title: "A House Full of Music",
      content:
        "Every weekend, Gatsby’s mansion transformed into another world.\n\nChampagne towers glittered beneath golden chandeliers while orchestras played through enormous marble halls. Laughter spilled across balconies crowded with strangers.\n\nNobody seemed to know Gatsby.\n\nYet everyone claimed to.\n\n'I heard he once killed a man.'\n\n'No, no. He was a German spy.'\n\nThe rumors moved through the party like smoke.\n\nNick wandered through crowded rooms searching for the mysterious host.\n\nThen he found him standing quietly beside the garden steps.\n\nGatsby smiled warmly.\n\n'I’m glad you came, old sport.'\n\nFor a moment the noise around them disappeared.\n\nBehind Gatsby’s smile, Nick sensed loneliness hidden beneath impossible wealth.",
    },
    {
      id: "3",
      title: "Voices Across the Water",
      content:
        "Daisy Buchanan laughed like music trapped inside crystal.\n\nThe sound lingered long after conversations ended.\n\nGatsby watched her constantly during dinner, though he tried to hide it beneath careful politeness.\n\nNick noticed everything.\n\nThe nervous glance.\n\nThe trembling hands.\n\nThe unbearable hope.\n\nOutside, rain tapped softly against the windows.\n\n'You can repeat the past,' Gatsby insisted later that night.\n\nNick stared at him.\n\n'Can’t repeat the past? Why of course you can.'\n\nBut the words sounded less like confidence and more like prayer.",
    },
    {
      id: "4",
      title: "The Last Summer",
      content:
        "The heat settled heavily over New York.\n\nArguments grew sharper beneath the suffocating sunlight.\n\nBy afternoon, the illusion surrounding Gatsby had begun to crack.\n\nTruth emerged slowly.\n\nThe parties.\n\nThe mansion.\n\nThe fortune.\n\nEverything had been built for one person.\n\nDaisy.\n\nAs evening fell, clouds gathered over the city.\n\nNick watched Gatsby standing alone outside the mansion once more.\n\nThe music had stopped.\n\nThe guests were gone.\n\nOnly silence remained beside the fading green light.",
    },
  ],
},

{
  id: "5",
  title: "1984",
  author: "George Orwell",
  genre: "Political Dystopian Sci-Fi",
  cover: {
    uri: `${ASSET_BASE}/assets/images/bookcovers/1984.png`,
  },
  description:
    "In a society ruled by surveillance and fear, truth is rewritten daily and independent thought is treated as rebellion. One man’s quiet act of defiance begins a dangerous struggle against a world where even memories can no longer be trusted.",
  chapters: [
    {
      id: "1",
      title: "The Watching Screen",
      content:
        "The telescreen watched from the wall without blinking.\n\nWinston Smith kept his face carefully neutral as he entered the apartment. The hallway smelled of boiled cabbage and damp concrete.\n\nAbove him, a giant poster stared down from the ceiling.\n\nBIG BROTHER IS WATCHING YOU.\n\nThe eyes seemed to follow him.\n\nWinston moved quietly toward the window, though he knew privacy no longer existed.\n\nOutside, helicopters drifted between gray apartment towers searching for signs of dissent.\n\nThe city looked exhausted.\n\nSo did its people.\n\nAnd yet somewhere deep inside Winston, a dangerous thought still survived.\n\nWhat if the Party was lying?",
    },
    {
      id: "2",
      title: "Words in the Notebook",
      content:
        "The diary felt heavier than it should.\n\nWinston opened the worn notebook carefully while the telescreen muttered statistics behind him.\n\nHe picked up the pen.\n\nFor several seconds he could not move.\n\nWriting itself had become suspicious.\n\nThought itself had become dangerous.\n\nThen slowly, almost against his own will, the words appeared across the page.\n\nDOWN WITH BIG BROTHER.\n\nHis heartbeat thundered in his ears.\n\nThere was no taking it back now.\n\nEven silence could become evidence.\n\nAnd somewhere beyond the apartment walls, the Thought Police were always listening.",
    },
    {
      id: "3",
      title: "The Girl with Dark Hair",
      content:
        "Winston noticed her again in the Ministry cafeteria.\n\nDark hair.\n\nSharp eyes.\n\nThe red sash of the Junior Anti-Sex League wrapped tightly around her waist.\n\nShe looked dangerous.\n\nNot because she obeyed the Party.\n\nBecause she seemed to understand it too well.\n\nWhen their eyes met briefly across the crowded room, Winston looked away immediately.\n\nFear settled inside him.\n\nDays later, she slipped while passing his desk.\n\nA folded piece of paper landed beside his hand.\n\nHis pulse quickened.\n\nHe waited nearly ten minutes before opening it.\n\nInside were only three words.\n\nI love you.",
    },
    {
      id: "4",
      title: "Room 101",
      content:
        "The cell contained no darkness.\n\nWhite lights burned endlessly overhead, stealing all sense of time. Winston sat motionless while footsteps echoed beyond the steel door.\n\nThen O’Brien entered.\n\n'You knew this would happen,' he said calmly.\n\nWinston tried to speak, but exhaustion hollowed his voice.\n\n'Why?' he whispered.\n\nO’Brien smiled faintly.\n\n'Power is not a means. It is an end.'\n\nThe guards approached.\n\nSomewhere nearby, a man screamed.\n\nWinston’s hands trembled violently as O’Brien leaned closer.\n\n'What happens in Room 101,' he said softly, 'is different for everyone.'\n\nThe door slowly opened behind them.\n\nAnd Winston began to understand what true fear looked like.",
    },
  ],
},
];

export function getBookById(id?: string) {
  return books.find((book) => book.id === id) ?? books[0];
}

export function getChapterById(book: Book, chapterId?: string) {
  return book.chapters.find((chapter) => chapter.id === chapterId) ?? book.chapters[0];
}
