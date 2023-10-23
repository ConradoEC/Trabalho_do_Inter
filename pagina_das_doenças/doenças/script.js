const increaseA = document.getElementById('increaseSize');
const normalA = document.getElementById('normalSize');
const decreaseA = document.getElementById('decreaseSize');
const btnContraste = document.getElementById('btnContraste');
const backgrounds = document.querySelectorAll('[data-backgrounds]');
const menu = document.getElementById('menu')
const perfil = document.getElementById('perfil')
const menuButton = document.getElementById('menu_button')
const menuSide_back = document.getElementById('menuSide_back')
const menuSide = document.getElementById('menuSide')
const items = document.querySelectorAll('.hidden')
const body = document.querySelector('body')
// const paragraph = document.getElementsByTagName('p');
let text = document.querySelectorAll('.data-font');

var remover = 0;
counter_menu = 0;
var on = 0;
counter_replace_advices_icons = 0;

// PARTE COPIADA }

const urlParams = new URLSearchParams(window.location.search);
const ids = urlParams.get('id');
const disease_img = document.getElementById('disease_img');

// fetch('https://conradoec.github.io/Trabalho_do_Inter/pagina_das_doen%C3%A7as/doen%C3%A7as/diseaseContent.json')
fetch('./diseaseContent.json')
.then(res=>res.json())
.then((json) =>
{
    disease_img.src = `${json[ids - 1].content.image}`
    disease_description.innerText = `${json[ids - 1].content.description}`

    json[ids - 1].content.symptoms.forEach(item =>
    {
        const issueLi = document.createElement('li')
        issueLi.innerHTML = `<li class="disease_symptoms_li">${item}</li>`

        disease_symptoms.appendChild(issueLi)
    })

    disease_h1.innerText = `Relacionados com ${json[ids - 1].content.name}`

    for(i = 0; i < json[ids - 1].content.news.length; i++)
    {
        const div = document.createElement('div')
        div.setAttribute('class', 'disease_related_newspaper_news')

        if(i % 2 != 0 )
        {
            div.innerHTML = `
            <p class="news_text">${json[ids - 1].content.news[i].new[0]}</p>
            <a href="${json[ids - 1].content.news[i].new[2]}" target="blanck"><div class="news_img"></div></a>
            `
            div.getElementsByClassName('news_img')[0].style.backgroundImage = `url(${json[ids - 1].content.news[i].new[1]})`
        }
        else
        {
            div.innerHTML = `
            <a href="${json[ids - 1].content.news[i].new[2]}" target="blanck"><div class="news_img"></div></a>
            <p class="news_text">${json[ids - 1].content.news[i].new[0]}</p>
            `

            div.getElementsByClassName('news_img')[0].style.backgroundImage = `url(${json[ids - 1].content.news[i].new[1]})`
        }

        disease_related_newspaper.appendChild(div)
    }

    for(i = 0; i < json[ids - 1].content.advices.length; i++)
    {
        const div = document.createElement('div')
        div.setAttribute('class', 'disease_advices_div')
        div.setAttribute('id', 'disease_advices_div')
        
        div.innerHTML = `
        <span class="advice_title">${json[ids - 1].content.advices[i].title}</span>
        <span id="advice_icon" class="advice_icon">${json[ids - 1].content.advices[i].icon}</span>
        <p class="advice_text">${json[ids - 1].content.advices[i].text}</p>
        `        
        disease_advices_divs.appendChild(div)
    }

    if(counter_replace_advices_icons == 0)
    {
        if(window.innerWidth <= 800)
        {
            for(i = 0; i < advice_icon.length - 1; i++)
            {
                disease_advices_divs.replaceChild(advice_icon[i], disease_advices_div[0])
            }
            disease_advices_divs.replaceChild(advice_icon[2], disease_advices_div)
            counter_replace_advices_icons = 1
        }
        else
        {
            if(window.innerWidth <= 800)
            {
                counter_replace_advices_icons = 0
            }
        }
    }
})


function increase()
{   
    // for(i = 0; i < titles.length; i++)
    // {
    //     let fontSize_1 = window.getComputedStyle(news_size[i]).getPropertyValue('font-size')

    //     fontSize_1 = parseFloat(fontSize_1);

    //     news_size[i].style.fontSize = (fontSize_1 + 5) + 'px'
    // }
    
    text.forEach(item => 
    {

        let fontSize_1 = window.getComputedStyle(item).getPropertyValue('font-size');

        fontSize_1 = parseFloat(fontSize_1);

        item.style.fontSize = (fontSize_1 + 5) + 'px'
    })

}

function decrease()
{

    // for(i = 0; i < titles.length; i++)
    // {
    //     let fontSize_1 = window.getComputedStyle(news_size[i]).getPropertyValue('font-size')

    //     fontSize_1 = parseFloat(fontSize_1);

    //     news_size[i].style.fontSize = (fontSize_1 - 5) + 'px'

    //     console.log
    // }

    text.forEach(item => 
    {
        let fontSize_1 = window.getComputedStyle(item).getPropertyValue('font-size');
    
        fontSize_1 = parseFloat(fontSize_1);

        item.style.fontSize = (fontSize_1 - 5) + 'px'
    })
}

function normal()
{
    text[0].style.fontSize = fonts[0]
    text[1].style.fontSize = fonts[1]

    for(i = 0; i < text.length; i++)
    {
        text[i].style.setProperty('font-size', `${fonts[0]}`)
    }
}

function contrastEffect()
{
    const contraste = 'contraste';
    const itemMenu = document.getElementsByTagName('li');



    if(on == 0)
    {
        if(itemMenu[0].style.color != 'yellow')
        {
            // colors = [paragraph[0].style.color];

            // for( i = 0; i < paragraph.length; i++)
            // {
            //     paragraph[0].style.color = 'yellow';
            // }
        }

        // for( i = 0; i < paragraph.length; i++)
        // {
        //     paragraph[i].classList.add(contraste)
        // }
    
        for( i = 0; i < itemMenu.length; i++)
        {
            itemMenu[i].classList.add(contraste);
        }

        backgrounds.forEach(items =>
        {
            items.classList.add(contraste);
        })

        backgrounds[2].style.setProperty('border-bottom', '2px solid yellow')

        on = 1;
    }
    else
    {
        // for( i = 0; i < paragraph.length; i++)
        // {
        //     paragraph[i].classList.remove(contraste);
        // }

        for( i = 0; i < itemMenu.length; i++)
        {
            itemMenu[i].classList.remove(contraste);
        }

        backgrounds.forEach(items =>
        {
            items.classList.remove(contraste);
        })

        backgrounds[2].style.setProperty('border-bottom', '2px solid black')

        // paragraph[0].style.setProperty('color', `${colors[0]}`)

        on = 0;
    }
}

function responsivity()
{
    if(counter_replace_advices_icons == 0)
    {
        if(window.innerWidth <= 800)
        {
            for(i = 0; i < advice_icon.length; i++)
            {
                disease_advices_divs.replaceChild(advice_icon[i], disease_advices_div[i])
                counter_replace_advices_icons = 1
                console.log(counter_replace_advices_icons)
            }
        }
    }
    else
    {
        if(window.innerWidth > 800)
        {
            counter_replace_advices_icons = 0
            console.log(counter_replace_advices_icons)
        }
    }

    if(window.innerWidth <= 500)
    {
        perfil.style.setProperty('display', 'none')
        menuButton.style.setProperty('display', 'block')
        menuSide.style.setProperty('display', 'flex')
    }
    else
    {
        perfil.style.setProperty('display', 'block')
        menuButton.style.setProperty('display', 'none')

        if(counter_menu == 1)
        {
            body.style.setProperty('overflow-y', 'scroll')
            menuSide.style.setProperty('display', 'none')
            menuSide_back.style.setProperty('display', 'none')
            menu.appendChild(menuButton);
            menuButton.innerText = 'menu';
            menuSide.style.setProperty('right', '-100%')
            menuButton.style.setProperty('position', 'relative')
            menu.style.setProperty('position', 'static')
            menuSide_back.classList.remove('menu_transition')
            menuSide_back.classList.add('menu_transition2')
            counter_menu = 0;
        }
    }
}

function menuBar()
{
    const menuSide_close = document.getElementById('menuSide_close')
    const menuSide_ul = document.getElementById('menuSide_ul')

    if(counter_menu == 0)
    {
        body.style.setProperty('overflow-y', 'hidden')
        menuSide_back.style.setProperty('display', 'flex')
        menuSide_back.classList.remove('menu_transition2')
        menuSide_back.classList.add('menu_transition')
        menuSide.style.setProperty('right', '0%')
        setTimeout(function()
        {
            menuSide_close.appendChild(menuButton, menuSide_ul);
            menuButton.innerText = 'close';
        }, 600)
        menuButton.style.setProperty('position', 'static')
        menu.style.setProperty('position', 'relative')
        counter_menu = 1;
        console.log(counter_menu)
        console.log(menuSide)
    }
    else
    {
        body.style.setProperty('overflow-y', 'scroll')
        menuSide_back.classList.remove('menu_transition')
        menuSide_back.classList.add('menu_transition2')
        setTimeout(function()
        {
            menu.appendChild(menuButton);
            menuButton.innerText = 'menu';
        }, 300)
        setTimeout(function()
        {
            menuSide_back.style.setProperty('display', 'none')
        }, 600)
        menuSide.style.setProperty('right', '-100%')
        menuButton.style.setProperty('position', 'relative')
        menu.style.setProperty('position', 'static')
        counter_menu = 0;
    }
}





increaseA.addEventListener('click', increase)

decreaseA.addEventListener('click', decrease)

normalA.addEventListener('click', normal)

btnContraste.addEventListener('click', contrastEffect)

window.onload = function()
{

    fonts = [
    text[0].style.fontSize,
    text[1].style.fontSize,
    ]

    if(window.innerWidth <= 1100)
    {
        remover = 1;
    }
}

window.addEventListener('resize', () =>
{
    responsivity()
})

window.addEventListener('resize', () =>
{
    responsivity()
})

menuButton.addEventListener('click', menuBar)
