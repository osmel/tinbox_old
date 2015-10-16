Ext.define('Proyecto.view.principal.MiPagina',{
	extend: 'Ext.container.Viewport',
	alias : 'widget.miView',
	layout: 'border',
	//autoScroll:true,
    initComponent: function() {
	    var me=this;
 		me.items = [
             Izquierda
			 ,Derecha		 
		];
        me.callParent();
    },
	tocar: function ()
	  {
	
   	    // debe ser lo correcto pero no me acuerdo como interpretarlo en php
		//var  param='[{"idusuario":"'+Ext.get('idusuario').dom.getAttribute('value')+'","data0":[';
		

		var  param='[{"data0":[';
		Ext.each(Ext.fly('hoja1').dom.lastChild.children,function(dato,index,suceso){
 		    if (dato.id.substring(0,3) == 'ver')  
			{
				 var valor = Ext.getCmp('Elem_'+dato.id);
				 var va = Ext.getCmp(dato.id);
				 
				 //me.ownerCt.el.dom.offsetLeft+' Padre: y'+me.ownerCt.el.dom.offsetTop
                  
				 param=param+'{'
				 +'"idP":"'+dato.id+'","XP":"'+va.el.dom.offsetLeft+'","YP":"'+va.el.dom.offsetTop  
				 +'","AnchoP":"'+va.width+'","AltoP":"'+va.height
				 +'","XH":"'+(valor.x)+'","YH":"'+(valor.y)
				 +'","AnchoH":"'+(valor.width)+'","AltoH":"'+(valor.height)
				 +'","Imagen":"'+valor.items[0].src
				 +'","idusuario":"'+Ext.get('idusuario').dom.getAttribute('value')
				 +'","idH":"'+valor.id+'"},'; 
			 }
		
			 

		});
		param = param.slice(0,(param.length)-1)+']}';

		
		/*
		var  param2=',{"data1":[';
		Ext.each(Ext.fly('hoja2').dom.lastChild.children,function(dato,index,suceso){
 		    if (dato.id.substring(0,3) == 'ver')
			{
				 var valor = Ext.getCmp('Elem_'+dato.id);
				 var va = Ext.getCmp(dato.id);
				 param2=param2+'{'
				 +'"idP":"'+dato.id+'","XP":"'+va.x+'","YP":"'+va.y
				 +'","AnchoP":"'+va.width+'","AltoP":"'+va.height
				 +'","XH":"'+(valor.x)+'","YH":"'+(valor.y)
				 +'","AnchoH":"'+(valor.width)+'","AltoH":"'+(valor.height)
				 +'","Imagen":"'+Ext.fly(dato.id).dom.lastChild.children[0].getAttribute('src')
				 +'","idH":"'+valor.id+'"},'; 
			 }
		});
		param2 = param2.slice(0,(param2.length)-1)+']}]';
		
		param = JSON.parse(param+param2);
		*/
		
		param = param+']';
		param = JSON.parse(param);
		//console.log(param);
		
		
		
        Ext.Ajax.request({  
			url:'datos/Generar_PDF.php',
            method: 'POST',  
                success: function(resp){
                    var ventana = new Ext.Window({
                        title: 'PDF Content',
						y:100,
						top:200,
                        width: 600,
                        height: 600,
                        plain:true,
                        //html: '<iframe src="datos/pdf/osmel.pdf" width="600" height="600" />'
						  html:"<iframe width='100%' height='100%' src='datos/pdf/osmel.pdf'></iframe>"
                    }).show();            
			
			
                },					
            params: Ext.encode(param)
        });  
		
		
	  }
 });

 
this.Izquierda = Ext.create('Proyecto.view.izquierda.Panel', {
						region: 'west',
				   collapsible: true,
				  	    id:'PnlIzquierda'
});

this.Derecha = Ext.create('Proyecto.view.derecha.Panel', {
						region: 'center',
					  	    id:'PnlDerecha'
});