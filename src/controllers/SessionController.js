// métodos: index, show, update, store, destroy
/*
    index: listagem de sessões
    store: criar uma nova sessão
    show: listar uma única sessão
    update: atualizar uma sessão
    destroy: deletar uma sessão
*/

import User from "../models/User"
import * as Yup from 'yup'


class SessionController {

    async store(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string().email().required()
        })


        const {email} = req.body

        if(!(await schema.isValid(req.body))) return res.status(400).json({error: 'O dado enviado não é um e-mail'})

        let user = await User.findOne({email})

        if(!user) user = await User.create({ email })

        return res.json(user)
    }
}

export default new SessionController()