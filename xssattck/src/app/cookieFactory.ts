export function cache(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  let cache: any;
  descriptor.value = function (...args: any[]) {
    if (!cache) {
      cache = originalMethod.apply(this, args);
    }
    return cache;
  };
  return descriptor;
}
