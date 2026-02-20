type Mods = Record<string, boolean | string>;

export function classNames(
  mainCls: string,
  modCls: Mods = {},
  additionalCls: string[] = []
): string {
  return [
    mainCls,
    ...additionalCls.filter(Boolean),
    ...Object.entries(modCls)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}
