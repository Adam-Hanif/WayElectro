export function applyFilters(items, filter, schema) {
  if (!Array.isArray(items) || !items.length) return [];
  if (!schema?.predicates) return items;

  const { predicates, order = Object.keys(schema.predicates) } = schema;
  return items.filter((item) =>
    order.every((key) => {
      const value = filter?.[key];
      const predicate = predicates[key];
      return predicate ? predicate(item, value) : true;
    })
  );
}
