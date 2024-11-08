// Lista de receitas (incluindo nome, ingredientes e modo de preparo)
// Lista de receitas (incluindo nome, ingredientes e modo de preparo)
const receitas = [
    {
        nome: "Frango ao Curry com Arroz Basmati",
        ingredientes: [
            "500g de peito de frango cortado em cubos",
            "1 cebola picada",
            "2 dentes de alho picados",
            "1 colher de sopa de curry em pó",
            "200ml de leite de coco",
            "1 colher de sopa de azeite",
            "Sal e pimenta a gosto",
            "1 xícara de arroz basmati",
            "2 xícaras de água",
            "Coentro fresco para decorar (opcional)"
        ],
        preparo: `
            1. Cozinhe o arroz basmati: Em uma panela, adicione o arroz e a água. Cozinhe em fogo baixo até que a água seque e o arroz esteja macio (aproximadamente 15 minutos).
            2. Prepare o frango: Em uma panela grande, aqueça o azeite e frite o frango até que esteja dourado. Retire e reserve.
            3. Faça o molho de curry: Na mesma panela, adicione a cebola e o alho picados. Refogue até que fiquem dourados. Adicione o curry em pó e mexa por 1 minuto para liberar os aromas.
            4. Finalize o prato: Adicione o leite de coco e misture bem. Coloque o frango de volta na panela e cozinhe por 10 minutos, até que o frango esteja bem cozido e o molho esteja espesso.
            5. Monte o prato: Sirva o frango ao curry com o arroz basmati e decore com coentro fresco, se desejar.
        `
    },
    {
        nome: "Torta de Limão Simples",
        ingredientes: [
            "1 pacote de biscoito de maisena triturado",
            "100g de manteiga derretida",
            "1 lata de leite condensado",
            "Suco de 3 limões",
            "1 caixa de creme de leite",
            "Raspas de limão para decorar"
        ],
        preparo: `
            1. Prepare a base: Misture o biscoito de maisena triturado com a manteiga derretida até formar uma massa úmida. Forre o fundo de uma forma de aro removível com essa mistura, pressionando bem. Leve à geladeira por 30 minutos.
            2. Prepare o recheio: Em um liquidificador, bata o leite condensado, o suco de limão e o creme de leite até que a mistura esteja bem incorporada e cremosa.
            3. Monte a torta: Retire a base da geladeira e despeje o recheio de limão por cima. Alise com uma espátula.
            4. Deixe gelar: Leve à geladeira por 3 horas ou até que a torta esteja bem firme.
            5. Finalize e sirva: Antes de servir, decore com raspas de limão.
        `
    },
    {
        nome: "Brownie de Chocolate com Nozes",
        ingredientes: [
            "200g de chocolate meio amargo",
            "100g de manteiga",
            "2 ovos",
            "1 xícara de açúcar",
            "1/2 xícara de farinha de trigo",
            "1/2 xícara de nozes picadas",
            "1 pitada de sal"
        ],
        preparo: `
            1. Derreta o chocolate e a manteiga: Em uma panela, derreta o chocolate e a manteiga em fogo baixo, mexendo constantemente até ficar bem liso.
            2. Misture os ingredientes: Em uma tigela, bata os ovos com o açúcar até que fiquem bem misturados. Adicione o chocolate derretido e mexa bem. Adicione a farinha de trigo e o sal, mexendo até que a massa fique homogênea.
            3. Adicione as nozes: Misture as nozes picadas à massa.
            4. Asse: Preaqueça o forno a 180ºC. Coloque a massa em uma forma untada e enfarinhada e asse por 25 minutos ou até que, ao inserir um palito, ele saia com algumas migalhas úmidas (não totalmente seco).
            5. Deixe esfriar e sirva: Deixe esfriar um pouco antes de cortar em quadrados e servir.
        `
    },
    {
        nome: "Macarrão ao Alho e Óleo com Pimenta",
        ingredientes: [
            "300g de macarrão",
            "4 dentes de alho picados",
            "2 colheres de sopa de azeite de oliva",
            "1 pimenta dedo-de-moça picada (opcional)",
            "Sal a gosto",
            "Queijo parmesão ralado (opcional)",
            "Salsinha picada para decorar"
        ],
        preparo: `
            1. Cozinhe o macarrão conforme as instruções da embalagem.
            2. Em uma frigideira, aqueça o azeite e refogue o alho picado até dourar.
            3. Adicione a pimenta picada (se for usar) e refogue por mais 1 minuto.
            4. Misture o macarrão cozido à frigideira e mexa bem. Ajuste o sal a gosto.
            5. Sirva com queijo parmesão ralado e salsinha picada.
        `
    },
    {
        nome: "Bolo de Cenoura Simples",
        ingredientes: [
            "3 cenouras médias",
            "4 ovos",
            "2 xícaras de açúcar",
            "1/2 xícara de óleo",
            "2 xícaras de farinha de trigo",
            "1 colher de sopa de fermento em pó",
            "Chocolate meio amargo (para cobertura, opcional)"
        ],
        preparo: `
            1. No liquidificador, bata as cenouras, ovos, açúcar e óleo até obter uma mistura homogênea.
            2. Em uma tigela, adicione a farinha de trigo e o fermento. Misture bem.
            3. Despeje a mistura do liquidificador na tigela e mexa até incorporar.
            4. Leve ao forno preaquecido a 180°C por cerca de 40 minutos.
            5. Se desejar, derreta o chocolate e cubra o bolo após esfriar.
        `
    },
    {
        nome: "Pão de Alho Caseiro",
        ingredientes: [
            "3 xícaras de farinha de trigo",
            "1 sachê de fermento biológico seco",
            "1/2 xícara de leite morno",
            "1/4 de xícara de açúcar",
            "1 colher de chá de sal",
            "2 colheres de sopa de manteiga derretida",
            "5 dentes de alho picados",
            "Salsinha picada"
        ],
        preparo: `
            1. Misture o fermento, açúcar e leite morno. Deixe descansar por 10 minutos.
            2. Adicione a farinha e o sal, misture até formar uma massa. Sove por 10 minutos.
            3. Deixe a massa descansar até dobrar de volume (cerca de 1 hora).
            4. Modele o pão e coloque em uma assadeira untada. Deixe crescer por mais 30 minutos.
            5. Misture a manteiga derretida com o alho picado e salsinha, e pincele sobre o pão.
            6. Asse a 180°C por 25-30 minutos.
        `
    },
    {
        nome: "Peixe Grelhado com Molho de Maracujá",
        ingredientes: [
            "2 filés de peixe (tilápia, por exemplo)",
            "Sal e pimenta a gosto",
            "1 colher de sopa de azeite",
            "1 maracujá",
            "1 colher de sopa de mel",
            "1 colher de chá de amido de milho (opcional)"
        ],
        preparo: `
            1. Tempere os filés de peixe com sal e pimenta.
            2. Aqueça o azeite em uma frigideira e grelhe o peixe por 3-4 minutos de cada lado, até dourar.
            3. Para o molho, bata a polpa do maracujá com o mel. Se quiser um molho mais espesso, adicione o amido de milho diluído em um pouco de água.
            4. Sirva o peixe com o molho de maracujá por cima.
        `
    },
    {
        nome: "Sopa de Abóbora",
        ingredientes: [
            "500g de abóbora cortada em cubos",
            "1 cebola picada",
            "2 dentes de alho picados",
            "1 litro de caldo de legumes",
            "Azeite de oliva",
            "Sal e pimenta a gosto",
            "Creme de leite (opcional)"
        ],
        preparo: `
            1. Em uma panela, aqueça o azeite e refogue a cebola e o alho até dourar.
            2. Adicione a abóbora e o caldo de legumes. Cozinhe por cerca de 20 minutos ou até que a abóbora esteja macia.
            3. Bata tudo no liquidificador até formar um creme.
            4. Retorne à panela, ajuste o sal e a pimenta e, se preferir, adicione um pouco de creme de leite para dar mais cremosidade.
            5. Sirva quente.
        `
    },
    {
        nome: "Coxinha de Frango",
        ingredientes: [
            "500g de peito de frango desfiado",
            "1/2 cebola picada",
            "2 dentes de alho picados",
            "2 colheres de sopa de azeite",
            "1 batata cozida e amassada",
            "1/2 xícara de caldo de galinha",
            "1 xícara de farinha de trigo",
            "Farinha de rosca para empanar",
            "Óleo para fritar"
        ],
        preparo: `
            1. Cozinhe o peito de frango e desfie.
            2. Refogue a cebola e o alho no azeite, adicione o frango desfiado, o caldo de galinha e a batata amassada. Misture bem.
            3. Acrescente a farinha de trigo até que a mistura solte da panela. Modele as coxinhas.
            4. Passe as coxinhas na farinha de rosca e frite até ficarem douradas.
        `
    },
    {
        nome: "Salada de Quinoa com Legumes",
        ingredientes: [
            "1 xícara de quinoa",
            "1 pepino picado",
            "1 cenoura ralada",
            "1 tomate picado",
            "Suco de 1 limão",
            "2 colheres de sopa de azeite",
            "Sal e pimenta a gosto"
        ],
        preparo: `
            1. Cozinhe a quinoa conforme as instruções da embalagem.
            2. Em uma tigela, misture a quinoa cozida com o pepino, cenoura e tomate.
            3. Tempere com o suco de limão, azeite, sal e pimenta.
            4. Sirva gelada ou à temperatura ambiente.
        `
    },
    {
        nome: "Pudim de Leite Condensado",
        ingredientes: [
            "1 lata de leite condensado",
            "2 latas de leite",
            "3 ovos",
            "1 xícara de açúcar (para a calda)"
        ],
        preparo: `
            1. Faça a calda: derreta o açúcar em uma forma até que fique dourado. Reserve.
            2. Bata no liquidificador o leite condensado, leite e ovos até misturar bem.
            3. Coloque na forma caramelizada e asse em banho-maria por cerca de 1 hora a 180°C.
            4. Deixe esfriar e desenforme.
        `
    },
    {
        nome: "Bife à Parmegiana",
        ingredientes: [
            "4 bifes de carne",
            "2 ovos batidos",
            "1 xícara de farinha de trigo",
            "1 xícara de farinha de rosca",
            "1 xícara de molho de tomate",
            "200g de queijo mussarela",
            "Óleo para fritar"
        ],
        preparo: `
            1. Passe os bifes primeiro na farinha de trigo, depois nos ovos batidos e, por fim, na farinha de rosca.
            2. Frite os bifes até dourarem.
            3. Cubra cada bife com molho de tomate e queijo mussarela. Leve ao forno até o queijo derreter.
        `
    },
    {
        nome: "Panqueca de Carne Moída",
        ingredientes: [
            "1 pacote de massa para panqueca",
            "500g de carne moída",
            "1 cebola picada",
            "2 dentes de alho picados",
            "1 tomate picado",
            "Sal e pimenta a gosto",
            "Queijo ralado (opcional)"
        ],
        preparo: `
            1. Prepare a massa de panqueca conforme as instruções do pacote.
            2. Refogue a carne moída com a cebola e o alho até dourar. Adicione o tomate picado e cozinhe até amolecer. Tempere com sal e pimenta.
            3. Recheie as panquecas com a carne moída, enrole e coloque em uma assadeira.
            4. Se desejar, cubra com queijo ralado e leve ao forno para gratinar por 10 minutos a 180°C.
        `
    },
    {
        nome: "Risoto de Cogumelos",
        ingredientes: [
            "1 xícara de arroz arbóreo",
            "300g de cogumelos frescos fatiados",
            "1 cebola picada",
            "2 dentes de alho picados",
            "1/2 xícara de vinho branco",
            "1 litro de caldo de legumes",
            "2 colheres de sopa de manteiga",
            "50g de queijo parmesão ralado"
        ],
        preparo: `
            1. Refogue a cebola e o alho na manteiga até dourar. Adicione os cogumelos e cozinhe até murcharem.
            2. Acrescente o arroz e refogue por 2 minutos. Adicione o vinho branco e mexa até evaporar.
            3. Aos poucos, adicione o caldo de legumes, mexendo até o arroz ficar cremoso e al dente.
            4. Finalize com o queijo parmesão e sirva quente.
        `
    },
    {
        nome: "Torta Salgada de Frango",
        ingredientes: [
            "2 xícaras de frango desfiado",
            "1 pacote de massa folhada",
            "1 cebola picada",
            "2 tomates picados",
            "1/2 xícara de azeitonas picadas",
            "1/2 xícara de requeijão cremoso",
            "Sal e pimenta a gosto"
        ],
        preparo: `
            1. Refogue a cebola até dourar. Adicione os tomates, azeitonas e frango desfiado. Cozinhe por 5 minutos.
            2. Acrescente o requeijão e misture bem. Tempere com sal e pimenta.
            3. Forre uma assadeira com a massa folhada, coloque o recheio e cubra com mais massa.
            4. Leve ao forno preaquecido a 180°C por 25-30 minutos, até dourar.
        `
    },
    {
        nome: "Hambúrguer Caseiro",
        ingredientes: [
            "500g de carne moída",
            "1 cebola picada",
            "1 dente de alho picado",
            "Sal e pimenta a gosto",
            "Pão de hambúrguer",
            "Queijo (opcional)",
            "Alface e tomate para montar"
        ],
        preparo: `
            1. Misture a carne moída com a cebola, alho, sal e pimenta. Modele em hambúrgueres.
            2. Aqueça uma frigideira e frite os hambúrgueres por cerca de 4 minutos de cada lado.
            3. Monte o hambúrguer com queijo, alface e tomate. Sirva com batatas fritas.
        `
    },
    {
        nome: "Macarrão à Carbonara",
        ingredientes: [
            "300g de macarrão",
            "150g de bacon picado",
            "2 ovos",
            "1/2 xícara de queijo parmesão ralado",
            "Sal e pimenta a gosto"
        ],
        preparo: `
            1. Cozinhe o macarrão conforme as instruções.
            2. Enquanto isso, frite o bacon até ficar crocante.
            3. Em uma tigela, bata os ovos e misture com o queijo parmesão. Tempere com sal e pimenta.
            4. Misture o macarrão cozido com o bacon e depois adicione os ovos batidos, mexendo bem. Sirva imediatamente.
        `
    },
    {
        nome: "Salada de Grão-de-Bico",
        ingredientes: [
            "2 xícaras de grão-de-bico cozido",
            "1 pepino picado",
            "1 tomate picado",
            "1/4 de cebola roxa picada",
            "1/4 de xícara de azeite",
            "Suco de 1 limão",
            "Sal e pimenta a gosto"
        ],
        preparo: `
            1. Em uma tigela, misture o grão-de-bico, pepino, tomate e cebola.
            2. Tempere com azeite, suco de limão, sal e pimenta.
            3. Sirva fria, ideal para dias quentes.
        `
    },
    {
        nome: "Bolo de Banana com Aveia",
        ingredientes: [
            "3 bananas maduras amassadas",
            "2 ovos",
            "1/2 xícara de óleo",
            "1 xícara de açúcar mascavo",
            "1 1/2 xícaras de aveia em flocos",
            "1 colher de chá de canela em pó",
            "1/2 colher de chá de fermento em pó"
        ],
        preparo: `
            1. Misture todos os ingredientes em uma tigela até obter uma massa homogênea.
            2. Coloque em uma forma untada e enfarinhada.
            3. Asse a 180°C por cerca de 40 minutos ou até que, ao inserir um palito, ele saia limpo.
        `
    },
    {
        nome: "Arroz de Peixe",
        ingredientes: [
            "300g de filé de peixe",
            "1 xícara de arroz",
            "1 cebola picada",
            "1 tomate picado",
            "1/2 pimentão picado",
            "2 colheres de sopa de azeite",
            "Sal e pimenta a gosto"
        ],
        preparo: `
            1. Refogue a cebola, tomate e pimentão no azeite.
            2. Adicione o arroz e refogue por 2 minutos.
            3. Adicione 2 xícaras de água e cozinhe até o arroz ficar pronto.
            4. Grelhe os filés de peixe e sirva sobre o arroz.
        `
    },
    {
        nome: "Muffin de Chocolate",
        ingredientes: [
            "1 xícara de farinha de trigo",
            "1/2 xícara de cacau em pó",
            "1/2 xícara de açúcar",
            "1/2 colher de chá de fermento em pó",
            "1/4 de colher de chá de bicarbonato de sódio",
            "1 ovo",
            "1/2 xícara de leite",
            "1/4 de xícara de óleo"
        ],
        preparo: `
            1. Misture todos os ingredientes secos em uma tigela.
            2. Adicione os ingredientes líquidos e mexa até formar uma massa.
            3. Coloque em forminhas e asse a 180°C por 20-25 minutos.
        `
    },
    {
        nome: "Frango Xadrez",
        ingredientes: [
            "500g de peito de frango cortado em cubos",
            "1 pimentão vermelho cortado em cubos",
            "1 cebola cortada em cubos",
            "1 cenoura cortada em rodelas",
            "2 colheres de sopa de molho de soja",
            "1 colher de sopa de amido de milho",
            "1 colher de sopa de azeite"
        ],
        preparo: `
            1. Refogue o frango até dourar. Retire e reserve.
            2. Na mesma panela, adicione os vegetais e refogue até ficarem macios.
            3. Volte o frango para a panela e adicione o molho de soja e o amido dissolvido em água.
            4. Cozinhe até o molho engrossar. Sirva com arroz.
        `
    },
    {
        nome: "Feijão Tropeiro",
        ingredientes: [
            "500g de feijão carioca",
            "200g de bacon picado",
            "2 linguiças calabresas picadas",
            "1 cebola picada",
            "2 dentes de alho picados",
            "1 xícara de farinha de mandioca",
            "2 ovos cozidos picados",
            "Cebolinha e salsinha a gosto",
            "Sal e pimenta a gosto"
        ],
        preparo: `
            1. Cozinhe o feijão e reserve.
            2. Frite o bacon e a linguiça até ficarem crocantes.
            3. Adicione a cebola e o alho, refogue até dourar.
            4. Misture o feijão cozido, a farinha de mandioca e os ovos cozidos.
            5. Finalize com cebolinha, salsinha, sal e pimenta.
        `
    },
    {
        nome: "Espaguete ao Pesto",
        ingredientes: [
            "300g de espaguete",
            "1 xícara de manjericão fresco",
            "1/4 de xícara de azeite",
            "1/4 de xícara de queijo parmesão ralado",
            "2 dentes de alho",
            "1/4 de xícara de pinoli ou castanha de caju",
            "Sal e pimenta a gosto"
        ],
        preparo: `
            1. Cozinhe o espaguete conforme as instruções.
            2. Bata no liquidificador ou processador o manjericão, azeite, queijo parmesão, alho, pinoli, sal e pimenta até formar uma pasta.
            3. Misture o pesto ao espaguete já cozido e sirva.
        `
    },
    {
        nome: "Torta de Maçã",
        ingredientes: [
            "4 maçãs fatiadas",
            "1 xícara de açúcar",
            "1 colher de chá de canela",
            "1 pacote de massa folhada",
            "1 colher de sopa de manteiga"
        ],
        preparo: `
            1. Misture as maçãs com o açúcar e a canela. Deixe descansar por 15 minutos.
            2. Forre uma forma com a massa folhada e distribua as maçãs por cima.
            3. Coloque pedaços de manteiga sobre as maçãs e cubra com a outra camada de massa.
            4. Asse a 180°C por 35 minutos, até dourar.
        `
    },
    {
        nome: "Lasanha de Berinjela",
        ingredientes: [
            "2 berinjelas cortadas em fatias finas",
            "400g de carne moída",
            "1 cebola picada",
            "1 tomate picado",
            "2 xícaras de molho de tomate",
            "300g de queijo mussarela",
            "1/2 xícara de queijo parmesão ralado"
        ],
        preparo: `
            1. Refogue a carne moída com a cebola e o tomate. Adicione o molho de tomate e cozinhe por 10 minutos.
            2. Grelhe as fatias de berinjela.
            3. Monte a lasanha, intercalando camadas de berinjela, carne e queijo.
            4. Finalize com o queijo parmesão e leve ao forno por 20 minutos a 180°C.
        `
    },
    {
        nome: "Salmon Grelhado com Molho de Mostarda",
        ingredientes: [
            "2 filés de salmão",
            "2 colheres de sopa de mostarda",
            "1 colher de sopa de mel",
            "1 colher de sopa de azeite",
            "Sal e pimenta a gosto"
        ],
        preparo: `
            1. Tempere o salmão com sal e pimenta.
            2. Aqueça o azeite em uma frigideira e grelhe o salmão por 4-5 minutos de cada lado.
            3. Misture a mostarda com o mel e despeje sobre o salmão grelhado antes de servir.
        `
    },
    // Adicionando as novas receitas
  {
    nome: "Escondidinho de Carne Seca",
    ingredientes: [
      "500g de carne seca desfiada",
      "4 batatas médias cozidas",
      "1/2 xícara de leite",
      "1 colher de sopa de manteiga",
      "1/2 cebola picada",
      "1/2 pimentão picado",
      "Queijo parmesão ralado"
    ],
   preparo: [
      "Cozinhe e amasse as batatas, misturando com leite e manteiga.",
      "Refogue a cebola e o pimentão. Adicione a carne seca desfiada e misture bem.",
      "Monte o escondidinho, colocando a carne seca no fundo e cobrindo com o purê de batatas.",
      "Polvilhe queijo parmesão e asse a 180°C por 20 minutos."
    ]
  },
  {
    nome: "Arroz à Piamontese",
    ingredientes: [
      "2 xícaras de arroz cozido",
      "1 xícara de creme de leite",
      "1/2 xícara de queijo parmesão ralado",
      "1 colher de sopa de manteiga",
      "1/2 xícara de cogumelos fatiados",
      "Sal e pimenta a gosto"
    ],
   preparo: [
      "Refogue os cogumelos na manteiga até dourarem.",
      "Adicione o arroz e misture bem. Acrescente o creme de leite e o queijo parmesão.",
      "Cozinhe por mais 5 minutos e ajuste o sal e a pimenta."
    ]
  },
  {
    nome: "Camarão na Moranga",
    ingredientes: [
      "500g de camarões limpos",
      "1 abóbora moranga média",
      "1 cebola picada",
      "2 dentes de alho picados",
      "1 tomate picado",
      "200ml de creme de leite",
      "2 colheres de sopa de azeite"
    ],
   preparo: [
      "Cozinhe a moranga no forno até que ela amoleça.",
      "Refogue a cebola, alho e tomate no azeite. Adicione os camarões e cozinhe por 5 minutos.",
      "Adicione o creme de leite e misture bem.",
      "Recheie a moranga com o camarão e sirva."
    ]
  },
  {
    nome: "Cuscuz Paulista",
    ingredientes: [
      "1 xícara de farinha de milho",
      "200g de camarões cozidos",
      "1 pimentão picado",
      "1 tomate picado",
      "1/2 cebola picada",
      "2 colheres de sopa de azeite",
      "1/2 xícara de caldo de legumes"
    ],
   preparo: [
      "Refogue a cebola, pimentão e tomate no azeite.",
      "Adicione os camarões e o caldo de legumes, cozinhando por 5 minutos.",
      "Acrescente a farinha de milho e mexa até formar uma massa úmida.",
      "Modele o cuscuz em uma forma e cozinhe no vapor por 20 minutos."
    ]
  },
  {
    nome: "Pão de Queijo",
    ingredientes: [
      "2 xícaras de polvilho doce",
      "1 xícara de queijo minas curado ralado",
      "1/2 xícara de leite",
      "1/2 xícara de óleo",
      "2 ovos",
      "1 colher de chá de sal"
    ],
   preparo: [
      "Misture o polvilho com o queijo, o leite, o óleo, os ovos e o sal.",
      "Modele bolinhas com a massa.",
      "Asse a 180°C por 20 minutos ou até dourarem."
    ]
  },
  {
    nome: "Carne de Panela com Batatas",
    ingredientes: [
      "500g de carne de boi para panela (acém ou músculo)",
      "4 batatas cortadas em rodelas",
      "2 cebolas picadas",
      "3 dentes de alho picados",
      "1 tomate picado",
      "1 folha de louro",
      "1 xícara de caldo de carne"
    ],
   preparo: [
      "Doure a carne na panela de pressão e reserve.",
      "Refogue a cebola, alho e tomate na mesma panela.",
      "Adicione a carne, o caldo de carne e a folha de louro. Cozinhe na pressão por 40 minutos.",
      "Acrescente as batatas e cozinhe por mais 10 minutos."
    ]
  },
  {
    nome: "Bife à Parmegiana",
    ingredientes: [
      "4 bifes de carne (filé ou coxão mole)",
      "1 xícara de farinha de trigo",
      "2 ovos batidos",
      "1 xícara de farinha de rosca",
      "1 xícara de molho de tomate",
      "150g de queijo mussarela fatiado",
      "50g de queijo parmesão ralado",
      "Óleo para fritar"
    ],
   preparo: [
      "Tempere os bifes com sal e pimenta. Passe na farinha de trigo, depois nos ovos batidos e, por fim, na farinha de rosca.",
      "Frite os bifes até ficarem dourados e crocantes.",
      "Coloque os bifes em uma assadeira, cubra com molho de tomate e queijo mussarela. Polvilhe queijo parmesão por cima.",
      "Leve ao forno a 180°C por 10-15 minutos até o queijo derreter e dourar."
    ]
  },
  {
    nome: "Panqueca de Frango com Catupiry",
    ingredientes: [
      "1 pacote de massa para panqueca",
      "2 peitos de frango cozidos e desfiados",
      "1 cebola picada",
      "1 tomate picado",
      "200g de catupiry",
      "1/2 xícara de molho de tomate"
    ],
   preparo: [
      "Prepare as panquecas conforme as instruções da embalagem.",
      "Refogue a cebola e o tomate. Adicione o frango desfiado e misture.",
      "Recheie as panquecas com o frango, coloque uma colher de catupiry em cada uma e enrole.",
      "Coloque as panquecas em uma assadeira, cubra com molho de tomate e leve ao forno por 20 minutos."
    ]
  },
  {
    nome: "Sopa de Abóbora com Gengibre",
    ingredientes: [
      "1 abóbora pequena picada",
      "1 cebola picada",
      "2 dentes de alho picados",
      "1 pedaço de gengibre (aproximadamente 2cm)",
      "1 litro de caldo de legumes",
      "2 colheres de sopa de azeite",
      "Sal e pimenta a gosto"
    ],
   preparo: [
      "Refogue a cebola, o alho e o gengibre no azeite.",
      "Acrescente a abóbora e o caldo de legumes, cozinhando até a abóbora amolecer.",
      "Bata a sopa no liquidificador até ficar cremosa.",
      "Ajuste o sal e a pimenta a gosto antes de servir."
    ]
  },
  {
    nome: "Escondidinho de Carne Seca",
    ingredientes: [
      "500g de carne seca dessalgada e desfiada",
      "500g de mandioca cozida e amassada",
      "1 cebola picada",
      "1/2 xícara de leite",
      "2 colheres de sopa de manteiga",
      "Queijo parmesão a gosto"
    ],
   preparo: [
      "Refogue a cebola na manteiga, adicione a carne seca desfiada e misture.",
      "Prepare o purê de mandioca misturando com leite e manteiga.",
      "Em uma assadeira, coloque uma camada de purê, depois a carne e cubra com o restante do purê.",
      "Polvilhe com queijo parmesão e leve ao forno a 180°C por 20 minutos."
    ]
  },
  {
    nome: "Polenta Cremosa com Queijo",
    ingredientes: [
      "1 xícara de fubá",
      "4 xícaras de água",
      "2 colheres de sopa de manteiga",
      "100g de queijo parmesão",
      "Sal a gosto"
    ],
   preparo: [
      "Em uma panela, ferva a água com o sal.",
      "Adicione o fubá aos poucos, mexendo constantemente para não empelotar.",
      "Cozinhe por 10 minutos até engrossar. Adicione manteiga e queijo parmesão e misture até derreter."
    ]
  },
  {
    nome: "Risoto de Frango com Limão Siciliano",
    ingredientes: [
      "1 xícara de arroz arbóreo",
      "2 filés de peito de frango cortados em cubos",
      "1 cebola picada",
      "1 limão siciliano (suco e raspas)",
      "4 xícaras de caldo de galinha",
      "1/2 xícara de queijo parmesão ralado"
    ],
   preparo: [
      "Cozinhe o frango em uma frigideira até dourar e reserve.",
      "Refogue a cebola e adicione o arroz. Vá adicionando o caldo aos poucos, mexendo até o arroz ficar al dente.",
      "Adicione o frango, o suco e as raspas de limão. Finalize com queijo parmesão."
    ]
  },
  {
    nome: "Salada de Quinoa com Legumes",
    ingredientes: [
      "1 xícara de quinoa cozida",
      "1 cenoura ralada",
      "1 pepino picado",
      "1 tomate picado",
      "Salsinha picada",
      "Azeite, limão, sal e pimenta a gosto"
    ],
   preparo: [
      "Cozinhe a quinoa conforme as instruções.",
      "Misture a quinoa com os legumes e salsinha.",
      "Tempere com azeite, limão, sal e pimenta a gosto."
    ]
  },
  {
    nome: "Lasanha de Berinjela",
    ingredientes: [
      "2 berinjelas fatiadas",
      "300g de carne moída",
      "1/2 xícara de molho de tomate",
      "200g de queijo mussarela",
      "Queijo parmesão ralado",
      "Azeite para grelhar"
    ],
   preparo: [
      "Grelhe as fatias de berinjela no azeite até ficarem macias.",
      "Refogue a carne moída e adicione o molho de tomate.",
      "Monte a lasanha, alternando camadas de berinjela, carne e queijo.",
      "Finalize com queijo parmesão e asse a 180°C por 20 minutos."
    ]
  },
  {
    nome: "Tacos de Carne Moída",
    ingredientes: [
      "500g de carne moída",
      "1 cebola picada",
      "1 pacote de tortillas de milho",
      "Alface picada",
      "Queijo cheddar ralado",
      "Molho de tomate"
    ],
   preparo: [
      "Refogue a cebola e adicione a carne moída. Cozinhe até dourar e adicione molho de tomate.",
      "Aqueça as tortillas e recheie com a carne, alface e queijo.",
      "Sirva com molho de sua preferência."
    ]
  },
  {
    nome: "Chili com Carne",
    ingredientes: [
      "500g de carne moída",
      "1 cebola picada",
      "1 pimentão picado",
      "1 lata de feijão vermelho",
      "1 lata de tomate pelado",
      "1 colher de sopa de chili em pó",
      "Sal e pimenta a gosto"
    ],
   preparo: [
      "Refogue a carne moída com a cebola e o pimentão.",
      "Adicione o feijão, tomate pelado e chili em pó.",
      "Cozinhe por 30 minutos, ajustando o sal e a pimenta."
    ]
  },
  {
    nome: "Bolo de Fubá",
    ingredientes: [
      "1 xícara de fubá",
      "2 xícaras de açúcar",
      "1 xícara de leite",
      "1/2 xícara de óleo",
      "3 ovos",
      "1 colher de sopa de fermento em pó"
    ],
   preparo: [
      "Bata todos os ingredientes no liquidificador até a mistura ficar homogênea.",
      "Coloque em uma forma untada e asse a 180°C por 30-40 minutos."
    ]
  },
  {
    nome: "Muffin de Chocolate",
    ingredientes: [
      "1 xícara de farinha de trigo",
      "1/2 xícara de açúcar",
      "1/2 xícara de cacau em pó",
      "1 colher de sopa de fermento em pó",
      "1/2 xícara de leite",
      "1/4 xícara de óleo",
      "1 ovo",
      "1/2 xícara de chocolate em pedaços"
    ],
   preparo: [
      "Preaqueça o forno a 180°C e unte as formas de muffin.",
      "Em uma tigela, misture os ingredientes secos (farinha, açúcar, cacau e fermento).",
      "Adicione os ingredientes molhados (leite, óleo e ovo) e mexa até ficar homogêneo.",
      "Acrescente os pedaços de chocolate e distribua a massa nas formas.",
      "Asse por 20 minutos."
    ]
  },
  {
    nome: "Arroz de Pato",
    ingredientes: [
      "500g de arroz",
      "1 pato inteiro",
      "1 cenoura",
      "1 cebola",
      "2 dentes de alho",
      "1 folha de louro",
      "1/2 xícara de vinho branco",
      "1/2 xícara de ervilhas",
      "Azeite, sal e pimenta a gosto"
    ],
   preparo: [
      "Cozinhe o pato em água com sal, cenoura, cebola, alho e louro até ficar macio.",
      "Retire a carne do pato e desfie.",
      "Em uma panela, refogue a carne desfiada com o azeite e adicione o arroz.",
      "Regue com o caldo do cozimento do pato e o vinho branco, e cozinhe até o arroz ficar pronto.",
      "Adicione as ervilhas e sirva."
    ]
  },
  {
    nome: "Sopa de Abóbora",
    ingredientes: [
      "1 kg de abóbora",
      "1 cebola picada",
      "2 dentes de alho picados",
      "4 xícaras de caldo de legumes",
      "1 colher de sopa de azeite",
      "Sal e pimenta a gosto"
    ],
   preparo: [
      "Cozinhe a abóbora em pedaços até amolecer.",
      "Em uma panela, refogue a cebola e o alho no azeite.",
      "Adicione a abóbora cozida e o caldo de legumes. Cozinhe por 10 minutos.",
      "Bata tudo no liquidificador até obter um creme liso.",
      "Tempere com sal e pimenta e sirva."
    ]
  },
  {
    nome: "Costelinha de Porco com Barbecue",
    ingredientes: [
      "1 kg de costelinha de porco",
      "1 xícara de molho barbecue",
      "2 dentes de alho picados",
      "1 colher de sopa de azeite",
      "Sal e pimenta a gosto"
    ],
   preparo: [
      "Tempere as costelinhas com sal, pimenta e alho.",
      "Grelhe as costelinhas até dourarem.",
      "Pincele o molho barbecue nas costelinhas e leve ao forno a 180°C por 30 minutos.",
      "Sirva com mais molho barbecue."
    ]
  },
  {
    nome: "Coxinha de Frango",
    ingredientes: [
      "500g de peito de frango cozido e desfiado",
      "1 xícara de caldo de galinha",
      "1/2 xícara de leite",
      "1 colher de sopa de manteiga",
      "2 xícaras de farinha de trigo",
      "1 ovo batido",
      "Farinha de rosca para empanar",
      "Óleo para fritar"
    ],
   preparo: [
      "Em uma panela, faça o recheio refogando o frango desfiado com o caldo de galinha.",
      "Em outra panela, cozinhe a farinha de trigo com o leite, manteiga e sal até formar uma massa consistente.",
      "Modele a massa em formato de coxinha e recheie com o frango.",
      "Passe no ovo batido e na farinha de rosca e frite até dourar."
    ]
  },
  {
    nome: "Batata Recheada com Carne Moída",
    ingredientes: [
      "4 batatas grandes",
      "500g de carne moída",
      "1 cebola picada",
      "2 dentes de alho picados",
      "1/2 xícara de queijo cheddar ralado",
      "Sal e pimenta a gosto"
    ],
   preparo: [
      "Cozinhe as batatas até ficarem macias. Retire o miolo e reserve.",
      "Refogue a carne moída com cebola e alho, e tempere com sal e pimenta.",
      "Recheie as batatas com a carne moída e cubra com queijo cheddar.",
      "Leve ao forno a 180°C até o queijo derreter."
    ]
  },
  {
    nome: "Panquecas Americanas",
    ingredientes: [
      "1 xícara de farinha de trigo",
      "2 colheres de sopa de açúcar",
      "1 colher de sopa de fermento em pó",
      "1 ovo",
      "1 xícara de leite",
      "2 colheres de sopa de manteiga derretida"
    ],
   preparo: [
      "Misture todos os ingredientes secos em uma tigela.",
      "Adicione o ovo, leite e manteiga e misture até ficar homogêneo.",
      "Aqueça uma frigideira untada e despeje a massa, cozinhando por 2-3 minutos de cada lado.",
      "Sirva com mel ou frutas."
    ]
  },
  {
    nome: "Torta de Frango com Catupiry",
    ingredientes: [
      "2 peitos de frango cozidos e desfiados",
      "1 cebola picada",
      "1 pote de catupiry",
      "1 pacote de massa para torta pronta",
      "1 gema para pincelar",
      "Azeite, sal e pimenta a gosto"
    ],
   preparo: [
      "Refogue a cebola no azeite, adicione o frango desfiado e tempere com sal e pimenta.",
      "Forre uma forma com a massa de torta, adicione o recheio de frango e cubra com o catupiry.",
      "Feche a torta com mais massa e pincele com a gema.",
      "Asse a 180°C por 30 minutos."
    ]
  },
  {
    nome: "Strogonoff de Carne",
    ingredientes: [
      "500g de carne cortada em tiras",
      "1 cebola picada",
      "2 dentes de alho picados",
      "1 lata de creme de leite",
      "1/2 xícara de ketchup",
      "2 colheres de sopa de mostarda",
      "Sal e pimenta a gosto"
    ],
   preparo: [
      "Refogue a cebola e o alho, adicione a carne e frite até dourar.",
      "Adicione o ketchup, mostarda, creme de leite e misture bem.",
      "Cozinhe por mais 10 minutos e sirva."
    ]
  },
  {
    nome: "Arroz de Marisco",
    ingredientes: [
      "1 xícara de arroz",
      "200g de camarões",
      "200g de lulas em anéis",
      "200g de mexilhões",
      "1 cebola picada",
      "2 dentes de alho picados",
      "4 xícaras de caldo de peixe",
      "1/2 xícara de vinho branco",
      "Azeite a gosto"
    ],
   preparo: [
      "Refogue a cebola e o alho no azeite.",
      "Adicione os frutos do mar e o arroz. Cozinhe por 2 minutos.",
      "Adicione o vinho branco e o caldo de peixe e cozinhe até o arroz ficar pronto.",
      "Sirva."
    ]
  },
  {
    nome: "Filé à Parmegiana",
    ingredientes: [
      "4 filés de peito de frango",
      "1 xícara de farinha de trigo",
      "1 ovo batido",
      "1 xícara de farinha de rosca",
      "1 xícara de molho de tomate",
      "200g de queijo mussarela",
      "Óleo para fritar"
    ],
   preparo: [
      "Passe os filés de frango na farinha de trigo, depois no ovo e, por último, na farinha de rosca.",
      "Frite os filés até ficarem dourados.",
      "Coloque os filés em uma assadeira, cubra com molho de tomate e queijo mussarela.",
      "Leve ao forno a 180°C até o queijo derreter."
    ]
  },
  {
    nome: "Pão de Queijo",
    ingredientes: [
      "2 xícaras de polvilho doce",
      "1 xícara de leite",
      "1/2 xícara de óleo",
      "2 ovos",
      "200g de queijo minas ralado",
      "Sal a gosto"
    ],
   preparo: [
      "Em uma panela, aqueça o leite e o óleo.",
      "Em uma tigela, misture o polvilho e o sal.",
      "Despeje a mistura quente sobre o polvilho e mexa até ficar homogêneo.",
      "Adicione os ovos e o queijo, misture bem e modele os pães.",
      "Asse a 180°C por 20 minutos."
    ]
  },
  {
    nome: "Lula Recheada",
    ingredientes: [
      "4 lulas limpas",
      "200g de carne moída",
      "1/2 cebola picada",
      "1/2 xícara de arroz cozido",
      "2 dentes de alho picados",
      "Sal e pimenta a gosto"
    ],
   preparo: [
      "Refogue a cebola, alho e carne moída até dourar.",
      "Adicione o arroz cozido, sal e pimenta e misture bem.",
      "Recheie as lulas com essa mistura e costure a abertura.",
      "Grelhe as lulas em uma frigideira com azeite até ficarem douradas."
    ]
  },
  {
    nome: "Torta de Banana",
    ingredientes: [
      "4 bananas maduras",
      "2 ovos",
      "1 xícara de açúcar",
      "1/2 xícara de farinha de trigo",
      "1 colher de chá de fermento em pó",
      "1 colher de sopa de manteiga derretida"
    ],
   preparo: [
      "Bata os ovos com o açúcar e a manteiga derretida até ficar cremoso.",
      "Adicione a farinha, o fermento e misture bem.",
      "Coloque as bananas fatiadas em uma forma e cubra com a massa.",
      "Asse a 180°C por 40 minutos."
    ]
  },
  {
    nome: "Ceviche de Peixe",
    ingredientes: [
      "500g de peixe branco fresco em cubos",
      "Suco de 3 limões",
      "1 cebola roxa picada",
      "1 pimentão vermelho picado",
      "Coentro a gosto",
      "Sal e pimenta a gosto"
    ],
   preparo: [
      "Tempere o peixe com suco de limão, sal e pimenta.",
      "Adicione a cebola, pimentão e coentro e misture bem.",
      "Deixe marinar por 30 minutos na geladeira antes de servir."
    ]
  },
  {
    nome: "Frango ao Curry",
    ingredientes: [
      "500g de peito de frango cortado em cubos",
      "1 cebola picada",
      "2 dentes de alho picados",
      "1 colher de sopa de curry em pó",
      "1/2 xícara de leite de coco",
      "2 colheres de sopa de azeite",
      "Sal e pimenta a gosto"
    ],
   preparo: [
      "Refogue a cebola e o alho no azeite.",
      "Adicione o frango e frite até dourar.",
      "Acrescente o curry em pó, o leite de coco, sal e pimenta.",
      "Cozinhe por 15 minutos até o molho engrossar."
    ]
  },
  {
    nome: "Escondidinho de Abóbora",
    ingredientes: [
      "1 kg de abóbora cozida e amassada",
      "300g de carne moída",
      "1 cebola picada",
      "2 dentes de alho picados",
      "1/2 xícara de queijo parmesão ralado"
    ],
   preparo: [
      "Refogue a carne moída com cebola e alho.",
      "Misture a carne com a abóbora amassada.",
      "Coloque em uma assadeira, cubra com queijo parmesão e asse a 180°C por 20 minutos."
    ]
  },
  {
    nome: "Salmão Grelhado com Molho de Maracujá",
    ingredientes: [
      "4 filés de salmão",
      "1 maracujá",
      "1 colher de sopa de mel",
      "1 colher de sopa de azeite",
      "Sal e pimenta a gosto"
    ],
   preparo: [
      "Tempere os filés de salmão com sal e pimenta e grelhe-os até ficarem dourados.",
      "Em uma panela, misture o maracujá, mel e azeite. Cozinhe até formar um molho.",
      "Sirva o salmão com o molho de maracujá por cima."
    ]
  },
  {
    nome: "Carne de Panela",
    ingredientes: [
      "1 kg de carne de peito ou acém",
      "2 cebolas picadas",
      "2 dentes de alho picados",
      "2 tomates picados",
      "1 folha de louro",
      "4 xícaras de caldo de carne"
    ],
   preparo: [
      "Refogue a carne na panela de pressão até dourar.",
      "Adicione as cebolas, alho, tomates, louro e caldo de carne.",
      "Cozinhe na pressão por 40 minutos ou até a carne ficar bem macia."
    ]
  },



  {
    nome: "Empadão de Frango",
    ingredientes: [
      "2 peitos de frango cozidos e desfiados",
      "1 pacote de massa de empada",
      "1/2 xícara de molho de tomate",
      "1 colher de sopa de manteiga",
      "1 ovo batido"
    ],
   preparo: [
      "Refogue o frango com o molho de tomate e reserve.",
      "Forre uma forma com a massa, coloque o frango desfiado e cubra com mais massa.",
      "Pincele com ovo batido e asse a 180°C por 30 minutos."
    ]
  },
  {
    nome: "Brigadeiro Tradicional",
    ingredientes: [
      "1 lata de leite condensado",
      "1 colher de sopa de manteiga",
      "7 colheres de sopa de achocolatado em pó",
      "Chocolate granulado para enrolar"
    ],
   preparo: [
      "Em uma panela, misture o leite condensado, manteiga e achocolatado.",
      "Cozinhe em fogo baixo, mexendo sempre, até soltar do fundo da panela.",
      "Deixe esfriar um pouco, enrole em bolinhas e passe no granulado."
    ]
  },
  {
    nome: "Bolo de Cenoura Simples",
    ingredientes: [
      "3 cenouras médias",
      "2 ovos",
      "1 xícara de óleo",
      "2 xícaras de farinha de trigo",
      "2 xícaras de açúcar",
      "1 colher de sopa de fermento em pó"
    ],
   preparo: [
      "Bata as cenouras, ovos e óleo no liquidificador até ficar homogêneo.",
      "Misture a farinha, açúcar e fermento em uma tigela.",
      "Junte a mistura líquida à seca e mexa bem.",
      "Asse a 180°C por 30 minutos."
    ]
  },
  {
    nome: "Mousse de Maracujá",
    ingredientes: [
      "1 lata de leite condensado",
      "1 lata de creme de leite",
      "1/2 xícara de suco de maracujá",
      "1/2 envelope de gelatina incolor sem sabor"
    ],
   preparo: [
      "Dissolva a gelatina em 1/4 de xícara de água quente.",
      "No liquidificador, bata o leite condensado, creme de leite e suco de maracujá.",
      "Adicione a gelatina dissolvida e bata novamente.",
      "Leve à geladeira por 3 horas antes de servir."
    ]
  },
  {
    nome: "Pudim de Leite Condensado",
    ingredientes: [
      "1 lata de leite condensado",
      "2 latas de leite (use a lata de leite condensado como medida)",
      "3 ovos",
      "1 xícara de açúcar para caramelizar"
    ],
   preparo: [
      "Caramelize o açúcar em uma forma de pudim.",
      "No liquidificador, bata o leite condensado, leite e ovos até ficar homogêneo.",
      "Despeje na forma e asse em banho-maria a 180°C por 40 minutos.",
      "Deixe esfriar e desenforme."
    ]
  },
  {
    nome: "Cookies de Aveia",
    ingredientes: [
      "1 xícara de aveia em flocos",
      "1/2 xícara de manteiga derretida",
      "1 xícara de açúcar mascavo",
      "1 ovo",
      "1 xícara de farinha de trigo",
      "1/2 colher de chá de fermento em pó",
      "1/2 xícara de passas ou chocolate picado (opcional)"
    ],
   preparo: [
      "Misture todos os ingredientes até formar uma massa homogênea.",
      "Modele bolinhas e coloque-as em uma assadeira untada.",
      "Asse a 180°C por 15 minutos ou até dourar."
    ]
  },
  {
    nome: "Arroz Doce",
    ingredientes: [
      "1 xícara de arroz",
      "3 xícaras de leite",
      "1/2 xícara de açúcar",
      "1 pau de canela",
      "1 colher de chá de essência de baunilha"
    ],
   preparo: [
      "Cozinhe o arroz no leite com o pau de canela até amolecer.",
      "Adicione o açúcar e a baunilha e continue cozinhando até o arroz ficar cremoso.",
      "Sirva com canela polvilhada."
    ]
  },
  {
    nome: "Pavê de Chocolate",
    ingredientes: [
      "1 pacote de biscoito de maisena",
      "1 lata de leite condensado",
      "2 colheres de sopa de achocolatado em pó",
      "1/2 xícara de leite",
      "1 caixa de creme de leite"
    ],
   preparo: [
      "Em uma panela, misture o leite condensado, achocolatado e leite. Cozinhe até engrossar.",
      "Retire do fogo e adicione o creme de leite.",
      "Em um refratário, alterne camadas de biscoitos e creme de chocolate.",
      "Deixe gelar por 4 horas e sirva."
    ]
  },
  {
    nome: "Torta de Limão Simples",
    ingredientes: [
      "1 pacote de biscoito de maisena triturado",
      "100g de manteiga derretida",
      "1 lata de leite condensado",
      "Suco de 2 limões",
      "1 caixinha de creme de leite"
    ],
   preparo: [
      "Misture o biscoito triturado com a manteiga e forre o fundo de uma forma.",
      "Bata o leite condensado, suco de limão e creme de leite até formar um creme.",
      "Despeje sobre a base de biscoito e leve à geladeira por 2 horas."
    ]
  },
  {
    nome: "Doce de Leite Caseiro",
    ingredientes: [
      "1 lata de leite condensado",
      "1 xícara de leite",
      "1 colher de sopa de manteiga",
      "1/2 xícara de açúcar"
    ],
   preparo: [
      "Em uma panela, misture todos os ingredientes e cozinhe em fogo baixo.",
      "Mexa constantemente até obter um ponto de brigadeiro mais mole.",
      "Deixe esfriar antes de servir."
    ]
  },
  {
    nome: "Gelatina Colorida",
    ingredientes: [
      "3 sabores diferentes de gelatina (ex: morango, limão e abacaxi)",
      "1 lata de creme de leite",
      "1 envelope de gelatina sem sabor"
    ],
   preparo: [
      "Prepare as gelatinas separadamente e deixe endurecer.",
      "Dissolva a gelatina sem sabor e misture com o creme de leite.",
      "Faça camadas alternadas de gelatina e o creme de leite, gelando cada camada antes de adicionar a próxima.",
      "Deixe na geladeira até ficar bem firme."
    ]
  }
];
// Exibe a lista de receitas em ordem alfabética
function exibirReceitas(receitas) {
    const recipeListDiv = document.getElementById('recipeList');
    recipeListDiv.innerHTML = '';  // Limpa a lista atual

    // Ordena as receitas por nome
    receitas.sort((a, b) => a.nome.localeCompare(b.nome));

    receitas.forEach((receita, index) => {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item');
        recipeItem.innerHTML = receita.nome;
        
        // Passa o índice correto da lista filtrada
        recipeItem.addEventListener('click', () => mostrarDetalhesReceita(receitas, index)); 
        recipeListDiv.appendChild(recipeItem);
    });
}

// Exibe os detalhes de uma receita
function mostrarDetalhesReceita(receitas, index) {
    const receita = receitas[index];
    document.getElementById('recipeTitle').innerText = receita.nome;
    document.getElementById('ingredientsList').innerHTML = receita.ingredientes.map(ing => `<li>${ing}</li>`).join('');
    document.getElementById('preparationSteps').innerText = receita.preparo;

    // Exibe a seção de detalhes
    document.getElementById('recipeDetails').style.display = 'block';
}

// Fecha os detalhes da receita
document.getElementById('closeRecipeDetails').addEventListener('click', () => {
    document.getElementById('recipeDetails').style.display = 'none';
});

// Melhorando a pesquisa para ser mais informal e correlacionada com a receita
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();
    const receitasFiltradas = receitas.filter(receita => {
        // Pesquisa no nome da receita e nos ingredientes de forma mais informal
        const nomeMatch = receita.nome.toLowerCase().includes(searchTerm);
        const ingredientesMatch = receita.ingredientes.some(ing => ing.toLowerCase().includes(searchTerm));
        
        // Correlaciona melhor com possíveis variações informais na busca
        const ingredientesTokens = searchTerm.split(' ');
        const ingredientesCorrelacionados = ingredientesTokens.every(token => {
            return receita.ingredientes.some(ing => ing.toLowerCase().includes(token));
        });
        
        return nomeMatch || ingredientesMatch || ingredientesCorrelacionados;
    });
    exibirReceitas(receitasFiltradas);
});

// Exibe todas as receitas inicialmente em ordem alfabética
exibirReceitas(receitas);
