import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {

  static init(sequelize) {

    super.init({
      name: Sequelize.STRING,
      street: Sequelize.STRING,
      address_number: Sequelize.STRING,
      complement: Sequelize.STRING,
      state: Sequelize.STRING,
      city: Sequelize.STRING,
      zip_code: Sequelize.STRING
    }, {
      sequelize
    })

  }

}

export default Recipient;
