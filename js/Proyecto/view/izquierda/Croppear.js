Ext.define('Proyecto.view.izquierda.Croppear', {
    extend: 'Ext.slider.Single',  
    alias : 'widget.objRotacion', 
	id: 'Rotacion',
    hideLabel: true,
    width: 400,
    minValue: 0,
    maxValue: 360,
    value: 315,
    listeners: {
        change: function(slider, value) {
             var sprite = Ext.getCmp('objImg').surface.items.first();
             sprite.setAttributes({
                   rotation: {
                        degrees: value
                   }
             }, true);
        }
    }
});

        var crop = Ext.create('Ext.ux.ImageCrop', { 
		  extend: 'Ext.ux.ImageCrop',
          height: 100, 
          width: 100,  
          src: 'foto.jpg',
          renderTo: 'CAJA1'
		  
        });
		 		  ,
                  listeners:{
                    save: function(){
                    },
					
                    scope: this
                  }		  
