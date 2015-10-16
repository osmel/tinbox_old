Ext.define('Proyecto.view.derecha.ContenedorTexto',{
 extend: 'Ext.panel.Panel',
	id:'text1',
	itemId:'text1',
    alias : 'widget.text1',
	header:false,
	initComponent: function() {
		var me = this;
		header = false;
////////////////////////////////////////Inicio de Restaura de texto///////////////////////////////////////////////		
		 Ext.Ajax.request({  
			url:'datos/comentarios-salvada.php',
            method: 'POST',  
            params: {
					  idusuario:Ext.get('idusuario').dom.getAttribute('value'),
					  idcomentario:4,	
					  contenedor:me.id
					 },
            success: function(response){
			   if (Ext.decode(response.responseText).success == true) //si hay textos salvado entonces
			   { 
					tt = '';
					Ext.each( Ext.decode(response.responseText).data , function(dato,index,suceso){
						tt = tt +'<textarea readonly style="cursor:default	; >'+dato.comentario+'</textarea>';
				    });
				  
				  var texto = Ext.create('Proyecto.view.izquierda.SpriteTexto', {
							tpl:tt,
							data:{},
							cls:'textoarea', 
							id:'Elem_'+me.id,
							itemId:'Elem_'+me.id 
				 });
				var vista = Ext.getCmp(me.id).add(texto); 	
			   }
            }
         });  
//////////////////////////////////////////Fin de restaura////////////////////////////////////////		
		this.bodyStyle= {
			'background-color': 'transparent;'
		};	
		Ext.applyIf(me, {
		    bbar:  [{ type: 'button',text:"Eliminar",  iconCls:'delete-icon',
				handler: function() { 
						me.el.dom.children[0].innerHTML='';
				 Ext.getCmp('comentarios').getStore().load({ 
					params: {
						idusuario: Ext.get('idusuario').dom.getAttribute('value'),
						idcomentario: 0,
						contenedor:me.id 
				},
				callback: function(records, operation, success) {
				} 
				});
				     Ext.each(me.el.dom.children,function(dato,index,suceso){
					});
				}
			}]	
		});
		me.callParent(arguments);
    }
});
