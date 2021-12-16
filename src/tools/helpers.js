export const isObject = (value) => value != null && typeof value == "object";

/**
 * @param {string} path
 */
export const get = (obj, path) => {
  path = path.split(".");
  const lastIndex = path.length - 1;
  let val = obj;
  let i = -1;

  while (++i < lastIndex) {
    if (!(path[i] in val)) {
      return;
    }
    val = val[path[i]];
  }

  val = val[path[lastIndex]];

  return val;
};
export const set = (obj, path, value) => {
  if (!isObject(obj)) {
    return obj;
  }
  path = path.split(".");

  let nested = obj;
  const lastIndex = path.length - 1;

  for (let i = 0; i < lastIndex; i++) {
    if (!(path[i] in nested)) {
      nested[path[i]] = {};
    }
    nested = nested[path[i]];
  }

  nested[path[lastIndex]] = value;

  return nested;
};
export const copy = (obj, paths) => {
  if (typeof obj !== "object" || !Array.isArray(paths)) {
    return {};
  }
  let index = -1;
  const result = {};

  while (++index < paths.length) {
    const path = paths[index];
    const value = get(obj, path);

    if (value) {
      set(result, path, value);
    }
  }

  return result;
};

export const booleanToInt = (val) => {
  if (isObject(val)) {
    return Object.keys(val).reduce(
      (acc, key) => ({
        ...acc,
        [key]: booleanToInt(val[key]),
      }),
      {}
    );
  } else if (Array.isArray(val)) {
    return val.map((item) => booleanToInt(item));
  } else if (typeof val === "boolean") {
    return val ? 1 : 0;
  } else {
    return val;
  }
};
