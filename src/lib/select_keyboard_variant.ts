/**
 * penguins-eggs
 * lib: select_keyboard_variant.ts
 * author: Piero Proietti
 * email: piero.proietti@gmail.com
 * license: MIT
 */
const inquirer = require('inquirer') 
import Keyboards from '../classes/keyboards'
import Utils from '../classes/utils'
import selectKeyboardOption from './select_keyboard_option'

/**
  *
  */
export default async function selectKeyboardVariant(keyboardLayout = ''): Promise<string> {
  const keyboards = new Keyboards()
  const variants = keyboards.getVariants(keyboardLayout)
  const supported : string [] = []
  supported.push('') // inserisce una variant nulla
  for (const v of variants) {
    supported.push(v.code)
  }

  const questions: Array<Record<string, any>> = [
    {
      type: 'list',
      name: 'variant',
      message: 'Select variant: ',
      choices: supported,
      default: '',
    },
  ]

  return new Promise(function (resolve) {
    inquirer.prompt(questions).then(function (options: any) {
      resolve(options.variant)
    })
  })
}

