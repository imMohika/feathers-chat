// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext, NextFunction } from '../declarations'

export const logRuntime = async (context: HookContext, next: NextFunction) => {
  const startTime = Date.now()
  await next()
  console.log(`Calling (${context.POST}) ${context.path} took ${Date.now() - startTime}ms`)
}
