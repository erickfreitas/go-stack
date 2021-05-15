import Mail from '../../lib/Mail';
import pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';

class CancellationEmail {
    get key(){
        return 'CancellationEmail';
    }

    async handle({ data }) {
        const { appointment } = data;

        console.log('A fila executou');
        console.log(appointment);

        await Mail.sendMail({
            to: `${appointment.provider.email}`,
            subject: 'Agendamento cancelado',
            template: `cancellation`,
            context: {
                provider: appointment.provider.name,
                user: appointment.user.name,
                date: format(parseISO(appointment.date), "'dia' d 'de' MMMM, 'às' H:mm", { locale: pt })
            }
        });
    }
}

export default new CancellationEmail();