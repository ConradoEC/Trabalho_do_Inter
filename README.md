Descrição do projeto interdisciplinar proporcionado pela Escola Técnica Estadual (ETEC) de Carapicuíba
Nome do projeto: Intermedic
Equipe:
* Erick Conrado Almeida da Silva - Desenvolvedor Full Stack
* Italo Monteiro Lopes - Desenvolvedor Front-end
* Beatriz Bruna Martins de Oliveira - Pesquisadora
* Evellyn Silva de Sousa - Pesquisadora
* Alexia Vitoria da Silva Costa - Pesquisadora

AVISOS: Para testar todas as funcionalidades do site, incluindo as funcionalidades do servidor em Node, aconselhamos utilizar para login o seguinte cadastro: 
NOME: Erick; EMAIL: erick.silva309@etec.sp.gov.br; SENHA: erick.

Qual o nosso projeto:
O nosso projeto basicamente se refere à uma plataforma digital com o intuito de informar a todos sobre as enfermidades atuais junto a seus tratamentos. Nele teremos 7 paginas ao todo, sendo 1 a página principal, 4 para conteúdo, 1 para o cadastro e mais uma para login do usuario.
Escolhemos este tema pois acreditamos que a desinformação nos atrapalha de diversas manerias, porém quando ela está ligada à saúde, uma informação incorreta pode ser fatal. O nosso projeto busca diminuir essas desinformações reunindo conteúdos de fontes confiáveis e atuais e entregando-os de maneira prática e acessível a todos que possuem conexão a internet.

<HOME>

A "home" seria a página principal do site. Com ela, podemos acessar todas as outras páginas por meio do nosso menu, que está localizado no cabeçalho, ou pelo corpo da página.
Acessibilidade visual:
Referente ao cabeçalho, além do menu, é possível encontrar alguns elementos. O primeiro deles é a nossa logo, seguido de alguns botões e dois links, sendo o primeiro para uma parte da nossa home, onde apresentamos notícias pertinentes à área da saúde, e o segundo para o nosso cadastro. Os botões possuem as funções de deixar o site mais acessível, sendo os com a letra "A", para aumentar ou diminuir a fonte dos textos do site, e o círculo para contraste das cores, ajudando aqueles que possuem algum tipo de deficiencia visual voltada ao daltonismo.
Elementos 100% em JS:
O nosso site possui elementos que foram criados 100% em JavaScript, diferente do usual, que seria usando HTML. Porém, eles só aparecem para dispositivos de pequeno porte.

<PÁGINA DOS REMÉDIOS>

Esta página é referente aos tratamentos das enfermidades via medicamentos.
Barra de pesquisa:
Um dos primeiros elementos desta página é a barra de pesquisa, nela, como o próprio nome diz, é possível procurar algum remédio cujo você deseja encontrar informações sobre ele.
Janelas estilo modal:
Seguindo o corpo da página, temos um espaço com amostras de alguns dos remédios que o site possui informações. O texto na amostra é um recorte do conteúdo referente a esse remédio, porém, quando o remédio é clicado, é aberto uma janela, denominada de modal, onde é mostrado as informações completas sobre esse remédio, tendo um texto que funciona como uma bula com as informações mais pertinentes sobre o medicamento, uma imagen dele mesmo, e uma pequena lista indicando para que o remédio é ou não indicado.
Vizualização/criação de comentários:
Logo abaixo do espaço onde está os medicamentos, temos dois botões. O primeiro serve para poder visualizar os comentários sobre algum remédio em específico. Este recurso foi implementado para que os usuários de determinado medicamento pudessem dar suas opiniões sobre ele, além de ideias de melhorias ao medicamento em razão de custo, disponibilidade, entre outros fatores. O segundo botão, como o próprio nome indica, lhe permite criar um comentário, porém, é necessário que você já possua uma conta e esteja logado para que isso ocorra.
Reaproveitamento de elementos existentes:
Outro diferencial que nosso projeto possui, é o aproveitamento de elementos já existentes na página. Por exemplo, quando é escolhido um remédio pela barra de pesquisa, ao invés de gerarmos outro espaço para que aquele elemento possa se encaixar sem atrapalhar o resto da página, nós simplesmente tiramos os elementos que já estavam naquele espaço, nesse caso eram as amostras, e colocamos o novo elemento no lugar, cujo é o remédio o qual o usuário pesquisou. Falando um pouco sobre código, este processo só foi possível graças as funções “appendChild()” e “replaceChild()” do JavaScript.

<PÁGINA DAS DOENÇAS>

Esta página tem como objetivo informar sobre as enfermidades e auxiliar o usuário para tentar ter pelo menos uma noção do que ele pode estar passando. Esta mesma página possue mais uma função, que seria de informar os jovens em relação as Infecções Sexualmente Transmissivesi (IST’s).
Passagem de informações por páginas e páginas independentes sobre as doenças:
Sobre a barra de pesquisa, após escolher a enfermidade que deseja obter informações, o usuário será redirecionado para a página onde temos os conteúdos relacionados as doenças. Mesmo que tenhamos diversas enfermidades armazenadas, a página se adpta a doença que foi pesquisada, mudando seu conteúdo. Isso ocorre pois é passado para a página um número de identificação, tal qual é usado pela página para saber qual conteúdo deve ser usado para preencher seus campos. Em relção ao código, essa ação só é possível devido a uma função chamada “URLSearchParams()”.

<PAGINA DE VACINAÇÃO>

Esta página está direcionada as vacinas e as campanhas de vacinação. Seu propósito é de ajudar o usuário a se organizar em relação a sua saúde providenciada de vacinas. 
O primeiro conjunto de elementos da página são os anúncios de campanhas de vacinação que estão ocorrendo neste exato momento, informando assim, de forma prática, quais vacinas anuais estão disponíveis para o consumo. 
No próximo componente do corpo da página está a carteira de vacinação digital. Será nela que o usuário poderá ter acesso a todas as suas vacinas já tomadas, e as que ainda estão em aguardo. Este elemento foi pensado com o intuito de evitar perdas de carteiras de vacinação, uma vez que não é possível possuir esta fisicamente, e também com o propósito de ajudar o usuário a ter uma visão ampla de como está sua imunidade em relação a doenças mais desastrosas, como HIV ou Febre Amarela.
Verificação de login:
O unico requisito para ter acesso à carteira de vacinação, é o login no próprio site, como a mensagem indica. Esta verificação ocorre utilizando a linguagem JavaScript, onde é verificado se há informações do usuário dentro de uma área na própria página, chamada de “Session Storage”. Após essa verificação, são recolhidos as informações da caderneta de vacinação do usuário.
Adaptabilidade ao tempo da carteira de vacinação:
Outra funcionalidade que a caderneta do nosso projeto possui, é a adaptabilidade em relação ao tempo. Por exemplo, algumas vacinas são anuais, e outras necessitam de doses adicionais, em ambas as situações, há um determinado tempo entre uma dose e outra. A função que a caderneta realiza é de verificar se este tempo já foi alcançado e indicar para o usuário que agora ele poderá tomar a nova dose da mesma vacina, deixando-a como uma vacina pendente. Esta função foi desenvolvida utilizando novamente o JavaScript, com a função “Date()”.

<LOGIN/CADASTRO>

O projeto também possui uma página de login e de cadastro. A de cadastro serve para criar uma conta em nosso site. E a de login, como já foi feito, serve para que o servidor possa acessar as informações do usuário e direcioná-las ao site.
Criacao de sessões em php:
Tanto a página de Login quanto a de cadastro, foram utilizadas PHP em seu back-end, principalmente na página de login, onde foram geradas sessões em PHP.

<SERVIDOR EM NODE>
  
Para desenvolver nosso projeto, foi necessário a criação de um servidor em Node. Através dele que conseguimos acessar as informações necessárias para o nosso site. O servidor foi hospedado remotamente para que pudesse ser acessado a qualquer momento, sem necessidade de deploy manual.
A maioria das informações que nosso site possui, incluindo as informações dos remédios e os comentários , até mesmo os dados dos usuários, foram gerados e armazenados de forma remota em um banco de dados não local. Sendo assim, para que os dados dos medicamentos fossem acessados, o próprio site resgatou esses dados do nosso banco de dados remoto.
Explicação de como são gerados novos dados pelos site:
Basicamente, quando o site está precisando de alguma informação, como no caso dos comentários de um determinado remédio, ele gera uma requisição. Essa requisição vem dos protocolos HTTP, nesse caso estamos usando o protocolo GET, onde por meio de uma API no nosso servidor, são buscadas no banco de dados as informações solicitadas e posicionadas em seus devidos lugares no site. Para gerarmos informações, como no caso de atualizar uma vacina não tomada antes, ou na criação de um comentário, o método utilizado é o POST, onde, também por meio da API no servidor, os dados são armazenados no banco de dados.

Obrigado por ter lido, caso haja dúvidas ou queira fazer algum comentário, segue o link para o meu linkedin: www.linkedin.com/in/erick-conrado-almeida-da-silva
