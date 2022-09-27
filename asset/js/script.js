// Write my JavaScript
//Davids review
//building a day scheduler
//heading is in it already
//body have spot to tell where timeblocks go
//9 to 5 timeblocks
//only set tasks in available hours
//already have style sheets classes
//just need to work on the javascript that will inject your day hours into the application

//time
function theTime() {
  let localTime = moment();
  console.log(localTime.format());
  let now = moment().format('HH:mm:ss')
  $("#dateandtimeSpot").text(Date);
}
theTime();

var rootEl = $('#root');

// //NINE--------------------------------------------------------------------------
$(document).ready(function(){
  $(".add-rownine").click(function(){
      var tasknine = $("#tasksnine").val();
      $("table tbody").append(markup);
    });
  
  // Find plus remove selected table rows
  $(".delete-row9").click(function(){
      $("table tbody").find('input[task="record"]').each(function(){
          $(this).parents("tr").remove();
      });
  });
});    

//buttons
var addButtonnineEl = $('#add-btn9');
var deleteButtonnineEl = $('#delete-btn9');
//example of input from lessons
var taskForm9El = $('#task-formnine');
var taskList9El = $('#task-list-nine');

function handleFormSubmit9(event9) {
  event9.preventDefault();
  var taskItem9 = $('input[name="task-input9"]').val();
  if (!taskItem9) {
    event9.preventDefault();
    console.log('task 9 NOT filled out!');
    return;
  }
  // var lstorage
  var textnine = $('input[name="task-input9"]').val();
  localStorage.setItem('input[name="task-input9"]', textnine);
  console.log('sent 9 to local storage')

  // var taskList;
  var taskListItem9El = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  taskListItem9El.text(taskItem9);
  taskListItem9El.append(
    '<button class="btn-small delete-btn9">clear</button>'
  );
  taskList9El.append(taskListItem9El);
  $('input[name="task-input9"]').val('');
}

function handleRemoveItem9(event9) {
  var btnClicked9 = $(event9.target);
  btnClicked9.parent('li').remove();
  alert('Clicking OK will delete your scheduler details');
  console.log('task 9 removed!');
}

taskList9El.on('click', '.delete-btn9', handleRemoveItem9);
taskForm9El.on('submit', handleFormSubmit9);

addButtonnineEl.on('click', function () {
  console.log("clicked add 9");
  alert('Clicking OK will add into your scheduler details');
  });

//TEN--------------------------------------------------------------------------
var addButtontenEl = $('#add-btn10');
var deleteButtontenEl = $('#delete-btn10');

$(document).ready(function(){
  $(".add-rowten").click(function(){
      var taskten = $("#tasksten").val();
      $("table tbody").append(markup);
    });
  
  // Find and remove selected table rows
  $(".delete-row10").click(function(){
      $("table tbody").find('input[task="record"]').each(function(){
          $(this).parents("tr").remove();
      });
  });
});    

//example of input from lessons
var taskForm10El = $('#task-formten');
var taskList10El = $('#task-listten');

function handleFormSubmit10(event10) {
    event10.preventDefault();
    var taskItem10 = $('input[name="task-input10"]').val();
    if (!taskItem10) {
      event10.preventDefault();
      console.log('task 10 NOT filled out!');
      return;
    }
  // var lstorage
  var textten = $('input[name="task-input10"]').val();
  localStorage.setItem('input[name="task-input10"]', textten);
  console.log('sent 10 to local storage')

  // var taskList;
  var taskListItem10El = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  taskListItem10El.text(taskItem10);
  taskListItem10El.append(
    '<button class="btn-small delete-btn10">clear</button>'
  );
  taskList10El.append(taskListItem10El);
  $('input[name="task-input10"]').val('');
}

function handleRemoveItem10(event10) {
  var btnClicked10 = $(event10.target);
  btnClicked10.parent('li').remove();
  alert('Clicking OK will delete your scheduler details');
  console.log('task 10 removed!');
}

taskList10El.on('click', '.delete-btn10', handleRemoveItem10);
taskForm10El.on('submit', handleFormSubmit10);

addButtontenEl.on('click', function () {
  console.log("clicked add 10");
  alert('Clicking OK will add into your scheduler details');
  });

  
//ELEVEN--------------------------------------------------------------------------
var addButtonelevenEl = $('#add-btn11');
var deleteButtonelevenEl = $('#delete-btn11');

$(document).ready(function(){
  $(".add-roweleven").click(function(){
      var taskeleven = $("#taskseleven").val();
      $("table tbody").append(markup);
    });
  
  // Find and remove selected table rows
  $(".delete-row11").click(function(){
      $("table tbody").find('input[task="record"]').each(function(){
          $(this).parents("tr").remove();
      });
  });
});    

//example of input from lessons
var taskForm11El = $('#task-formeleven');
var taskList11El = $('#task-listeleven');

function handleFormSubmit11(event11) {
    event11.preventDefault();
    var taskItem11 = $('input[name="task-input11"]').val();
    if (!taskItem11) {
      event11.preventDefault();
      console.log('task 11 NOT filled out!');
      return;
    }
  // var lstorage
  var texteleven = $('input[name="task-input11"]').val();
  localStorage.setItem('input[name="task-input11"]', texteleven);
  console.log('sent 11 to local storage')

  // var taskList
  var taskListItem11El = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  taskListItem11El.text(taskItem11);
  taskListItem11El.append(
    '<button class="btn-small delete-btn11">clear</button>'
  );
  taskList11El.append(taskListItem11El);
  $('input[name="task-input11"]').val('');
}

function handleRemoveItem11(event11) {
  var btnClicked11 = $(event11.target);
  btnClicked11.parent('li').remove();
  alert('Clicking OK will delete your scheduler details');
  console.log('task 11 removed!');
}

taskList11El.on('click', '.delete-btn11', handleRemoveItem11);
taskForm11El.on('submit', handleFormSubmit11);

addButtonelevenEl.on('click', function () {
  console.log("clicked add 11");
  alert('Clicking OK will add into your scheduler details');
  });

//TWELVE--------------------------------------------------------------------------
var addButtontwelveEl = $('#add-btn12');
var deleteButtontwelveEl = $('#delete-btn12');

$(document).ready(function(){
  $(".add-rowtwelve").click(function(){
      var tasktwelve = $("#taskstwelve").val();
      $("table tbody").append(markup);
    });
  // Find and remove selected table rows
  $(".delete-row12").click(function(){
      $("table tbody").find('input[task="record"]').each(function(){
          $(this).parents("tr").remove();
      });
  });
});    

//example of input from lessons
var taskForm12El = $('#task-formtwelve');
var taskList12El = $('#task-listtwelve');

function handleFormSubmit12(event12) {
    event12.preventDefault();
    var taskItem12 = $('input[name="task-input12"]').val();
    if (!taskItem12) {
      event12.preventDefault();
      console.log('task 12 NOT filled out!');
      return;
    }
  // var lstorage
  var texttwelve = $('input[name="task-input12"]').val();
  localStorage.setItem('input[name="task-input12"]', texttwelve);
  console.log('sent 12 to local storage')

  // var taskList
  var taskListItem12El = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  taskListItem12El.text(taskItem12);
  taskListItem12El.append(
    '<button class="btn-small delete-btn12">clear</button>'
  );
  taskList12El.append(taskListItem12El);
  $('input[name="task-input12"]').val('');
}

function handleRemoveItem12(event12) {
  var btnClicked12 = $(event12.target);
  btnClicked12.parent('li').remove();
  alert('Clicking OK will delete your scheduler details');
  console.log('task 12 removed!');
}

taskList12El.on('click', '.delete-btn12', handleRemoveItem12);
taskForm12El.on('submit', handleFormSubmit12);

addButtontwelveEl.on('click', function () {
  console.log("clicked add 12");
  alert('Clicking OK will add into your scheduler details');
  });


//ONE--------------------------------------------------------------------------
var addButtononeEl = $('#add-btn1');
var deleteButtononeEl = $('#delete-btn1');

$(document).ready(function(){
  $(".add-rowone").click(function(){
      var taskone = $("#tasksone").val();
      $("table tbody").append(markup);
    });
  // Find and remove selected table rows
  $(".delete-row1").click(function(){
      $("table tbody").find('input[task="record"]').each(function(){
          $(this).parents("tr").remove();
      });
  });
});    

//example of input from lessons
var taskForm1El = $('#task-formone');
var taskList1El = $('#task-listone');

function handleFormSubmit1(event1) {
    event1.preventDefault();
    var taskItem1 = $('input[name="task-input1"]').val();
    if (!taskItem1) {
      event1.preventDefault();
      console.log('task 1 NOT filled out!');
      return;
    }
  // var lstorage
  var textone = $('input[name="task-input1"]').val();
  localStorage.setItem('input[name="task-input1"]', textone);
  console.log('sent 1 to local storage')

  // var taskList
  var taskListItem1El = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  taskListItem1El.text(taskItem1);
  taskListItem1El.append(
    '<button class="btn-small delete-btn1">clear</button>'
  );
  taskList1El.append(taskListItem1El);
  $('input[name="task-input1"]').val('');
}

function handleRemoveItem1(event1) {
  var btnClicked1 = $(event1.target);
  btnClicked1.parent('li').remove();
  alert('Clicking OK will delete your scheduler details');
  console.log('task 1 removed!');
}

taskList1El.on('click', '.delete-btn1', handleRemoveItem1);
taskForm1El.on('submit', handleFormSubmit1);

addButtononeEl.on('click', function () {
  console.log("clicked add 1");
  alert('Clicking OK will add into your scheduler details');
  });

//TWO--------------------------------------------------------------------------
var addButtontwoEl = $('#add-btn2');
var deleteButtontwoEl = $('#delete-btn2');

$(document).ready(function(){
  $(".add-rowtwo").click(function(){
      var tasktwo = $("#taskstwo").val();
      $("table tbody").append(markup);
    });
  // Find and remove selected table rows
  $(".delete-row2").click(function(){
      $("table tbody").find('input[task="record"]').each(function(){
          $(this).parents("tr").remove();
      });
  });
});    

//example of input from lessons
var taskForm2El = $('#task-formtwo');
var taskList2El = $('#task-listtwo');

function handleFormSubmit2(event2) {
    event2.preventDefault();
    var taskItem2 = $('input[name="task-input2"]').val();
    if (!taskItem2) {
      event2.preventDefault();
      console.log('task 2 NOT filled out!');
      return;
    }
  // var lstorage
  var texttwo = $('input[name="task-input2"]').val();
  localStorage.setItem('input[name="task-input2"]', texttwo);
  console.log('sent 2 to local storage')

  // var taskList
  var taskListItem2El = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  taskListItem2El.text(taskItem2);
  taskListItem2El.append(
    '<button class="btn-small delete-btn2">clear</button>'
  );
  taskList2El.append(taskListItem2El);
  $('input[name="task-input2"]').val('');
}

function handleRemoveItem2(event2) {
  var btnClicked2 = $(event2.target);
  btnClicked2.parent('li').remove();
  alert('Clicking OK will delete your scheduler details');
  console.log('task 2 removed!');
}

taskList2El.on('click', '.delete-btn2', handleRemoveItem2);
taskForm2El.on('submit', handleFormSubmit2);

addButtontwoEl.on('click', function () {
  console.log("clicked add 2");
  alert('Clicking OK will add into your scheduler details');
  });

//THREE--------------------------------------------------------------------------
var addButtonthreeEl = $('#add-btn3');
var deleteButtonthreeEl = $('#delete-btn3');

$(document).ready(function(){
  $(".add-rowthree").click(function(){
      var taskthree = $("#tasksthree").val();
      $("table tbody").append(markup);
    });
  // Find and remove selected table rows
  $(".delete-row3").click(function(){
      $("table tbody").find('input[task="record"]').each(function(){
          $(this).parents("tr").remove();
      });
  });
});    

//example of input from lessons
var taskForm3El = $('#task-formthree');
var taskList3El = $('#task-listthree');

function handleFormSubmit3(event3) {
    event3.preventDefault();
    var taskItem3 = $('input[name="task-input3"]').val();
    if (!taskItem3) {
      event3.preventDefault();
      console.log('task 3 NOT filled out!');
      return;
    }
  // var lstorage
  var textthree = $('input[name="task-input3"]').val();
  localStorage.setItem('input[name="task-input3"]', textthree);
  console.log('sent 3 to local storage')

  // var taskList
  var taskListItem3El = $(
    '<li class="flex-row justify-space-between align-center p-3 bg-light text-dark">'
  );
  taskListItem3El.text(taskItem3);
  taskListItem3El.append(
    '<button class="btn-small delete-btn3">clear</button>'
  );
  taskList3El.append(taskListItem3El);
  $('input[name="task-input3"]').val('');
}

function handleRemoveItem3(event3) {
  var btnClicked3 = $(event3.target);
  btnClicked3.parent('li').remove();
  alert('Clicking OK will delete your scheduler details');
  console.log('task 3 removed!');
}

taskList3El.on('click', '.delete-btn3', handleRemoveItem3);
taskForm3El.on('submit', handleFormSubmit3);

addButtonthreeEl.on('click', function () {
  console.log("clicked add 3");
  alert('Clicking OK will add into your scheduler details');
  });


//FOUR--------------------------------------------------------------------------
var addButtonfourEl = $('#add-btn4');
var deleteButtonfourEl = $('#delete-btn4');

$(document).ready(function(){
  $(".add-rowfour").click(function(){
      var taskfour = $("#tasksfour").val();
      $("table tbody").append(markup);
    });
  // Find and remove selected table rows
  $(".delete-row4").click(function(){
      $("table tbody").find('input[task="record"]').each(function(){
          $(this).parents("tr").remove();
      });
  });
});    

//example of input from lessons
var taskForm4El = $('#task-formfour');
var taskList4El = $('#task-listfour');

function handleFormSubmit4(event4) {
    event4.preventDefault();
    var taskItem4 = $('input[name="task-input4"]').val();
    if (!taskItem4) {
      event4.preventDefault();
      console.log('task 4 NOT filled out!');
      return;
    }
  // var lstorage
  var textfour = $('input[name="task-input4"]').val();
  localStorage.setItem('input[name="task-input4"]', textfour);
  console.log('sent 4 to local storage')

  // var taskList
  var taskListItem4El = $(
    '<li class="flex-row justify-space-between align-center p-4 bg-light text-dark">'
  );
  taskListItem4El.text(taskItem4);
  taskListItem4El.append(
    '<button class="btn-small delete-btn4">clear</button>'
  );
  taskList4El.append(taskListItem4El);
  $('input[name="task-input4"]').val('');
}

function handleRemoveItem4(event4) {
  var btnClicked4 = $(event4.target);
  btnClicked4.parent('li').remove();
  alert('Clicking OK will delete your scheduler details');
  console.log('task 4 removed!');
}

taskList4El.on('click', '.delete-btn4', handleRemoveItem4);
taskForm4El.on('submit', handleFormSubmit4);

addButtonfourEl.on('click', function () {
  console.log("clicked add 4");
  alert('Clicking OK will add into your scheduler details');
  });

//FIVE--------------------------------------------------------------------------
var addButtonfiveEl = $('#add-btn5');
var deleteButtonfiveEl = $('#delete-btn5');

$(document).ready(function(){
  $(".add-rowfive").click(function(){
      var taskfive = $("#tasksfive").val();
      $("table tbody").append(markup);
    });
  // Find and remove selected table rows
  $(".delete-row5").click(function(){
      $("table tbody").find('input[task="record"]').each(function(){
          $(this).parents("tr").remove();
      });
  });
});    

//example of input from lessons
var taskForm5El = $('#task-formfive');
var taskList5El = $('#task-listfive');

function handleFormSubmit5(event5) {
    event5.preventDefault();
    var taskItem5 = $('input[name="task-input5"]').val();
    if (!taskItem5) {
      event5.preventDefault();
      console.log('task 5 NOT filled out!');
      return;
    }
  // var lstorage
  var textfive = $('input[name="task-input5"]').val();
  localStorage.setItem('input[name="task-input5"]', textfive);
  console.log('sent 5 to local storage')

  // var taskList
  var taskListItem5El = $(
    '<li class="flex-row justify-space-between align-center p-5 bg-light text-dark">'
  );
  taskListItem5El.text(taskItem5);
  taskListItem5El.append(
    '<button class="btn-small delete-btn5">clear</button>'
  );
  taskList5El.append(taskListItem5El);
  $('input[name="task-input5"]').val('');
}

function handleRemoveItem5(event5) {
  var btnClicked5 = $(event5.target);
  btnClicked5.parent('li').remove();
  alert('Clicking OK will delete your scheduler details');
  console.log('task 5 removed!');
}

taskList5El.on('click', '.delete-btn5', handleRemoveItem5);
taskForm5El.on('submit', handleFormSubmit5);

addButtonfiveEl.on('click', function () {
  console.log("clicked add 5");
  alert('Clicking OK will add into your scheduler details');
  });


//commit for live page
