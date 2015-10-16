Ext.define('Proyecto.store.Imagenes', {
    extend: 'Ext.data.Store',
    model: 'Proyecto.model.Imagenes',
    proxy: {
        type: 'ajax',
		url: 'tomar-imagen.php',
        reader: {
            type: 'json',
            root: 'images'
        }
    }
   
});