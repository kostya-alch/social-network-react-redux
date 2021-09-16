// Отдельные функции приложения, чтобы не дублировать почти одинаковый код в редьюсере.

export const updateObjectInArray = (
  items,
  itemId,
  objPropName,
  newObjProps
) => {
  return items.map((u) => {
    if (u[objPropName] === itemId) {
      return { ...u, ...newObjProps };
    }
    return u;
  });
};
