Ext.define('Proyecto.view.izquierda.Diseno' ,{
    extend: 'Ext.view.View',  
    alias : 'widget.verDiseno', 
	id: 'Diseno',
	Marcador: [
                '<tpl for=".">',
                    '<div class="thumb-wrap" id="{name:stripTags}">',
                        '<div class="thumb"><img src="{url}" title="{name:htmlEncode}" width ="120" height ="120"></div>',
                        '<span class="x-editable">{shortName:htmlEncode}</span>',
                    '</div>',
                '</tpl>',
                '<div class="x-clear"></div>'
    ],
	marcadorHtml: 'favor selecciona un registro para ver detalles.', 
	

	initComponent: function() {
		var me = this;
		Ext.applyIf(me, {
		   store: 'Diseno',
			tpl : this.Marcador,
            multiSelect : true,
            height : 800,
            trackOver : true,
            overItemCls : 'x-item-over',
            itemSelector : 'div.thumb-wrap',
            emptyText : 'No hay imagenes para mostrar en pantalla',
			autoScroll:true
			
			}
		);

       
		me.callParent(arguments);
		me.store.load(
		{
			params:{
				start:0,
				limit: 100 
			}
		}
		); 	 
    }

});

