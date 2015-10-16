Ext.define('Proyecto.store.Diseno', {
    extend: 'Ext.data.Store',
    model: 'Proyecto.model.Diseno',
	 autoLoad: true,  
    proxy: {
        type: 'ajax',
        url: 'datos/tomar-diseno.php',
        reader: {
            type: 'json',
            root: 'images'
        }
    }
   
});