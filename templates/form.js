/** Needs:
 * - action: URLPath<String>
 * - name: <String>
 * - labelText: <>
 */
const form = ({ action, name, labelText }) => {
  return `<form action="/${action}" method="POST">
      <label for="${name}">${labelText}</label>
      <input type="text" name="${name}" id="${name}" />
      <input type="submit" value="Submit" />
  </form>`;
};

module.exports = form;
