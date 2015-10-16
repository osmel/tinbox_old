Ext.define('Proyecto.view.izquierda.Galeria' ,{
    extend: 'Ext.view.View',  // de donde hereda
    alias : 'widget.verGaleria', //un alias para que mas tarde pueda ser usada como un xtype:'usuariolistar'
	cls: 'galeria',
	id: 'galeria',
	itemId:'galeria',
	Marcador: [
                '<tpl for=".">',
                    '<div class="thumb-wrap" id="{name:stripTags}">',
                        '<div class="thumb"><img style="cursor:pointer;" src="{url}" title="{name:htmlEncode}" class="claseImagen" width ="150" height ="150"></div>',
                        '<span class="x-editable">{shortName:htmlEncode}</span>',
                    '</div>',
                '</tpl>',
                '<div class="x-clear"></div>'
    ],
	marcadorHtml: 'favor selecciona un registro para ver detalles.', 
	initComponent: function() {
		var me = this;
		Ext.applyIf(me, {
		   store: 'Imagenes',
			tpl : this.Marcador,
            multiSelect : true,
            height : 550,
            trackOver : true, //Cuando es true los overItemCls se aplicarán a las filas cuando estos flotan sobre este.
								//Esto a cambio también causará eventos highlightitem y unhighlightitem a ser lanzado.
								//Activada automáticamente cuando la configuración overItemCls está establecida.
								
            overItemCls : 'x-item-over', //Una clase CSS que se aplican a cada elemento de la vista en mouseover. 
										//Al establecer esta ajustará automáticamente trackOver en true.
            itemSelector : 'div.thumb-wrap', //Este es un ajuste necesario. Un simple selector CSS 
											 //(por ejemplo div.some-class o span:first-child) que se utiliza para 
											 //determinar qué nodos de este DataView se trabaja. 
											 //El itemSelector se utiliza para asignar nodos DOM a los registros. 
											 //Como tal, no debe ser sólo un elemento de nivel raíz que coincida 
											 //con el selector para cada registro.
											 
            emptyText : 'No hay imagenes para mostrar en pantalla',
			autoScroll:true
		});

       
		me.callParent(arguments);
		
		me.store.load({  
			params: {
				idusuario: Ext.get('idusuario').dom.getAttribute('value')
			},
			callback: function(records, operation, success) {
			},
			scope: this
		});		
	
    } 
});





    