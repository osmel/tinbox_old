Ext.define('Proyecto.view.derecha.Panel' ,{
    extend: 'Ext.panel.Panel',
	 layout:'anchor',
	autoScroll:true,
	height:1000,
    initComponent: function() {
        this.tabBar = {
            border: false,		
        };
        
        this.callParent();
    },
	items: [
			{
    		xtype: 'verHoja1'
            },
		/*	{
            title: 'Hoja de Fondo',
            iconCls: 'tabs',
    		xtype: 'verHoja2'
            }*/
	]	
});
