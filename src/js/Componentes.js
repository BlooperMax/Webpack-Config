    import '../css/Componentes.css';

    export const saludar = (nombre)=>{

    console.log( 'creando h1' );

    const h1 = document.createElement('h1');
    h1.innerText = `Bootstrap | hola wenas, ${nombre} Owo`;

    document.body.append(h1);
}
