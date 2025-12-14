/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  //создаём новый массив
  const sorted = [...arr];
  const multiplier = param === 'asc' ? 1 : -1;

  // Сортируем с учетом русской и английской локалей
  sorted.sort((a, b) => a.localeCompare(b, ['ru', 'en'], {
    caseFirst: 'upper', // Заглавные буквы идут первыми
  }) * multiplier);

  return sorted;
}
