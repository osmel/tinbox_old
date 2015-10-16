Ext.define('Proyecto.view.izquierda.SpriteTexto', {
    extend: 'Ext.draw.Component',  
    alias : 'widget.objTexto', 
	tpl: 'texto',
	x:1,
	y:1,
	data:{},
	cls: 'cursor-dragme',
	
	initComponent: function() {
		var me = this;
		Ext.applyIf(me, {
		//
        });
		me.callParent(arguments);
  },
  listeners:{
        click: function( tecla,op){
		}
  }
});
