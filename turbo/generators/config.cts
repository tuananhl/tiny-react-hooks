import type { PlopTypes } from '@turbo/gen'
import { format } from 'date-fns'
import path from 'path'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  const usehooksSrcPath = path.resolve('packages/tiny-react-hooks/src')
  plop.setGenerator('hook', {
    description: 'Create a new hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'give me the name of your hook (eg. useCallback)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: usehooksSrcPath + '/{{camelCase name}}/{{camelCase name}}.ts',
        templateFile: 'templates/hook/hook.ts.hbs',
      },
      {
        type: 'add',
        path: usehooksSrcPath + '/{{camelCase name}}/{{camelCase name}}.test.ts',
        templateFile: 'templates/hook/hook.test.ts.hbs',
      },
      {
        data: {
          date: format(new Date(), 'yyyy-MM-dd'),
        },
        type: 'add',
        path: usehooksSrcPath + '/{{camelCase name}}/{{camelCase name}}.md',
        templateFile: 'templates/hook/hook.mdx.hbs',
      },
      {
        type: 'add',
        path: usehooksSrcPath + '/{{camelCase name}}/{{camelCase name}}.demo.tsx',
        templateFile: 'templates/hook/hook.demo.tsx.hbs',
      },
      {
        type: 'add',
        path: usehooksSrcPath + '/{{camelCase name}}/index.ts',
        templateFile: 'templates/hook/index.ts.hbs',
      },
      {
        type: 'append',
        path: usehooksSrcPath + '/index.ts',
        templateFile: 'templates/index.ts.hbs',
      },
    ],
  })
}