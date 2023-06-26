let div_globale = document.getElementById('id_div_globale');
let autre_div = div_globale.querySelectorAll('div.select');
let image_font_space = document.getElementById('id_image_fond');

/*** ANIMATION DE LA PLANETE  ***/
function planeteAnimation(id) {
    let div = document.getElementById('divImg' + id);
    let div_texte = document.getElementById('div_texte_planete_' +id);

    // FAIRE GROSSIR ET CENTRER LA PLANETE CLIQUÉ
    if(div.classList.contains('class_div_img')) {
        // ANIMER LA DIV DU TEXTE
        div_texte.classList.add('animation_div_texte');
        // PLANETE
        div.classList.add('class_div_animation_click_planete');
        div.classList.remove('class_div_img');
        div.classList.remove('select');
        div.dataset.actif = '1';


        // DEPLACER LE FOND
        switch(id){
            case '1' : image_font_space.classList.add('class_fond_1'); image_font_space.classList.remove('image_fond') ;break;
            case '2' : image_font_space.classList.add('class_fond_2'); image_font_space.classList.remove('image_fond') ;break;
            case '3' : image_font_space.classList.add('class_fond_3'); image_font_space.classList.remove('image_fond') ;break;
            case '4' : image_font_space.classList.add('class_fond_4'); image_font_space.classList.remove('image_fond') ;break;
            case '5' : image_font_space.classList.add('class_fond_5'); image_font_space.classList.remove('image_fond') ;break;
            case '6' : image_font_space.classList.add('class_fond_6'); image_font_space.classList.remove('image_fond') ;break;
            case '7' : image_font_space.classList.add('class_fond_7'); image_font_space.classList.remove('image_fond') ;break;
        }

        // FAIRE PARTIR LES AUTRES PLANETES
        autre_div.forEach( function(div_planete){
            if( div_planete.classList.contains('select')){
                if(div_planete.classList.contains('top')){
                    div_planete.classList.add('top_1000');
                }
                if(div_planete.classList.contains('bottom')){
                    div_planete.classList.add('bottom_1000');
                }
                if(div_planete.classList.contains('left')){
                    div_planete.classList.add('left_1000');
                }
                if(div_planete.classList.contains('right')){
                    div_planete.classList.add('right_1000');
                }
            }
        })

        // AFFICHER LE TEXTE
        let titrePlanete = document.getElementById('titre_planete_' +id);
        let div_menu_Planete = document.getElementById('div_menu_planete_' +id);

        setTimeout(function(){
            div_menu_Planete.classList.remove('hide');
            titrePlanete.classList.remove('hide');

            titrePlanete.style.fontSize = '2em';
        }, 1000);
    }
}

// REVENIR EN ARRIERE
image_font_space.addEventListener('click', function() {
    let divs = document.getElementsByClassName('class_div_animation_click_planete');

    if( divs.length > 0 && divs[0].dataset.actif === '1'){
        let id = divs[0].dataset.planete;
        let div = document.getElementById('divImg' +id);

        div.classList.remove('class_div_animation_click_planete');
        div.classList.add('class_div_img');
        div.classList.add('select');
        div.dataset.actif = '0';

        // DEPLACER LE FOND
        image_font_space.className = 'image_fond class_fond_x';

        // FAIRE PARTIR LES AUTRES PLANETES
        autre_div.forEach( function(div_planete){
            if( div_planete.classList.contains('select')){
                if(div_planete.classList.contains('top')){
                    div_planete.classList.remove('top_1000');
                }
                if(div_planete.classList.contains('bottom')){
                    div_planete.classList.remove('bottom_1000');
                }
                if(div_planete.classList.contains('left')){
                    div_planete.classList.remove('left_1000');
                }
                if(div_planete.classList.contains('right')){
                    div_planete.classList.remove('right_1000');
                }
            }
        })

        let div_texte = document.getElementById('div_texte_planete_' +id);
        div_texte.classList.remove('animation_div_texte');

        // AFFICHER LE TEXTE
        let titrePlanete = document.getElementById('titre_planete_' +id);
        let div_menu_planete = document.getElementById('div_menu_planete_' +id);

        titrePlanete.classList.add('hide');
        div_menu_planete.classList.add('hide');
        div_texte.classList.add('hide');
    }
})

// *** ANIMATION DU TEXTE ***/
function showTexte(id){
    let titrePlanete = document.getElementById('titre_planete_' +id);
    let divPlanete = document.getElementById('div_texte_planete_' +id);
    // AFFICHE TITRE
    divPlanete.classList.remove('hide');
    titrePlanete.classList.remove('hide');
}

function hideTexte(id){
    let titrePlanete = document.getElementById('titre_planete_' +id);
    let divPlanete = document.getElementById('div_texte_planete_' +id);
    let divParent = document.getElementById('divImg' +id);

    if(!divParent.classList.contains('class_div_animation_click_planete')){
        // CACHE LE TITRE
        divPlanete.classList.add('hide');
        titrePlanete.classList.add('hide');
    }
}
