Ext.Loader.setConfig({
	enabled	: true,
});

//Cada aplicación Ext. JS 4 se inicia con una instancia de la clase Application . 
//La instancia de Application contiene la configuración global de su aplicación
Ext.application({
    name: "Proyecto", //NameSpace Principal todas las clases deberan comenzar con 'Infe'
                  //Ejemplo    'Infe.controller.store.Usuario'

    appFolder: 'js/Proyecto', //por tanto Internamente se agregara al Loader de esta manera:
    				       				// Ext.Loader('Infe','js/Infertilidad')
    				       				//Ademas dentro de este path debe encontrarse las carpetas 
    				       				//[store, model, view, controller]

    controllers: ['Imagenes'], //o  ["Infe.controller.Usuarios"],
  
    //crea una Viewport que contiene un único panel que se llenara la pantalla.
    launch: function() {
		      var MiVistaprincipal = Ext.create("Proyecto.view.principal.MiPagina")
	}
});




		      //var MyViewPrincipal = Ext.create("MvcClientes.view.Principal.MyViewport")


	//alert('se creara el panel y se disparara el evento antes de mostrarse el panel');
         
      /*   Este es para el caso en que quiera mostrar la ventana que es otra vista
  		   //Presentar una vista de ventana
         var win = Ext.create("Infe.view.usuario.Ventana");  
         win.show();
     */   
/*	 
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
					//	  panel vacio                     
                    // xtype: 'panel',
                    //title: 'prueba de usuario',
                    //html : 'Probando Lista de los usuarios que iran aqui'
                    
                     // Como en la vista establecimos un alias con el formato especial ‘widget.’ ,
                     // podemos usar “usuariolistar” como un xtype. De lo contrario ubiese que 
                     //llamarlo de la siguiente manera: #   "Infe.view.usuario.Listar"

                     xtype: 'verPanel'  
                }
            ]
        }
		*/