Ext.define('Proyecto.view.derecha.Contenedor',{
 extend: 'Ext.panel.Panel',
	id:'ver',
	itemId:'ver',
    alias : 'widget.contenedor',

	width: 213,
    height: 319,
    
	initComponent: function() {
		var me = this;
		header = false;
		 Ext.Ajax.request({  
			url:'imagen-salvada.php',
            method: 'POST',  
            params: {
					  idusuario:Ext.get('idusuario').dom.getAttribute('value'),
					  contenedor:me.id 			  
			},
            success: function(response){
			   if (Ext.decode(response.responseText).success == true) //si hay imagenes salvada entonces
			   {
			   

		if ((me.height) >= (me.width))
			{
			  alto = me.height;
 			 ancho = me.width + (me.height-me.width); 
			 }
			 else 
			 {
			 ancho = me.width;
 			  alto = me.height + (me.width-me.height); 
			};			   
				var imag = Ext.create('Proyecto.view.izquierda.Imagen', {
 					     width:ancho, 
					    height: alto, 
				 		 items: [{
								type: "image",
								src: Ext.decode(response.responseText).images[0].url, //OJO
							    x:0,
							    y:0,
 					     width:ancho, 
					    height: alto, 	
						   rotate: { 
								  degrees: 0  
						   }
						 }],
						 cls:'contimagen',
						 id:'Elem_'+me.id, 
						 itemId:'Elem_'+me.id 
				 });
				 var vista = Ext.getCmp(me.id).add(imag); 			   
				}
		    }
         });  
		
		this.bodyStyle= {
			'background-color': 'transparent;'
		};	
		Ext.applyIf(me, {

		    bbar:  [{ type: 'button',text:"Eliminar",  iconCls:'delete-icon',
				handler: function() { 
						var orig = Ext.getCmp('Elem_'+me.id).items[0].src;
						var picar = orig.split("/");
						var orig = picar[picar.length-1];
						//console.log(orig);
						Ext.getCmp('Elem_'+me.id).items[0].src = '';
  					    var vista = Ext.getCmp(me.id).remove(Ext.getCmp('Elem_'+me.id)); 
						var rentedDDTarget = Ext.create('Ext.dd.DDTarget', me.id, 'carsDDGroup'); //aqui
						Ext.Ajax.request({  
							url:'datos/mover-fichero.php',
							method: 'POST',  
							params: {origen: orig,
									 destino:'images/img/',contenedor: me.id,idusuario:Ext.get('idusuario').dom.getAttribute('value')}, //5 es el id de usuario que hay que pasarlo 
							success: function(response){
							}
						});  	
						 

				//	alert(Ext.get('idusuario').dom.getAttribute('value'));	 
		Ext.getCmp('galeria').getStore().load({  //puedo usar update pero no devuelve valores por lo que no me interesa para este caso
			params: {
				idusuario: Ext.get('idusuario').dom.getAttribute('value')
			},
			callback: function(records, operation, success) {
			},
			scope: this
		});							 
				}
			}]	
		});
		me.callParent(arguments);
    },
	onclick: function() {
    }
});
