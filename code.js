
const persons = [

    {name:'Manifest (Lien de la page)'},
    {name:'La Vie Scolaire (https://uqload.org/wfpmo6qahho7.html)'},
    {name: 'BlackPanther (https://uqload.org/q07ao200eds3.html)'},
    {name:'BlackPanther Wakanda For Ever (https://uqload.org/ej2yyguqw83i.html)'},
    {name:'Athena (https://uqload.org/xopjmbgwnc1t.html)'},
    {name:'Dahmer (Lien de la page)'},
    {name:'Black Adam (https://sblongvu.com/e/czqd9p0hkvu0)'},
    {name:'Wednesday (Lien de la page)'}*
    {name:'Mercredi (Lien de la page)'}




];

const searchinput = document.getElementById('searchInput');

searchinput.addEventListener('keyup', function(){
    const input = searchinput.value;

    const result = persons.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()));

    let suggestion = '';

    if(input !=''){
    
    result.forEach(resultItem =>
        suggestion +=`
        <div class="suggestion">${resultItem.name}</div>
        `
        )
    }

        document.getElementById('suggestions').innerHTML = suggestion;
})
