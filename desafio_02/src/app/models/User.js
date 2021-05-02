import Sequelize, { Model } from 'sequelize';
import bcrypct from 'bcrypt';

class User extends Model {

  static init(sequelize){

    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
      provider: Sequelize.BOOLEAN
    }, {
      sequelize,
    })

    this.addHook('beforeSave', async (user) => {
      if(user.password) {
        user.password_hash = await bcrypct.hash(user.password, 8);
      }
    });

  };

  checkPassword(password) {
    return bcrypct.compare(password, this.password_hash);
  }

}

export default User;
