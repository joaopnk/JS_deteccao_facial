function init(){
    const video     = document.getElementById("video");
    const canvas    = document.getElementById("canvas");
    const context   = canvas.getContext("2d");
    const tracker   = new tracking.ObjectTracker('face'); //Passando para reconhecer rosto!
    tracking.track('#video', tracker, {camera: true}) //Busque a face, na tag video, usando a camera! (convertendo em uma camera)
    tracker.on('track', event => {
        // console.log(event)
        context.clearRect(0, 0, canvas.width, canvas.height); //Limpando o canvas
            event.data.forEach( rect  => {
                // console.log(rect);
                // Realizando a troca de cores
                context.strokeStyle ='#008000';
                context.lineWidth = 2;
                // Desenhando o quadrado (a partir de X / Y / LARGURA / ALTURA)
                context.strokeRect(rect.x, rect.y, rect.width, rect.height); 

                // Descrevendo um texto em cima da img (texto / posição(seguindo o quadrado) )
                context.fillText(`x: ${rect.x}, w: ${rect.width}`, rect.x+rect.width+05, rect.y+20);
                context.fillText(`y: ${rect.y}, h: ${rect.height}`, rect.x+rect.width+05, rect.y+40);

            }); // Bloco que é executado quando detecta face
        })

    context.clearRe
}