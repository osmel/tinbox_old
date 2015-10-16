Ext.define('Proyecto.view.derecha.Hoja1' ,{
    extend: 'Ext.panel.Panel',  
    alias : 'widget.verHoja1', 
	id: 'hoja1',
	x: 1, 
	y: 1, 
	height:740,
	width:560,
    layout:'anchor',
	tpl: '<img style="left:0; top:0; width:555.3071;height:735.3071;" src= "images/fondos/fondo_300.jpg" >',
	//tpl: '<img style="left:28.34645; top:28.34645; width:555.3071;height:735.3071;" src= "images/fondos/fondo_300.jpg" >',
	//2cm*28.34645 = 56.6929  612-56.6929= 555.3071    y 792-56.6929=735.3071
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
					 width: 188,
					height: 288
				},
				{
					xtype: 'contenedor',
						id:'ver2',
						cls:'ver2',
					itemId:'ver2',
					alias : 'widget.ver2',
					width: 184,
					height: 144,
				},			
				{
					xtype: 'contenedor',
					   id:'ver3',
						cls:'ver3',
				   itemId:'ver3',
				   alias : 'widget.ver3',
					width: 182,
				   height: 134,
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

 