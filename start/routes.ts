/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/simple-calculator', 'SimpleCalculatorsController.index')
  Route.get('/prime-number', 'PrimeNumberController.checkNumberIsPrime')
  Route.get('/list/first-ten/prime-number', 'PrimeNumberController.listFirstTenNumberPrimes')
  Route.get('/factorial/result', 'FactorialNumbersController.calculateFactorial')
  Route.get('/factorial/result/step', 'FactorialNumbersController.stepCalculateFactorial')
  Route.get('/check-word/polindrome', 'WordPolindromesController.checkWordIsPolindrome')
  Route.get('/count-vowels', 'VowelsController.countVowels')
  Route.get('/student/grade/average', 'StudentGradesController.calculateAverage')
  Route.get('/calculate-investment', 'InvestmentsController.calculateInvestment')
}).prefix('v1')
