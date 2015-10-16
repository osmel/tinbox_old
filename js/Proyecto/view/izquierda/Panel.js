Ext.define('Proyecto.view.izquierda.Panel' ,{
                extend: 'Ext.panel.Panel',
                title: 'Menu Principal',
                width: 250,
                split: true,
                margins: '3,3,0,0',
                layout: 'accordion',
				layoutConfig:{animate:true},
				activeItem: 1,
				cls: 'miacordion',
                items: [
                    {   xtype: 'panel',
                        title: 'Imagenes',
                        height: 252,
                        iconCls:'Galeria',
                        forceLayout: true,
                        collapsed: true,
                        collapsible: true,
                        rootVisible: false,
                        border: false,
                        autoWidth: true,
                        active :true,
                        items: [
                        {  
                            xtype:'SubirImage',
                            id: 'subImage',
                            title: 'Subir Foto',
                        },                      
                        
                        {  
                            id: 'galeria',
                            title: 'Imagenes',
                            iconCls: 'tabs',
                            xtype: 'verGaleria'
                        }
                        
                        ],
                    },                
                   {   xtype: 'panel',
                        title: 'Comentarios',
                        height: 252,
						iconCls:'Comentarios',
                        forceLayout: true,
                        collapsed: true,
                        collapsible: true,
                        rootVisible: false,
                        border: false,
                        autoWidth: true,
						items: [{ 
							title: 'Comentarios',
							iconCls: 'tabs',
							xtype: 'verComentarios'						
						}],
                    },	
					{
                        xtype: 'treepanel',
                        title: 'Reportes',
						iconCls:'reportes',
                        height: 212,
                        forceLayout: true,
                        collapsed: true,
                        collapsible: true,
                        rootVisible: false,
                        border: false,
                        autoWidth: true,
                        root: {
                            text: '',
                            isTarget: false,
                            expanded: true,
                            checked: false,
                            allowDrag: false,
                            allowDrop: false,
                            editable: false,
                            qtip: 1,
                            children: [
                                {
                                    text: 'Visualizacion del PDF',
                                    children: [
                                        {
                                            text: 'Confirmar PDF',
                                            leaf: true,

                                        },
                                        {
                                            text: 'Consulta PDF',
                                            leaf: true
                                        }
                                    ]
                                }
                            ]
                        },
											listeners:{
												itemclick: function(){
												
		

		var  param='[{"data0":[';
		
	var param = '['
		 +'{"Imagen1":' 
			+'[ '
				    +' {"hoja1":[';

	var paramTexto = '{"Comentario1":' 
			+'[ '
				    +' {"hoja1":[';					
		
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
				 +'","proyecto":"'+Ext.get('proyecto').dom.getAttribute('value')
				 +'","nombre":"'+Ext.get('nombre').dom.getAttribute('value')
				 +'","apellido":"'+Ext.get('apellido').dom.getAttribute('value')
				 +'","idH":"'+valor.id+'"},'; 
			 };
			 
		    if (dato.id.substring(0,4) == 'text')  
			{
			   var valor = Ext.getCmp('Elem_'+dato.id);
			   var va = Ext.getCmp(dato.id);
				paramTexto=paramTexto+'{'
				 +'"idP":"'+dato.id+'","XP":"'+va.el.dom.offsetLeft+'","YP":"'+va.el.dom.offsetTop  
				 +'","AnchoP":"'+va.width+'","AltoP":"'+va.height
				 +'","idusuario":"'+Ext.get('idusuario').dom.getAttribute('value')
				 +'","proyecto":"'+Ext.get('proyecto').dom.getAttribute('value')
				 +'","nombre":"'+Ext.get('nombre').dom.getAttribute('value')
				 +'","apellido":"'+Ext.get('apellido').dom.getAttribute('value')
				 +'"},'; 			   
			}
			 

		});
		param = param.slice(0,(param.length)-1)+']}]';

		paramTexto = paramTexto.slice(0,(paramTexto.length)-1)+']}]}';
		
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
		
		param = param+'}'  //fin de informacion de Imagen		 
				+','+paramTexto  //el json de los textos
				+']	';

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
						  html:"<iframe width='100%' height='100%' src='" +
						  "pdf/"
						  +Ext.get('proyecto').dom.getAttribute('value')
						  +Ext.get('nombre').dom.getAttribute('value')
						  +Ext.get('idusuario').dom.getAttribute('value')
						  +".pdf"+ "'></iframe>"
						  
                    }).show();            
			
			
                },		
						
					
            params: Ext.encode(param)
        });  
													
														
												}
											}                    
						}

					
                ]
});



/*

		
param = '['
		 +'{"Imagen1":' 
			+'[ '
				    +' {"hoja1":['
							+'{ "xp":"10", "yp":"10"},'
							+'{ "xp":"11", "yp":"11"},'
							+'{ "xp":"12", "yp":"12"}'
		
						 +']	'
				
				    +'}, '
				    +'{"hoja2":['
							+'{ "xp":"20", "yp":"20"},'
							+'{ "xp":"21", "yp":"21"},'
							+'{ "xp":"22", "yp":"22"}'
		
						 +']	'
				
				    +'} '
			+ ']'
		 +'}'  //fin de informacion de imagen

		 
		 +',{"comentarios1":' 
			+'[ '
				    +' {"hoja1":['
							+'{ "xp":"10", "yp":"10"},'
							+'{ "xp":"11", "yp":"11"},'
							+'{ "xp":"12", "yp":"12"}'
		
						 +']	'
				
				    +'}, '
				    +'{"hoja2":['
							+'{ "xp":"20", "yp":"20"},'
							+'{ "xp":"21", "yp":"21"},'
							+'{ "xp":"22", "yp":"22"}'
		
						 +']	'
				
				    +'} '
			+ ']'
		 +'}'  //fin de informacion de Comentario		 
		+']	';


*/