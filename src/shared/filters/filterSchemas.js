export const filterSchemas = {
  circuitBreakers: {
    predicates: {
      brand: (item, v) => v === "all" || String(item.brand_id) === String(v),
      poles: (item, v) => v === "all" || Number(item.type2) === Number(v),
      text: (item, v) =>
        !v
          ? true
          : String(item.name || "")
              .toLowerCase()
              .includes(String(v).toLowerCase()) ||
            String(item.article || "")
              .toLowerCase()
              .includes(String(v).toLowerCase()),
    },
    order: ["brand", "poles", "text"],
  },

  // пример для кабелей — подставь свои поля
  cables: {
    predicates: {
      brand: (i, v) => v === "all" || String(i.brand_id) === String(v),
      type: (i, v) =>
        v === "all" || String(i.type).toLowerCase() === String(v).toLowerCase(),
      section: (i, v) => v === "all" || Number(i.section) === Number(v),
      cores: (i, v) => v === "all" || Number(i.cores) === Number(v),
      text: (i, v) =>
        !v
          ? true
          : String(i.name || "")
              .toLowerCase()
              .includes(String(v).toLowerCase()) ||
            String(i.article || "")
              .toLowerCase()
              .includes(String(v).toLowerCase()),
    },
    order: ["brand", "type", "section", "cores", "text"],
  },

  // добавишь: corrugatedPipes, tools, cableChannels, extensionCords ...
};
