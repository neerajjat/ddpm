function load_slider(objects, obj){
    obj_id = '#' + objects[obj]
    slider_id = obj_id + '_' + 'slider'
    console.log('obj_id:' + obj_id + ':' + 'slider_id:' + slider_id)
    $(slider_id).slider({
    range: "max",
    min: 1,
    max: 10,
    value: 5,
    slide: function(event, ui){
        $(obj_id).val(ui.value);
        console.log('obj_id:' + obj_id + '|' + 'slider_value:' + ui.value)
    }
    });
    $(obj_id).val( $(slider_id).slider("value"));
}
