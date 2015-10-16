Ext.define('Proyecto.view.izquierda.Rotacion', {
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