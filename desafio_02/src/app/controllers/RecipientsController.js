import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {

  async store(req, res) {

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      address_number: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zip_code: Yup.string().required(),
    });

    if(!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const
    { id,
      name,
      street,
      address_number,
      complement,
      state,
      city,
      zip_code
    } = await Recipient.create(req.body);

    return res.json({
      id,
      name,
      street,
      address_number,
      complement,
      state,
      city,
      zip_code
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      address_number: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zip_code: Yup.string().required(),
    });

    if(!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipient = await Recipient.findByPk(req.params.id);

    if (!recipient) {
      return res.status(404).json({ error: "Recipient not found" });
    }

    const
    { id,
      name,
      street,
      address_number,
      complement,
      state,
      city,
      zip_code
    } = await recipient.update(req.body);

    return res.json({
      id,
      name,
      street,
      address_number,
      complement,
      state,
      city,
      zip_code
    });

  }

}

export default new RecipientController();
