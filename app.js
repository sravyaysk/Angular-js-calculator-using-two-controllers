var buttons=[
  [{
    name:'7',
    id:1,
    value:'7'
  },
  {
    name:'8',
    id:2,
    value:'8'
  },
  {
    name:'9',
    id:3,
    value:'9'
  },
  {
    name:'X',
    id:4,
    value:'*'
  }],
  [{
    name:'4',
    id:5,
    value:'4'
  },
  {
    name:'5',
    id:6,
    value:'5'
  },
  {
    name:'6',
    id:7,
    value:'6'
  },
  {
    name:'-',
    id:8,
    value:'-'
  }],
  [{
    name:'1',
    id:9,
    value:'1'
  },
  {
    name:'2',
    id:10,
    value:'2'
  },
  {
    name:'3',
    id:11,
    value:'3'
  },
  {
    name:'+',
    id:12,
    value:'+'
  }],
  [{
    name:'/',
    id:13,
    value:'/'
  },
  {
    name:'0',
    id:14,
    value:'0'
  },
  {
    name:'C',
    id:15,
    value:'C'
  },
  {
    name:'=',
    id:16,
    value:'='
  }]
];
var present='0';
var memory='0';
var operation=0;
//var x=angular.element(document.getElementById("textfield"));
function PerformCalculation()
{
  if(operation == 1)
    present = eval(memory) + eval(present);
  else if(operation == 2)
    present = eval(memory) - eval(present);
  else if(operation == 3)
    present = eval(memory) * eval(present);
  else if(operation == 4)
    present = eval(memory) / eval(present);
  else
    alert("Invalid operation");
  memory='0';
  operation=0;
  present=present+'';
  //x.val(present);
}
function PushOperand(value)
{
  if(present == '0')
    present=value;
  else
    present=present+value;
  //x.val(present);
}
function PushOperator(value)
{
  //x.val(value);
  if(operation!=0)
    PerformCalculation();
  if(value == '+')
    operation=1;
  else if(value=='-')
    operation=2;
  else if(value=='*')
    operation=3;
  else if(value=='/')
    operation=4;
  else
    alert("invalid operation");
  memory=present;
  present='';
}
function AllClear()
{
  present='0';
  memory='0';
  operation=0;
//  x.val(present);
}
(function(){
  var current='0';
  var app=angular.module('calc',[]);
  app.controller('calcController',function(){
    this.button=buttons;
  });
app.controller('actionController',['$scope',function($scope){
  $scope.textbox='0';
  $scope.calculator=function(value){
    if(value == '=')
    {
      PerformCalculation();
      $scope.textbox = present;
    }
    else if(value == 'C')
    {
        AllClear();
        $scope.textbox = present;
    }
    else if(value == '+' || value == '-' || value =='*' || value == '/'){
      $scope.textbox = value;
      PushOperator(value);
    }
    else{
      PushOperand(value);
      $scope.textbox = present;
    }
  };
}]);
})();
