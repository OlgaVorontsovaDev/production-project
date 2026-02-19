type Mods = Record<string, boolean | string>;

export function classNames(
  mainCls: string,
  modCls: Mods,
  additionalCls: string[]
): string {
  return [
    mainCls,
    ...additionalCls,
    ...Object.entries(modCls)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}
