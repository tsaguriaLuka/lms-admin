export const tryCatch = async <T>(
  target: Promise<T> | (() => T) | (() => Promise<T>)
): Promise<{ data: T | undefined; error: Error | undefined }> => {
  let data: T | undefined;
  let error: Error | undefined;

  try {
    data = await (target instanceof Promise ? target : target());
  } catch (_error) {
    error = _error as Error;
  }

  return { data, error };
};
