const bloque = document.querySelectorAll( '.question' );
const h4 = document.querySelectorAll( '.question__title' );
const icon = document.querySelectorAll( '.question__icon' );

// Cuando CLICK en h4, 
    // Quitar la clase activo de TODOS los bloques
    // Vamos a añadir la clase activo al BLOQUE con la POSICION del h4 
    
bloque.forEach( ( cadaH4, i ) => {

    bloque[ i ].addEventListener( 'click', () => {

        bloque.forEach( ( cadaBloque, i ) => {
            bloque[ i ].classList.remove( 'active' );
            icon[ i ].classList.remove( 'question__icon-click' );
        } )

        bloque[ i ].classList.add( 'active' );
        icon[ i ].classList.toggle( 'question__icon-click' );
    } );

} );