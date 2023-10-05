let allSlides = 0;
var items = document.getElementsByClassName('items');

var click_copo_da_felicidade = document.getElementById('click_copo_da_felicidade');
var click_torta = document.getElementById('click_torta');
var click_pave = document.getElementById('click_pave');
var click_bolo_de_pote = document.getElementById('click_bolo_de_pote')
var click_copo_da_felicidadeEX = document.querySelectorAll('.click_copo_da_felicidadeEX');

var moveSlide = document.querySelectorAll('[data-move]');
var moveSlide2 = document.querySelectorAll('[data-move2]');
var moveSlide3 = document.querySelectorAll('[data-move3]');
var moveSlide4 = document.querySelectorAll('[data-move4]');
var moveSlideEX = document.querySelectorAll('[data-moveEX]');

const dessertImage = document.querySelectorAll('[data-move2] .dessert_image, [data-move3] .dessert_image')

var btn_next = document.getElementById('arrow_next');
var btn_back = document.getElementById('arrow_back');
const modal_window2 = document.querySelector('#modal_window');
var body = document.querySelector('body')


function teste()
{   
    const windowTop = window.pageYOffset;
    console.log(windowTop);
}

function NotScroll()
{
    if(modal_window2.style.display != 'none') 
    {
        body.style.overflowY = 'hidden';
    }
    else
    {
        body.style.overflowY = 'scroll';
    }
}

function block1()
{
    modal_window2.classList.add('show')

    NotScroll()

    modal_window2.addEventListener('click', function(e) {
        if(e.target.id == 'background')
        {
            modal_window2.classList.remove('show');
            body.style.overflowY = 'scroll';
        }
    })

    modal_window2.addEventListener('click', function(e) {
        if(e.target.id == 'close')
        {
            modal_window2.classList.remove('show');
            body.style.overflowY = 'scroll';
            
        }
    })
}

function block2()
{
    modal_window2.classList.add('modal_window2')

    modal_window2.classList.add('show')

    NotScroll()

    modal_window2.addEventListener('click', function(e) {
        if(e.target.id == 'background')
        {
            modal_window2.classList.remove('show')
            modal_window2.classList.remove('modal_window2')
            body.style.overflowY = 'scroll';
        }
    })

    modal_window2.addEventListener('click', function(e) {
        if(e.target.id == 'close')
        {
            modal_window2.classList.remove('show')
            modal_window2.classList.remove('modal_window2')
            body.style.overflowY = 'scroll';
        }
    })
}

function block3()
{
    modal_window2.classList.add('modal_window3')

    modal_window2.classList.add('show')

    modal_window2.addEventListener('click', function(e) {
        if(e.target.id == 'background')
        {
            modal_window2.classList.remove('show')
            modal_window2.classList.remove('modal_window3')
        }
    })

    modal_window2.addEventListener('click', function(e) {
        if(e.target.id == 'close')
        {
            modal_window2.classList.remove('show')
            modal_window2.classList.remove('modal_window3')
        }
    })
}









window.addEventListener('scroll', teste)

click_copo_da_felicidade.addEventListener('click', function(e) {
    
    click_copo_da_felicidade = true;
    click_torta = false;
    click_pave = false;
    click_bolo_de_pote = false;
    click_copo_da_felicidadeEX = false;

    moveSlide2.forEach(item => 
    {
        item.classList.remove('on')
        item.classList.remove('show_up');
    })

    moveSlide3.forEach(item => 
    {
        item.classList.remove('on')
        item.classList.remove('show_up');
    })

    moveSlide4.forEach( item => 
    {
        item.classList.remove('on')
        item.classList.remove('show_up')
    })

    moveSlideEX.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    if(allSlides != 0)
    {
        moveSlide.forEach(item => item.classList.remove('on'))

        allSlides = 0;

    }

    modal_first.classList.add('on');
    modal_first.classList.add('show_up')
})




click_torta.addEventListener('click', function(e) {

    console.log(dessertImage)

    dessertImage.forEach(item =>
    {
        item.style.backgroundSize = ' 100% auto '
    })

    click_torta = true;
    click_copo_da_felicidade = false;
    click_pave = false;
    click_bolo_de_pote = false;
    click_copo_da_felicidadeEX = false;

    moveSlide.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide3.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide4.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlideEX.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    if(allSlides != 0)
    {
        moveSlide2.forEach(item => item.classList.remove('on'))

        allSlides = 0;
    }

    modal_second.classList.add('on');
    modal_second.classList.add('show_up')

})




click_pave.addEventListener('click', function(e) {

    dessertImage.forEach(item =>
    {
        item.style.backgroundSize = ' 100% auto '
    })

    click_pave = true;
    click_copo_da_felicidade = false;
    click_torta = false;
    click_bolo_de_pote = false;
    click_copo_da_felicidadeEX = false;

    moveSlide.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide2.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide4.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlideEX.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    if(allSlides != 0)
    {
        moveSlide3.forEach(item => item.classList.remove('on'))

        allSlides = 0;
    }

    modal_third.classList.add('on');
    modal_third.classList.add('show_up')
})




click_bolo_de_pote.addEventListener('click', function(e) {

    click_bolo_de_pote = true;
    click_copo_da_felicidade = false;
    click_pave = false;
    click_torta = false;
    click_copo_da_felicidadeEX = false;

    moveSlide.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide2.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide3.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlideEX.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    if(allSlides != 0)
    {
        moveSlide4.forEach(item => item.classList.remove('on'))

        allSlides = 0;
    }

    modal_fourth.classList.add('on');
    modal_fourth.classList.add('show_up')
})




click_copo_da_felicidadeEX.forEach( item => {
    item.addEventListener('click', function(e) {

        click_copo_da_felicidadeEX = true;
        click_copo_da_felicidade = false;
        click_torta = false;
        click_pave = false;
        click_bolo_de_pote = false;

        moveSlide.forEach(item => 
        {
            item.classList.remove('on')
            item.classList.remove('show_up');
        })

        moveSlide2.forEach(item => 
        {
            item.classList.remove('on')
            item.classList.remove('show_up');
        })

        moveSlide3.forEach(item => 
        {
            item.classList.remove('on')
            item.classList.remove('show_up');
        })

        moveSlide4.forEach( item => 
        {
            item.classList.remove('on')
            item.classList.remove('show_up')
        })

        if(allSlides != 0)
        {
            moveSlideEX.forEach(item => item.classList.remove('on'))

            allSlides = 0;

        }

        modal_EX.classList.add('on');
        modal_EX.classList.add('show_up')
    })
})











function hide()
{
    moveSlide.forEach(item => item.classList.remove('on'))
}

function show()
{
    moveSlide[allSlides].classList.add('on')
}

function nextSlide()
{
    modal_first.classList.remove('show_up')

    hide()

    if(allSlides === moveSlide.length -1)
    {
        allSlides = 0;
    }
    else
    {
        allSlides++
    }

    show()
}

function backSlide()
{
    modal_first.classList.remove('show_up')

    hide()

    if(allSlides === 0)
    {
        allSlides = moveSlide.length -1;
    }
    else
    {
        allSlides--
    }

    show()
}



function hide2()
{
    moveSlide2.forEach(item => item.classList.remove('on'))
}

function show2()
{
    moveSlide2[allSlides].classList.add('on')
}

function nextSlide2()
{

    modal_second.classList.remove('show_up')

    hide2()

    if(allSlides === moveSlide2.length -1)
    {
        allSlides = 0;
    }
    else
    {
        allSlides++
    }

    show2()
}

function backSlide2()
{

    modal_second.classList.remove('show_up')

    hide2()

    if(allSlides === 0)
    {
        allSlides = moveSlide2.length -1;
    }
    else
    {
        allSlides--
    }

    show2()
}




function hide3()
{
    moveSlide3.forEach(item => item.classList.remove('on'))
}

function show3()
{
    moveSlide3[allSlides].classList.add('on')
}

function nextSlide3()
{

    modal_third.classList.remove('show_up')

    hide3()

    if(allSlides === moveSlide3.length -1)
    {
        allSlides = 0;
    }
    else
    {
        allSlides++
    }

    show3()
}

function backSlide3()
{

    modal_third.classList.remove('show_up')

    hide3()

    if(allSlides === 0)
    {
        allSlides = moveSlide3.length -1;
    }
    else
    {
        allSlides--
    }

    show3()
}




function hide4()
{
    moveSlide4.forEach(item => item.classList.remove('on'))
}

function show4()
{
    moveSlide4[allSlides].classList.add('on')
}

function nextSlide4()
{

    modal_fourth.classList.remove('show_up')

    hide4()

    if(allSlides === moveSlide4.length -1)
    {
        allSlides = 0;
    }
    else
    {
        allSlides++
    }

    show4()
}

function backSlide4()
{

    modal_fourth.classList.remove('show_up')

    hide4()

    if(allSlides === 0)
    {
        allSlides = moveSlide4.length -1;
    }
    else
    {
        allSlides--
    }

    show4()
}




function hideEX()
{
    moveSlideEX.forEach(item => item.classList.remove('on'))
}

function showEX()
{
    moveSlideEX[allSlides].classList.add('on')
}

function nextSlideEX()
{

    modal_EX.classList.remove('show_up')

    hideEX()

    if(allSlides === moveSlideEX.length -1)
    {
        allSlides = 0;
    }
    else
    {
        allSlides++
    }

    showEX()
}

function backSlideEX()
{

    modal_EX.classList.remove('show_up')

    hideEX()

    if(allSlides === 0)
    {
        allSlides = moveSlideEX.length -1;
    }
    else
    {
        allSlides--
    }

    showEX()
}









btn_next.addEventListener('click', function(e){

    if(click_copo_da_felicidade == true)
    {
        nextSlide()

    }
    else if(click_torta == true)
    {
        nextSlide2()

    }
    else if(click_pave == true)
    {
        nextSlide3()

    }
    else if(click_bolo_de_pote == true)
    {
        nextSlide4()

    }
    else if(click_copo_da_felicidadeEX == true)
    {
        nextSlideEX()
    }
})

btn_back.addEventListener('click', function(e){

    if(click_copo_da_felicidade == true)
    {
        backSlide()
    }
    else if(click_torta == true)
    {
        backSlide2()
    }
    else if(click_pave == true)
    {
        backSlide3()
    }
    else if(click_bolo_de_pote == true)
    {
        backSlide4()
    }
    else if(click_copo_da_felicidadeEX == true)
    {
        backSlideEX()
    }
})