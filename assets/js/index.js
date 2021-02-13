$("#add_user").submit(function(event){
    alert("data insert sucesfully")
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array =$(this).serializeArray();
    var data = {}
    // console.log(unindexed_array)

    $.map(unindexed_array,function(n,i) 
    {
        data[n['name']] = n['value']
    })
    console.log(data);

    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }
    $.ajax(request).done(function(response){
        alert("data update sukses")
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        }
        if(confirm("do you realyy delete ?")){
         $.ajax(request).done(function(response){
        alert("data update sukses")
            location.reload()
    })
}
})
}