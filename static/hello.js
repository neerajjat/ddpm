    function changeElementValue(id, value){
        document.getElementById(id).innerHTML = value
        console.log('element id:' + id + ' and value:' + value)
    }

    function createTemplate(attributes){
        var score = {}
        console.log('attributes as attributes:' + attributes)
        for (item in attributes){
            score[attributes[item]] = parseInt(document.getElementById(attributes[item]).innerHTML)
        }
        console.log('Template:' + JSON.stringify(score));
        $.ajax({url:"/save_template",
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(score),
            success: function(response){
                console.log(response)
                displayTemplateSavedMsg(response)
                event.preventDefault()
            },
            error: function(error){
                console.log(error)
                displayTemplateSavedMsg(error)
                event.preventDefault()
            }
        });
    }

    function displayTemplateSavedMsg(response){
        console.log('Displaying template saved message:' + response)
        message = 'Template saved as:' + response
        $("#template_save_msg").html(message)
        $("#template_save_msg").show()
    }

    function showTemplates(){
        console.log('Getting Templates');
        $.ajax({
            url: '/get_templates',
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            success: function(response){
                console.log('Templates:' + response)
                document.getElementById("myTemplates").innerHTML = response
                },
            error: function(error){
                console.log('Error message:' + error)
                }
        });
    }
