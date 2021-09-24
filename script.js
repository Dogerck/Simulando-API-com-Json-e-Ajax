var getDataJson = new XMLHttpRequest();

getDataJson.open("GET", "./dados.json");

getDataJson.responseType = "json";

getDataJson.send();

getDataJson.onreadystatechange = () => {

    if (getDataJson.readyState === 4 && getDataJson.status === 200) {

        var lista = getDataJson.response;

        for (let i = 0; i < lista.modulos.length; i++) {

            //cria o content dos módulos.
            var criarModulo = document.createElement('DIV');
            criarModulo.classList.add('content-modulos');
            var selectContent = document.querySelector('.content');
            selectContent.appendChild(criarModulo);

            //cria o badge do módulo.
            var criarBadge = document.createElement('DIV');
            criarBadge.classList.add('modulos-badge');
            criarModulo.appendChild(criarBadge);

            //Verifica qual o tipo de área de estudo e coloca a cor específica pra cada um.
            if (lista.modulos[i].tipoAreaEstudo === "humanas") {

                criarBadge.style.backgroundColor = "#3072F6";
            } else if (lista.modulos[i].tipoAreaEstudo === "biologicas") {

                criarBadge.style.backgroundColor = "#4CFC98";
            } else if (lista.modulos[i].tipoAreaEstudo === "exatas") {
                criarBadge.style.backgroundColor = "#F63044";
            } else if (lista.modulos[i].tipoAreaEstudo === "comum") {
                criarBadge.style.backgroundColor = "#9A30F6";
            } else {
                criarBadge.style.backgroundColor = "#AFB7B2";
            }

            //cria o a div de conteúdo do módulo.
            var criarContMod = document.createElement('DIV');
            criarContMod.classList.add('modulos-conteudo');
            criarModulo.appendChild(criarContMod);

            //insere o numero do capítulo dentro do badge.
            var TextContentBadge = document.createElement('P');
            criarBadge.appendChild(TextContentBadge);
            TextContentBadge.textContent = "Capítulo "
            var TextContentBadgeNum = document.createElement('H2');
            criarBadge.appendChild(TextContentBadgeNum);

            TextContentBadgeNum.textContent = lista.modulos[i].numCapitulo;

            //cria a div do progresso e insere dentro do content modulos
            var criarDivProgresso = document.createElement('DIV');
            criarDivProgresso.classList.add('progresso');
            criarModulo.appendChild(criarDivProgresso);

            //cria o h1 para o titulo do capítulo.
            var tituloCap = document.createElement('h1');
            criarContMod.appendChild(tituloCap);

            tituloCap.textContent = lista.modulos[i].nomeCapitulo;

            //cria o p para a descrição do capítulo.
            var descrCap = document.createElement('P');
            criarContMod.appendChild(descrCap);

            descrCap.textContent = lista.modulos[i].descricaoCapitulo;

            //cria o p para a o progresso.   
            var textProgresso = document.createElement('P');
            criarDivProgresso.appendChild(textProgresso);
            textProgresso.textContent = "Progresso:"

            //cria a barra de progresso.   
            var criarBarraProgresso = document.createElement('DIV');
            criarBarraProgresso.classList.add('progresso-barra')
            criarDivProgresso.appendChild(criarBarraProgresso);

            //cria a barra interna de progresso. 
            var barraProgInterna = document.createElement('DIV');
            barraProgInterna.classList.add('progresso-barra-interna')
            criarBarraProgresso.appendChild(barraProgInterna);

            //Faz a barra de progresso ficar de acordo com o número que vem no json convertido em porcentagem. 
            barraProgInterna.style = "width:" + lista.modulos[i].progresso + "%";

            //cria o p para exercícios.   
            var textExercicios = document.createElement('P');
            criarDivProgresso.appendChild(textExercicios);
            textExercicios.textContent = "Exercício:"

            var numEstrMod = lista.modulos[i].estrelaExercício;

            //cria uma caixa onde serão inseridas as estrelas. 
            var caixaEstrelas = document.createElement('DIV');
            caixaEstrelas.classList.add('progresso-caixa-estrelas');
            criarDivProgresso.appendChild(caixaEstrelas);

            //cria um laço para criar a quantidade de estrelas obtida pelo json em cada módulo.
            for (let i = 0; i < numEstrMod; i++) {

                var estrelas = document.createElement('DIV');
                estrelas.classList.add('progresso-estrelas');
                caixaEstrelas.appendChild(estrelas);
            }

            //subtrai a quantidade máx que se pode ganhar de estrelas pelo número atualmente obtido.
            var valorRestanteEstrelas = 5 - numEstrMod;

            //cria um laço para criar o restante de estrelas cinzas não obtidas.
            for (let i = 0; i < valorRestanteEstrelas; i++) {

                var estrelaCinza = document.createElement('DIV');
                estrelaCinza.classList.add('progresso-estrelas--cinza')
                caixaEstrelas.appendChild(estrelaCinza);
            }

        }
    }
}