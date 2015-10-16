Ext.define('Proyecto.model.Comentarios', {
    extend: 'Ext.data.Model',
        fields: [
           {name: 'idcomentario'},
           {name: 'idusuario'},
		     {name: 'comentario'},
           {name: 'contenedor'}
        ]
});