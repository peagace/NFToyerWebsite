import React , {useState} from 'react';
import emailjs from 'emailjs-com';

const Result = () => {
    return (
        <p className="success-message">Mensagem enviada! Responderemos o seu contato em breve.</p>
    )
}
function ContactForm({props}) {
    const [ result,showresult ] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'service_44nfxpi', 
            'template_z0anfat', 
            e.target, 
            'user_8Hoypu7nvNxpUPimtsVr8'
        )
        .then((result) => {
            console.log(result.text);
            }, 
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
        showresult(true);
    };

    setTimeout(() => {
        showresult(false);
    }, 5000);

    return (
        <form action="" onSubmit={sendEmail}>
            <div className="rn-form-group">
                <input 
                type="text"
                name="fullname"
                placeholder="Seu Nome"
                required
                />
            </div>

            <div className="rn-form-group">
                <input 
                type="email"
                name="email"
                placeholder="Seu Email"
                required
                />
            </div>

            <div className="rn-form-group">
                <input 
                type="text"
                name="phone"
                placeholder="Seu Telefone"
                required
                />
            </div>

            <div className="rn-form-group">
                <input 
                type="text"
                name="subject"
                placeholder="Assunto"
                required
                />
            </div>
            
            <div className="rn-form-group">
                <textarea 
                name="message"
                placeholder="Sua Mensagem"
                required
                >
                </textarea>
            </div>

            <div className="rn-form-group">
                <button className="rn-button-style--2 btn-primary-color" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">enviar</button>
            </div> 

            <div className="rn-form-group">
                {result ? <Result /> : null}
            </div> 
        </form>
    )
}
export default ContactForm;
