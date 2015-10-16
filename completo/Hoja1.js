Ext.define('Proyecto.view.derecha.Hoja1' ,{
    extend: 'Ext.panel.Panel',  
    alias : 'widget.verHoja1', 
	id: 'hoja1',
	x: 1, 
	y: 1, 
	height:840,
	width:630,
    layout:'anchor',
	tpl: '<img style="left:1; top:1; width:612;height:792;" src= "images/fondos/fondo_completo.jpg" >',
	data:{},	
	bodyStyle: {
  	  //'background': 'url(images/fondos/fondo.jpg) top left no-repeat;',
	},	
    itemId: 'hoja1ra', 
	initComponent: function() {
		var me = this;
		 //me.items =[contenedor1,contenedor2,contenedor3,contTexto1,contTexto2];
		 Ext.applyIf(me, {
            items: [
				{
					 xtype: 'contenedor',
						id:'ver1',
					   cls:'ver1',
					itemId:'ver1',
					alias : 'widget.ver1',
					 width: 187,
					height: 281
				},
				{
					xtype: 'contenedor',
						id:'ver2',
						cls:'ver2',
					itemId:'ver2',
					alias : 'widget.ver2',
					width: 184.26,
					height: 140.60,
				},			
				{
					xtype: 'contenedor',
					   id:'ver3',
						cls:'ver3',
				   itemId:'ver3',
				   alias : 'widget.ver3',
					width: 182.27,
				   height: 130.40,
				},
				
				{					
				  xtype: 'text1',
				    cls: 'contTexto1',
					 id:'text1',
				itemId:'text1',
				alias : 'widget.text1',
				width: 153.92,
			   height: 153.92				  
			},
			{					
				  xtype: 'text1',		
				    cls: 'contTexto2',
					 id:'text2',
				 itemId:'text2',
				 alias : 'widget.text2',
				  width: 167.81,
				 height: 158.17			  
			}
            ]
        });
		
		 me.callParent(arguments);
    }
});

 