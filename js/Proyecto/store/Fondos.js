Ext.define('Proyecto.store.Fondos', {
    extend: 'Ext.data.Store',
    model: 'Proyecto.model.Fondos',
	 autoLoad: true,  
    proxy: {
        type: 'ajax',
        url: 'datos/tomar-fondo.php',
        reader: {
            type: 'json',
            root: 'images'
        }
    }
   
});