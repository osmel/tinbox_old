Ext.define('Proyecto.store.Comentarios', {
    extend: 'Ext.data.Store',
    model: 'Proyecto.model.Comentarios',
	//autoLoad: true,  //significa que el Store le pedirá a su proxy cargar esos datos de inmediato
	 //ya no estamos harcodeando los datos en nuestra aplicación, sino a un almacen json
    proxy: {
        type: 'ajax',
		api: {
				create  : 'datos/tomar-comentario.php',
				read    : 'datos/tomar-comentario.php',
				update  : 'datos/tomar-comentario.php',
				destroy : 'datos/tomar-comentario.php'
		},
        reader: {
            type: 'json',
			model: 'Proyecto.model.Comentarios',
            root: 'data'
        },
		writer: {
            type: 'json',
			model: 'Proyecto.model.Comentarios',
            root: 'data'
		}
    }
});