/**
 * Contains the miscellaneous route handlers.
 * @author bayelaye <https://github.com/bayelaye313>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
