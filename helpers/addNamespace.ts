const addNamespace = (name: string, namespace?: string): string =>
  namespace ? `${namespace}[${name}]` : name;

export default addNamespace;
