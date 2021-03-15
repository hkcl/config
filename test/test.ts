import {expect, fancy as base, FancyTypes} from 'fancy-test'

import * as Config from '../src'

export const fancy = base
.register('resetConfig', () => ({
  run(ctx: {config: Config.IConfig}) {
    // @ts-expect-error
    delete ctx.config
  },
}))

export {
  expect,
  FancyTypes,
}
