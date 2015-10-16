Ext.define('Proyecto.view.derecha.Hoja2' ,{
    extend: 'Ext.panel.Panel',  
    alias : 'widget.verHoja2', 
	id: 'hoja2',
	x: 1, 
	y: 1, 
	width: 628,
    height: 300,	
	bodyStyle: {
		'background-color': 'white;',
		'background-image': 'url(images/fondos/fondo.jpg);',
		'background-repeat': 'no-repeat;',
		'background-attachment': 'scroll;'	
	},	
			autoScroll:true,
	initComponent: function() {
		var me = this;
		Ext.applyIf(me, {
		    title: 'Hello',
		    width: 200
			}
		);
     	me.items =[contenedor4,contenedor5,contenedor6,contTexto3,contTexto4];
		me.callParent(arguments);
    }
});

this.contenedor4 = Ext.create('Proyecto.view.derecha.Contenedor', {
	id:'ver4',
	itemId:'ver4',
    alias : 'widget.ver4',
	x: 165, 
	y: 168, 
	width: 213,
    height: 319,
});


this.contenedor5 = Ext.create('Proyecto.view.derecha.Contenedor', {
	id:'ver5',
	itemId:'ver5',
    alias : 'widget.ver5',
	x: 386, 
	y: -147, 
	width: 207,
    height: 155,
});

this.contenedor6 = Ext.create('Proyecto.view.derecha.Contenedor', {
	id:'ver6',
	itemId:'ver6',
    alias : 'widget.ver6',
	x: 386, 
	y: -132,   
	width: 207,
    height: 148,
});

this.contTexto3 = Ext.create('Ext.panel.Panel', {
	bodyStyle: {
		'background-color':'transparent;'
	},	
	id:'text3',
	itemId:'text3',
    alias : 'widget.text3',
	x: 197,  
	y: -48,   
	width: 171,
    height: 168,
	header:false
});

this.contTexto4 = Ext.create('Ext.panel.Panel', {
	bodyStyle: {
		'background-color':'transparent;'
	},	
	id:'text4',
	itemId:'text4',
    alias : 'widget.text4',
	x: 388, 
	y: -281,
	width: 190,
    height: 172,
	header:false
});
