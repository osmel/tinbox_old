Ext.define('Proyecto.model.Diseno', {
    extend: 'Ext.data.Model',
        fields: [
           {name: 'name'},
           {name: 'url'},
           {name: 'size', type: 'float'},
           {name:'lastmod', type:'date', dateFormat:'timestamp'}
        ]
});