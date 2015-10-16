Ext.define('Proyecto.view.izquierda.Figura', {
    extend: 'Ext.draw.Component', 
    alias : 'widget.objFigura', 
	id: 'Figura',
	itemId:'Figura1',
    viewBox: false,
    items: [{
        type: 'circle',
        fill: '#111',
        radius: 100,
        x: 100,
        y: 100
    }]

});



