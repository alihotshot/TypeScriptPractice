import inquirer from 'inquirer'

async function main() {
  const operationChoices = [
    'Addition',
    'Subtraction',
    'Multiplication',
    'Division',
  ]

  const operation = await inquirer.prompt({
    type: 'list',
    name: 'operation',
    message: 'Select an operation:',
    choices: operationChoices,
  })

  const num1 = parseFloat(
    await inquirer.prompt({
      type: 'input',
      name: 'num1',
      message: 'Enter the first number:',
    })
  )

  const num2 = parseFloat(
    await inquirer.prompt({
      type: 'input',
      name: 'num2',
      message: 'Enter the second number:',
    })
  )

  let result

  switch (operation.operation) {
    case 'Addition':
      result = num1 + num2
      break
    case 'Subtraction':
      result = num1 - num2
      break
    case 'Multiplication':
      result = num1 * num2
      break
    case 'Division':
      result = num1 / num2
      break
  }

  console.log(`Result: ${result}`)
}

main()
