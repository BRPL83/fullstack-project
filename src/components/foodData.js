// Immagini necessarie
import Food1 from '../images/1-gnocchetti-zucca-speck.jpg';
import Food2 from '../images/2-Gnocchi-Bolognew.jpg';
import Food3 from '../images/3-Paccheri.jpg';
import Food4 from '../images/4-Pappardelle-funghi-porcini.jpg';
import Food5 from '../images/5-Ravioli-funghi-Castelmagno.jpg';
import Food6 from '../images/6-Ravioli-Ossobuco.jpg';
import Food7 from '../images/7-Ravioli-Radicchio.jpg';
import Food8 from '../images/8-ravioli-zucca-porcini.jpg';
import Food9 from '../images/9-gnocchi-pomodoro.jpg';
import Food10 from '../images/10-Tagliatelle-Bolognew.jpg';
import Food11 from '../images/11-Tagliatelle-zafferano-speck.jpg';
import Food12 from '../images/12-tonnarelli-bolognese.jpg';
import Food13 from '../images/13-tonnarelli-cacio-pepe.jpg';
import Food14 from '../images/14-tortelloni-PPP.jpg';
import Food15 from '../images/15-trofie-pesto.jpg';
import Food16 from '../images/16-paglia-fieno-salmone.jpg';
import Food17 from '../images/17-mediterranea.jpg';
import Food18 from '../images/18-mediterranea-di-mare.jpg';
import Food19 from '../images/19-Pollo-grigliato-new.jpg';
import Food20 from '../images/20-Polpo-patate-new.jpg';
import Food21 from '../images/21-riviera.jpg';
import Vino1 from '../images/1-Domaine Leroy Musigny Grand Cru.jpg';
import Vino2 from '../images/2-Leroy Domaine d’Auvenay Chevalier-Montrachet Grand Cru.jpg';
import Vino3 from '../images/3-Domaine de la Romanée-Conti Romanée-Conti Grand Cru.jpg';
import Vino4 from '../images/4-Domaine Leflaive Montrachet Grand Cru.jpg';
import Vino5 from '../images/5-Petrus-Pomerol.jpg';
import Vino6 from '../images/6-Barolo Riserva Monfortino di Giacomo Conterno.jpg';

const foodData = [
    {
      id: 1,
      name: "Gnocchetti alla zucca e speck",
      description: "Gli gnocchetti alla zucca e speck sono un piatto squisito preparato con gnocchetti di patate fatti in casa e conditi con una delicata crema di zucca arricchita con dadini di speck croccante. Ingredienti: gnocchi di patate, zucca, speck, burro, panna, formaggio grattugiato.",
      price: 149.45,
      image: Food1
    },
    {
      id: 2,
      name: "Gnocchi alla Bolognese",
      description: "Gli gnocchi alla Bolognese sono preparati con gnocchi freschi e saporita salsa Bolognese fatta in casa, questa pietanza è un'esplosione di gusto in ogni boccone. Ingredienti: gnocchi di patate, carne macinata, pomodoro, cipolla, carota, sedano, vino rosso, aromi e spezie.",
      price: 164.28,
      image: Food2
    },
    {
        id: 3,
        name: "Paccheri allo Scoglio",
        description: "Prelibatezza culinaria che unisce la consistenza avvolgente della pasta, cremosità dei frutti di mare freschi, intenso aroma dell'aglio e dalla dolcezza dei pomodorini. Ingredienti: Paccheri artigianali, frutti di mare, pomodorini, aglio, olio extravergine d'oliva, prezzemolo, sale e pepe qb.",
        price: 263.95,
        image: Food3
      },
      {
        id: 4,
        name: "Pappardelle ai Funghi Porcini",
        description: "Le pappardelle ai funghi porcini sono un piatto toscano tradizionale che combina la pasta fresca fatta in casa con una salsa cremosa arricchita con funghi porcini freschi. Ingredienti: pappardelle fresche, funghi porcini freschi, aglio, prezzemolo, panna, brodo di carne, burro, Parmigiano Reggiano.",
        price: 132.38,
        image: Food4
      },
      {
        id: 5,
        name: "Ravioli con Castelmagno",
        description: "Favolosi ravioli fatti in casa sono ripieni di una deliziosa miscela di funghi porcini e formaggio Castelmagno, il tutto condito con una leggera salsa al burro e salvia. Ingredienti: pasta all'uovo, funghi porcini, formaggio Castelmagno, burro, salvia, Parmigiano Reggiano.",
        price: 149.86,
        image: Food5
      },
      {
        id: 6,
        name: "Ravioli Ossobuco con Polenta",
        description: "Ravioli artigianali sono farciti con un ripieno di carne di vitello brasata, aromi mediterranei e una crema di ossobuco. Ingredienti: pasta all'uovo, carne di vitello, sedano, carota, cipolla, vino bianco, brodo di carne, prezzemolo, scorza di limone, burro, formaggio grattugiato.",
        price: 153.72,
        image: Food6
      },
      {
        id: 7,
        name: "Ravioli Radicchio con Pesto",
        description: "Pasta fresca e radicchio rosso. Il radicchio, cotto lentamente fino a raggiungere una morbidezza deliziosa, è abbinato a una ricca salsa al burro e salvia, creando un equilibrio perfetto di dolcezza e robustezza. Ingredienti: pasta all'uovo, radicchio rosso, cipolla, burro, salvia, formaggio grattugiato.",
        price: 135.69,
        image: Food7
      },
      {
        id: 8,
        name: "Ravioli Zucca Porcini",
        description: "Combinazione di zucca dolce e funghi porcini terrosi, racchiusi in una sottile sfoglia di pasta all'uovo, piatto dal sapore ricco e avvolgente. La salsa al burro e salvia completa questo piatto con un tocco di eleganza. Ingredienti: pasta all'uovo, zucca, funghi porcini, burro, salvia, Parmigiano Reggiano.",
        price: 140.15,
        image: Food8
      },
      {
        id: 9,
        name: "Gnocchi al Pomodoro",
        description: "Gnocchi di patate, morbidi e delicati, sono conditi con una salsa fresca al pomodoro. Questo piatto semplice ma delizioso è perfetto per soddisfare i desideri di comfort food. Ingredienti: gnocchi di patate, pomodoro maturo, aglio, basilico fresco, olio d'oliva, sale, pepe.",
        price: 116.33,
        image: Food9
      },
      {
        id: 10,
        name: "Tagliatelle alla Bolognese",
        description: "Tagliatelle abbinate a una salsa Bolognese ricca e saporita, preparata con carne macinata, pomodoro e spezie. Questo piatto soddisfa i palati più esigenti. Ingredienti: tagliatelle all'uovo, carne macinata, pomodoro, cipolla, carota, sedano, vino rosso, aromi e spezie.",
        price: 138.28,
        image: Food10
      },
      {
        id: 11,
        name: "Tagliatelle Zafferano, Speck",
        description: "Tagliatelle fresche sono arricchite con lo zafferano. Il gusto delicato dello zafferano si sposa alla perfezione con il sapore intenso dello speck, creando un piatto che soddisfa sia il palato che gli occhi. Ingredienti: tagliatelle all'uovo, zafferano, speck, panna, Parmigiano Reggiano, prezzemolo.",
        price: 176.87,
        image: Food11
      },
      {
        id: 12,
        name: "Tonnarelli alla Bolognese",
        description: "I tonnarelli alla Bolognese sono un'autentica delizia italiana. La pasta fresca è condita con una salsa Bolognese ricca e succulenta, preparata con carne macinata, pomodoro e aromi mediterranei. Ingredienti: tonnarelli all'uovo, carne macinata, pomodoro, cipolla, carota, sedano, vino rosso, spezie.",
        price: 152.41,
        image: Food12
      },
      {
        id: 13,
        name: "Tonnarelli Cacio Pepe",
        description: "La pasta fresca è condita con una salsa cremosa di pecorino romano e pepe nero macinato fresco. Questo piatto esalta la semplicità degli ingredienti di alta qualità, offrendo un'esperienza culinaria autentica e appagante. Ingredienti: tonnarelli all'uovo, pecorino romano, pepe nero.",
        price: 145.56,
        image: Food13
      },
      {
        id: 14,
        name: "Tortelloni PPP",
        description: "I tortelloni PPP sono un tripudio di sapori italiani. Questi grandi tortelloni sono ripieni di una deliziosa combinazione di pere, pecorino e noci, creando un equilibrio armonioso tra dolcezza, sapore e croccantezza. Ingredienti: pasta all'uovo, pere, pecorino romano, noci, burro, salvia.",
        price: 135.99,
        image: Food14
      },
      {
        id: 15,
        name: "Trofie al Pesto",
        description: "Le trofie fresche sono condite con una salsa al pesto fragrante, preparata con basilico fresco, pinoli, aglio, Parmigiano Reggiano e olio extravergine di oliva. Ingredienti: trofie di semola di grano duro, basilico fresco, pinoli, aglio, Parmigiano Reggiano, olio extravergine di oliva.",
        price: 112.62,
        image: Food15
      },
      {
        id: 16,
        name: "Paglia e Fieno al Salmone",
        description: "Tradizione italiana. Le tagliatelle paglia e fieno, realizzate con una combinazione di pasta bianca e verde, sono condite con una delicata crema di salmone, panna e prezzemolo fresco. Ingredienti: tagliatelle all'uovo bianche e verdi, salmone fresco, panna, prezzemolo.",
        price: 168.55,
        image: Food16
      },
      {
        id: 17,
        name: "Insalata Mediterranea",
        description: "Con pomodori ciliegini, olive nere, cetrioli, peperoni, cipolla rossa, feta, origano fresco e condita con olio extravergine di oliva e a.balsamico. Ingredienti: insalata mista, pomodori ciliegini, olive nere, cetrioli, peperoni, cipolla rossa, feta, origano fresco, olio extravergine di oliva, a.balsamico.",
        price: 78.77,
        image: Food17
      },
      {
        id: 18,
        name: "Insalata Mediterranea di Mare",
        description: "Sapori marini freschi e deliziosi. Leggero e gustoso che porta il sapore del Mediterraneo direttamente al tuo piatto. Ingredienti: insalata mista, gamberetti, calamari, cozze, pomodorini, olive nere, cetrioli, peperoni, cipolla rossa, prezzemolo fresco, olio extravergine di oliva, succo di limone.",
        price: 98.93,
        image: Food18
      },
      {
        id: 19,
        name: "Pollo Grigliato",
        description: "E' un piatto fresco e nutriente che soddisfa il palato e mantiene leggero il pasto. Un'opzione salutare e gustosa per chi ama mangiare bene senza rinunciare al sapore. Ingredienti: insalata mista, petto di pollo grigliato, pomodorini, cetrioli, carote, mais, uova sode, avocado, formaggio feta, limone.",
        price: 150.32,
        image: Food19
      },
      {
        id: 20,
        name: "Polpo Patate e Pomodorini",
        description: "E' un classico della cucina mediterranea, sin da subito apprezzato per la sua freschezza e semplicità. Un piatto leggero e saporito che porta il sapore del mare direttamente sulla tua tavola. Ingredienti: polpo, patate, sedano, cipolla rossa, prezzemolo, olio extravergine di oliva, limone, sale, pepe.",
        price: 170.43,
        image: Food20
      },
      {
        id: 21,
        name: "Riviera",
        description: "Gusto della costa mediterranea che stimolano i sensi. Sapori e colori che ti trasporterà direttamente sotto il sole della Riviera. Ingredienti: lattuga, rucola, pomodorini ciliegia, olive nere, cipolla rossa, cetrioli, peperoni, tonno sott'olio, uova sode, olio extravergine di oliva, aceto balsamico.",
        price: 148.54,
        image: Food21
      },
      {
        id: 22,
        name: "Domaine Leroy Musigny Grand",
        description: "Vino rosso di altissima qualità, prodotto nella regione della Borgogna. Questo vino eccelso e pregiato è molto noto per la sua grande complessità aromatica e la sua eleganza ineguagliabilmente sensorial. Una vera e propria esperienza sensoriale che incanterà e delizierà i palati più raffinati.",
        price: 1365.36,
        image: Vino1
      },
      {
        id: 23,
        name: "Leroy Domaine d’Auvenay C.",
        description: "Delizia il tuo palato con il Vino bianco di eccezionale qualità, prodotto nell'incantevole regione della Borgogna. Il risultato è un vino ricco e complesso, con aromi di frutta tropicale, agrumi indimenticabili, vaniglia e spezie, una freschezza vibrante e una struttura elegante.",
        price: 886.94,
        image: Vino2
      },
      {
        id: 24,
        name: "Domaine de la Romanée-Conti R.",
        description: "Vino rosso leggendario, considerato uno dei migliori al mondo. Prodotto nell'incantevole regione della Borgogna. Rinomato ed apprezzato per la sua straordinaria complessità aromatica, con note di frutti rossi intensi, spezie varie, terreno umido e fiori raccolti nella miglior stagione.",
        price: 675.83,
        image: Vino3
      },
      {
        id: 25,
        name: "Domaine Leflaive Montrachet",
        description: "Vino bianco ottenuto da uve di Chardonnay provenienti da vigneti di Montrachet. Il Montrachet Grand Cru si distingue per la sua complessità aromatica, con note di frutta esotica, agrumi, fiori bianchi e spezie, unite a una struttura ricca e cremosa.",
        price: 490.35,
        image: Vino4
      },
      {
        id: 26,
        name: "Petrus-Pomerol",
        description: "Vino rosso iconico prodotto nella regione di Pomerol, nella zona vinicola di Bordeaux, in Francia. Straordinaria complessità aromatica, con note di frutti neri, spezie, tabacco e terra bagnata, unite a una struttura potente e a una persistenza infinita.",
        price: 368.63,
        image: Vino5
      },
      {
        id: 27,
        name: "Barolo Riserva Monfortino G.C",
        description: "Vino rosso ottenuto da uve di Nebbiolo coltivate in vigneti selezionati. Noto per la sua straordinaria complessità aromatica, con note di frutti rossi, spezie, tabacco, cuoio e terra bagnata, unite a una struttura potente e a una lunga evoluzione in bottiglia.",
        price: 469.27,
        image: Vino6
      },
  ];
  
  export default foodData;