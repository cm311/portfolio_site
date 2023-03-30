var multilang_text = {
    'my-title-txt': {
        'en' : 'Colin Moriarity - Software Developer',
        'fr' : 'Colin Moriarity - Développeur de Logiciels',
        'es' : 'Colin Moriarity - Desarrollador de Software'
    },
    'resume-download-link' : {
        'en' : 'Resume (pdf)',
        'fr' : 'CV (pdf)',
        'es' : 'Resume (pdf)'
    },
    'personal-description' : {
        'en' : 'I\'m a software developer interested in using the Django framework to make complex projects accesible on the web. \
        I like learning languages.  I am interested in how human language and technology interact.  I also like to run and play video \
        games, but there is only so much time in the day.',
        'fr' : 'Je suis un développeur de logiciels intéressé par l\'utilisation du framework Django pour rendre des projets complexes \
        accessibles sur le Web. J\'aime apprendre les langues. Je m\'intéresse à la façon dont le langage humain et la technologie interagissent. \
        J\'aime aussi courir et jouer à des jeux vidéo pendant mon temps libre.',
        'es' : 'Soy un desarrollador de software interesado en usar el framework Django para hacer accesibles proyectos complejos en la web. \
        Me gusta aprender idiomas. Me interesa cómo interactúan el lenguaje humano y la tecnología. También me gusta correr y jugar video \
        juegos, pero a veces no hay bastante tiempo en el dia...'
    },
    'my-blog' : {
        'en' : 'A personal blog site created using Django and bootstrap.',
        'fr' : 'Un site de blog personnel créé avec Django et bootstrap.',
        'es' : 'Un sitio de blog personal creado con Django y bootstrap.'
    },
    'little-lemon' : {
        'en' : 'A website for a fictional restaurant made using Django, Bootstrap, Javascript etc.',
        'fr' : 'Un site Web pour un restaurant fictif réalisé avec Django, Bootstrap, Javascript, etc.',
        'es' : 'Un sitio web para un restaurante ficticio hecho con Django, Bootstrap, Javascript, etc.'
    },
    'french-elections' : {
        'en' : 'Data Analysis Project examining the First round of 2021 French Elections',
        'fr' : 'Projet d\'analyse de données examinant le premier tour des élections françaises de 2021',
        'es' : 'Proyecto de análisis de datos que examina la primera vuelta de las elecciones francesas de 2021'
    },
    'nfl-polls' : {
        'en' : 'Data Analysis project on NFL football polls',
        'fr' : 'Projet d\'analyse de données sur les \'polls\' recratifs de la NFL',
        'es' : 'Proyecto de análisis de datos sobre las \'polls\' de la NFL'
    },
    'nlp-tools' : {
        'en' : 'NLP tools for creating a Google News based corpus in multiple languages.  Some tools for creating word vectors and analyzing the differences.',
        'fr' : 'Outils NLP pour créer un corpus basé sur Google News dans plusieurs langues. Quelques outils pour créer des vecteurs de mots et analyser les différences.',
        'es' : 'Herramientas de NLP para crear un corpus basado en Google News en varios idiomas. Algunas herramientas para crear vectores de palabras y analizar las diferencias.'
    },
    'dj-app' : {
        'en' : 'C++ music player/DJing application',
        'fr' : 'Lecteur de musique C++/application DJing',
        'es' : 'Reproductor de música C++/aplicación de DJ'
    },
    'skills' : {
        'en' : 'Technical Skills',
        'fr' : 'Compétences techniques',
        'es' : 'Habilidades técnicas'
    },
    'languages' : {
        'en' : 'Language Skills',
        'fr' : 'Compétences linguistiques',
        'es' : 'Habilidades lingüísticas'
    },
    'en-list-item' : {
        'en' : 'English',
        'fr' : 'Anglais',
        'es' : 'Inglés '
    },
    'fr-list-item' : {
        'en' : 'French',
        'fr' : 'Français',
        'es' : 'Francés'
    },
    'es-list-item' : {
        'en' : 'Spanish',
        'fr' : 'Espagnol',
        'es' : 'Español'
    },
    'ar-list-item' : {
        'en' : 'Arabic',
        'fr' : 'Arabe',
        'es' : 'Arabe',
        
    }
}

function getAllKeyElements() {
    let jquery_string = ''
    for (var key in multilang_text) {
        jquery_string += '#' + key + ', '
    }
    return jquery_string.substring(0, jquery_string.length - 2);
}

function translateText(to_lang) {
    // Add the .crumble class to the appropriate tags
    for (var key in multilang_text){
        console.log( key );
        $(getAllKeyElements()).addClass('crumble');
    }

    // Wait for the animation to finish before translating the text
    setTimeout(function() {

        // Replace the text of the tags with the translated text
        for (var key in multilang_text){
            console.log( key );
            $('#' + key).text(multilang_text[key][to_lang]);
        }
        
        // Add the .reversecrumble class to the <p> tags to play the reverse animation
        $(String(getAllKeyElements())).addClass('reversecrumble');
        
        // Remove the .crumble and .reverse classes from the <p> tags and fade them back in
        setTimeout(function() {
            $(String(getAllKeyElements())).removeClass('crumble reversecrumble').fadeIn('slow');
        }, 700);
    }, 700);
    
}


$('#en').click(function() {
    translateText('en');
});

$('#fr').click(function() {
    translateText('fr');
});

$('#es').click(function() {
    translateText('es');
});

$('#ar').click(function() {
    translateText('ar');
});

