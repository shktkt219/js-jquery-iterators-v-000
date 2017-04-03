$(document).ready(function(){

  $('div').each(function(index, div){
    $(this).append("this is div number " + (index + 1));
  });

  listIterate();
});

function listIterate(){
return $('li').map(function(item, index){
    return item.innerHTML;
});
}
