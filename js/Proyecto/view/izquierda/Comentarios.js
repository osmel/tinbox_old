Ext.define('Proyecto.view.izquierda.Comentarios' ,{
    extend: 'Ext.view.View',  
    alias : 'widget.verComentarios', 
	id: 'comentarios',
	itemId:'comentarios',
   	Marcador: [
                '<tpl for=".">',
                    '<div class="grupoComenta" id="{name:stripTags}">',
                        '<div class="caja"><textarea readonly idusu="{idusuario}" idcom="{idcomentario}" style="cursor:pointer; border: 3px solid rgb(204, 204, 204); font-size: 18px;  ">{comentario}</textarea></div>',
                    '</div>',
                '</tpl>',
                '<div class="x-clear"></div>'
    ],
	initComponent: function() {
		var me = this;
		Ext.applyIf(me, {
		   store: 'Comentarios',
			tpl : this.Marcador,
			html : this.marcadorHtml, 
            multiSelect : true,
            height : 800,
            trackOver : true,
            overItemCls : 'x-item-over',
            itemSelector : 'div .grupoComenta',
            emptyText : 'No hay comentario para mostrar en pantalla',
			autoScroll:true
			
			}
		);

       
		me.callParent(arguments);
		
	
	
		me.store.load({  
			params: {
				idusuario: Ext.get('idusuario').dom.getAttribute('value'),
				idcomentario: -4,
				contenedor:'' 
			},
			callback: function(records, operation, success) {
			},
			scope: this
		});
		
    }
});

