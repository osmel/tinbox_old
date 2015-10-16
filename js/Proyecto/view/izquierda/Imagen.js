Ext.define('Proyecto.view.izquierda.Imagen', {
    extend: 'Ext.draw.Component',  
    alias : 'widget.objImagen', 
		x:0,
	    y:0,
	width: 100,
    height: 100,
	resizable: {  
		dynamic: true,
		//handles: 'all'
		//el: 'elToResize',
		handles: 'all',
		//handles: 'se',
		preserveRatio :true, //Preserva la relación original entre la altura y la anchura durante el cambio de tamaño 
		//transparent:true, //  Poner el borde del redimensionamiento transparentes. 
		minWidth: 100,
		minHeight: 100,
		//maxWidth: 500,
		//maxHeight: 400,
		//pinned: true		
		
    },
    cls: 'cursor-dragme',
	//html: '<h1 style="cursor:move">delegar mi cursor</h1>',
    draggable: {  
	    //delegate: 'h1',
		constrain: true,
        constrainTo: Ext.getBody() //Ext.getCmp('hoja1'), 
    },

		  items: [{
			    type: "image",
					x:0,
					y:0,
				width: 100,
				height: 100,	
				rotate: { 
					degrees: 0 //45
				}
		 }],

    initComponent: function() {
		var me = this;
		Ext.applyIf(me, {
		});
		me.callParent(arguments);
    },
	
	  listeners:{
                    click: function( tecla,op){
      }
	  }

});