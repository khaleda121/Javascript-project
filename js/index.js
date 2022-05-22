
function totalAmount(num1,num2){
          let sub  = num1 - num2;
          return sub;
      }
      function percentageTotalCalculate(amount,percent){
         var percentageAmount = amount *(percent/100);
         return percentageAmount;
          
      }
      // error 1
      function error1MessageAble(){
          document.getElementById('error-message').style.display = 'block';
      }
      function error1MessageDisable(){
          document.getElementById('error-message').style.display = 'none';
      }
      // error 2 
      function error2MessageAble(){
          document.getElementById('error-message2').style.display = 'block';
      }
      function error2MessageDisable(){
          document.getElementById('error-message2').style.display = 'none';
      }
      
        
      //calculate button action form
      document.getElementById('calculate-button').addEventListener('click',function(){

          // get  value 
          const incomeField = document.getElementById('income');
          const incomeAmount = parseFloat(incomeField.value);
         
          const foodField = document.getElementById('food');
          const foodAmount =parseFloat(foodField.value);
          const rentField = document.getElementById('rent');
          const rentAmount = parseFloat(rentField.value);
          const clothesField = document.getElementById('clothe');
          const clothesAmount = parseFloat(clothesField.value);
         
          const expensesField = document.getElementById('total-expenses');
          const balanceField = document.getElementById('balance');
      
          // calculate button error handle ... 
          if(incomeAmount>=0 && foodAmount>=0 && rentAmount>=0 && clothesAmount>=0){

              // sum of all expenses 
              const totalExpenses = foodAmount + rentAmount + clothesAmount;
              expensesField.innerText = totalExpenses;
              error2MessageDisable();
          
      
              if(incomeAmount>totalExpenses){

                  //calculate current balance
                  const balance =totalAmount(incomeAmount,totalExpenses);
                  balanceField.innerText = balance;
                  error1MessageDisable();
              }
              else{
                  error2MessageAble();
                  error1MessageDisable();
              }        
          }
          else{
              error1MessageAble();
              error2MessageDisable();
              expensesField.innerText='00';
              balanceField.innerText='00';
          }
          
      })
      // save button action form 
      document.getElementById('save-button').addEventListener('click',function(){
          //get income 
          const incomeAmount = document.getElementById('income').value;
          //get balance without expenses
          const afterExpensesBalance =parseFloat(document.getElementById('balance').innerText);
          //get save  value
          const saveInputField = document.getElementById('save-field');
          const savePercentageValue = parseFloat(saveInputField.value);
          // get savings amount and remainging field
          const savingsField = document.getElementById('savings-amount');
          const remaingingField = document.getElementById('remaining-balance');
          if(savePercentageValue>=0){
              // calculation savings & inject 
              const savingsAmount = percentageTotalCalculate(incomeAmount,savePercentageValue);
              savingsField.innerText= savingsAmount;
                  if( afterExpensesBalance < savingsAmount){
                      error2MessageAble();
                      error1MessageDisable(); 
                  }
                  else{
                      
                      const remaingingbalance =totalAmount(afterExpensesBalance,savingsAmount);
                      remaingingField.innerText = remaingingbalance;
                      error1MessageDisable(); 
                  }
              
          }
          else{
              error1MessageAble();
              error2MessageDisable();
          }
            
      })
      