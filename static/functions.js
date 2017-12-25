function load_slider(obj){
    obj_id = '#' + obj
    slider_id = obj_id + '_' + 'slider'
    console.log('Load time obj_id:' + obj_id + ':' + 'slider_id:' + slider_id)
    $(slider_id).slider({
    range: "max",
    min: 1,
    max: 10,
    value: 5,
    slide: function(event, ui){
        $(obj_id).val(ui.value);
        console.log('Slider action obj_id:' + obj_id + '|' + 'slider_value:' + ui.value)
    }
    });
    $(obj_id).val( $(slider_id).slider("value"));
}
