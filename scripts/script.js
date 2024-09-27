
const content = document.getElementById('content');

const headerDiv = document.getElementById('image-header');
const fileInput = document.getElementById('fileInput');

window.onload = () => {
    renderHeader()
    renderAbilities();
    renderPowers();
    renderSkills();
    renderAdvantages();
}

function savePDF() {
    const element = document.querySelector('#content');
    
    const options = {
        margin:             0,
        filename:           'Marvel_Sheet-Test.pdf',
        image:              { type: 'jpeg', quality: 0.98 },
        html2canvas:        { scale: 2 },
        jsPDF:              { unit: 'mm', format: 'letter', orientation: 'portrait' },
    };
    // New Promise-based usage:
    html2pdf().set(options).from(element).save();
}

function changeHeader(event) {    
    fileInput.click();
}

function renderHeader() {
    url = 'media/avatar-landscape.jpeg';
    // url = 'media/avatar-portrait.jpeg';
    // console.log(headerIMG.style)
    setHeaderImage(url);
}

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        let imageURL = URL.createObjectURL(file);
        // Define a imagem de fundo no div
        headerDiv.style.backgroundImage = `url(${imageURL})`;
        // uploadDiv.textContent = ""; // Remove o texto do div
        
        // Cria um novo objeto de imagem para obter as dimensões
        setHeaderImage(imageURL);
    }
});

function setHeaderImage(imageURL) {
    const img = new Image();
    img.src = imageURL;

    // Quando a imagem for carregada, exibe suas dimensões
    img.onload = () => {
        const imageWidth = img.width;
        const imageHeight = img.height;
        
        // Determina se a imagem é paisagem ou retrato
        if (imageWidth > imageHeight) {
            console.log("A imagem é em formato paisagem.");
            headerDiv.style.backgroundSize = 'cover'; // Configura como cover
            headerDiv.style.backgroundPosition = 'center'; 
            // headerDiv.style.textAlign = 'left'; 
        } else if (imageHeight > imageWidth) {
            console.log("A imagem é em formato retrato.");
            headerDiv.style.backgroundSize = 'contain'; // Configura como contain
            headerDiv.style.backgroundPosition = 'left'; 
            // headerDiv.style.textAlign = 'right'; 
        } else {
            console.log("A imagem é quadrada.");
            headerDiv.style.backgroundSize = 'cover'; // Ou qualquer outra configuração desejada
            headerDiv.style.backgroundPosition = 'center'; 
            // headerDiv.style.textAlign = 'left'; 
        }
        
        // Define a imagem de fundo no div
        headerDiv.style.backgroundImage = `url(${imageURL})`;
        
        console.log(`Dimensões da imagem: ${imageWidth} x ${imageHeight}`);
    };
}


function clearHeader() {
    headerDiv.style.backgroundImage = ``;
}

// *********************************************************************************
// Habilidades
// *********************************************************************************
const abilitiesBlock = document.getElementById('abilities');
function renderAbilities() {
    const abiNames = ['FOR', 'AGI', 'VIG', 'DES', 'LUT', 'INT', 'PRO', 'PRE'];
    const colors = ['red', 'orange', 'blue', 'green', 'purple', 'grey', 'darkred', 'darkgold'];
    
    let num;
    let abilitiyCircle, abiRank, abiName;
    
    for(let i = 0; i < 8; i++) {
        abilitiyCircle = document.createElement('div');
        abilitiyCircle.className = 'abi-circle';
        
        num = parseInt(Math.random() * 12);
        // abilitiyCircle.style.background = `conic-gradient(red calc(${num} / 20 * 360deg),#ddd 0deg)`;
        abilitiyCircle.style.borderColor = `${colors[i]}`;
        
        // Graduação
        abiRank = document.createElement('div');
        abiRank.className = 'abi-rank';
        abiRank.innerHTML = `${num}`;
        abilitiyCircle.appendChild(abiRank);
        
        // Nome
        abiName = document.createElement('div');
        abiName.className = 'abi-name';
        abiName.innerHTML = `${abiNames[i]}`;
        abilitiyCircle.appendChild(abiName);
        
        abilitiesBlock.appendChild(abilitiyCircle);
    }
}

// *********************************************************************************
// Perícias
// *********************************************************************************
const skillsBlock = document.getElementById('skills');
function renderSkills() {
    const skills = ["Acrobacias", "Atletismo", "Combate À Distância", "Combate Corpo-a-corpo", "Enganação", "Especialidade", "Furtividade", "Intimidação", "Intuição", "Investigação", "Percepção", "Persuasão", "Prestidigitação", "Tecnologia", "Tratamento", "Veículos"];
    
    let skillName, skillRank, skillTotal;
    let rank, total;
    
    for(let skill of skills) {
        rank = parseInt(Math.random() * 15);
        total = parseInt(Math.random() * 5) + rank;
        
        skillName = document.createElement('header');
        skillName.innerHTML = skill;
        
        skillRank = document.createElement('div');
        skillRank.className = 'skill-rank';
        skillRank.innerHTML = rank;
        
        skillTotal = document.createElement('div');
        skillTotal.className = 'skill-total';
        skillTotal.innerHTML = total;
        
        skillsBlock.appendChild(skillName);
        skillsBlock.appendChild(skillRank);
        skillsBlock.appendChild(skillTotal);
    }
}

// *********************************************************************************
// Vantagens
// *********************************************************************************
const advantagesBlock = document.getElementById('advantages');
function renderAdvantages() {
    const advantages = ["Ação em Movimento", "Agarrar Aprimorado", "Ataque À Distância 2", "Ataque Dominó 2", "Ataque Imprudente", "Ataque Poderoso", "Avaliação", "Destemido", "Equipamento", "Esforço Extraordinário", "Maestria em Arremesso", "Rolamento Defensivo", "Segunda Chance (Controle Mental)", "Tolerância Maior"];
    
    let output = '';
    
    for(let i = 0; i < advantages.length; i++) {
        // advantageElement = document.createElement('span');
        output += advantages[i];
        if(i !== advantages.length - 1) {
            output +=  ', ';
        }
    }
    
    let advantageElement = document.createElement('p');
    advantageElement.innerHTML = output;
    advantagesBlock.appendChild(advantageElement);
}

// *********************************************************************************
// Poderes
// *********************************************************************************
function renderPowers() {
    var blocks = [];
    let powerBlock, powerHeader, powerDescription;
    for(let i = 0; i < 50; i++) {
        powerBlock = document.createElement('div');
        powerBlock.className = 'power-block';
        
        powerHeader = document.createElement('header');
        powerHeader.innerHTML = 'Poder';
        powerBlock.appendChild(powerHeader);
        
        powerDescription = document.createElement('p');
        powerDescription.innerHTML = '<b>Drama:</b> <i>Resuminho do poder como ele é no jogo e como deve ser interpretado.</i>';
        powerBlock.appendChild(powerDescription);
        
        powerDescription = document.createElement('p');
        powerDescription.innerHTML = '<b>Trama:</b> Como são os efeitos que compoem o poder e seus custos';
        powerBlock.appendChild(powerDescription);
        
        blocks.push(powerBlock);
    }
    
    const page1Container = document.querySelector('#power-list-page1');
    const page2Container = document.querySelector('#power-list-page2');
    
    // Conta quantos "power-blocks" podem ser adicionados antes de causar overflow
    var maxBlocks = countPowerBlocksWithStrictOverflow(page1Container, blocks);
    let leftovers = blocks.length - maxBlocks;
    console.log(`Você pode adicionar ${maxBlocks} blocos antes de causar overflow, sobrando ${blocks.length - maxBlocks}.`);
    if(leftovers > 0) {
        blocks = blocks.splice(maxBlocks)
        maxBlocks = countPowerBlocksWithStrictOverflow(page2Container, blocks);
        // console.log(`Você pode adicionar ${maxBlocks} blocos antes de causar overflow, sobrando ${blocks.length - maxBlocks}.`);
    }

    let powerPage, powerListElement;
    do {
        powerPage = document.createElement('div');
        powerPage.className = 'a4-page p-5';
        powerListElement = document.createElement('div');
        powerListElement.className = 'power-listing';
        powerPage.appendChild(powerListElement);

        content.appendChild(powerPage);
        blocks = blocks.splice(maxBlocks)
        maxBlocks = countPowerBlocksWithStrictOverflow(powerListElement, blocks);
        leftovers = blocks.length - maxBlocks;
    } while(leftovers > 0);
}